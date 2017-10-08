import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import VideoListItem from './VideoListItem';

export default class VideoList extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render = () => {
		return(
			<ListGroup bsClass="col-ml-4">
				{
					this.props.videos.map((video) => {
						return ( 
							<VideoListItem 
								onVideoSelect={this.props.onVideoSelect}
								video={video} 
							/>
						);
					})
				}
			</ListGroup>
		);
	}
}
