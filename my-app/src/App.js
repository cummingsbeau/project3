import React, {Component} from 'react';
import Nav from "../src/components/navbar/index"
import SearchResultContainer from "../src/components/input/resultContainer";
import Input from './components/input/input.js';
import API from "../src/components/utils/API";

class App extends Component {
    state = {
      query: '',
      items: []
  }
render(){
  return (
    <div>
      <Nav />
      <Input/>
    <SearchResultContainer>
    </SearchResultContainer>
      </div>
    );
  }
}

export default App;
