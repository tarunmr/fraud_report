import React,{useEffect} from "react";
import {deepPurpleMain, deepPurplePrimary, deepPurplePrimaryShadow, deepPurpleSecondary} from "../../components/colorCode";
import Box from "@material-ui/core/Box/Box";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper/Paper";
import TabsComponent from "../../components/tab/tabs";
import TabsBody from "../../components/tab/tabBody";
import DashboardPage from "./dashboardPage";
import FraudReport from "../fraudReport/fraudReport";

const useStyles = makeStyles((theme) => ({
    mainStyle :props=>({
        background:props.secondaryColor,
        height:window.innerHeight,
        width:'100%'
    }),
    paperStyle:{
        height:window.innerHeight-35
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    tabBodyPaperHeight:{
        height: window.innerHeight-120,
        [theme.breakpoints.up('md')]: {
            height: window.innerHeight-70,
        },
    }
}));
function HomePage() {
    const colorCodeStyle={
        primaryColor:deepPurplePrimary,
        primaryShadow:deepPurplePrimaryShadow,
        secondaryColor:deepPurpleSecondary,
        mainColor:deepPurpleMain
    };
    const classes = useStyles(colorCodeStyle);
    const [tabValue, setTabValue] = React.useState(0);


    useEffect(() => {

    });

    //Function to change tabs
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    //End Function to change tabs



    return (
        <Box className={classes.mainStyle}>
            <Box p={2}>
                <Paper elevation={3} className={classes.paperStyle}>

                    <Box className={classes.sectionDesktop}>
                        <TabsComponent
                            orientation={'vertical'}
                            change={handleChange}
                            tabValue={tabValue}
                            tabData={[
                                {label:'Home'},
                                {label:'FAQ'},
                                {label:'Fraud Report'},
                            ]}
                            colorStyle={colorCodeStyle}
                        >
                            {
                                tabValue===0?
                                    <TabsBody tabValue={tabValue} tabIndex={0}>
                                        <Box p={2}>
                                            <Paper elevation={3} className={classes.tabBodyPaperHeight}>
                                                <DashboardPage colorStyle={colorCodeStyle}/>
                                            </Paper>
                                        </Box>
                                    </TabsBody>
                                :""
                            }

                            {
                                tabValue===1?
                                    <TabsBody tabValue={tabValue} tabIndex={1} >
                                        <Box p={2}>
                                            <Paper elevation={3} className={classes.tabBodyPaperHeight}>
                                                one
                                            </Paper>
                                        </Box>
                                    </TabsBody>
                                    :""
                            }

                            {
                                tabValue===2?
                                    <TabsBody tabValue={tabValue} tabIndex={2} >
                                        <Box p={2}>
                                            <Paper elevation={3} className={classes.tabBodyPaperHeight}>
                                                <FraudReport colorStyle={colorCodeStyle}/>
                                            </Paper>
                                        </Box>
                                    </TabsBody>
                                    :""
                            }

                        </TabsComponent>
                    </Box>

                    <Box className={classes.sectionMobile}>
                        <TabsComponent
                            change={handleChange}
                            tabValue={tabValue}
                            tabData={[
                                {label:'Home'},
                                {label:'FAQ'},
                                {label:'Fraud Report'},
                            ]}
                            colorStyle={colorCodeStyle}
                        >
                            {
                                tabValue===0?
                                    <TabsBody tabValue={tabValue} tabIndex={0}>
                                        <Box p={2}>
                                            <Paper elevation={3} className={classes.tabBodyPaperHeight}>
                                                <DashboardPage colorStyle={colorCodeStyle}/>
                                            </Paper>
                                        </Box>
                                    </TabsBody>
                                    :""
                            }

                            {
                                tabValue===1?
                                    <TabsBody tabValue={tabValue} tabIndex={1}>
                                        <Box p={2}>
                                            <Paper elevation={3} className={classes.tabBodyPaperHeight}>
                                                one
                                            </Paper>
                                        </Box>
                                    </TabsBody>
                                    :""
                            }

                            {
                                tabValue===2?
                                    <TabsBody tabValue={tabValue} tabIndex={2}>
                                        <Box p={2}>
                                            <Paper elevation={3} className={classes.tabBodyPaperHeight}>
                                                <FraudReport colorStyle={colorCodeStyle}/>
                                            </Paper>
                                        </Box>
                                    </TabsBody>
                                    :""
                            }
                        </TabsComponent>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}

export default HomePage;
