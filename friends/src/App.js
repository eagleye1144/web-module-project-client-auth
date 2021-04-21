import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './components/Login'


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Hello Friends</h1>
       <Switch>
   
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
