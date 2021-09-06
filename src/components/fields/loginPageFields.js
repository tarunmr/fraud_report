import React from 'react';
import {withStyles,makeStyles,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'rgba(185,0,255,0.5)',
      fontWeight:'bold',
    },
    '& label.Mui-focused': {
        color: 'rgba(185,0,255,0.5)',
        fontWeight:'bold',
      },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(185,0,255,0.5)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        boxShadow: '0 3px 20px 0px rgb(0 0 0 / 10%)',
        borderRadius:20,
        border:'none'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(185,0,255,0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(185,0,255,0.5)',
      },
    },
  },
})(TextField);



const useStyles = makeStyles((theme) => ({

  margin: {
    margin: theme.spacing(1),
  },
}));



export default function LoginPageFields(props) {
  const classes = useStyles();

  return (
    <form>
      <CssTextField
        className={classes.margin}
        label={props.label}
        variant="outlined"
        id="custom-css-outlined-input"
        fullWidth={true}
      />
    </form>
  );
}