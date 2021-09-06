import React,{useRef} from "react";
import Box from "@material-ui/core/Box/Box";
import {Typography} from "@material-ui/core";
import GroupButton from "../../components/groupButton";
import AddFraudReport from "./addFraudReport";

function FraudReport(props) {
    const addFraudReportRef = useRef();
    return (
        <Box>
            <Box p={2} display={'flex'} alignItems={'center'}>
                <Box flexGrow={1}>
                    <Typography variant={'h6'}>
                        Fraud Report List
                    </Typography>
                </Box>
                <Box>
                    <GroupButton
                        grpBtnData={[
                            {iconName: 'add', toolTip: 'Add', action: ()=>addFraudReportRef.current.toggleDrawer()},
                        ]}
                        colorStyle={props.colorStyle}
                    />
                </Box>
            </Box>

            <AddFraudReport colorStyle={props.colorStyle} ref={addFraudReportRef}/>
        </Box>
    );
}

export default FraudReport;
