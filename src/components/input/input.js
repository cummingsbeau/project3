import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Axios from "axios";
// import Gallery from '../gallery/gallery';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            Results: [],
        };
        this.search = this.search.bind(this);
    }
    search = () => {
        const API_URL = 'https://tastedive.com/api/similar?';
        const key = "333678-Relevant-QTGONVOF";
        Axios.get(`${API_URL}type=music:&k=${key}&q=${this.state.query}&limit=10&info=1`,
     )
            // .then(response => response.json())
            .then(json => {
                console.log(json.data.Similar.Results); 
                // let {Results} = json.data.Similar.Results;
                this.setState({Results:json.data.Similar.Results})
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

    render() {
        return (
            <div>
                <h5>Type a comma in between criteria if you want to search more than one!</h5>
                <FormGroup>
                    <FormControl type="text" placeholder="Find Relevant Bands"
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
                        <><> <ul>
                        <h3>{result.Name}</h3>
                        <li><a href ={result.wUrl}target="_blank">Check this band out on Wikipedia!</a></li>
                        <li><a href ={result.yUrl}target="_blank">Check this band out on Youtube!</a> </li>
                    </ul></></>
                    )) 
                }
            </div>
        )
    };
};


export default Input;