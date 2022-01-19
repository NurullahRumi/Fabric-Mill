Application.$controller("PalletReadyPageController", ["$scope", function($scope) {
    "use strict";
    /*Comments to be updated here 
    v1.01 ys08 15/04/2017 template created
    V1.02 CN04 27/04/2017 add security and app roles.
    V1.03 PI01 02/09/2017 trap error messages for call procedures.

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {

    };

    $scope.txtDyejobFocus = function($event, $isolateScope) {
        if (!!$scope.Widgets.txtBarcodeScanner.datavalue) {
            $scope.Widgets.txtBarcodeScanner.datavalue = '';
        }
    };

    $scope.txtDyejobChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFD1000WPK0_MODJOB_isPalletReady.invoke(); //Check if job has status pallet ready
    };

    $scope.txtBarcodeScannerFocus = function($event, $isolateScope) {
        if (!!$scope.Widgets.txtDyejob.datavalue) {
            $scope.Widgets.txtDyejob.datavalue = '';
        }
    };

    $scope.txtBarcodeScannerChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFD1000WPK0_MODJOB_isPalletReady.invoke(); //Check if job has status pallet ready
    };

    $scope.svProcFD1000WPK0_MODJOB_isPalletReadyonSuccess = function(variable, data) {
        if (!!$scope.Widgets.txtDyejob.datavalue) {
            $scope.Widgets.containerEnterFabseq.show = true;
        } else {
            $scope.Widgets.containerEnterFabseq.show = false;
        }
    };

    $scope.btnSaveClick = function($event, $isolateScope) {
        //Save in progress, btnSave is disabled to prevent user from clicking several times
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'Y';
        $scope.Variables.svUpdateProcFD1000WPK0_MODJOB_updJobWeight.invoke(); //Update new weight added for job
    };

    $scope.svUpdateProcFD1000WPK0_MODJOB_updJobWeightonSuccess = function(variable, data) {
        //Completed save, btnSave is enabled again.
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'N';

        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Weight successfully updated!");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.layoutGridPanelUpd.show = false;
        $scope.Widgets.txtDyejob.datavalue = '';
        $scope.Widgets.txtBarcodeScanner.datavalue = '';
    };

    $scope.svUpdateProcFD1000WPK0_MODJOB_updJobWeightonError = function(variable, data) {
        //Error in saving data, btnSave is enabled again.
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'N';
    };
}]);