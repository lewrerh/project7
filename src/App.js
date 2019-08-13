import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import Photo from './Components/Photo';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';
//import Search from './components/Search';
import apiKey from './config.js';
import NoMatchesFound from './Components/NoMatchesFound';
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
      this.performSearch("lilies");
    }
    isTrue = (istrue = true) => {
      this.setState({
        loading: istrue
      })
    }
        // Get the lilies
//Setup the routes in the render method for children

      performSearch = (query = 'lilies') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
              this.setState({
                photo: response.data.photos.photo, 
                loading: false
              });
            })
            .catch(error => {
            });
        
           // console.log('Error fetching data', error);

            
          
         /*Get the lakes
         axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
             .then(response => {
               this.setState({
                photo: response.data.photos.photo, 
                loading: false
              });
            })
            .catch(error => {
            });
          

        // // Get the balloons
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
           .then(response => {
             this.setState({
          photo: response.data.photos.photo, 
          loading: false
        });
      })
      .catch(error => {
      });*/
    
          }

    render() {
        return (
            <BrowserRouter>
             <div>
                <div className="container">
                     <h1>PhotoSearch</h1>
                        <SearchForm onSearch={this.performSearch} />
                         <Nav isTrue={this.isTrue} onClick={this.performSearch} />
                          {
                          (this.state.isLoading)
                          ? <p>Loading...</p>
                          :
                          <div className="container">

                            <Switch>
                        
                        <Route exact path="/lilies" render={() => <PhotoList data={this.state.photo} />} />
                        <Route exact path="/lakes" render={() => <PhotoList data={this.state.photo} />} />
                        <Route exact path="/balloons" render={() => <PhotoList data={this.state.photo} />} />
                        <Route component={NoMatchesFound} />
                      </Switch>
                      </div>
                    </div>
                </div>
             </div>
            </BrowserRouter>
        );
    }

}

