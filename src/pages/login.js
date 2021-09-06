import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import backgroundImage from '../images/bg-01.jpg';
import '../App.css';
import Paper  from '@material-ui/core/Paper/Paper';
import LoginPageFields from '../components/fields/loginPageFields';
import { Typography } from '@material-ui/core';
import {Link} from "react-router-dom";
import {BaseLink} from "../service/postData";

const useStyles = makeStyles((theme) => ({
    paperStyle:{
        height:'73vh',
        width:'25%',
        margin:'auto',
        padding:theme.spacing(7),
        boxShadow: '0 3px 20px 0px rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
    },
    signText:{
        display: 'block',
        fontFamily: 'SourceSansPro-Bold',
        fontSize: '2.5rem',
        fontWeight:'bold',
        color: '#4b2354',
        lineHeight: '1.2',
        textAlign: 'center',
        
    }

  }));

const Login = () => {
    const classes = useStyles();

    //Function to signin
    const signIn=()=>{
        return window.location=`${BaseLink}dashboard`;
    }
    //End Function to signin
    return (
        <Box className="container-login100" style={{ backgroundImage:`url(${backgroundImage})`}}>
            <Box width="100%">
                <Paper elevation="3" className={classes.paperStyle}>
                    <Box className={classes.signText}>
                        Sign In
                    </Box>
                    <Box pt={5}>
                        <LoginPageFields
                            label="Enter Username or email"
                        />
                    </Box>
                    <Box pt={1}>
                        <LoginPageFields
                            label="Password"
                        />
                    </Box>

                    <Box pt={4} >
                        <Box width="50%" margin="auto">
                            <Box class="login100-form-btn" style={{cursor:'pointer'}} onClick={()=>signIn()}>
                                Sign In
                            </Box>
                        </Box>
                    </Box>

                    <Box pt={2} display="flex">
                        <Box>
                            <Typography variant="caption">
                                <Link style={{outline:'none'}} to={"/login"}>
                                    Report here
                                </Link>
                            </Typography>
                        </Box>
                        <Box flexGrow={1}>
                            <Box textAlign="right">
                                <Typography variant="caption">
                                    <Link  style={{outline:'none'}} to={"/login"}>
                                        Don't have account?click here
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}

export default Login;