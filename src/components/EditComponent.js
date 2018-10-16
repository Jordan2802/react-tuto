// EditComponent.js

import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {age: '', name: '',type:''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/serverport/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ age: response.data.age, name: response.data.name, type: response.data.type });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            age: this.state.age,
            name: this.state.name,
            type: this.state.type
        }
        axios.post('http://localhost:4200/serverport/update/'+this.props.match.params.id, serverport)
        .then(res => console.log(res.data));
        this.setState({
            age: '',
            name: '',
            type: ''
        })
        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Age:  </label>
                        <input type="text" value={this.state.age} className="form-control" onChange={this.onChangeAge}/>
                    </div>
                    <div className="form-group">
                        <label>Add Name: </label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Type: </label>
                        <input type="text" value={this.state.type} className="form-control" onChange={this.onChangeType}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
