import Box from "@material-ui/core/Box/Box";
import React from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom/Zoom';
import Icon from "@material-ui/core/Icon/Icon";

const useStyles = makeStyles(theme => ({
    grpBtnIcon:props=>({
        "&:hover":{
            background:props.primaryColor,
            "& .material-icons":{
                color:'white!important',
            }
        }
    }),
}));

function GroupButton(props) {
    const classes=useStyles(props.colorStyle);


    //Function to display Button Data
    function grpBtnData(data){
        let btnData='';
        if(data!==undefined) {
            if (data.length > 0) {
                btnData = data.map((btn,index) => {
                    return (
                        <Button className={classes.grpBtnIcon}
                                size='small'
                                onClick={btn.action}
                                style={{ outline:'none'}}
                                disabled={btn.disable!==undefined?btn.disable:false}
                                key={index}
                        >
                            <Tooltip title={btn.toolTip} TransitionComponent={Zoom} arrow key={btn.toolTip+index}>
                                <Icon fontSize='small'>{btn.iconName}</Icon>
                            </Tooltip>
                        </Button>
                    )
                })
            }
        }
        return btnData;
    }
    //End Function to display Button Data

    return (
        <Box>
            <ButtonGroup size='small' aria-label="outlined primary button group">
                {grpBtnData(props.grpBtnData)}
            </ButtonGroup>
        </Box>
    );
}

export default GroupButton;
