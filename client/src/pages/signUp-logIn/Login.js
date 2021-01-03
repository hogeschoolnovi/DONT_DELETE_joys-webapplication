import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import * as yup from "yup";
import {useFormik} from "formik";
import Paper from "@material-ui/core/Paper";
import FormField from "../../components/SignUpFormField";
import Button from "@material-ui/core/Button";
import AuthService from "../../clientServices/AuthService";
import {useDispatch} from "react-redux";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: 200,
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 350,
        maxHeight: 450,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10,
    },
    signUpButton: {
        margin: 20,
        marginTop: 30,
        background: '#FFD166',
        color: '#6F2DBD',
        fontSize: 20,
        '&:hover': {
            background: '#6F2DBD',
            color: '#FFD166',
        }
    },
    typographyDescription: {
        color: '#6F2DBD',
        fontSize: 15,
        fontStyle: 'oblique',
        marginTop: 10,
    },
}));

function Login(){
    let history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .required("Username is a required field")
            .min(6, "Username must be at least 6 characters")
            .max(20, "Username can't be more than 20 characters"),
        password: yup
            .string()
            .required("Please enter your password")
            .max(40, "Password can't be more than 40 characters")
            .min(8, "Password must contain at least 8 characters")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special character"
            ),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            AuthService.login(values.username, values.password).then(function (response) {
                console.log(response);
                dispatch({ type: 'SIGN_IN', data: response});
                alert("Log in was succesfull. Welcome back!");
                history.push('/');
            }).catch((error) => {
                console.log(error);
                alert("Log in failed. Please make sure your information is correct");
            })

    }})

    const usernameProps = formik.getFieldProps("username");
    const passwordProps = formik.getFieldProps('password');

    return (
        <div className={classes.root}>
            <Paper elevation={6} className={classes.paper}>
                <form onSubmit={formik.handleSubmit}>
                    <FormField
                        label="Username"
                        type="text"
                        placeholder="Enter your username"
                        {...usernameProps}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                    ) : null}
                    <FormField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...passwordProps}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}

                        <Typography className={classes.typographyDescription}>
                            Don't have an account yet? <Link to={'/sign-up'}>Sign up here!</Link>
                        </Typography>
                    <Button size={'large'} className={classes.signUpButton} type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</Button>
                </form>
            </Paper>
        </div>
    )
}
export default Login;
