import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Input(props) {
    return (
        <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Artist or Song"
          id="searchSong"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-dark">
          Search
        </button>
        
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Movie"
          id="searchMovie"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-dark">
          Search
        </button>
        
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a TV Show"
          id="searchTV"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-dark">
          Search
        </button>
      </div>
    </form>

    );
}

export default Input;