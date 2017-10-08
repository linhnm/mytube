import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

export default class ListVideoItem extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render = () => {
		return (
			<ListGroupItem onClick={() => this.props.onVideoSelect(this.props.video)} id={this.props.video.etag}>
				<div className="media-left">
					<img className="media-object" src={this.props.video.snippet.thumbnails.default.url} />
				</div>
				<div className="media-body">
					<div className="media-heading">{this.props.video.snippet.title}</div>
				</div>
			</ListGroupItem>
		);
	}
}
