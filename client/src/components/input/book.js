import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, FormControl, InputGroup , Button ,  Row, Col} from 'react-bootstrap';
import Axios from "axios";
import '../style/style.css';
import API from "../utils/API";


class Book extends Component {
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
        const key = "333678-Relevant-XODLQ5EI";
        Axios.get(`${API_URL}type=book:&k=${key}&q=${this.state.query}&limit=10&info=1`,
            {
                // headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     'Content-Type': 'application/json',
                // },
                // crossorigin: true 
            })
            // .then(response => response.json())
            .then(json => {
                console.log(json.data.Similar.Results);
                let {Results} = json.data.Similar.Results;
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
        this.props.handleSubmit(this.state.term);
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
                 <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <FormControl style={{ justifyContent: 'center' , width:'450px'}}  type="text" placeholder="Find Relevant Books"      
                onChange={event => this.setState({query: event.target.value })}
           onKeyPress={event => {
                    if ('Enter' === event.key) {
                        this.search();  
                    }
                }} />
            <InputGroup.Text  style={{ opacity: -1 }} onClick={this.search}>
  
            </InputGroup.Text>

        </FormGroup >
          
          </Col>
        </Row>
               
  
                {this.state.Results.map(result => (
                    <> <> <ul>
                        <h3 key={result.Name}>{result.Name}</h3>
                        <li key={result.wUrl}><a href={result.wUrl} target="_blank">Check this out this book on Wikipedia!</a></li>
                        <li><Button variant="dark" button onClick={this.handleFormSubmit}button="true">Save</Button></li>
                    </ul></></>
                ))
                }
            </div>
        )
    };
};

export default Book;