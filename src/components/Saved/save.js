import React, {Component} from 'react';
import DeleteBtn from "./deleteBtn";
import API from "../utils/API"
class Save extends Component {
    state = {
      query: '',
      Results: [],
      name:"",
      type:"",
      date:""
  }
  
  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, name: "", type: "", date: "" })
      )
      .catch(err => console.log(err));
  };
   // Deletes a book from the database with a given id, then reloads books from the db
   deleteSimilar = id => {
    API.deleteSimilar(id)
      .then(res => this.loadSimilar())
      .catch(err => console.log(err));
  };
render(){
  return (
    <div>
Beau's DataBase! 

      </div>
    );
  }
}



export default Save;