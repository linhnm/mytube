import React, {Component} from 'react';

export default class VideoDetail extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isExisted: !this.props.video,
	  };
	}

	getVideoId = (video) => {
		return !video ? '' : video.id.videoId;
	}

	getVideoUrl = (id) => {
		return `https://www.youtube.com/embed/${id}`;
	}

	getVideoDetail = (video) => {
		if(!video){
			return (
				 <div>Loading ...</div>
			);
		}else{
			const videoId = this.getVideoId(this.props.video);
			const url = this.getVideoUrl(videoId);
			const title = this.props.video.snippet.title;
			const desc = this.props.video.snippet.description;
			return (
			<div className="video-detail col-ml-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url} ></iframe>
				</div>
				<div className="detail">
					<div className="video-title">{title}</div>
					<div className="video-desc">{desc}</div>
				</div>
			</div>
			);
		}
	} 
	render = () => {
		return(
				this.getVideoDetail(this.props.video)

		);
	}
}
