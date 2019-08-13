import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import Photo from './Components/Photo';
import PhotoList from './components/PhotoList';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import SearchForm from './components/SearchForm';
import Search from './components/Search';
import apiKey from './config.js';
import NoMatchesFound from './components/NoMatchesFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
    // constructor() {
    //     super();
    //     let photoListObj = { lilies: [], lakes: [], ballons: [] };
    //     this.state = {
    //         photoList: photoListObj
    //     };
    // }

    constructor() {
      super();
      this.state = {
        photo: [],
        loading: true
      };
    }

    componentDidMount() {
      this.performSearch("Lilies");
    }
    isTrue = (istrue = true) => {
      this.setState({
        loading: istrue
      })
    }
        // Get the lilies
//Setup the routes in the render method for children

      performSearch = (query = 'lilies') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lilies&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
              this.setState({
                photo: response.data.photo.photo, 
                loading: false
              });
            })
            .catch(error => {
            });
        }
            //console.log('Error fetching and parsing data', error);

            
          
        // Get the lakes
        // axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lakes&per_page=24&format=json&nojsoncallback=1`)
        //     .then(response => {
        //         this.state.photoList.lakes = response.data.photos.photo;
        //         this.setState({
        //             photoList: this.state.photoList
        //         });
        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error);

        //     });

        // // Get the balloons
        // axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=ballons&per_page=24&format=json&nojsoncallback=1`)
        //     .then(response => {
        //         this.state.photoList.ballons = response.data.photos.photo;
        //         this.setState({
        //             photoList: this.state.photoList
        //         });
        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error);

        //     });
    


    render() {
        return (
            <BrowserRouter>
             <div>
                <div className="container">
                     <h1>PhotoSearch</h1>
                        <SearchForm onSearch={this.performSearch} />
                         <Nav />    
                    </div>
                    <div className="container">
                      <Switch>
            
                        <Route exact path="/" render={() => <PhotoList data={this.state.photoList.lilies} />} />
                        <Route exact path="/lilies" render={() => <PhotoList data={this.state.photoList.lilies} />} />
                        <Route exact path="/lakes" render={() => <PhotoList data={this.state.photoList.lakes} />} />
                        <Route exact path="/ballons" render={() => <PhotoList data={this.state.photoList.ballons} />} />
                        <Route component={NoMatchesFound} />
                      </Switch>
                </div>
             </div>
            </BrowserRouter>
        );
    }

}

