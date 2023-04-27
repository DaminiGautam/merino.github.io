import React, { useState } from "react"
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import { Link, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextareaAutosize } from '@mui/base';
import { Navigate } from "react-router-dom";
import img from "../assets/images/Rectangle 32.png"

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BasicSelect from "./BasicSelect"
const useStyle = makeStyles((theme) => ({
  // padding: {
  //   padding: theme.spacing(3),
  // },
  // button: {
  //   margin: theme.spacing(1),
  // },
}))

//Data
const initialValues = {
  // firstName: "",
  // lastName: "",
  // occupation: "",
  // city: "",
  // country: "",
  email: "",
  password: "",
}

const options = [
  { label: "Computer Programmer", value: "Computer_programmer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "User Experience Designer", value: "user_experience_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
  { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
]

//password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    // .matches(
    //   lowercaseRegEx,
    //   "Must contain one lowercase alphabetical character!"
    // )
    // .matches(
    //   uppercaseRegEx,
    //   "Must contain one uppercase alphabetical character!"
    // )
    // .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),

})


const UserForm1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [color, setColor] = useState("red");
  const classes = useStyle()

  const onSubmit = (values) => {
    navigate('/blog1');
    console.log(values)
  }


  const navigateToContacts = () => {


  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid item xs={12} sm={12} md={12}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ dirty, isValid, submitForm, values, handleChange, handleBlur }) => {
            return (
              <Form>
                <CardContent>
                  <Grid item container spacing={1} justify="center">
                    <Grid item xs={12} sm={12} md={10} className="1">
                      <Field
                        placeholder="Email\Username"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={values.email}
                        component={TextField}
                        className="TextField1"
                      />
                      {/* <img src={img}></img> */}
                      <Field
                        placeholder="Password "
                        variant="outlined"
                        fullWidth
                        name="password"
                        value={values.password}
                        component={TextField}
                        className="TextField1"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      <BasicSelect />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={11} md={11} className="text-end">
                    {/* <Link to="/ForgotPassword"> */}
                    <p className="text-left">Forgot Password ?</p>
                    {/* </Link> */}
                  </Grid>
                  <Link to="/blog1">
                    <CardActions className="cardAction1">
                      <Button
                        disabled={!dirty || !isValid}
                        variant="contained"
                        color="primary"
                        type="Submit"
                        className={classes.button}
                        onClick={submitForm}
                        id="bttn"
                      >
                        sign in
                      </Button>

                    </CardActions>
                  </Link>
                </CardContent>
              </Form>
            )
          }}
        </Formik>
      </Grid>

    </>

  )
}

export default UserForm1