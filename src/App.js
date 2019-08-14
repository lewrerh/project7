import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photo: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch("lilies");
  }

  isTrue = (istrue = true) => {
    this.setState({
      loading: istrue
    });
  }
  // Get the lilies
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
            <h1>Rhonda’s Photo Pleasantries</h1>
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

