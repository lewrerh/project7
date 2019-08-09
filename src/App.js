import React, { Component } from 'react';
//import logo from './logo.svg';la
//import App from './Components/App';
import axios from 'axios';
import './App.css';
import Photo from './Components/Photo';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';
//import apiKey from './config.js';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { catchClause } from '@babel/types';
// import Home from '.Home';  //App exact path added 
//import About from './About';  //Added about path
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
    constructor() {
        super();
        let photoListObj = { lilies: [], lakes: [], puppies: [] };
        this.state = {
            photoList: photoListObj
        };
    }


    componentDidMount() {


        //performSearch = () => {}
        axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ab5bef6bd451cf11b48e2729e2a8e79&tags=lilies&per_page=24&format=json&nojsoncallback=1")
            .then(response => {
                //console.log(response.data);
                let photoListObj = { lilies: response.data.photos.photo, lakes: [], puppies: [] }; 
                this.setState({
                    photoList: photoListObj
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);

            });
    }
    render() {
      return (
          <BrowserRouter>
          <Switch>
           <div>
              <div className="container">
                      <h1>PhotoSearch</h1>
                          <SearchForm />
                          <Nav />
              </div>
              <div className="container">
                      <Route exact path="/" render={() => <PhotoList data={this.state.photoList.lilies} />} />
                      <Route exact path="/lilies" render={() => <PhotoList data={this.state.photoList.lilies} />} />
                      <Route exact path="/lakes" render={() => <PhotoList data={this.state.photoList.lakes} />} />
                      <Route exact path="/puppies" render={() => <PhotoList data={this.state.photoList.puppies} />} />
              </div>
              
            </div>
            <Route component={NotNound} />
            </Switch>
          </BrowserRouter>
      );
  }

}
