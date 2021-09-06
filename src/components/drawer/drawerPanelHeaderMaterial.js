import Box from "@material-ui/core/Box/Box";
import React from "react";
import {createTheme,makeStyles,MuiThemeProvider} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";


const theme = createTheme({
    typography: {
        fontFamily: [
            '"Montserrat", sans-serif'
        ].join(','),
    },
});

const useStyles = makeStyles(theme => ({

    topPanel:props => ({
        padding: '12px 0 7px 0',
        borderRadius: 3,
        background: props.primaryColor,
        boxShadow: props.primaryShadow,
        margin: '-25px 0px 0px 16px',
        display:'flex',
        alignItems:'center'
    }),
    icon:{
        overflow: 'unset',
        fontSize: '200%',
        textAlign: 'center',
        color:'#fff',
        width:'auto',
        height:'auto',
    },
    subTitle:{
        color: '#999',
        marginTop: 0,
        fontWeight: 400,
        [theme.breakpoints.only('xs')]: {
            fontSize:'0.75rem'
        },
    },
    title:props=>({
        color: '#3C4858',
        marginTop: -8,
        fontWeight: 300,
        [theme.breakpoints.only('xs')]: {
            fontSize:'1rem'
        },
    }),
    close: {
        background: 'rgba(0, 0, 0, 0.07)',
        position: 'absolute',
        top: 4,
        right: theme.spacing(4),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        '&:hover': {
            color: '#fff',
            background: 'red',

        },
    },
}));

function DrawerPanelHeaderMaterial(props) {
    let drawerContent={...props.colorStyle};
    const classes = useStyles(drawerContent);

    let headerCardGrid=4;
    let headerTextGrid=7;
    let headerIconGrid=3;

    if(drawerContent.width>=600 && drawerContent.width<=800){
        headerCardGrid=3;
        headerTextGrid=7;
        headerIconGrid=2
    }else if(drawerContent.width>=801 && drawerContent.width<=1200){
        headerCardGrid=2;
        headerTextGrid=7;
        headerIconGrid=3;
    }else if(drawerContent.width==='90vw'){
        headerCardGrid=2;
        headerTextGrid=6;
        headerIconGrid=4;
    }else if(drawerContent.width==='95vw'){
        headerCardGrid=2;
        headerTextGrid=6;
        headerIconGrid=4;
    }else if(drawerContent.width==='100vw'){
        headerCardGrid=1;
        headerTextGrid=3;
        headerIconGrid=8;
    }
    return (
        <MuiThemeProvider theme={theme}>
            <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
            >
                <Grid item xs={5} sm={3} md={2} lg={headerCardGrid} xl={headerCardGrid}>
                    <Box className={classes.topPanel} >
                        <Box width={1} textAlign="center">
                            <Icon className={classes.icon} >
                                {drawerContent.cardIcon}
                            </Icon>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={7} sm={9} md={10} lg={headerTextGrid} xl={headerTextGrid} className="py-2 pl-3">
                    <Box pl={2}>
                        <Typography variant="body1" className={classes.subTitle}>
                            {drawerContent.subTitle}
                        </Typography>
                        <Typography variant="h5" className={classes.title}>
                            {drawerContent.title}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={2} sm={2} md={4} lg={headerIconGrid} xl={headerIconGrid} >
                    {
                        props.onClose!==undefined?
                            <Button onClick={props.onClose} size='small' className={classes.close}><Icon fontSize='small'>close</Icon></Button>
                            :""
                    }
                </Grid>
            </Grid>
        </MuiThemeProvider>
    );
}

export default DrawerPanelHeaderMaterial;
