import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Gallery from '../gallery/gallery';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            Results: []
        };
        this.search = this.search.bind(this);
    }
    search = () => {
        const API_URL = 'https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?';
        const key = "333678-Relevant-QTGONVOF";
        fetch(`${API_URL}type=music${key}${this.state.query}&limit=100&`,
        {headers: new Headers ({"Content-Type":"application/json",origin:"http://localhost"})

        })
            // .then(response => response.json())
            .then(response => console.log(response))
            
            .then(json => {
                console.log(json);
                let { Results } = json;
                this.setState({ Results })
            });
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
                <FormGroup>
                    <FormControl type="text" placeholder="Find Relevant Songs"
                        onChange={event => this.setState({ query: event.target.value })}
                        onKeyPress={event => {
                            if ('Enter' === event.key) {
                                this.search();
                            }
                        }} />
                    <InputGroup.Text onClick={this.search}>
                    </InputGroup.Text>
                    <Gallery Results={this.state.Results} />
                </FormGroup>
            </div>
        )
    };
};


export default Input;