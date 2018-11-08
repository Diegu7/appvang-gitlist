import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from './Header';

const Markdown = require('react-markdown');

class Details extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			repoName: '',
			readme: '',
			username: ''
		};
	}

	componentDidMount(){
		const {
			match: {params}
		} = this.props;

		axios
			.get(`https://api.github.com/repos/${params.username}/${params.repo}/readme`)
			.then(readme => {
				axios
					.get(`${readme.data.download_url}`)
					.then(info =>
						this.setState(() => ({
							readme: info.data,
							repoName: params.repo,
							username: params.username
						}))
						)
			})
	}

	return() {
		<div>
			<Header history={this.props.history} backStr={this.state.repoName} push={`/${this.state.username}/projects`}/>
			<h3>{this.state.name}</h3>
			<Markdown source={this.state.readme}/>
		</div>	
	}
}

Details.propTypes = {
	match: PropTypes.object.isRequired
}

export default Details;