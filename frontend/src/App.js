import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import Register  from './pages/Register';
import ForgotPassword  from './pages/ForgotPassword';

function App() {
  return (
    <Router>
        
          
        <div >
           
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/ForgotPassword">
                <ForgotPassword />
              </Route>
              
            </Switch>
            
          </div>
        
      </Router>
  );
}

export default App;
