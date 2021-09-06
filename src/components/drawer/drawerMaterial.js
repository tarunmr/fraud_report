import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const DrawerMaterial = (props) => {
    const nodeRef = React.useRef(null);
    return (<SwipeableDrawer
            noderef={nodeRef}
            anchor={props.anchor!==undefined?props.anchor:'right'}
            transitionDuration={{enter: 600, exit: 300}}
            open={props.action}
            onClose={props.onClose}
            onOpen={props.onClose}
        >
            {props.children}
        </SwipeableDrawer>
    )};

export default DrawerMaterial;
