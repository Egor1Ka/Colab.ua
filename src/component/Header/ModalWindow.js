import React from 'react';
import style from './Header.module.css'
import User from './../../img/User.png';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props)=>{
    return(
        <form onSubmit = {props.handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <Field component = 'input' name='login' class="form-control" type="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                
                <Field component ='input' name='password' class="form-control" id="exampleInputPassword1" type="password"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
                <button type="submit" class="btn btn-primary">Submit</button>
         </form>
    )
}

const ReduxLoginForm = reduxForm({form:'ModalLoginForm'})(LoginForm);

const ModalWindow = ({setUsersModal})=>{
    const onSubmit = (formData)=>{
        console.log(formData);
        setUsersModal(false);
    }

    return(
        <div className = {style.modal} >
            <div className = {style.modalBody} >
                <img src={User} className = {style.user} alt=""/>
                <ReduxLoginForm onSubmit = {onSubmit}/>
            </div>
        </div>
    )
}

export default ModalWindow;