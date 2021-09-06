import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon/Icon";
import Box from "@material-ui/core/Box";
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';


const useStyles = makeStyles(theme => ({
    hoverBtn:props => ({
        outline:'none!important',
        '&:hover': {
            background: props.primaryColor,
            '& .material-icons':{
                color: 'white',
            }
        },
    }),
    badgeStyle:props => ({
        "&>span":{
            background: props.primaryColor,
            height:15,
            minWidth:15,
            fontSize:'0.65rem',
            padding:'0 3px'
        },
    }),
    mainIcon:{
        "& .Mui-disabled":{
            "& .material-icons":{
                color: 'rgba(0, 0, 0, 0.26)',
            }
        }
    }
}));

function IconButtonV2(props) {
    const classes = useStyles(props.propsDrawer);
    return (
        <Box className={classes.mainIcon} style={{visibility:props.visibility!==undefined?props.visibility:'visible'}} component="div" display="inline">
            <Tooltip title={props.tootlTip} arrow TransitionComponent={Zoom} key={props.iconName}>
                <Box component="span">
                    {
                        props.badge?
                            <Badge badgeContent={props.badgeCount} color="primary" className={classes.badgeStyle}>
                                <IconButton className= {props.onHover === false ? "" : classes.hoverBtn} edge="end" color={props.color?props.color:'default'}
                                            onClick={props.iconClick!==""||props.iconClick!==undefined?props.iconClick:''}
                                            size='small' disabled={props.disable!==undefined?props.disable:false} >
                                    <Icon fontSize='small' style={{fontSize:props.iconSize!==undefined?props.iconSize:''}}>{props.iconName}</Icon>
                                </IconButton>
                            </Badge>
                            :
                            <IconButton className= {props.onHover === false ? "" : classes.hoverBtn} edge="end" color={props.color?props.color:'default'}
                                        onClick={props.iconClick!==""||props.iconClick!==undefined?props.iconClick:''}
                                        size='small' disabled={props.disable!==undefined?props.disable:false} >
                                <Icon fontSize='small' style={{fontSize:props.iconSize!==undefined?props.iconSize:''}}>{props.iconName}</Icon>
                            </IconButton>
                    }
                </Box>
            </Tooltip>
        </Box>
    );
}

export default IconButtonV2;
