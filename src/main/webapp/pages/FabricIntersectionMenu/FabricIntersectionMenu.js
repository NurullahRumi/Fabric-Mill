Application.$controller("FabricIntersectionMenuPageController", ["$scope", "DialogService", function($scope, DialogService) {
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


        if (($scope.Variables.statAppUsrid.dataSet.dataValue === "" || $scope.Variables.statAppUsrid.dataSet.dataValue === undefined || $scope.Variables.statAppUsrid.dataSet.dataValue === null) && ($scope.pageParams.psyslocusr === undefined)) {
            $scope.Variables.goToPage_authenticate_user.invoke();
        } else {
            if (!($scope.Variables.statAppUsrid.dataSet.dataValue === undefined || $scope.Variables.statAppUsrid.dataSet.dataValue === "" || $scope.Variables.statAppUsrid.dataSet.dataValue === null)) {
                $scope.Variables.svProcFd107pk0_cqprocCheckUser.setInput("pUser", $scope.Variables.statAppUsrid.dataSet.dataValue);
                $scope.Variables.svProcFd107pk0_cqprocCheckUser.invoke();
                $scope.Variables.svQryDefEmpcode.invoke();
            } else {
                $scope.Variables.svProcFd107pk0_cqprocCheckUser.setInput("pUser", $scope.pageParams.psyslocusr);
                $scope.Variables.svProcFd107pk0_cqprocCheckUser.invoke();
            }
        }

        $scope.Widgets.lblDet.show = false;

        $scope.Variables.goToPage_FabricIntersectionIssues.dataSet.pBarcode = null;
        $scope.Variables.goToPage_FabricIntersectionPlacement.dataSet.pBarcode = null;
        $scope.Variables.goToPage_FabricProcessCQ.dataSet.pBarcode = null;
        $scope.Variables.goToPage_FabricProcessScan.dataSet.pBarcode = null;

        $scope.Variables.statModifyJobUrl.dataSet.dataValue = location.href.split("FD1015WB")[0] + "FD1000WB/#/ModifyJobWeight?pBarcode=";
    };


    $scope.SY1000PF1Change = function($isolateScope, newVal, oldVal) {
        if (!($isolateScope.datavalue === "" || $isolateScope.datavalue === undefined || $isolateScope.datavalue === null)) {
            $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pBarcode", $isolateScope.datavalue);
            $scope.Variables.svProcFd723pk0GetFabDetails.invoke();
        }
    };


    $scope.svProcFd723pk0GetFabDetailsonSuccess = function(variable, data) {
        if (data.poutMsg === null && data.poutDyejobDet !== null) {
            $scope.Widgets.lblDet.show = true;
        } else if (data.poutMsg !== null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data.poutMsg);
            $scope.Variables.appNotification.setAlertType = "error";
            $scope.Variables.appNotification.notify();
            $scope.Widgets.SY1000PF1.clear();
            $scope.Widgets.SY1000PF1.datavalue = "";
            $scope.Widgets.SY1000PF1.defaultvalue = "";
        } else {
            $scope.Widgets.lblDet.show = false;
        }
    };


    $scope.lblStsdetClick = function($event, $isolateScope) {
        if ($scope.Variables.svProcFd723pk0GetFabDetails.dataSet.poutAction === "SCANPROCESS") {
            $scope.Variables.goToPage_FabricProcessScan.invoke();
        } else if ($scope.Variables.svProcFd723pk0GetFabDetails.dataSet.poutAction === "CQREL") {
            $scope.Variables.goToPage_FabricProcessCQ.invoke();
        } else if ($scope.Variables.svProcFd723pk0GetFabDetails.dataSet.poutAction === "PLACEMENT") {
            $scope.Variables.goToPage_FabricIntersectionPlacement.invoke();
        } else if ($scope.Variables.svProcFd723pk0GetFabDetails.dataSet.poutAction === "INSPECT") {
            if (!($scope.Variables.statAppUsrid.dataSet.dataValue === undefined || $scope.Variables.statAppUsrid.dataSet.dataValue === "" || $scope.Variables.statAppUsrid.dataSet.dataValue === null)) {
                $scope.Variables.goToPage_FabricInspectionCertificate.invoke();
            }
        }
    };


    $scope.button10Tap = function($event, $isolateScope) {

        if (!($scope.Variables.statAppUsrid.dataSet.dataValue === undefined || $scope.Variables.statAppUsrid.dataSet.dataValue === "" || $scope.Variables.statAppUsrid.dataSet.dataValue === null)) {
            $scope.Variables.logoutAction.invoke();
        }
        $scope.Widgets.txtOperator.clear();
        $scope.Variables.statOperator.dataSet.dataValue = "";
        $scope.Variables.statOperatorName.dataSet.dataValue = "";
        $scope.Widgets.lblOperatorName.caption = "";
        $scope.Widgets.lblOperatorEmpcode.caption = "";
    };


    $scope.txtOperatorChange = function($isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_empcode", $scope.Widgets.txtOperator.datavalue);
        $scope.Variables.svProcFd724pk0CheckEmpCode.invoke();
    };


    $scope.svProcFd724pk0CheckEmpCodeonError = function(variable, data) {

        $scope.button10Tap();
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType = "error";
        $scope.Variables.appNotification.notify();
    };


    $scope.svProcFd724pk0CheckEmpCodeonSuccess = function(variable, data) {
        $scope.Widgets.lblOperatorName.caption = data.pempname;
        $scope.Widgets.lblOperatorEmpcode.caption = data.pempcode;
    };


    $scope.svQryDefEmpcodeonSuccess = function(variable, data) {
        if (!(data.paycode === undefined || data.paycode === "" || data.paycode === null)) {
            $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_empcode", data.paycode);
            $scope.Variables.svProcFd724pk0CheckEmpCode.invoke();
        }
    };


    $scope.svProcFd723pk0GetFabDetailsonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType = "error";
        $scope.Variables.appNotification.notify();
    };


    $scope.btnRemoveFabricTap = function($event, $isolateScope) {
        $scope.Widgets.iframepop.open();
    };


    $scope.btnInspectionTap = function($event, $isolateScope) {
        if ($scope.Widgets.SY1000PF1.datavalue === null || $scope.Widgets.SY1000PF1.datavalue === undefined || $scope.Widgets.SY1000PF1.datavalue === "") {
            $scope.Variables.goToPage_FabricInspectionCertificate.dataSet.pBarcode = null;
            $scope.Variables.goToPage_FabricInspectionCertificate.invoke();
        } else {
            $scope.Variables.goToPage_FabricInspectionCertificate.invoke();
        }
    };


    $scope.BtnBatchWgtTap = function($event, $isolateScope) {
        if ($scope.Widgets.SY1000PF1.datavalue === null || $scope.Widgets.SY1000PF1.datavalue === undefined || $scope.Widgets.SY1000PF1.datavalue === "") {
            $scope.Variables.goToPage_ScanBatchWeight.dataSet.pBarcode = null;
        }
        $scope.Variables.goToPage_ScanBatchWeight.invoke();
    };

}]);

Application.$controller("logindialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("FabHisPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("table1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("iframepopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("iframepopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);