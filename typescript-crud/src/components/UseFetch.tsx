/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UseDispatchHook } from "../hooks/UseDispatchHook";
import { UseTypedSelector } from "../hooks/UseTypedSelector";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { TypedDefault } from "../type/use";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UseFetch = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = UseTypedSelector((state) => state.data);
  const { UseDispatch } = UseDispatchHook();

  useEffect(() => {
    UseDispatch();
  }, []);

  if (loading) {
    return <Typography variant="h2">...Loading</Typography>;
  }

  if (error) {
    return <Typography variant="h2">{error}</Typography>;
  }

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Images</StyledTableCell>
              <StyledTableCell align="right">First Names</StyledTableCell>
              <StyledTableCell align="right">Last Names</StyledTableCell>
              <StyledTableCell align="right">Emails</StyledTableCell>
              <StyledTableCell align="right">Buttons</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: any) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align="right">
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                    src={
                      item.avatar
                        ? item.avatar
                        : "https://i.ibb.co/L89wtzV/noImage.jpg"
                    }
                    alt={item.first_name}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{item.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {item.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.last_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() =>
                      dispatch({
                        type: TypedDefault.ACTION_DELETE,
                        payload: item.id,
                      })
                    }
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default UseFetch;
