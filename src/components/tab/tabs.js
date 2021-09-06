import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function TabsComponent(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            display: props.orientation==='vertical'?'flex':'',
            height: props.orientation==='vertical'?window.innerHeight-35:'',
            width:'100%',

        },
        horizontalTabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
            backgroundColor: 'black',
            color:'white',
            "& .MuiTab-root":{
                zIndex:1,
                fontWeight:900,
                [theme.breakpoints.up('md')]: {
                    fontWeight:300,
                },
            },
            "& .MuiTabs-indicator":{
                height:25,
                zIndex:0,
                bottom:11,
                borderRadius:'20px',
                background:props.colorStyle.primaryColor
            }
        },
        verticalTabs: {
            paddingTop:5,
            borderRight: `1px solid ${theme.palette.divider}`,
            backgroundColor: 'black',
            color:'white',
            width:'15%',
            "& .MuiTab-root":{
                zIndex:1,
                fontWeight:900,
                [theme.breakpoints.up('md')]: {
                    fontWeight:300,
                },
                minHeight:'30px!important',
            },
            "& .MuiTabs-indicator":{
                height:'35px!important',
                zIndex:0,
                // top:'11px!important',
                width:'100%',
                borderRadius:'20px',
                background:props.colorStyle.primaryColor
            }
        },
    }));
    const classes = useStyles();


    //Function to display tabs list
    const tabDisplayFunction=(data)=>{
        let displayData=''
        displayData=data.map((tabData,index)=>{
            return <Tab label={tabData.label} key={index} />
        })
        return displayData;
    }
    //End Function to display tabs list


    return (
        <div className={classes.root}>
            <Tabs
                orientation={props.orientation==='vertical'?"vertical":'horizontal'}
                variant="scrollable"
                value={props.tabValue}
                onChange={props.change}
                aria-label="Vertical tabs example"
                className={props.orientation==='vertical'?classes.verticalTabs:classes.horizontalTabs}
            >
                {tabDisplayFunction(props.tabData)}
            </Tabs>

            {props.children}
        </div>
    );
}