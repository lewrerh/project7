import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config.js';
import queryString from 'query-string'
import PhotoList from './PhotoList';
import NoMatchesFound from './NoMatchesFound';

//Create class Search for searching
export default class Search extends Component {

  constructor() {
    super();

    this.state = {
      searchPhotoList: []
    };
  }

  //Paarse the query strings and make an axios get the photos for the search
componentDidMount() {
  const values = queryString.parse(this.props.location.search);
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${values.search}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {

                this.setState({
                    searchPhotoList: response.data.photos.photo
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);

            });
    }
    render() {
      //If the searchPhotoList size is 0, return NoMatchesFound, else return photoList
      if (this.state.searchPhotoList.length == 0) {
        return (<NoMatchesFound /> );
      }
      else {
        return ( <PhotoList data={this.state.searchPhotoList} /> );
      }
    }

}