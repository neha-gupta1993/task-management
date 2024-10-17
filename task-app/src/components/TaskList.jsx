import { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { getTasks, deleteTask } from "../api/client";
import { API_ERROR_MEESAGE } from "../constants";

export const TaskList = (props) => {
  const { setView } = props;
  const [tasksList, setTasksList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //fetch all the tasks and store in local state if success otherwise alert error message
  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasksList(res);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert(API_ERROR_MEESAGE);
    } finally {
      setIsLoading(false);
    }
  };

  //fetch tasks once component is mounted
  useEffect(() => {
    fetchTasks();
  }, []);

  //delete given id task and fetch tasks again to show remaining one's
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error posting data:", error);
      alert(API_ERROR_MEESAGE);
    }
  };

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Container
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <Box display="flex" justifyContent="flex-end" my={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setView("add-task")}
            >
              Add task
            </Button>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
          >
            {!tasksList.length ? (
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    No task created yet
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                gap={2}
                p={2}
              >
                {tasksList.map((task) => {
                  return (
                    <Box
                      key={task.id}
                      flexBasis={{
                        xs: "100%",
                        sm: "48%",
                        md: "30%",
                        lg: "22%",
                      }}
                      marginBottom={2}
                    >
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                          <Typography>{task.description}</Typography>
                          <Typography
                            gutterBottom
                            sx={{ color: "text.secondary", fontSize: 12 }}
                          >
                            {task.created_at}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            size="small"
                            onClick={() => handleDelete(task.id)}
                          >
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        </Container>
      )}
    </>
  );
};
