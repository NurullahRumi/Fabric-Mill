Application.$controller("ScanBatchWeightPageController", ["$scope", function($scope) {
    "use strict";

    $scope.onPageReady = function() {
        if (!!$scope.pageParams.pBarcode) {
            $scope.Variables.svProcFD350PK0_MODJOB_GetBatchDetail.invoke();
        }
    };

    /***----------------------------------------------------- Get Batch Details ---------------------------------------------------- ***/
    $scope.svProcFD350PK0_MODJOB_GetBatchDetailonBeforeUpdate = function(variable, inputData, options) {
        if (inputData.pBatchSeqBarcode == undefined) {
            return false;
        }
    };

    $scope.txtBatchBarcodeChange = function($event, $isolateScope, newVal, oldVal) {
        if (!$scope.Widgets.txtBatchBarcode.datavalue) {
            $scope.Variables.svProcFD350PK0_MODJOB_GetBatchDetail.dataSet.poutBatchDetails[0] = null;
        } else {
            $scope.Variables.svProcFD350PK0_MODJOB_GetBatchDetail.invoke();
        }
    };

    $scope.svProcFD350PK0_MODJOB_GetBatchDetailonError = function(variable, data, options) {
        $scope.Clear();

        $scope.Variables.notifMsg.operation = "alert";
        $scope.Variables.notifMsg.setAlertType("error");
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();
    };

    /*** End of Get Batch Details Event --------------------------------------------------------***/

    $scope.Clear = function($event, $isolateScope) {
        if (!!$scope.Widgets.txtBatch.datavalue) {
            $scope.Variables.svProcFD350PK0_MODJOB_GetBatchDetail.dataSet.poutBatchDetails[0] = null;
        }
    };

    /***----------------------------------------------------- Save Weight Event ---------------------------------------------------- ***/
    $scope.btnSaveTap = function($event, $isolateScope) {
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'Y';
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pBchseq", $scope.Widgets.txtBatch.datavalue);
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pWgt", $scope.Widgets.txtWgt.datavalue);
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pWrkid", $scope.Variables.statOperator.dataSet.dataValue);

        if ($scope.Widgets.txtWgt.datavalue != null) {
            $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.invoke();
        } else {
            $scope.Variables.statWorkInProgress.dataSet.dataValue = 'N'; //Re-enable Save/Reset btn
            $scope.Widgets.dialogErrSave.open();
        }
    };

    $scope.svProcFD350PK0_MODJOB_SaveBatchWgtonSuccess = function(variable, data, options) {
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'N'; //Re-enable Save/Reset btn
        if (!!$scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.dataBinding.pWgt) {
            $scope.Widgets.dialogSaveSuccess.open(); // Save wgt dialog
        } else {
            $scope.Widgets.dialogResetSuccess.open(); // Reset wgt dialog
        }
    };
    /*** End of Save Weight Event --------------------------------------------------------***/


    /***-------------------------------------------- Reset batch weight to zero-----------------------------------------------------------***/
    $scope.btnResetWgtToZeroTap = function($event, $isolateScope) {
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'Y';
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pBchseq", $scope.Widgets.txtBatch.datavalue);
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pWgt", null);
        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.setInput("pWrkid", $scope.Variables.statOperator.dataSet.dataValue);

        $scope.Variables.svProcFD350PK0_MODJOB_SaveBatchWgt.invoke();
    };

    /*** End of Reset batch weight to zero --------------------------------------------------------***/

    // Clear screen
    $scope.btnCancelTap = function($event, $isolateScope) {
        $scope.Widgets.txtBatchBarcode.datavalue = "";
        $scope.Clear();
        $scope.Widgets.txtBatchBarcode.autofocus = true;
    };

    $scope.btnBackToMainTap = function($event, $isolateScope) {
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.pappky = $scope.Variables.statAPPKEY.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.psyslocusr = $scope.Variables.statUSER.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
    };
}]);

/* ------------------------------------------------ Dialogs ---------------------------------------------------*/
Application.$controller("dialogSaveSuccessController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.dialogSaveSuccessClose = function($event, $isolateScope) {
            $scope.Variables.svProcFD350PK0_MODJOB_GetBatchDetail.invoke();
        };
    }
]);

Application.$controller("dialogErrSaveController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogResetSuccessController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.dialogResetSuccessOpened = function($event, $isolateScope) {
            $scope.Widgets.txtWgt.datavalue = "";
            $scope.Variables.svProcFD350PK0_MODJOB_GetBatchDetail.invoke();
        };
    }
]);