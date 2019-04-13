import React, {Component} from 'react';
import Nav from "../src/components/navbar/index"
import Input from './components/input/input.js';
import API from "../src/components/utils/API";
import Movie from './components/input/movies';
import Tv from "./components/input/tv";
import Book from "./components/input/book";
import Game from "./components/input/videogame";

class App extends Component {
    state = {
      query: '',
      Results: [],
  }
render(){
  return (
    <div>
      <Nav />
      <Input/>
      <Movie/>
      <Tv/>
      <Book/>
      <Game/>
      </div>
    );
  }
}

export default App;
