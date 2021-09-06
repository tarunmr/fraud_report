import React from "react";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from "@material-ui/core";
import MaterialUiIcon from "./materialUiIcon";

function LightenDarkenColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}


// background:`linear-gradient(${LightenDarkenColor(props.color,60)}, ${LightenDarkenColor(props.color,10)})`,
// backgroundColor: LightenDarkenColor(props.color,-5),


const useStyles = makeStyles(theme => ({
    buttonContained: props => ({
        color: "white",
        backgroundColor:LightenDarkenColor(props.color,0),
        '&:hover': {
            backgroundColor: LightenDarkenColor(props.color,-20),
            boxShadow:`0px 3px 1px -2px ${props.color}, 0px 2px 2px 0px ${props.color}, 0px 1px 5px 0px ${props.color}`,
        },
        textTransform:'capitalize'
    }),
    buttonOutlined: props => ({
        backgroundColor:"white",
        border:`1px solid ${LightenDarkenColor(props.color,0)}`,
        '&:hover': {
            backgroundColor:LightenDarkenColor(props.color,160),
            boxShadow:`0px 3px 1px -2px ${props.color}, 0px 2px 2px 0px ${props.color}, 0px 1px 5px 0px ${props.color}`,
        },
        textTransform:'capitalize'
    }),
}));

export default function MaterialUiButtons(props) {

    const classes = useStyles(props);
    return (
        props.toolTip !== undefined ?
            <Tooltip arrow title={props.toolTip}>
                <Button
                    component="span"
                    className={props.btnVariant===undefined || props.btnVariant==="contained" ?classes.buttonContained:classes.buttonOutlined}
                    variant={props.btnVariant===undefined || props.btnVariant==="contained" ?"contained":props.btnVariant}
                    startIcon={<MaterialUiIcon
                        iconColor={props.btnDisable?"rgba(0, 0, 0, 0.26)":props.btnVariant===undefined?"white":props.color}
                        iconName={props.iconName} iconSize={props.iconSize}
                    />}
                    disabled={props.btnDisable!==undefined?props.btnDisable:false}
                    onClick={props.btnClick}
                    size={props.btnSize!==undefined?props.btnSize:"small"}
                    style={{width: props.width === undefined ? "" :props.width,minWidth:'80px'}}
                >
                    {props.btnTitle}
                </Button>
            </Tooltip>
            :
            <Button
                component="span"
                className={props.btnVariant===undefined || props.btnVariant==="contained" ?classes.buttonContained:classes.buttonOutlined}
                variant={props.btnVariant===undefined || props.btnVariant==="contained" ?"contained":props.btnVariant}
                startIcon={<MaterialUiIcon
                    iconColor={props.btnDisable?"rgba(0, 0, 0, 0.26)":props.btnVariant===undefined?"white":props.color}
                    iconName={props.iconName} iconSize={props.iconSize}
                />}
                disabled={props.btnDisable!==undefined?props.btnDisable:false}
                onClick={props.btnClick}
                size={props.btnSize!==undefined?props.btnSize:"small"}
                style={{width: props.width === undefined ? "" :props.width,minWidth:'80px'}}
            >
                {props.btnTitle}
            </Button>
    );
}
