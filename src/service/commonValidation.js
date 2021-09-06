

export function commonValidation(value, rule) {
    let isValid = true;
    if(isNaN(value) && value!=='' && !Array.isArray(value)){
        value = value.trim();
    }

    if (rule.required === true ) {
        isValid = value !== '' && isValid;
    }

    if (value !== '') {
        switch (rule.validationType) {
            case('email'):
                isValid = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value) && isValid;
                break;
            case 'text':
                isValid = /^[A-Za-z ]+$/.test(value) && isValid;
                break;

            case 'alphanumericsplchr':
                // allow only numbers and characters  special characters
                isValid = /^[ A-Za-z0-9_/\n@.#&/(),[|\]-]*$/.test(value) && isValid;
                break;

            case 'alphanumeric':
                // allow only numbers and characters
                isValid = /^[ A-Za-z0-9-]*$/.test(value) && isValid;
                break;

            case 'alphanumericforcloud':
                // allow only numbers and characters
                isValid = /^[ A-Za-z0-9-_()]*$/.test(value) && isValid;
                break;



            case 'date':

                // allow only numbers and characters not special characters
                isValid = /^(\d{1,2})(\/|-)([a-zA-Z0-9]{2,3})(\/|-)(\d{4})$/.test(value) && isValid;
                break;
            case 'dateFormat(-)':
                // allow only numbers and characters not special characters
                isValid = /^((0|1)\d{1})-((0|1|2)\d{1})-((19|20)\d{2})$/.test(value) && isValid;
                break;

            case 'time':

                // allow only numbers and characters not special characters
                isValid = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value) && isValid;
                break;


            case 'number':

                isValid = /^[0-9]+([,.][0-9]+)?$/.test(value) && isValid;
                break;
            case 'integer':
                isValid = /^-?\d+(\.\d+)?$/.test(value) && isValid;
                break;

            case 'ctry_code':
                isValid = /^[0-9]+([,.][0-9]+)?$/.test(value) && isValid;
                break;

            case 'mobile':

                /*^ start of line
                 * A + followed by \d+ followed by a or - which are optional.
                 * Whole point two is optional.
                 * Negative look ahead to make sure 0s do not follow.
                 * Match \d+ 10 times.
                 * Line end
                 */
                isValid = /^[0-9]{10}$/.test(value) && isValid;

                break;

            case 'mobileCode':
                isValid = /^[0-9]{1,3}$/.test(value) && isValid;
                break;

            case 'landline':


                /*This is  indian phone number. where it will take a format of std code 3 to 4  digits
                 *hypen and rest of the 6 to 8 digits.
                 *Ex:  0222-8345622 or 09786-567567
                 */
                isValid = /^[0-9]\d{2,5}-\d{6,15}$/.test(value) && isValid;
                break;

            case 'landlineCode':


                /*This is  indian phone number Code. where it will take a format of std code 3 to 4  digits

                 *Ex:  0222 or 09786
                 */
                isValid = /^[0]\d{1}\d{1,3}$/.test(value) && isValid;
                //isValid = /^[0-9]\d{2,5}$/.test(value) && isValid;
                break;

            case 'isdCode':

                isValid = /^[+]\d{1}\d{1,2}$/.test(value) && isValid;
                break;


            case 'landlineNumber':
                /*This is  indian phone number. where it will take a format of 5 to 8 digits
                 *Ex:  8345622 or 567567
                 */
                isValid = /^[0-9]{5,8}$/.test(value) && isValid;
                break;

            case 'pincode':
                isValid = /^[0-9]{6,9}$/.test(value) && isValid;
                break;

            case 'adhar':
                isValid = /^\d{4}\d{4}\d{4}$/.test(value) && isValid;

                break;

            case 'pan' :
                isValid = /[a-zA-z]{5}\d{4}[a-zA-Z]{1}$/.test(value) && isValid;
                break;
            case 'ifsc_code' :
                isValid = /^[A-Za-z]{4}[0][a-zA-Z0-9]{6}$/.test(value) && isValid;
                break;

            case 'uan' :
                isValid = /^\d{4}\d{4}\d{4}$/.test(value) && isValid;
                break;

            case 'comaNumber' :
                isValid = /^[0-9.,]*$/.test(value) && isValid;
                break;

            case 'accNumber' :
                isValid = /^[a-zA-Z0-9]{9,18}$/.test(value) && isValid;
                break;

            case 'gstin' :
                isValid = /^([0-9]{2})([A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9-A-Za-z]{1}[a-zA-z]{1}[0-9-A-Za-z]{1})+$/.test(value) && isValid;
                break;

            case 'tan' :
                isValid = /[a-zA-z]{4}\d{5}[a-zA-Z]{1}$/.test(value) && isValid;
                break;

            case 'cin' :
                isValid = /^[A-Za-z]{1}\d{5}[a-zA-z]{2}\d{4}[a-zA-z]{3}\d{6}$/.test(value) && isValid;
                break;

            case 'overhead' :
                isValid = /^(\d+|\d+[.]\d+)%?$/.test(value) && isValid;
                break;

            case 'select' :
                if (value === 0) {
                    isValid = false;
                }
                break;
            case 'multiSelect' :
                if ((value=== null) || (value.length===0 )) {
                    isValid = false;
                }
                break;
            default:
                break;


        }
    }

    return isValid;
}


export function formatDate(date) {
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var day = date.getDate().toString().length > 1 ? date.getDate() : '0' + date.getDate();
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    return year + "-" + month + "-" + day;
}









