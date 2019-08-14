import React, { Component } from 'react';   //Used React and each module set up seperately using React components to pull API
import axios from 'axios';
import './App.css';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {

  constructor() {        //Contructor is initialed designed for super to display photos per Flicker.
    super();
    this.state = {
      photo: [],
      loading: true
    };
  }

  componentDidMount() {             //Called after component is added to fetch the data. 
    this.performSearch("lilies");
  }

  isTrue = (istrue = true) => {     //Loading is added for user while awaiting photo to display
    this.setState({
      loading: istrue
    });
  }

  //Setup the routes in the render method for children

  performSearch = (query ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photo: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
      });
    }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <h1><b>Rhonda’s Photo Pleasantries</b></h1>
          </div>
        </div>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav isTrue={this.isTrue} onClick={this.performSearch} />
          {
            (this.state.loading)
              ? <p>Loading...</p>
              :
              <Switch>
                <Route exact path="/" render={props => <PhotoList title="Rhonda’s Photo Pleasantries" data={this.state.photo}{...props} />} />
                <Route exact path="/performSearch/:query" render={props => <PhotoList search={this.performSearch} data={this.state.photo}{...props} />} />
                <Route component={NotFound} />
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}

//This is my React App Gallery project and I am seeking an exceeds grade based on changes added 
//to include 1) a loading indicator displayed, 2) No matches found with message, & 3) 404 error
//route that displays a message when the URL does no match an existing route.