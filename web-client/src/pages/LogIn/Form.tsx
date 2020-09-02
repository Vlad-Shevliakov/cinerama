import * as React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import Button from '@material-ui/core/Button'
import TextInput from '../../shared/FormFields/TextInput'
import { logInSchema, LoginValuesTypes } from '../../services/validations'

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const handleSubmit = (): void => {
    console.log('submit')
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
          <TextInput name="email" label="Email" type="email" />
          <TextInput name="password" label="Password" type="password" />
          <Button type="submit">Login</Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
