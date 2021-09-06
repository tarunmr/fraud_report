import React,{Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardTimePicker, KeyboardDatePicker,} from '@material-ui/pickers';
import Box from "@material-ui/core/Box/Box";
export default function MaterialUIFields(props) {

    //Function to display fields based on input type
    const displayFields=()=>{
        let fieldType='';
        switch (props.inputType){
            case 'input':
                fieldType=<form noValidate autoComplete="off">
                    <TextField
                        label={<Box>{props.label}{props.required?<Box ml={0.5} component='span' style={{color:'red'}}>*</Box> : ""}</Box>}
                        variant="outlined"
                        fullWidth={true}
                        size={'small'}
                        error={props.error !== ''}
                        helperText={props.error !== ''?props.error:''}
                        value={props.value}
                        onChange={props.change}
                        onBlur={props.blur}
                    />
                </form>
                break;
            case 'select':
                fieldType=<form noValidate autoComplete="off">
                    <TextField
                        label={<Box>{props.label}{props.required?<Box ml={0.5} component='span' style={{color:'red'}}>*</Box> : ""}</Box>}
                        variant="outlined"
                        fullWidth={true}
                        size={'small'}
                        error={props.error !== ''}
                        helperText={props.error !== ''?props.error:''}
                        value={props.value}
                        onChange={props.change}
                        onBlur={props.blur}
                        select={true}
                    >
                        {props.options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                break;
            case 'date':
                fieldType=<MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <Fragment>
                        <KeyboardDatePicker
                            clearable
                            placeholder="10/10/2018"
                            label={<Box>{props.label}{props.required?<Box ml={0.5} component='span' style={{color:'red'}}>*</Box> : ""}</Box>}
                            value={props.value}
                            onChange={props.change}
                            format="MM/dd/yyyy"
                            inputVariant="outlined"
                            margin="dense"
                            fullWidth={true}
                        />
                    </Fragment>
                </MuiPickersUtilsProvider>;
                break;
            case 'time':
                fieldType=<MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardTimePicker
                        inputVariant="outlined"
                        placeholder="08:00 AM"
                        margin="dense"
                        mask="__:__ _M"
                        label={<Box>{props.label}{props.required?<Box ml={0.5} component='span' style={{color:'red'}}>*</Box> : ""}</Box>}
                        value={props.value}
                        onChange={props.change}
                        fullWidth={true}
                />
                </MuiPickersUtilsProvider>
                break;
            default:
                break;
        }
        return fieldType;
    }
    //End Function to display fields based on input type

    return (
        <div>
            {displayFields()}
        </div>
    );
}