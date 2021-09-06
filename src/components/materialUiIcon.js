import React from "react";
import Icon from '@material-ui/core/Icon';

export default function MaterialUiIcon(props) {
    return (
        <Icon
            style={{color:props.tableIcon? props.tableIconName==="delete" || props.tableIconName==="remove"  ? "#d9524f" : props.tableIconName==="edit"? "#757575": props.tableIconName==="info"? "#ffb300": props.tableIconName==="history"? "#03a9f4" :props.iconColor : props.iconColor,
                cursor:props.cursor===undefined?"pointer":props.cursor,
                fontSize: props.iconSize!==undefined ? props.iconSize : props.tableIcon ? "14px": ""
            }}
            onClick={props.iconClick}
        >
            {props.tableIconName  ===undefined  ? props.iconName  :
                props.tableIconName==="delete"   ? "delete"        :
                    props.tableIconName==="remove"   ? "remove_circle" :
                        props.tableIconName==="edit"     ? "edit"          :
                            props.tableIconName==="info"     ? "info"          : props.tableIconName
            }
        </Icon>
    );
}
