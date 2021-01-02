import React, {useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import './SignUp.scss';
import FormField from "./SignUpFormField";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import AuthService from "../../clientServices/AuthService";
import {Link} from "react-router-dom";
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

function SignUp() {

    const [error, setError] = useState('');

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
            .min(6, "Username must be at least 6 characters"),
        email: yup
            .string()
            .email()
            .required("Email is a required field"),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special character"
            ),
        confirmPassword: yup
            .string()
            .required("Please confirm your password")
            .when("password", {
                is: password => (password && password.length > 0 ? true : false),
                then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
            })
    });
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            AuthService.register(values.username, values.email, values.password).then(() => {console.log('dit is de signup')}).catch(() => {alert("Something went wrong. Sign up failed.")})
    }})

    const usernameProps = formik.getFieldProps("username");
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps('password');
    const confirmPasswordProps = formik.getFieldProps('confirmPassword');

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={6} className={classes.paper}>
                <form onSubmit={formik.handleSubmit}>
                    <FormField
                        label="Username"
                        type="text"
                        placeholder="Enter a username"
                        {...usernameProps}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                    ) : null}

                    <FormField
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...emailProps}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <br/>
                    <FormField
                        label="Password"
                        type="password"
                        placeholder="Enter a password"
                        {...passwordProps}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <FormField
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        {...confirmPasswordProps}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div>{formik.errors.confirmPassword}</div>
                    ) : null}
                    <Typography className={classes.typographyDescription}>
                        Already have an account? <Link to={'/login'}>Log in here!</Link>
                    </Typography>

                    <Button size={'large'} className={classes.signUpButton} type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</Button>
                </form>
            </Paper>
        </div>
    );}
export default SignUp;

