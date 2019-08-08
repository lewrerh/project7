import React, { Component } from 'react';
//import logo from './logo.svg';la
//import App from './Components/App';
import axios from 'axios';
import './App.css';
//import Photo from '../Components/Photo';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
//import SearchForm from './ReactComponents/SearchForm';
//import apiKey from './config.js';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { catchClause } from '@babel/types';
// import Home from '.Home';  //App exact path added 
//import About from './About';  //Added about path

export default class App extends Component {
  state = { 
    photosArr: [],
    lilies: [],
    lakes: [],
    pupiess: []
  };

  defaultPhotos = ['lilies', 'lakes', 'pupiess'];
    
      componentDidMount() {
        axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ab5bef6bd451cf11b48e2729e2a8e79&tags=lilies&per_page=24&format=json&nojsoncallback=1")
            .then(response => {
                const photosArr = response.data.photos.photo
                this.setState({ photosArr });
            })
            
      }

    render() {
        let url = "";
        this.state.photosArr.map(photo => {
            url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/"
                + photo.id + "_" + photo.secret + ".jpg";
        })
        
        return (
            <div><img src={url} alt="lilies" height="500" width="500" /></div>,
            <div><img src={url} alt="lakes" height="500" width="500" /></div>,
            <div><img src={url} alt="pupies" height="500" width="500" /></div>
        );
      
    }
    
};
    

  




