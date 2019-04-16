import React, {Component} from 'react';
import Input from '../input/input';
import Movie from '../input/movies';
import Tv from "../input/tv";
import Book from "./components/input/book";
import Game from "./components/input/videogame";



class Search extends Component {
    state = {
      query: '',
      Results: [],
  }
render(){
  return (
    <div>         
      <Input/>
      <Movie/>
      <Tv/> 
      <Book/>
      <Game/>

          
      </div>
    );
  }
}

export default Search;