import { useState } from "react";
import { Container } from "@mui/material";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

export default function BasicCard() {
  const [view, setView] = useState("view-tasks");

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {view === "view-tasks" && <TaskList setView={setView} />}
      {view === "add-task" && <TaskForm setView={setView} />}
    </Container>
  );
}
