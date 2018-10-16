import React, { Component } from 'react';
import axios from 'axios';


export default class CreateComponent extends Component {
   
    constructor(props) {
        super(props);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmitProject = this.onSubmitProject.bind(this);
        this.userName = {};
        this.options=[];
        this.optionState = this.props.optionState;
        this.nom = this.nom.bind(this);
    

        axios.get('http://localhost:4200/serverport')
        .then(response => {
          
          response.data.forEach(element => {
    
            this.options.push('<option value="'+element.name+'">'+element.name+'</option>')
          
        });
        })
        .catch(function (error) {
          console.log(error);
        })


        this.stateUser = {serverports: []};
        this.state = {
            age: '',
            name: '',
            type: '',
            title: '',
            description: '',
            author: ''
        }


    }
    
    getUserName(e){
        
        //this.options.push({e});
    }

    nom(){
        return this.options;
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

       

        axios.post('http://localhost:4200/serverport/add', serverport)
        .then(res => console.log(res.data));
        this.setState({
            age: '',
            name: '',
            type:''
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
        axios.post('http://localhost:4200/serverproject/add', serverproject)
        .then(res => console.log(res.data));
        this.setState({
            title: '',
            description: '',
            author: ''
        })
    }

  
      
      
    

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New User</h3>
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
                        <input type="submit" value="Add User" className="btn btn-primary"/>
                    </div>
                </form>
                <h3>Add New Project</h3>
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
                        
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Project" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

            
            
        )
    }
}
