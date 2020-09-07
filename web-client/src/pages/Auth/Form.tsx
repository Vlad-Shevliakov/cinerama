import React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import TextInput from '../../shared/FormFields/TextInput'
import { logInSchema, LoginValuesTypes } from '../../services/validations'
import { signUp } from '../../api/auth'

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

  const tempHelloRequest = async (values: LoginValuesTypes) => {
    try {
      const res = await signUp(values)

      console.log(res)
    } catch (error) {
      console.dir(error)
    }
  }

  const handleSubmit = (values: LoginValuesTypes): void => {
    console.log('submit', values)
    tempHelloRequest(values)
  }

  const initialValues: LoginValuesTypes = {
    email: '',
    password: ''
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={logInSchema}
    >
      {({ setFieldValue }) => (
        <FormikForm>
          <TextInput fullWidth name="email" label="Email" type="email" />
          <TextInput
            fullWidth
            name="password"
            label="Password"
            type="password"
          />
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
