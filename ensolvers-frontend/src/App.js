import {
  Route,
  HashRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Folders from './components/Folders/Folders';
import Tasks from './components/Tasks/Tasks';
import Task from './components/Task/Task';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import GlobalStyles from './global';
import theme from './theme';

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      setLogged(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        {logged === true && <Nav logged={logged} setLogged={setLogged} />}
        <Switch>
          <Route
            path="/folders/:folderId/tasks/:taskId"
            component={(props) => <Task logged={logged} {...props} />}
          />
          <Route
            path="/folders/:folderId"
            component={(props) => <Tasks logged={logged} {...props} />}
          />
          <Route
            path="/folders"
            component={() => <Folders logged={logged} />}
          />
          <Route
            path="/login"
            component={() => <Login logged={logged} setLogged={setLogged} />}
          />
          <Redirect from="/" to="/folders" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
