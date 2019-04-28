import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import Axios from "axios";
import API from "../utils/API";
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            Results: []
        };
        this.search = this.search.bind(this);
    }
    search = () => {
        const API_URL = 'https://tastedive.com/api/similar?';
        const key = "333678-Relevant-XODLQ5EI";
        Axios.get(`${API_URL}type=movies:&k=${key}&q=${this.state.query}&limit=10&info=1`,
            {
                headers: new Headers({ "Content-Type": "application/json", origin: "http://localhost" })

            })
            // .then(response => response.json())
            .then(json => {
                console.log(json.data.Similar.Results);
                // let {Results} = json.data.Similar.Results;
                this.setState({ Results: json.data.Similar.Results })
            })
            .then(console.log(this.state.Results))
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.Results.Name && this.state.Results.Type) {
            API.saveSimilar({
                name: this.state.Results.Name,
                type: this.state.Results.Type,
                date: Date.now
            })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <FormGroup>
                    <FormControl type="text" placeholder="Find Relevant Movies"
                        onChange={event => this.setState({ query: event.target.value })}
                        onKeyPress={event => {
                            if ('Enter' === event.key) {
                                this.search();
                            }
                        }} />
                    <InputGroup.Text onClick={this.search}>
                    </InputGroup.Text>
                    {/* <Gallery Results={this.state.Results} /> */}
                </FormGroup>
                {this.state.Results.map(result => (
                    <> <> <ul>
                        <h3>{result.Name}</h3>
                        <li><a href={result.wUrl} target="_blank">Check this out this movie on Wikipedia!</a></li>
                        <li><a href={result.yUrl} target="_blank">Check this out this movie on Youtube!</a> </li>
                        <li><Button variant="dark" button onClick={this.handleFormSubmit}button="true">Save</Button></li>
                    </ul></></>
                ))
                }
            </div>
        )
    };
};

export default Movie;