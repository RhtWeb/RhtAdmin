import './App.css';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserTable from './pages/UserTable';
import EditUser from './pages/EditUser';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserTable />
            </Route>
            <Route path="/user/:userId">
              <EditUser />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
