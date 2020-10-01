import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            password : ''
        }
    }

    // Form Events
    onChangeName =(e)=> {
        this.setState({ name: e.target.value })
    }

    onChangeEmail =(e)=> {
        this.setState({ email: e.target.value })
    }

    onChangePhone =(e)=> {
        this.setState({ phone: e.target.value })
    }
    onChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    onSubmit =(e)=> {
        e.preventDefault()
        console.log(this.state)

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container col-mb-6 col-lg-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control text-primary" value={this.state.name} onChange={this.onChangeName} placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control text-primary" value={this.state.email} onChange={this.onChangeEmail} placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control text-primary" value={this.state.password} onChange={this.onChangePassword} placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control text-primary" value={this.state.phone} onChange={this.onChangePhone} placeholder="PhoneNumber" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
                <p className="text-center">Have accounts ? <Link to="LogIn" className="nav-links text-info">LogIn</Link></p>
            </div>
        )
    }
}