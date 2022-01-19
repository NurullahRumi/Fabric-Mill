Application.$controller("FabricIntersectionPlacementPageController", ["$scope", "DialogService", function($scope, DialogService) {
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

        $scope.Widgets.containPlacement.show = false;


        if ($scope.pageParams.pBarcode !== null || $scope.pageParams.pBarcode !== undefined || $scope.pageParams.pBarcode !== "") {
            $scope.Widgets.txtBarcode.datavalue = $scope.pageParams.pBarcode;
            $scope.Variables.svProcFd723pk0PlacementDetails.setInput("pBarcode", $scope.pageParams.pBarcode);
            $scope.Variables.svProcFd723pk0PlacementDetails.invoke();
        }
    };


    $scope.svProcFd723pk0PlacementDetailsonSuccess = function(variable, data) {
        if ($scope.Variables.svProcFd723pk0PlacementDetails.dataSet.poutMsg === null) {
            $scope.Widgets.lblFabSeq.show = true;
            $scope.Widgets.containPlacement.show = true;
            $scope.Variables.statSaveOption.dataSet.dataValue = "FABSEQ";
            $scope.Widgets.btnUpdate.disabled = false;

        } else {
            $scope.Widgets.lblFabSeq.show = false;

            $scope.Widgets.containPlacement.show = false;
            $scope.Widgets.txtBarcode.datavalue = null;
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd723pk0PlacementDetails.dataSet.poutMsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();

        }
    };




    $scope.txtBarcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd723pk0PlacementDetails.setInput("pBarcode", $scope.Widgets.txtBarcode.datavalue);
        $scope.Variables.svProcFd723pk0PlacementDetails.invoke();
    };





    $scope.svProcFd723pk0UpdPlacementonSuccess = function(variable, data) {

        if ($scope.Variables.svProcFd723pk0UpdPlacement.dataSet.poutErrmsg !== null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd723pk0UpdPlacement.dataSet.poutErrmsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();

        } else if ($scope.Variables.svProcFd723pk0UpdPlacement.dataSet.poutMsg !== null) {
            $scope.Variables.appNotification.operation = "toast";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd723pk0UpdPlacement.dataSet.poutMsg);
            $scope.Variables.appNotification.setToasterClass("success");
            $scope.Variables.appNotification.notify();

            $scope.Widgets.txtBarcode.clear();
            $scope.Widgets.txtBarcode.datavalue = "";
            $scope.Widgets.txtPlacement.defaultvalue = "";
            $scope.Widgets.txtPlacement.datavalue = "";
            $scope.Widgets.lblFabSeq.show = false;
            $scope.Widgets.containPlacement.show = false;


        }

    };




    $scope.btnCancelTap = function($event, $isolateScope) {
        $scope.Widgets.txtBarcode.clear();
        $scope.Widgets.txtBarcode.datavalue = "";
        $scope.Widgets.txtPlacement.defaultvalue = "";
        $scope.Widgets.txtPlacement.datavalue = "";
        $scope.Widgets.lblFabSeq.show = false;
        $scope.Widgets.containPlacement.show = false;
    };





    $scope.btnUpdateTap = function($event, $isolateScope) {

        $scope.Variables.DyejobList = "";
        for (var i = 0; i < $scope.Widgets.list2.dataset.length; i++) {
            $scope.Widgets.list2.selectItem(i);
            if ($scope.Widgets.list2.selectedItemWidgets.cbDyejobs.datavalue !== undefined) {
                for (var j = 0; j < $scope.Widgets.list2.selectedItemWidgets.cbDyejobs.datavalue.length; j++) {
                    $scope.Variables.DyejobList = $scope.Variables.DyejobList + $scope.Widgets.list2.selectedItemWidgets.cbDyejobs.datavalue[j] + "," +
                        $scope.Widgets.list2.selectedItemWidgets.Fabseq.caption + ";";
                }
            }

        }
        $isolateScope.disabled = true;
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pUsrid", $scope.Variables.statUSER.dataSet.dataValue);
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pBarcode2", $scope.Widgets.txtBarcode.datavalue);
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pPlaceLcn", $scope.Variables.svProcFd723pk0PlacementDetails.dataSet.poutLcncod);
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pPlaceRackbin", $scope.Widgets.txtPlacement.datavalue);
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pSaveOption", $scope.Variables.statSaveOption.dataSet.dataValue);
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pOperator", $scope.Widgets.txtoperator.datavalue);
        $scope.Variables.svProcFd723pk0UpdPlacement.setInput("pFabseqlist", $scope.Variables.DyejobList);
        $scope.Variables.svProcFd723pk0UpdPlacement.invoke();


    };



    $scope.txtoperatorChange = function($isolateScope, newVal, oldVal) {

    };


    $scope.btnReturnTap = function($event, $isolateScope) {
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.pappky = $scope.Variables.statAPPKEY.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.psyslocusr = $scope.Variables.statUSER.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
    };


    $scope.svProcFd723pk0UpdPlacementonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
        $scope.Widgets.btnUpdate.disabled = false;
    };


    $scope.label9Tap = function($event, $isolateScope, item, currentItemWidgets) {
        currentItemWidgets.cbDyejobs.datavalue = currentItemWidgets.cbDyejobs.dataset.split(",");
    };

}]);

Application.$controller("PlacementsPopController", ["$scope", "DialogService",
    function($scope, DialogService) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.lblPlacementsTap = function($event, $isolateScope, item, currentItemWidgets) {

            $scope.Widgets.txtPlacement.datavalue = item.rackbin;
            $scope.Widgets.txtPlacement.defaultvalue = item.rackbin;

            $scope.Widgets.PlacementsPop.close();
        };



        $scope.button7Tap = function($event, $isolateScope) {
            $scope.Widgets.PlacementsPop.close();

        };

    }
]);