import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';
import { baseApiUrl, setToken } from '../../utils/utils';
import StyledTask from './Task.styled';
import Message from '../Message/Message';

const Task = ({ match, logged }) => {
  const [task, setTask] = useState('');
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState(null);

  useEffect(() => {
    const config = setToken();
    axios
      .get(
        `${baseApiUrl}/folders/${match.params.folderId.toString()}/tasks/${
          match.params.taskId
        }`,
        config,
      )
      .then((res) => {
        setTask(res.data.name);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Task couldn't be loaded");
        setMessageColor('alert-error');
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
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
        config,
      )
      .then(() => {
        history.push(`/folders/${match.params.folderId}`);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Task couldn't be updated");
        setMessageColor('alert-error');
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      });
  };

  if (logged === false) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Message message={message} messageColor={messageColor} />
      <StyledTask>
        <h2 className="edit-task-title">Editing task</h2>
        <div className="edit-task">
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                updateTask();
              }
            }}
          />
          <div className="edit-buttons">
            <button
              type="submit"
              onClick={() => {
                updateTask();
              }}
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => {
                history.push(`/folders/${match.params.folderId}`);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </StyledTask>
    </>
  );
};

export default Task;
