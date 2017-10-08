import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AppConstants from './../services/AppConstant';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import {Grid, Row, Col} from 'react-bootstrap'

export default class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	videos: [],
	  	selectedVideo: null
	  };
		this.videoSearch('vevo');
	}

	videoSearch = (term) => {
		YTSearch({key: AppConstants.API_KEY, term: term}, (videos) => {
	  		console.log(videos);
		  	this.setState({ 
		  		videos: videos,
		  		selectedVideo: videos[0]
		  	});
	  });
	}
  render() {

  	const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="app">
      	<SearchBar onSearchTermChange={videoSearch}/>
      	<Grid>
      		<Row className="show-grid">
      			<Col xs={12} md={8}>
      				<VideoDetail video={this.state.selectedVideo} />
      			</Col>
      			<Col xs={6} md={4}>
      				<VideoList
			      		onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
			      		videos={this.state.videos} 
			      	/>
      			</Col>
      		</Row>
      	</Grid>
      	
      	
      </div>
    );
  }
}
