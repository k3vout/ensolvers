import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { baseApiUrl, setToken } from "../../utils/utils";
import StyledTasks from "./Tasks.styled";
import Message from "../Message/Message";

const Tasks = ({ match, logged }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [folder, setFolder] = useState("");
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState(null);

  useEffect(() => {
    const config = setToken();
    axios
      .get(
        `${baseApiUrl}/folders/${match.params.folderId.toString()}/tasks`,
        config
      )
      .then((res) => {
        setTasks(res.data);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Tasks couldn't be loaded");
        setMessageColor("alert-error");
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      });

    axios
      .get(`${baseApiUrl}/folders/${match.params.folderId.toString()}`, config)
      .then((res) => {
        setFolder(res.data);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Folder name couldn't be loaded");
        setMessageColor("alert-error");
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      });
  }, []);

  const changeStatus = (taskObject) => {
    const updatedTask = {
      done: !taskObject.done,
    };
    const config = setToken();
    axios
      .put(
        `${baseApiUrl}/folders/${match.params.folderId.toString()}/tasks/${
          taskObject.id
        }`,
        updatedTask,
        config
      )
      .then(() => {
        setTasks(
          tasks.map((task) => {
            if (task.id === taskObject.id) {
              task.done = !task.done;
              return task;
            }
            return task;
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addTask = () => {
    const newTask = {
      name: task,
      folder_id: match.params.folderId,
      done: false,
    };
    const config = setToken();
    axios
      .post(
        `${baseApiUrl}/folders/${match.params.folderId.toString()}/tasks`,
        newTask,
        config
      )
      .then((res) => {
        setTasks(tasks.concat(res.data));
        setTask("");
        setMessage("Added Successfully");
        setMessageColor("alert-success");
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Task couldn't be added");
        setMessageColor("alert-error");
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      });
  };

  if (logged === false) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <Message message={message} messageColor={messageColor} />
      <StyledTasks>
        <div>
          <h2 className='tasks-title'>
            <Link to='/'>Folders&nbsp; </Link>
            {"  "}
            &gt; &nbsp;
            {folder.title}
          </h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <div className='task-checkbox'>
                  <input
                    id={task.name}
                    type='checkbox'
                    value={task.done}
                    checked={task.done}
                    onChange={() => {
                      changeStatus(task);
                    }}
                  />
                  <label htmlFor={task.name}>{task.name}</label>
                </div>
                <Link
                  to={`/folders/${match.params.folderId.toString()}/tasks/${
                    task.id
                  }`}
                  value={task.id}
                >
                  Edit
                </Link>
              </li>
            ))}
          </ul>
          <h4 className='add-task-title'>Add folder</h4>
          <div className='add-task'>
            <input
              type='text'
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />
            <button type='button' onClick={() => addTask()}>
              Add
            </button>
          </div>
        </div>
      </StyledTasks>
    </>
  );
};

export default Tasks;
