import React, { forwardRef, useImperativeHandle,useState } from 'react';
import Box from "@material-ui/core/Box/Box";
import DrawerMaterial from "../../components/drawer/drawerMaterial";
import DrawerPanelMaterial from "../../components/drawer/drawerPanelMaterial";
import {greenColor, redColor} from "../../components/colorCode";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import MaterialUIFields from "../../components/fields/materialUIFields";
import {commonValidation} from "../../service/commonValidation";
import IconButtonV2 from "../../components/iconButton";
import ToggleSwitch from "../../components/toggleSwitch";



const AddFraudReport = forwardRef((props, ref) => {
    const [drawerState, setDrawerState] = useState({...props.colorStyle,status: false});

    const [selfOthersSwitch, setSelfOthersSwitch] = useState(false);
    const [selfSaveDisable, setSelfSaveDisable] = useState(false);


    const [addFraudReportSelfFields, setAddFraudReportSelfFields] = useState({
        category:{
            inputType:'select',
            label:'Category',
            inputConfig: {
                option: [
                    {value:1,label:'Ethics'},
                    {value:2,label:'Sexual'},
                    {value:3,label:'Others'},
                ]
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'select'
            },
            errorConfig: {
                value: 'Select Category',
                errorVisible: false
            },
            valid: false,
        },
        date:{
            inputType:'date',
            label:'Date',
            inputConfig: {
            },
            value: null,
            validationConfig: {
                required: true,
                validationType: 'date'
            },
            errorConfig: {
                value: 'Enter Valid Date',
                errorVisible: false
            },
            valid: false,
        },
        time:{
            inputType:'time',
            label:'Time',
            inputConfig: {
            },
            value: null,
            validationConfig: {
                required: true,
                validationType: 'time'
            },
            errorConfig: {
                value: 'Enter Valid Time',
                errorVisible: false
            },
            valid: false,
        },
        place:{
            inputType:'input',
            label:'Place',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Place',
                errorVisible: false
            },
            valid: false,
        },
        city:{
            inputType:'input',
            label:'City',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid City',
                errorVisible: false
            },
            valid: false,
        },
        country:{
            inputType:'input',
            label:'Country',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Country',
                errorVisible: false
            },
            valid: false,
        },
        name:{
            inputType:'input',
            label:'Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        designation:{
            inputType:'input',
            label:'Designation',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Designation',
                errorVisible: false
            },
            valid: false,
        },
        contact_mobile:{
            inputType:'input',
            label:'Mobile #',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Mobile #',
                errorVisible: false
            },
            valid: false,
        },
        contact_email:{
            inputType:'input',
            label:'E-mail',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'email'
            },
            errorConfig: {
                value: 'Enter Valid E-mail',
                errorVisible: false
            },
            valid: false,
        },
        first_name:{
            inputType:'input',
            label:'First Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        middle_name:{
            inputType:'input',
            label:'Middle Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        last_name:{
            inputType:'input',
            label:'Last  Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        email:{
            inputType:'input',
            label:'E-mail ID',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'email'
            },
            errorConfig: {
                value: 'Enter Valid Email',
                errorVisible: false
            },
            valid: false,
        },
        mobile:{
            inputType:'input',
            label:'Mobile #',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'email'
            },
            errorConfig: {
                value: 'Enter Valid Mobile #',
                errorVisible: false
            },
            valid: false,
        }
    });

    const [addFraudReportOthersFields, setAddFraudReportOthersFields] = useState({
        first_name:{
            inputType:'input',
            label:'First Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        middle_name:{
            inputType:'input',
            label:'Middle Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        last_name:{
            inputType:'input',
            label:'Last  Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        email:{
            inputType:'input',
            label:'E-mail ID',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'email'
            },
            errorConfig: {
                value: 'Enter Valid Email',
                errorVisible: false
            },
            valid: false,
        },
        mobile:{
            inputType:'input',
            label:'Mobile #',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'email'
            },
            errorConfig: {
                value: 'Enter Valid Mobile #',
                errorVisible: false
            },
            valid: false,
        },
        category:{
            inputType:'select',
            label:'Category',
            inputConfig: {
                option: [
                    {value:1,label:'Ethics'},
                    {value:2,label:'Sexual'},
                    {value:3,label:'Others'},
                ]
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'select'
            },
            errorConfig: {
                value: 'Select Category',
                errorVisible: false
            },
            valid: false,
        },
        date:{
            inputType:'date',
            label:'Date',
            inputConfig: {
            },
            value: null,
            validationConfig: {
                required: true,
                validationType: 'date'
            },
            errorConfig: {
                value: 'Enter Valid Date',
                errorVisible: false
            },
            valid: false,
        },
        time:{
            inputType:'time',
            label:'Time',
            inputConfig: {
            },
            value: null,
            validationConfig: {
                required: true,
                validationType: 'time'
            },
            errorConfig: {
                value: 'Enter Valid Time',
                errorVisible: false
            },
            valid: false,
        },
        place:{
            inputType:'input',
            label:'Place',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Place',
                errorVisible: false
            },
            valid: false,
        },
        name:{
            inputType:'input',
            label:'Name',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Name',
                errorVisible: false
            },
            valid: false,
        },
        designation:{
            inputType:'input',
            label:'Designation',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Designation',
                errorVisible: false
            },
            valid: false,
        },
        contact_mobile:{
            inputType:'input',
            label:'Mobile #',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'text'
            },
            errorConfig: {
                value: 'Enter Valid Mobile #',
                errorVisible: false
            },
            valid: false,
        },
        contact_email:{
            inputType:'input',
            label:'E-mail',
            inputConfig: {
            },
            value: '',
            validationConfig: {
                required: true,
                validationType: 'email'
            },
            errorConfig: {
                value: 'Enter Valid E-mail',
                errorVisible: false
            },
            valid: false,
        },
    });


    //Function to on change fields values
    const onChangeFields=(event, inputIdentifier)=>{
        const updatedForm = {...addFraudReportSelfFields};
        const updatedFormEle = updatedForm[inputIdentifier];

        if(inputIdentifier==='date'){
            console.log(event)
            // updatedFormEle.value = event;
            // updatedFormEle.valid = commonValidation(updatedFormEle.value, updatedFormEle.validationConfig);
        }else if(inputIdentifier==='time'){
            console.log(event)
            // updatedFormEle.value = event;
            // updatedFormEle.valid = commonValidation(updatedFormEle.value, updatedFormEle.validationConfig);
        }else{
            updatedFormEle.value = event.target.value;
            updatedFormEle.valid = commonValidation(updatedFormEle.value, updatedFormEle.validationConfig);
        }

        updatedForm[inputIdentifier] = updatedFormEle;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        setSelfSaveDisable(formIsValid);
        setAddFraudReportSelfFields(updatedForm);

    }
    //End Function to on change  fields values

    //Function to on blur fields values
    const onBlurFields=(inputIdentifier)=>{
        const updatedForm = {...addFraudReportSelfFields};
        const updatedFormEle = updatedForm[inputIdentifier];
        updatedFormEle.errorConfig['errorVisible'] = !updatedFormEle.valid;
        updatedForm[inputIdentifier] = updatedFormEle;
        setAddFraudReportSelfFields(updatedForm);
    }
    //End Function to on blur fields values

    //Function to toggle switch
    const toggleSwitchFunction=()=>{
        setSelfOthersSwitch(!selfOthersSwitch)
    }
    //End Function to toggle switch


    useImperativeHandle(
        ref,
        () => ({
            toggleDrawer() {
                let drawerStyle={...drawerState};
                drawerStyle.title='Fraud Report';
                drawerStyle.subTitle='Add';
                drawerStyle.cardIcon='add';
                drawerStyle.width=700;
                drawerStyle.status=!drawerState.status;
                setDrawerState(drawerStyle)
            }
        }),
    )
    return (
        <DrawerMaterial
            onClose={() =>ref.current.toggleDrawer()}
            action={drawerState.status}
        >
            <DrawerPanelMaterial
                colorStyle={drawerState}
                onClose={() =>ref.current.toggleDrawer()}
                footer={true}
                footerRightBtnData={[
                    {name: 'Cancel', action: () =>ref.current.toggleDrawer(), disable: false, color: redColor, iconName: 'close'},
                    {name: "Save", action: ()=>{}, color: greenColor, disable:!selfSaveDisable,iconName: "save"},
                ]}
                yScroll={true}
            >
                <Box>
                    <Box style={{float:'right'}} px={2}>
                        <ToggleSwitch
                            switchLabelLeft={'Self'}
                            switchLabelRight={'For Others'}
                            switchToggleChange={()=>toggleSwitchFunction()}
                            switchToggleChecked={selfOthersSwitch}
                        />
                    </Box>
                    {
                        selfOthersSwitch?
                            <Box p={2}>
                                <Grid container spacing={3}>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Paper>
                                            <Box p={2}>
                                                <Box>
                                                    <Typography variant={'subtitle2'}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Victim details
                                                        </Box>
                                                    </Typography>
                                                </Box>

                                                <Box pt={1}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.first_name.inputType}
                                                                label={addFraudReportOthersFields.first_name.label}
                                                                value={addFraudReportOthersFields.first_name.value}
                                                                options={addFraudReportOthersFields.first_name.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.first_name.inputConfig}
                                                                required={addFraudReportOthersFields.first_name.validationConfig.required}
                                                                error={addFraudReportOthersFields.first_name.errorConfig.errorVisible?addFraudReportSelfFields.first_name.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'first_name')}
                                                                blur={()=>onBlurFields('first_name')}
                                                            />
                                                        </Grid>
                                                        <Grid item  xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.middle_name.inputType}
                                                                label={addFraudReportOthersFields.middle_name.label}
                                                                value={addFraudReportOthersFields.middle_name.value}
                                                                options={addFraudReportOthersFields.middle_name.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.middle_name.inputConfig}
                                                                required={addFraudReportOthersFields.middle_name.validationConfig.required}
                                                                error={addFraudReportOthersFields.middle_name.errorConfig.errorVisible?addFraudReportSelfFields.middle_name.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'middle_name')}
                                                                blur={()=>onBlurFields('middle_name')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.last_name.inputType}
                                                                label={addFraudReportOthersFields.last_name.label}
                                                                value={addFraudReportOthersFields.last_name.value}
                                                                options={addFraudReportOthersFields.last_name.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.last_name.inputConfig}
                                                                required={addFraudReportOthersFields.last_name.validationConfig.required}
                                                                error={addFraudReportOthersFields.last_name.errorConfig.errorVisible?addFraudReportSelfFields.last_name.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'last_name')}
                                                                blur={()=>onBlurFields('last_name')}
                                                            />
                                                        </Grid>
                                                        <Grid item  xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.email.inputType}
                                                                label={addFraudReportOthersFields.email.label}
                                                                value={addFraudReportOthersFields.email.value}
                                                                options={addFraudReportOthersFields.email.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.email.inputConfig}
                                                                required={addFraudReportOthersFields.email.validationConfig.required}
                                                                error={addFraudReportOthersFields.email.errorConfig.errorVisible?addFraudReportSelfFields.email.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'email')}
                                                                blur={()=>onBlurFields('email')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.mobile.inputType}
                                                                label={addFraudReportOthersFields.mobile.label}
                                                                value={addFraudReportOthersFields.mobile.value}
                                                                options={addFraudReportOthersFields.mobile.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.mobile.inputConfig}
                                                                required={addFraudReportOthersFields.mobile.validationConfig.required}
                                                                error={addFraudReportOthersFields.mobile.errorConfig.errorVisible?addFraudReportSelfFields.mobile.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'mobile')}
                                                                blur={()=>onBlurFields('mobile')}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Paper>
                                            <Box p={2}>
                                                <Box>
                                                    <Typography variant={'subtitle2'}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Incident Details
                                                        </Box>
                                                    </Typography>
                                                </Box>

                                                <Box pt={1}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.category.inputType}
                                                                label={addFraudReportOthersFields.category.label}
                                                                value={addFraudReportOthersFields.category.value}
                                                                options={addFraudReportOthersFields.category.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.category.inputConfig}
                                                                required={addFraudReportOthersFields.category.validationConfig.required}
                                                                error={addFraudReportOthersFields.category.errorConfig.errorVisible?addFraudReportSelfFields.category.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'category')}
                                                                blur={()=>onBlurFields('category')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.date.inputType}
                                                                label={addFraudReportOthersFields.date.label}
                                                                value={addFraudReportOthersFields.date.value}
                                                                options={addFraudReportOthersFields.date.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.date.inputConfig}
                                                                required={addFraudReportOthersFields.date.validationConfig.required}
                                                                error={addFraudReportOthersFields.date.errorConfig.errorVisible?addFraudReportSelfFields.date.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'date')}
                                                                blur={()=>onBlurFields('date')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.time.inputType}
                                                                label={addFraudReportOthersFields.time.label}
                                                                value={addFraudReportOthersFields.time.value}
                                                                options={addFraudReportOthersFields.time.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.time.inputConfig}
                                                                required={addFraudReportOthersFields.time.validationConfig.required}
                                                                error={addFraudReportOthersFields.time.errorConfig.errorVisible?addFraudReportSelfFields.time.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'time')}
                                                                blur={()=>onBlurFields('time')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.place.inputType}
                                                                label={addFraudReportOthersFields.place.label}
                                                                value={addFraudReportOthersFields.place.value}
                                                                options={addFraudReportOthersFields.place.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.place.inputConfig}
                                                                required={addFraudReportOthersFields.place.validationConfig.required}
                                                                error={addFraudReportOthersFields.place.errorConfig.errorVisible?addFraudReportSelfFields.place.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'place')}
                                                                blur={()=>onBlurFields('place')}
                                                            />
                                                        </Grid>
                                                        <Grid item  xs={12}>
                                                            <Box display={'flex'} alignItems={'center'}>
                                                                <Box width={'80%'}>
                                                                    <Typography variant={'caption'}>
                                                                        Incident with video/audio recording and submit option
                                                                    </Typography>
                                                                </Box>
                                                                <Box width={'20%'}>
                                                                    <Box textAlign={'center'} width="100%">
                                                                        <IconButtonV2
                                                                            tootlTip="Record Audio/Video"
                                                                            iconName="mic"
                                                                            iconClick={()=>{}}
                                                                            propsDrawer={drawerState}
                                                                            iconSize="1rem"
                                                                        />
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item  xs={12}>
                                                            <Box display={'flex'} alignItems={'center'}>
                                                                <Box width={'80%'}>
                                                                    <Typography variant={'caption'}>
                                                                        Evidence Photo/Video/Audio upload
                                                                    </Typography>
                                                                </Box>
                                                                <Box width={'20%'}>
                                                                    <Box textAlign={'center'} width="100%">
                                                                        <IconButtonV2
                                                                            tootlTip="Record Audio/Video"
                                                                            iconName="mic"
                                                                            iconClick={()=>{}}
                                                                            propsDrawer={drawerState}
                                                                            iconSize="1rem"
                                                                        />
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Paper>
                                            <Box p={2}>
                                                <Box>
                                                    <Typography variant={'subtitle2'}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Personnel present
                                                        </Box>
                                                    </Typography>
                                                </Box>

                                                <Box pt={1}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.name.inputType}
                                                                label={addFraudReportOthersFields.name.label}
                                                                value={addFraudReportOthersFields.name.value}
                                                                options={addFraudReportOthersFields.name.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.name.inputConfig}
                                                                required={addFraudReportOthersFields.name.validationConfig.required}
                                                                error={addFraudReportOthersFields.name.errorConfig.errorVisible?addFraudReportSelfFields.name.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'name')}
                                                                blur={()=>onBlurFields('name')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.designation.inputType}
                                                                label={addFraudReportOthersFields.designation.label}
                                                                value={addFraudReportOthersFields.designation.value}
                                                                options={addFraudReportOthersFields.designation.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.designation.inputConfig}
                                                                required={addFraudReportOthersFields.designation.validationConfig.required}
                                                                error={addFraudReportOthersFields.designation.errorConfig.errorVisible?addFraudReportSelfFields.designation.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'designation')}
                                                                blur={()=>onBlurFields('designation')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.mobile.inputType}
                                                                label={addFraudReportOthersFields.mobile.label}
                                                                value={addFraudReportOthersFields.mobile.value}
                                                                options={addFraudReportOthersFields.mobile.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.mobile.inputConfig}
                                                                required={addFraudReportOthersFields.mobile.validationConfig.required}
                                                                error={addFraudReportOthersFields.mobile.errorConfig.errorVisible?addFraudReportSelfFields.mobile.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'mobile')}
                                                                blur={()=>onBlurFields('mobile')}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Paper>
                                            <Box p={2}>
                                                <Box>
                                                    <Typography variant={'subtitle2'}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Contact details
                                                        </Box>
                                                    </Typography>
                                                </Box>

                                                <Box pt={1}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.contact_mobile.inputType}
                                                                label={addFraudReportOthersFields.contact_mobile.label}
                                                                value={addFraudReportOthersFields.contact_mobile.value}
                                                                options={addFraudReportOthersFields.contact_mobile.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.contact_mobile.inputConfig}
                                                                required={addFraudReportOthersFields.contact_mobile.validationConfig.required}
                                                                error={addFraudReportOthersFields.contact_mobile.errorConfig.errorVisible?addFraudReportSelfFields.contact_mobile.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'contact_mobile')}
                                                                blur={()=>onBlurFields('contact_mobile')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportOthersFields.contact_email.inputType}
                                                                label={addFraudReportOthersFields.contact_email.label}
                                                                value={addFraudReportOthersFields.contact_email.value}
                                                                options={addFraudReportOthersFields.contact_email.inputConfig.option}
                                                                inputConfig={addFraudReportOthersFields.contact_email.inputConfig}
                                                                required={addFraudReportOthersFields.contact_email.validationConfig.required}
                                                                error={addFraudReportOthersFields.contact_email.errorConfig.errorVisible?addFraudReportSelfFields.contact_email.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'contact_email')}
                                                                blur={()=>onBlurFields('contact_email')}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            :
                            <Box p={2}>

                                <Grid container spacing={3}>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Paper>
                                            <Box p={2}>
                                                <Box>
                                                    <Typography variant={'subtitle2'}>
                                                        <Box fontWeight="fontWeightBold">
                                                            Incident Details
                                                        </Box>
                                                    </Typography>
                                                </Box>

                                                <Box pt={1}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportSelfFields.category.inputType}
                                                                label={addFraudReportSelfFields.category.label}
                                                                value={addFraudReportSelfFields.category.value}
                                                                options={addFraudReportSelfFields.category.inputConfig.option}
                                                                inputConfig={addFraudReportSelfFields.category.inputConfig}
                                                                required={addFraudReportSelfFields.category.validationConfig.required}
                                                                error={addFraudReportSelfFields.category.errorConfig.errorVisible?addFraudReportSelfFields.category.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'category')}
                                                                blur={()=>onBlurFields('category')}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportSelfFields.date.inputType}
                                                                label={addFraudReportSelfFields.date.label}
                                                                value={addFraudReportSelfFields.date.value}
                                                                required={addFraudReportSelfFields.date.validationConfig.required}
                                                                error={addFraudReportSelfFields.date.errorConfig.errorVisible?addFraudReportSelfFields.date.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'date')}
                                                                blur={()=>onBlurFields('date')}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportSelfFields.time.inputType}
                                                                label={addFraudReportSelfFields.time.label}
                                                                value={addFraudReportSelfFields.time.value}
                                                                required={addFraudReportSelfFields.time.validationConfig.required}
                                                                error={addFraudReportSelfFields.time.errorConfig.errorVisible?addFraudReportSelfFields.date.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'time')}
                                                                blur={()=>onBlurFields('time')}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportSelfFields.place.inputType}
                                                                label={addFraudReportSelfFields.place.label}
                                                                value={addFraudReportSelfFields.place.value}
                                                                required={addFraudReportSelfFields.place.validationConfig.required}
                                                                error={addFraudReportSelfFields.place.errorConfig.errorVisible?addFraudReportSelfFields.place.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'place')}
                                                                blur={()=>onBlurFields('place')}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportSelfFields.city.inputType}
                                                                label={addFraudReportSelfFields.city.label}
                                                                value={addFraudReportSelfFields.city.value}
                                                                required={addFraudReportSelfFields.city.validationConfig.required}
                                                                error={addFraudReportSelfFields.city.errorConfig.errorVisible?addFraudReportSelfFields.city.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'city')}
                                                                blur={()=>onBlurFields('city')}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <MaterialUIFields
                                                                inputType={addFraudReportSelfFields.country.inputType}
                                                                label={addFraudReportSelfFields.country.label}
                                                                value={addFraudReportSelfFields.country.value}
                                                                required={addFraudReportSelfFields.country.validationConfig.required}
                                                                error={addFraudReportSelfFields.country.errorConfig.errorVisible?addFraudReportSelfFields.country.errorConfig.value:''}
                                                                change={(event)=>onChangeFields(event,'country')}
                                                                blur={()=>onBlurFields('country')}
                                                            />
                                                        </Grid>

                                                    </Grid>
                                                </Box>

                                            </Box>
                                        </Paper>
                                    </Grid>

                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Box>
                                            <Paper>
                                                <Box p={2}>
                                                    <Box>
                                                        <Typography variant={'subtitle2'}>
                                                            <Box fontWeight="fontWeightBold">
                                                                Personal Present
                                                            </Box>
                                                        </Typography>
                                                    </Box>

                                                    <Box pt={1}>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.name.inputType}
                                                                    label={addFraudReportSelfFields.name.label}
                                                                    value={addFraudReportSelfFields.name.value}
                                                                    required={addFraudReportSelfFields.name.validationConfig.required}
                                                                    error={addFraudReportSelfFields.name.errorConfig.errorVisible?addFraudReportSelfFields.name.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'name')}
                                                                    blur={()=>onBlurFields('name')}
                                                                />
                                                            </Grid>

                                                            <Grid item xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.designation.inputType}
                                                                    label={addFraudReportSelfFields.designation.label}
                                                                    value={addFraudReportSelfFields.designation.value}
                                                                    required={addFraudReportSelfFields.designation.validationConfig.required}
                                                                    error={addFraudReportSelfFields.designation.errorConfig.errorVisible?addFraudReportSelfFields.designation.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'designation')}
                                                                    blur={()=>onBlurFields('designation')}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        </Box>

                                        <Box pt={2}>
                                            <Paper>
                                                <Box p={2}>
                                                    <Box>
                                                        <Typography variant={'subtitle2'}>
                                                            <Box fontWeight="fontWeightBold">
                                                                Contact Details
                                                            </Box>
                                                        </Typography>
                                                    </Box>

                                                    <Box pt={1}>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.contact_mobile.inputType}
                                                                    label={addFraudReportSelfFields.contact_mobile.label}
                                                                    value={addFraudReportSelfFields.contact_mobile.value}
                                                                    required={addFraudReportSelfFields.contact_mobile.validationConfig.required}
                                                                    error={addFraudReportSelfFields.contact_mobile.errorConfig.errorVisible?addFraudReportSelfFields.contact_mobile.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'contact_mobile')}
                                                                    blur={()=>onBlurFields('contact_mobile')}
                                                                />
                                                            </Grid>

                                                            <Grid item xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.designation.inputType}
                                                                    label={addFraudReportSelfFields.designation.label}
                                                                    value={addFraudReportSelfFields.designation.value}
                                                                    options={addFraudReportSelfFields.designation.inputConfig.option}
                                                                    inputConfig={addFraudReportSelfFields.designation.inputConfig}
                                                                    required={addFraudReportSelfFields.designation.validationConfig.required}
                                                                    error={addFraudReportSelfFields.designation.errorConfig.errorVisible?addFraudReportSelfFields.designation.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'designation')}
                                                                    blur={()=>onBlurFields('designation')}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        </Box>

                                    </Grid>
                                </Grid>

                                <Box pt={2}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <Box p={2}>
                                                    <Box display={'flex'} alignItems={'center'}>
                                                        <Box flexGrow={1}>
                                                            <Typography variant={'subtitle2'}>
                                                                <Box fontWeight="fontWeightBold">
                                                                    Respondent
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                        <Box display={'flex'} alignItems={'center'}>
                                                            <Box pr={1}>
                                                                <IconButtonV2
                                                                    tootlTip="Add"
                                                                    iconName="add"
                                                                    iconClick={()=>{}}
                                                                    propsDrawer={drawerState}
                                                                    iconSize="1rem"
                                                                />
                                                            </Box>
                                                            <Box>
                                                                <IconButtonV2
                                                                    tootlTip="Delete"
                                                                    iconName="delete"
                                                                    iconClick={()=>{}}
                                                                    propsDrawer={drawerState}
                                                                    iconSize="1rem"
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                    <Box pt={1}>
                                                        <Grid container spacing={1}>
                                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.first_name.inputType}
                                                                    label={addFraudReportSelfFields.first_name.label}
                                                                    value={addFraudReportSelfFields.first_name.value}
                                                                    options={addFraudReportSelfFields.first_name.inputConfig.option}
                                                                    inputConfig={addFraudReportSelfFields.first_name.inputConfig}
                                                                    required={addFraudReportSelfFields.first_name.validationConfig.required}
                                                                    error={addFraudReportSelfFields.first_name.errorConfig.errorVisible?addFraudReportSelfFields.first_name.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'first_name')}
                                                                    blur={()=>onBlurFields('first_name')}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.middle_name.inputType}
                                                                    label={addFraudReportSelfFields.middle_name.label}
                                                                    value={addFraudReportSelfFields.middle_name.value}
                                                                    options={addFraudReportSelfFields.middle_name.inputConfig.option}
                                                                    inputConfig={addFraudReportSelfFields.middle_name.inputConfig}
                                                                    required={addFraudReportSelfFields.middle_name.validationConfig.required}
                                                                    error={addFraudReportSelfFields.middle_name.errorConfig.errorVisible?addFraudReportSelfFields.middle_name.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'middle_name')}
                                                                    blur={()=>onBlurFields('middle_name')}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.last_name.inputType}
                                                                    label={addFraudReportSelfFields.last_name.label}
                                                                    value={addFraudReportSelfFields.last_name.value}
                                                                    options={addFraudReportSelfFields.last_name.inputConfig.option}
                                                                    inputConfig={addFraudReportSelfFields.last_name.inputConfig}
                                                                    required={addFraudReportSelfFields.last_name.validationConfig.required}
                                                                    error={addFraudReportSelfFields.last_name.errorConfig.errorVisible?addFraudReportSelfFields.last_name.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'last_name')}
                                                                    blur={()=>onBlurFields('last_name')}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.email.inputType}
                                                                    label={addFraudReportSelfFields.email.label}
                                                                    value={addFraudReportSelfFields.email.value}
                                                                    options={addFraudReportSelfFields.email.inputConfig.option}
                                                                    inputConfig={addFraudReportSelfFields.email.inputConfig}
                                                                    required={addFraudReportSelfFields.email.validationConfig.required}
                                                                    error={addFraudReportSelfFields.email.errorConfig.errorVisible?addFraudReportSelfFields.email.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'email')}
                                                                    blur={()=>onBlurFields('email')}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                <MaterialUIFields
                                                                    inputType={addFraudReportSelfFields.mobile.inputType}
                                                                    label={addFraudReportSelfFields.mobile.label}
                                                                    value={addFraudReportSelfFields.mobile.value}
                                                                    options={addFraudReportSelfFields.mobile.inputConfig.option}
                                                                    inputConfig={addFraudReportSelfFields.mobile.inputConfig}
                                                                    required={addFraudReportSelfFields.mobile.validationConfig.required}
                                                                    error={addFraudReportSelfFields.mobile.errorConfig.errorVisible?addFraudReportSelfFields.mobile.errorConfig.value:''}
                                                                    change={(event)=>onChangeFields(event,'mobile')}
                                                                    blur={()=>onBlurFields('mobile')}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                <Box display={'flex'} alignItems={'center'}>
                                                                    <Box width={'80%'}>
                                                                        <Typography variant={'caption'}>
                                                                            Incident with video/audio recording and submit option
                                                                        </Typography>
                                                                    </Box>
                                                                    <Box width={'20%'}>
                                                                        <Box textAlign={'center'} width="100%">
                                                                            <IconButtonV2
                                                                                tootlTip="Record Audio/Video"
                                                                                iconName="mic"
                                                                                iconClick={()=>{}}
                                                                                propsDrawer={drawerState}
                                                                                iconSize="1rem"
                                                                            />
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                                <Box display={'flex'} alignItems={'center'}>
                                                                    <Box width={'80%'}>
                                                                        <Typography variant={'caption'}>
                                                                            Evidence Photo/Video/Audio upload
                                                                        </Typography>
                                                                    </Box>
                                                                    <Box width={'20%'}>
                                                                        <Box textAlign={'center'} width="100%">
                                                                            <IconButtonV2
                                                                                tootlTip="Record Audio/Video"
                                                                                iconName="mic"
                                                                                iconClick={()=>{}}
                                                                                propsDrawer={drawerState}
                                                                                iconSize="1rem"
                                                                            />
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Box>
                    }
                </Box>

            </DrawerPanelMaterial>
        </DrawerMaterial>
    )
})

export default AddFraudReport;