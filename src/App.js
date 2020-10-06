import React,{Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Header from "./components/Navbar/Navbar";
import Home from "./components/home/home";
import Tasks from './components/task/tasks';
import User from './components/user/user';

class App extends Component {
  render(){
    return (
     <React.Fragment>
           <Header/>
           <Switch>
           <Route path="/home" exact component={Home}/>
           <Route path="/task" exact component={Tasks}/>
           <Route path="/user" exact component={User}/>
           </Switch>
     </React.Fragment>
     );
   }
};
export default App;
