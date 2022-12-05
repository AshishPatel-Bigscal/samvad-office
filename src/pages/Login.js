import React, { useState, useEffect } from 'react';
import "./Login.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle } from 'react-icons/fa';
import Logo from "../resources/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { ExternalLinks } from "../util/Constants";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { authUser } from '../services/UserSlice';
import { Notify } from "../util/Notify"
const Login = () => {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { values, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: "ashish@gmail.com",
            password: "123"
        }
    });
    const handleLogin = () => {
        dispatch(authUser(values.email, values.password))
            .then((res) => {
                Notify.success(`Welcome, ${res}`)
                // setLogin(true)
                navigate("/dashboard")
            })
            .catch((res) => Notify.error(res));
    }
    // useEffect(() => {
    //     if (login) navigate("/dashboard")
    // }, [login])
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={Logo} width="300px" alt="application_logo" />
                            <img width="400px" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button className="btn btn-primary btn-floating mx-1">
                                    <FaFacebookF onClick={() => { navigate() }} />
                                </button>
                                <button className="btn btn-primary btn-floating mx-1">
                                    <FaTwitter />
                                </button>
                                <button className="btn btn-primary btn-floating mx-1">
                                    <FaLinkedinIn />
                                </button>
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
                            <div className="form-outline mb-4">
                                <input className="form-control form-control-lg"
                                    type="email" onChange={handleChange}
                                    name='email' value={values.email}
                                    placeholder="Email" />
                            </div>
                            <div className="form-outline mb-3">
                                <input className="form-control form-control-lg"
                                    type="password" onChange={handleChange}
                                    name='password' value={values.password}
                                    placeholder="password" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value='' />
                                    <label className="form-check-label">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button className="btn btn-primary btn-lg"
                                    style={{ "paddingLeft": '2.5rem', "paddingRight": '2.5rem' }}
                                    onClick={() => { handleLogin() }}>
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                    <span className='text-muted' onClick={() => { navigate('/signup') }}><u>Register</u></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-2 mb-md-0">
                        Copyright © 2022. All rights reserved.
                    </div>
                    <div>
                        <a href={ExternalLinks.facebook} className="text-white me-4">
                            <FaFacebookF />
                        </a>
                        <a href={ExternalLinks.twitter} className="text-white me-4">
                            <FaTwitter />
                        </a>
                        <a href={ExternalLinks.google} className="text-white me-4">
                            <FaGoogle />
                        </a>
                        <a href={ExternalLinks.linkedin} className="text-white">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Login