import { FormControl, Input, InputLabel, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TypedDefault } from "../type/use";
import { toast } from "react-toastify";
import UseFetch from "./UseFetch";

const UseForm: React.FC = () => {
  const dispatch = useDispatch();
  const [dataImage, setDataImage] = useState("");
  const [dataEmail, setDataEmail] = useState("");
  const [dataFName, setDataFName] = useState("");
  const [dataLName, setDataLName] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newData = {
      id: Math.random(),
      email: dataEmail,
      first_name: dataFName,
      last_name: dataLName,
      avatar: dataImage,
    };

    if (dataEmail > "" && dataFName > "" && dataLName > "" && dataImage > "") {
      dispatch({ type: TypedDefault.ACTION_ADD, payload: newData });
      toast.success("Qo'shildi");
    } else {
      toast.error("Ma'lumotlar to'liq to'ldirilmagan !!!");
    }

    setDataImage("");
    setDataEmail("");
    setDataFName("");
    setDataLName("");
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <FormControl>
            <InputLabel htmlFor="my-input">Image Url</InputLabel>
            <Input
              id="my-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataImage(e.target.value)
              }
              value={dataImage}
              type="url"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataEmail(e.target.value)
              }
              value={dataEmail}
              type="email"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input
              id="my-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataFName(e.target.value)
              }
              value={dataFName}
              required
              type="text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input
              id="my-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDataLName(e.target.value)
              }
              required
              type="text"
              value={dataLName}
            />
          </FormControl>
          <Button variant="contained" onClick={handleSubmit} type="button">
            Click Me
          </Button>
        </form>
      </Box>
      <UseFetch />
    </React.Fragment>
  );
};

export default UseForm;
