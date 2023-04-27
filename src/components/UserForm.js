import React from "react"
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
import { Link } from "react-router-dom";
import BasicSelect from "./BasicSelect"

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

//Data
const initialValues = {
  firstName: "",
  lastName: "",
  occupation: "",
  city: "",
  country: "",
  email: "",
  password: "",
  describe: "",
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
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
})

const UserForm = () => {
  const classes = useStyle()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <>
      <Grid container justify="center" spacing={1}>
        <Grid item md={8} sm={12} lg={8}>
          <Card className={classes.padding} id="card11">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {({ dirty, isValid, values, handleChange, handleBlur }) => {
                return (
                  <Form>
                    <CardContent>
                      <Grid item container spacing={1} justify="center">
                        <Grid item xs={12} sm={10} md={10} className="1">
                          <Field
                            placeholder="Name "
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            value={values.firstName}
                            component={TextField}
                            className="TextField1"
                          />
                          <Field
                            placeholder="E Mail"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={values.email}
                            component={TextField}
                            className="TextField1"
                          />
                          <BasicSelect />
                          <textarea
                            className="TextField1 describe w-100"
                            name="describe"
                            label="Write you feedback..."
                            variant="outlined"
                            fullWidth
                            component={TextField}
                            type="describe"
                            placeholder="Write you feedback... "
                          />

                        </Grid>
                        <Link to="/">
                          <CardActions className="cardAction1">
                            <Button
                              disabled={!dirty || !isValid}
                              variant="contained"
                              color="primary"
                              type="Submit"
                              className={classes.button}
                              id="bttn"
                            >

                              Submit
                            </Button>
                          </CardActions>
                        </Link>
                      </Grid>
                    </CardContent>
                  </Form>
                )
              }}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </>

  )
}

export default UserForm