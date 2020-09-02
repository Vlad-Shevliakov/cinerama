import React from 'react'
import { useField } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

//  &:hover:not($disabled):not($cssFocused):not($error) $notchedOutline

const useStyles = makeStyles(() => ({
  root: {
    color: '#343434',
    '& .MuiOutlinedInput-input': {
      fontWeight: '600',
      padding: '14px 10px'
    },
    '& label.Mui-focused': {
      color: 'green'
    }
  },
  box: {
    height: 24
  },
  message: {
    height: 24,
    color: '#ff182e',
    opacity: 0,
    transition: 'all 0.33s linear'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#424242'
  }
}))

interface TextInputProps {
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  disabled?: boolean
  label?: string
  placeholder?: string
  type?: string
  name: string
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [field, meta] = useField(props)

  const classes = useStyles()

  return (
    <>
      <TextField
        {...field}
        {...props}
        InputProps={{
          classes: {
            root: classes.root
          }
        }}
        InputLabelProps={
          {
            //   shrink: true
          }
        }
      />
      <Fade in={meta.touched && !!meta.error}>
        <Typography component="p" className={classes.message}>
          {meta.touched && meta.error}
        </Typography>
      </Fade>
    </>
  )
}

export default TextInput
