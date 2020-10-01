import React, { Component } from 'react';
import {Link , Redirect } from 'react-router-dom';
import Dashboard from './Dashboard'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            fileds: {},
            errors: {},
            msg: ''
        }

        this.save = this.save.bind(this);
        this.formCheck = this.formCheck.bind(this);
    }
    
    save = (event) => {
        event.preventDefault();
        if((this.state. fileds["uname"] == "monikamishra@gmail.com") && (this.state. fileds["password"] =="monika123")){
                sessionStorage.setItem("uname","hruday@gmail.com")
                this.setState({
                    msg:"Login Success! Redirecting...",   
                })
                    window.location.href="#/Dashboard";
                    window.location.reload(); // to reload the current page   
                   
        }
        else{
            this.setState({
                msg:"Invalid login details..."
            })
        }
        if (this.formCheck()) {
           
            let fileds = {};
            fileds["uname"] = "";
            fileds["password"]="";
        }
       
    }
    formCheck = () => {
        let fileds = this.state.fileds;
        let errors = {};
        let formStatus = true;
        if (!fileds["uname"]) {
            formStatus = false;
            errors["uname"] = "please enter username ?"
        }
        if (!fileds["password"]) {
            formStatus = false;
            errors["password"] = "please enter Password ?"
        }
        
        this.setState({
            errors: errors
        })
        return formStatus;
    }
    handleInput = (e) => {
        let fileds = this.state.fileds;
        fileds[e.target.name] = e.target.value;
        this.setState({
            fileds
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row login">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 bg-light p-3">
                        <div >
                            <div className="card-header bg-danger text-white">Login</div>
                            <div className="card-body">
                                <p className="text-primary text-center">{this.state.msg}</p>
                                <div className="form-group">
                                <label>User Name</label>
                                    <input type="text" className="form-control" name="uname" value={this.state.fileds.uname} onChange={this.handleInput} />
                                    <i className="text-info">{this.state.errors.uname}</i>
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.fileds.password} onChange={this.handleInput} />
                                    <i className="text-info">{this.state.errors.password}</i>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary btn-sm" onClick={this.save}>Login</button>
                            </div>
                             <p className="text-center">Don't have accounts ? <Link to="SignUp" className="nav-links">SignUp</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
                
            </div>



        )
    }

}

export default Login;