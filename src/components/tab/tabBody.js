import PropTypes from "prop-types";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";



function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};



export default function TabsBody(props) {

    return (
        <TabPanel value={props.tabValue} index={props.tabIndex} style={{width:'100%'}}>
            {props.children}
        </TabPanel>
    );
}

