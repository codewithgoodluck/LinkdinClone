
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
         <Login></Login>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
