import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import Photo from './Components/Photo';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';
//import Search from './Components/Search';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
    constructor() {
        super();
        let photoListObj = { lilies: [], lakes: [], ballons: [] };
        this.state = {
            photoList: photoListObj
        };
    }

    componentDidMount() {

        // Get the lilies
//Setup the routes in the render method for children


        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lilies&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
              
                this.state.photoList.lilies = response.data.photos.photo;
                this.setState({
                    photoList: this.state.photoList
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);

            });

        // Get the lakes
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lakes&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.state.photoList.lakes = response.data.photos.photo;
                this.setState({
                    photoList: this.state.photoList
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);

            });

        // Get the ballons
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=ballons&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.state.photoList.ballons = response.data.photos.photo;
                this.setState({
                    photoList: this.state.photoList
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);

            });
    }

    // Setup the routes in the render method
    render() {
        return (
            <BrowserRouter>
             <div>
                <div className="container">
                     <h1>PhotoSearch</h1>
                        <SearchForm />
                         <Nav />    
                    </div>
                    <div className="container">
                      <Switch>
                        <Route exact path="/Search" component={Search} />
                        <Route exact path="/" render={() => <PhotoList data={this.state.photoList.lilies} />} />
                        <Route exact path="/lilies" render={() => <PhotoList data={this.state.photoList.lilies} />} />
                        <Route exact path="/lakes" render={() => <PhotoList data={this.state.photoList.lakes} />} />
                        <Route exact path="/ballons" render={() => <PhotoList data={this.state.photoList.ballons} />} />
                        <Route component={NotFound} />
                      </Switch>
                </div>
             </div>
            </BrowserRouter>
        );
    }

}

