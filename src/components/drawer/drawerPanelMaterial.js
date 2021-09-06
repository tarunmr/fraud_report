import Box from "@material-ui/core/Box/Box";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import DrawerPanelFooterMaterial from "./drawerPanelFooterMaterial";
import DrawerPanelBodyMaterial from "./drawerPanelBodyMaterial";
import DrawerPanelHeaderMaterial from "./drawerPanelHeaderMaterial";


const useStyles = makeStyles(theme => ({
    paper: props => ({
        fontSize: ".875rem",
        wordWrap: "break-word",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        borderRadius: "6px",
        marginBottom: props.footer ? theme.spacing(2) : 0
    }),

    bodyStyle: props => ({
        height: props.height,
        zIndex: 20,
        overflowX: props.xScroll ? "scroll" : "",
        overflowY: props.yScroll ? "scroll" : "",
        [theme.breakpoints.only("xs")]: {
            height: props.footer ? window.innerHeight-145 : window.innerHeight-80,
            overflowY: "scroll"
        }
    })
}));

function DrawerPanelMaterial(props) {
    let drawerContent = { ...props.colorStyle};

    const size = window.innerHeight;

    drawerContent["footer"] = props.footer;
    drawerContent["xScroll"] = props.xScroll;
    drawerContent["yScroll"] = props.yScroll;
    drawerContent["height"] = props.footer ? size - 160 : size - 100;

    const classes = useStyles(drawerContent);
    return (
        <DrawerPanelBodyMaterial colorStyle={props.colorStyle}>
            <Box>
                <Paper className={classes.paper}>
                    <DrawerPanelHeaderMaterial
                        grpBtnData={props.grpBtnData}
                        colorStyle={props.colorStyle}
                        onClose={props.onClose}
                        switchToggle={props.switchToggle}
                        switchToggleChecked={props.switchToggleChecked}
                        switchToggleChange={props.switchToggleChange}
                        switchLabelLeft={props.switchLabelLeft}
                        switchLabelRight={props.switchLabelRight}
                    />

                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <Box className={classes.bodyStyle}>{props.children}</Box>
                        </Grid>
                    </Grid>
                </Paper>

                {props.footer ? (
                    <DrawerPanelFooterMaterial
                        footerLeftBtnData={props.footerLeftBtnData}
                        footerRightBtnData={props.footerRightBtnData}
                    />
                ) : (
                    ""
                )}
            </Box>
        </DrawerPanelBodyMaterial>
    );
}

export default DrawerPanelMaterial;
