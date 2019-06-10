import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions';
import customImput from './customInput';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onSubmit(formData) {
        console.log('Form is submit');
        console.log('formData', formData);

        //Нужно вызвать Действие - Action
        await this.props.signUp(formData);

    }
    render() {
        const { handleSubmit } = this.props;
        return (

                <div className="row justify-content-md-center">
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <Field
                                    name="email"
                                    type="text"
                                    id="email"
                                    label="Enter Your EMail"
                                    component={ customImput } />

                            </fieldset>
                            {/*<fieldset>*/}
                                {/*<Field*/}
                                    {/*name="first_name"*/}
                                    {/*type="text"*/}
                                    {/*id="first_name"*/}
                                    {/*label="Enter Name"*/}
                                    {/*component={ customImput } />*/}

                            {/*</fieldset>*/}
                            {/*<fieldset>*/}
                                {/*<Field*/}
                                    {/*name="last_name"*/}
                                    {/*type="text"*/}
                                    {/*id="last_name"*/}
                                    {/*label="Enter Last Name"*/}
                                    {/*component={ customImput } />*/}

                            {/*</fieldset>*/}
                            {/*<fieldset>*/}
                                {/*<Field*/}
                                    {/*name="nick_name"*/}
                                    {/*type="text"*/}
                                    {/*id="nick_name"*/}
                                    {/*label="Enter Nick Name"*/}
                                    {/*component={ customImput } />*/}

                            {/*</fieldset>*/}
                            {/*<fieldset>*/}
                                {/*<Field*/}
                                    {/*name="phone_number"*/}
                                    {/*type="text"*/}
                                    {/*id="phone_number"*/}
                                    {/*label="Enter Phone Number"*/}
                                    {/*component={ customImput } />*/}

                            {/*</fieldset>*/}
                            <fieldset>
                                <Field
                                    name="password"
                                    type="password"
                                    id="password"
                                    label="Enter Your Password"
                                    component={ customImput } />

                            </fieldset>
                            <fieldset>
                                <Field
                                    name="confirm_password"
                                    type="password"
                                    id="confirm_password"
                                    label="Enter Your Password Confirm"
                                    component={ customImput } />

                            </fieldset>
                            {/*<fieldset>*/}
                                {/*<Field*/}
                                    {/*name="description"*/}
                                    {/*type="text"*/}
                                    {/*id="description"*/}
                                    {/*label="Enter description"*/}
                                    {/*component={ customImput } />*/}

                            {/*</fieldset>*/}


                            <button className="btn btn-primary" type="submit">Register</button>
                        </form>
                    </div>
                </div>

        )
    }

}

export default compose(
    connect(null, actions),
    reduxForm({form: 'signup'})
)(SignUp);