/**
 * @NApiversion 2.0
 * @NScriptType ClientScript
 * @NModuleScope Public
 */

define (['N/ui/dialog', 'N/runtime'] ,
    function (dialog, runtime){
    var formIds = ["167" , "163", "161" , "160","162","159","171","177","174","173","172","170"]
    
    function validateLine(context) {
        var roleToSkip = '1093';
        var currentUser = runtime.getCurrentUser();
        var userRole = currentUser.role;
        var currentRecord = context.currentRecord;
        var sublistName = context.sublistId;
        var customForm = currentRecord.getValue({ fieldId: 'customform' });
        

        if (!formIds.includes(customForm) || userRole === roleToSkip || sublistName !== 'item') {
            return true;
        }

        var bundleField = currentRecord.getCurrentSublistValue({
            sublistId: sublistName,
            fieldId: 'custcol_1d_bundle'
        });
        // console.log('bundleField:', bundleField);
        if (!bundleField) {
            dialog.alert({
                title: "Validation Error",
                message: "Bundle field is mandatory please set the bundle field before proceeding."
            })
            return false;
        } else {
            return true;
        }
    }
    return {
        
        validateLine : validateLine
    }
})