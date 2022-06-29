import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { TypedSelector } from "./hooks/TypedUseSelector";
import { useDispatch } from "react-redux";
import { ActionType } from "./types/use";

function App() {
  const { counter } = TypedSelector((state) => state.counter);
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h1">{counter}</Typography>{" "}
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary.main button group"
        >
          <Button
            onClick={() => dispatch({ type: ActionType.INCREASE, payload: 1 })}
            style={{ width: "200px", height: "100px" }}
          >
            Increment
          </Button>
          {counter !== 0 ? (
            <Button
              onClick={() =>
                dispatch({ type: ActionType.DICREMENT, payload: 1 })
              }
              style={{ width: "200px", height: "100px" }}
            >
              Dicrement
            </Button>
          ) : (
            <Button disabled={true} style={{ width: "200px", height: "100px" }}>
              Dicrement
            </Button>
          )}
          <Button
            onClick={() =>
              dispatch({ type: ActionType.DEFAUTLT_NUMBER, payload: 0 })
            }
            style={{ width: "200px", height: "100px" }}
          >
            Default
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default App;
