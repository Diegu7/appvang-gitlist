import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types';

class ListProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    // eslint-disable-next-line
    console.log(this.props);
    const {
      match: { params }
    } = this.props;

    axios
      .get(`https://api.github.com/users/${params.username}/repos`)
      .then(projects =>
        this.setState(() => ({
          projects: projects.data
        }))
      )
      .catch(err => console.log(err.message)); // eslint-disable-line
  }


  componentWillUnmount() {
    this.isCancelled = true;
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container list">
          <section className="eight offset-by-two columns">
            <h4>Projects</h4>
          </section>
          <ul>
          {this.state.projects.map((proj) => (<li key={proj.node_id}>{proj.name}</li>))}
          </ul>
        </div>
      </div>
    );
  }
}

ListProjects.propTypes = {
  match: PropTypes.object.isRequired
};

export default ListProjects;
