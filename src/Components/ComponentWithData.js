import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { Spinner } from 'reactstrap';
import {SCRIPT_URL} from '../const.js';

export class ComponentWithData extends Component {

    constructor(props){
        super(props);
    this.state = {
        data: [],
        error: null
    }
    this.method = null;
}

    componentDidMount() {
        const _this = this;

        fetchJsonp(`${SCRIPT_URL}?method=${this.method}`)
        .then(response => response.json())
        .then(json => _this.setState({ data: json }))
        .catch(error => this.setState({error}))
    }

    renderLoading(){
        return <div id="spinner"><Spinner style={{ width: '10rem', height: '10rem' }} color="danger" /></div>
    }
    renderError(){
        //todo be more specific 
        return <div>Something failed</div>
    }
}