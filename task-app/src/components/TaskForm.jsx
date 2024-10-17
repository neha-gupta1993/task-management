import { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import { saveTask } from "../api/client";
import { API_ERROR_MEESAGE } from "../constants";

export const TaskForm = (props) => {
  const { setView } = props;
  const [inputValue, setInputValue] = useState("");

  //submit new task and show list view back (in case of failure show alert first)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveTask(inputValue);
      setInputValue(""); // Clear the input field after submission
    } catch (error) {
      console.error("Error posting data:", error);
      alert(API_ERROR_MEESAGE);
    }
    setView("view-tasks");
  };

  return (
    <Container
      maxWidth="sm"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <TextField
            label="Enter task description"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            multiline
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
            disabled={!inputValue.length}
          >
            Save
          </Button>
        </Box>
      </form>
    </Container>
  );
};
