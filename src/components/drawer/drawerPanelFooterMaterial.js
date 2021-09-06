import React, { useState } from 'react';
import { Box, Paper } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MaterialUiButtons from "../materialUIButton";


export default function DrawerPanelFooterMaterial(props) {

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setSelectedMenu(menu);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedMenu('');
    };

    function rightBtnData(data) {
        let btnData = '';
        if (data !== undefined) {
            if (data.length > 0) {
                btnData = data.map((btn, index) => {
                    return (
                        <Box component="div" display="inline" ml={1} key={btn.iconName + index}>
                            <MaterialUiButtons
                                iconName={btn.iconName}
                                btnClick={btn.dropDownMenuAction ? (event) => handleClick(event, btn.menuSeq) : btn.action}
                                color={btn.color}
                                btnTitle={btn.name}
                                btnDisable={btn.disable !== undefined ? btn.disable : false}
                                btnSize="small"
                            />
                        </Box>)
                })
            }
        }
        return btnData;
    }

    function leftBtnData(data) {
        let btnData = '';
        if (data !== undefined) {
            if (data.length > 0) {
                btnData = data.map((btn, index) => {
                    return (
                        <Box component="div" display="inline" ml={1} key={btn.iconName + index}>
                            <MaterialUiButtons
                                iconName={btn.iconName}
                                btnClick={btn.action}
                                color={btn.color}
                                btnTitle={btn.name}
                                btnDisable={btn.disable !== undefined ? btn.disable : false}
                                btnSize="small"
                            />
                        </Box>)
                })
            }
        }
        return btnData;
    }

    function footerBtnMenu(data) {
        let btnData = '';
        if (data !== undefined) {
            if (data.length > 0) {
                btnData = data.map((btn, index) => {
                    if (btn.dropDownMenuAction && selectedMenu === btn.menuSeq) {
                        return (
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: btn.anchorOriginVertical !== undefined ? btn.anchorOriginVertical : 'top',
                                    horizontal: btn.anchorOriginHorizontal !== undefined ? btn.anchorOriginHorizontal : 'center',
                                }}
                                transformOrigin={{
                                    vertical: btn.transformOriginVertical !== undefined ? btn.transformOriginVertical : 'bottom',
                                    horizontal: btn.transformOriginHorizontal !== undefined ? btn.transformOriginHorizontal : 'center',
                                }}
                            >
                                {btn.dropDownComponent}
                            </Menu>)
                    }else{
                        return '';
                    }

                })
            }
        }
        return btnData;
    }
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Paper>
                <Box display="flex" justifyContent="flex-end" px={2} py={1}>
                    <Box flexGrow={1} >
                        {leftBtnData(props.footerLeftBtnData)}
                    </Box>
                    <Box >
                        {rightBtnData(props.footerRightBtnData)}
                    </Box>
                    {footerBtnMenu(props.footerRightBtnData)}
                </Box>
            </Paper>
        </ClickAwayListener>
    );
}

