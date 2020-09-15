import React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import TextInput from '../../shared/FormFields/TextInput'
import {
  logInSchema,
  signUpSchema,
  LoginValuesTypes,
  SignUpValuesTypes
} from '../../services/validations'
import { logIn, signUp } from '../../redux/actions/user/user'

interface FormProps {
  isLogin: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff'
  },
  buttonBox: {
    padding: '0 10px'
  },
  submitButton: {
    marginTop: 25,
    width: '100%',
    color: '#fff',
    padding: 10,
    borderRadius: 24,
    fontSize: 16,
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[600]
    }
  }
}))

const Form: React.FC<FormProps> = ({ isLogin }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = (values: LoginValuesTypes | SignUpValuesTypes): void => {
    console.log('submit', values)

    if (isLogin) {
      dispatch(logIn(values))
    } else {
      dispatch(signUp(values))
    }
  }

  const signUpInitialValues: SignUpValuesTypes = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  }

  const logInInitialValues: LoginValuesTypes = {
    email: '',
    password: ''
  }

  return (
    <Formik
      enableReinitialize
      onSubmit={handleSubmit}
      initialValues={isLogin ? logInInitialValues : signUpInitialValues}
      validationSchema={isLogin ? logInSchema : signUpSchema}
    >
      {() => (
        <FormikForm>
          <TextInput fullWidth name="email" label="Email" type="email" />
          {!isLogin && (
            <TextInput fullWidth name="name" label="Name" type="text" />
          )}
          <TextInput
            fullWidth
            name="password"
            label="Password"
            type="password"
          />
          {!isLogin && (
            <TextInput
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          )}
          <div className={classes.buttonBox}>
            <Button className={classes.submitButton} type="submit">
              {isLogin ? 'Login' : 'Sign up'}
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
