import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import {SCRIPT_URL} from './const.js'

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
        return <div>loading please wait</div>
    }
    renderError(){
        //todo be more specific 
        return <div>Something failed</div>
    }
}