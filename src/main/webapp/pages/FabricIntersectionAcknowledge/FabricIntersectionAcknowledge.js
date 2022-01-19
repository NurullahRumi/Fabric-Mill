Application.$controller("FabricIntersectionAcknowledgePageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
        $scope.Widgets.lblFabSeq.show = false;
        $scope.Widgets.btnFabSeq.show = false;
        $scope.Widgets.txtBarcode.focus();

    };


    $scope.txtBarcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd723pk0GetDeliveryInDetails.invoke();
    };


    $scope.svProcFd723pk0GetDeliveryInDetailsonSuccess = function(variable, data) {
        if ($scope.Variables.svProcFd723pk0GetDeliveryInDetails.dataSet.poutMsg !== null) {
            $scope.Widgets.txtBarcode.datavalue = null;
            $scope.Widgets.txtBarcode.focus();
            $scope.Widgets.btnFabSeq.show = false;
            $scope.Widgets.lblFabSeq.show = false;

            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd723pk0GetDeliveryInDetails.dataSet.poutMsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        } else {
            $scope.Widgets.lblFabSeq.show = true;
            $scope.Widgets.btnFabSeq.show = true;
            $scope.Widgets.btnScroll1.focus();
        }

    };

    $scope.svProcFd723pk0UpdateDeliveryInonSuccess = function(variable, data) {
        $scope.Variables.appNotification.operation = "toast";
        $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd723pk0UpdateDeliveryIn.dataSet.poutMsg);
        $scope.Variables.appNotification.setToasterClass("success");
        $scope.Variables.appNotification.notify();
        setTimeout(function() {
            location.reload();
        }, 2000);
    };



    $scope.btnFabSeqTap = function($event, $isolateScope) {
        $scope.Variables.svProcFd723pk0UpdateDeliveryIn.setInput("pUsrid", $scope.Variables.statAppUsrid.dataSet.dataValue === "" ? $scope.pageParams.pGenid : $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcFd723pk0UpdateDeliveryIn.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd723pk0UpdateDeliveryIn.setInput("pBarcode", $scope.Widgets.txtBarcode.datavalue);
        $scope.Variables.svProcFd723pk0UpdateDeliveryIn.setInput("pSaveOption", "FABSEQ");
        $scope.Variables.svProcFd723pk0UpdateDeliveryIn.setInput("pDestLcn", $scope.Variables.svProcFd723pk0GetDeliveryInDetails.dataSet.poutDestLcn);

        $scope.Variables.svProcFd723pk0UpdateDeliveryIn.invoke();

    };


    $scope.btnCancelTap = function($event, $isolateScope) {
        location.reload();
    };


    $scope.btnScroll1Keypress = function($event, $isolateScope) {
        if ($event.which === 49) {
            $event.preventDefault();
            $scope.btnFabSeqTap();
            $scope.Widgets.btnScroll1.focus();
        } else if ($event.which === 42) {
            $event.preventDefault();
            $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
        } else if ($event.which === 57) {
            $event.preventDefault();
            $scope.btnCancelTap();
        } else {
            $event.preventDefault();
        }
    };


    $scope.txtBarcodeKeypress = function($event, $isolateScope) {
        if ($event.which === 35) {
            $event.preventDefault();
            $scope.Widgets.btnScroll1.focus();
        } else if ($event.which === 42) {
            $event.preventDefault();
            $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
        }
    };

}]);