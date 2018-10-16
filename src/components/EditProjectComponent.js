// EditComponent.js

import React, { Component } from 'react';
import axios from 'axios';

export default class EditProjectComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmitProject = this.onSubmitProject.bind(this);

        this.state = {title: '',
        description: '',
        author: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/serverproject/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ title: response.data.title, description: response.data.description, author: response.data.author });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        onChangeTitle(e) {
            this.setState({
                title: e.target.value
            });
        }
        onChangeDescription(e) {
            this.setState({
                description: e.target.value
            });
        }
        onChangeAuthor(e) {
            this.setState({
                author: e.target.value
            });
        }
        onSubmitProject(e) {
            e.preventDefault();
            const serverproject = {
                title: this.state.title,
                description: this.state.description,
                author: this.state.author
            }
        axios.post('http://localhost:4200/serverproject/update/'+this.props.match.params.id, serverproject)
        .then(res => console.log(res.data));
        this.setState({
            title: '',
            description: '',
            author: ''
        })
        this.props.history.push('/project');
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit New Project</h3>
                <form onSubmit={this.onSubmitProject}>
                    <div className="form-group">
                        <label>Add Title:  </label>
                        <input type="text" value={this.state.title} className="form-control" onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Add Description: </label>
                        <input type="text" value={this.state.description} className="form-control" onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text" value={this.state.author} className="form-control" onChange={this.onChangeAuthor}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Project" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
