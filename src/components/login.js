import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom'
import './login.css'
import { connect } from 'react-redux';
import { loginOnRequestThunk } from "../actions/auth";


class NormalLoginForm extends React.Component {
    componentWillReceiveProps(nextProps) {
        const {
            submitLogin: { data }
        } = nextProps;

        console.log('data', data)

        if(data.isValid){
            this.props.history.push('/')
        } else {
            alert('Password Incorrect')
        }
        console.log('nextProps', data)
    }

    handleSubmit = e => {

        console.log('e', e)

    };

    render() {

        return (
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    this.props.dispatch(loginOnRequestThunk(values))
                }}
                validate={(values => {
                    console.log('values2', values);
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Fill in login username'
                    }

                    if (!values.password) {
                        errors.password = 'Fill in login password'
                    }
                    if (values.password.length <= 6) {
                        errors.password = 'Password must be more than 6 characters'
                    }
                    return errors;
                })}

            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                    } = props;
                    return (
                        <Form onSubmit={handleSubmit} className="login-form">
                            <Form.Item>

                                <Input
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="username"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />
                                {errors.username && touched.username && (
                                    <div className="invalid-feedback">{errors.username}</div>
                                )}

                            </Form.Item>
                            <Form.Item>

                                <Input
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="password"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                                {errors.password && touched.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}

                            </Form.Item>
                            <Form.Item>
                                <Checkbox>Remember me</Checkbox>
                                <a className="login-form-forgot" href="">
                                    Forgot password
                  </a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                  </Button>
                                or
                                <Link to="/register"> register now!</Link>
                            </Form.Item>
                        </Form>
                    );
                }}
            </Formik>


        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
        submitLogin: state.submitLogin

    }
}
export default withRouter(connect(mapStateToProps)(NormalLoginForm));