import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { baseApiUrl, setToken } from '../../utils/utils';
import StyledFolders from './Folders.styled';
import Message from '../Message/Message';

const Folders = ({ logged }) => {
  const [folders, setFolders] = useState([]);
  const [folder, setFolder] = useState('');
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState(null);

  useEffect(() => {
    if (logged === true) {
      const config = setToken();
      axios
        .get(`${baseApiUrl}/folders`, config)
        .then((res) => {
          setFolders(res.data);
        })
        .catch((e) => {
          console.log(e);
          setMessage("Folders couldn't be loaded");
          setMessageColor('alert-error');
          setTimeout(() => {
            setMessage(null);
            setMessageColor(null);
          }, 3000);
        });
    }
  }, []);

  const addFolder = () => {
    const newFolder = { title: folder, created_by: 'Kevin' };
    const config = setToken();
    axios
      .post(`${baseApiUrl}/folders`, newFolder, config)
      .then((res) => {
        setFolders(folders.concat(res.data));
        setFolder('');
        setMessage('Added Successfully');
        setMessageColor('alert-success');
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Folder couldn't be added");
        setMessageColor('alert-error');
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      });
  };

  const removeFolder = (id) => {
    const config = setToken();
    axios
      .delete(`${baseApiUrl}/folders/${id}`, config)
      .then(() => {
        setFolders(
          folders.filter((folder) => folder.id.toString() !== id.toString()),
        );
        setMessage('Removed Succesfully');
        setMessageColor('alert-success');
        setTimeout(() => {
          setMessage(null);
          setMessageColor(null);
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
        setMessage("Folder couldn't be Removed");
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
      <StyledFolders>
        <div>
          <h2>Folders</h2>
          <br />
          <ul>
            {folders.map((folder) => (
              <li key={folder.id}>
                <p>{folder.title}</p>
                <Link
                  key={folder.id}
                  to={`/folders/${folder.id}`}
                  value={folder.id}
                >
                  View items
                </Link>
                <button
                  type="submit"
                  onClick={() => {
                    removeFolder(folder.id);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <br />
          <h4 className="add-folder-title">Add folder</h4>
          <div className="add-folder">
            <input
              type="text"
              value={folder}
              onChange={(e) => {
                setFolder(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addFolder();
                }
              }}
            />
            <button type="submit" onClick={() => addFolder()}>
              Add
            </button>
          </div>
        </div>
      </StyledFolders>
    </>
  );
};

export default Folders;
