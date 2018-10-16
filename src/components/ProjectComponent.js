// ProjectComponent.js

import React, { Component } from 'react';
import axios from 'axios';
import ProjectTableRow from './ProjectTableRow';

export default class ProjectComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {serverports: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4200/serverproject')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    ProjectTabRow(){
        return this.state.serverports.map(function(object, i){
            return <ProjectTableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Title</td>
                  <td>Description</td>
                  <td>Author</td>
                </tr>
              </thead>
              <tbody>
                {this.ProjectTabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }
