import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/navbar/index"
import Search from "../src/components/Search/Search"
import Facebook from "./components/Facebook/fb";
import Save from "./components/Saved/save"

class App extends Component {
    state = {
      query: '',
      Results: [],
  }
render(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Facebook" component={Facebook} />
          <Route exact path="/Save" component={Save} />
         </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
