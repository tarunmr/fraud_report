import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Switch from "@material-ui/core/Switch/Switch";



const AntSwitch = withStyles(theme => ({
    switchBase: {
        color: '#f44336',
        '& $track': {
            backgroundColor: '#f44336',
        },
        '&$checked': {
            color: '#4caf50',
        },
        '&$checked + $track': {
            backgroundColor: '#4caf50',
        },
    },
    checked: {},
    track: {
        backgroundColor: '#f44336',
    },
}))(Switch);

export default function ToggleSwitch(props) {

    return (
        <span>
      <Typography component="span" className="d-inline-flex">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item style={{marginTop:'-2px'}}><Typography variant='caption'>{props.switchLabelLeft} </Typography></Grid>
          <Grid item>
            <AntSwitch
                checked={props.switchToggleChecked}
                onChange={props.switchToggleChange}
                value={props.switchToggleChecked}
                variant="secondary"
                size="small"
            />
          </Grid>
          <Grid item style={{marginTop:'-2px'}}><Typography variant='caption'>{props.switchLabelRight}</Typography></Grid>
        </Grid>
      </Typography>
    </span>

    );
}
