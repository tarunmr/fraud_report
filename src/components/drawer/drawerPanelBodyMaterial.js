import React from 'react';
import { createTheme,responsiveFontSizes, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Box from "@material-ui/core/Box/Box";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
    width:props => ({
        width:window.innerWidth-100,
        padding:theme.spacing(4,2,2,2),
        backgroundColor:props.secondaryColor,
        height:window.innerHeight,
        [theme.breakpoints.up('md')]: {
            width:props.width,
        },
    }),

}));

export default function DrawerPanelBodyMaterial(props) {
    let drawerContent={...props.colorStyle};
    const classes = useStyles(drawerContent);

    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.width}>
                {props.children}
            </Box>
        </ThemeProvider>
    );
}

