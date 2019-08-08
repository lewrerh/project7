import React, { Component } from 'react';
//import logo from './logo.svg';la
//import App from './Components/App';
import axios from 'axios';
import './App.css';
import Photo from '../Components/Photo';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
//import SearchForm from './Components/SearchForm';
//import apiKey from './config.js';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { catchClause } from '@babel/types';
// import Home from '.Home';  //App exact path added 
//import About from './About';  //Added about path

export default class App extends Component {
   constructor() {
     super();
     this.state = {
      photo: []
     };
   }
  
  
  
  //state = { 
    //photosArr: [],
    //lilies: [],
    //lakes: [],
    //puppies: []
  //};


  //defaultPhotos = ['lilies', 'lakes', 'puppies'];
    
      componentDidMount() {
        

      //performSearch = () => {}
        axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ab5bef6bd451cf11b48e2729e2a8e79&tags=lilies&per_page=24&format=json&nojsoncallback=1")
            .then(response => {
                this.setState({
                  photo: response.data.data
                 });
                })  
              
              .catch(error => {
                console.log('Error fetching and parsing data', error);
              
  
              });
          }
              
              
                                  //const photosArr = response.data.photos.photo
                                  //this.setState({ photosArr });
            
            
      

    render() {  
      console.log(this.state.photo)
        //let url = "";
        //this.state.photosArr.map(photo => {
            //url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/"
                //+ photo.id + "_" + photo.secret + ".jpg";
        //})
        
        return () {
          console.log(this.state.photo);
        return (
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">PhotoSearch</h1>
                <SearchForm />
              </div>
            </div>
            <div className="main-content">
            <PhotoList data={this.state.photo} />
          </div>
         </div>
       );
      };     
    

            //<div><img src={url} alt="lilies" height="500" width="500" /></div>,
            //<div><img src={url} alt="lakes" height="500" width="500" /></div>,
            //<div><img src={url} alt="pupies" height="500" width="500" /></div>
        
  

