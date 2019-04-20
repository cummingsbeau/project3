import React, {Component} from 'react';
import Input from '../input/input';
import Movie from '../input/movies';
import Tv from "../input/tv";
import Book from "../input/book";
import Game from "../input/videogame";



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