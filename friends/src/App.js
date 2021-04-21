import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Hello Friends</h1>
       <Switch>
          <PrivateRoute path = "/friends">
            <FriendsList />
          </PrivateRoute>
           <Route path="/login">

            <Login />

        </Route>
           <Route>

            <Login />

        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
