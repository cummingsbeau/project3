import React, {Component} from 'react';
import DeleteBtn from "./deleteBtn";
import API from "../utils/API"
import { List, ListItem } from "../../List";
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
    API.getSimliar()
      .then(res =>
        this.setState({ name: res.data, name: "", type: "", date: "" })
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
              <h1>My Relevant Saves</h1>
    {this.state.name.length ? (
      <List>
        {this.state.name.map(name=> (
          <ListItem key={name}>
            <a href={"/api/saved" + name}>
              <strong>
                {name.type} by {name.date}
              </strong>
            </a>
            <DeleteBtn/>
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No Results to Display</h3>
    )}

      </div>
    );
  }
}



export default Save;