import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import { baseApiUrl, setToken } from "../../utils/utils";
import StyledTask from "./Task.styled";

const Task = ({ match, logged }) => {
  const [task, setTask] = useState("");
  const history = useHistory();

  useEffect(() => {
    const config = setToken();
    axios
      .get(
        `${baseApiUrl}/folders/${match.params.folderId.toString()}/tasks/${
          match.params.taskId
        }`,
        config
      )
      .then((res) => {
        setTask(res.data.name);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const updateTask = () => {
    const config = setToken();
    const updatedTask = { name: task };
    axios
      .put(
        `${baseApiUrl}/folders/${match.params.folderId.toString()}/tasks/${
          match.params.taskId
        }`,
        updatedTask,
        config
      )
      .then(() => {
        history.push(`/folders/${match.params.folderId}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (logged === false) {
    return <Redirect to='/login' />;
  }

  return (
    <StyledTask>
      <h2 className='edit-task-title'>Editing task</h2>
      <div className='edit-task'>
        <input
          type='text'
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              updateTask();
            }
          }}
        />
        <div className='edit-buttons'>
          <button
            type='submit'
            onClick={() => {
              updateTask();
            }}
          >
            Save
          </button>

          <button
            type='button'
            onClick={() => {
              history.push(`/folders/${match.params.folderId}`);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </StyledTask>
  );
};

export default Task;
