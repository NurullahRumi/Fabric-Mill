Application.$controller("FabricInspectionCertificatePageController", ["$scope", function($scope) {
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
         //jl13 10/07/2019 Add calling page for 
         */
        $scope.Widgets.lblFabDet.show = false;

        if (!!$scope.pageParams.pBarcode) {
            $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pUsrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pBarcode", $scope.pageParams.pBarcode);
            $scope.Variables.svProcFd723pk0GetFabDetails.invoke();
        }
    };


    $scope.btnCounterAddClick = function($event, $isolateScope, item, currentItemWidgets) {
        if (parseInt(currentItemWidgets.label9.caption) !== 999) {
            currentItemWidgets.label9.caption = parseInt(currentItemWidgets.label9.caption) + 1;
        }

        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", currentItemWidgets.label9.caption);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
    };


    $scope.btnCounterSubClick = function($event, $isolateScope, item, currentItemWidgets) {
        if (parseInt(currentItemWidgets.label9.caption) !== 0) {
            currentItemWidgets.label9.caption = parseInt(currentItemWidgets.label9.caption) - 1;
        }
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", currentItemWidgets.label9.caption);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
    };


    $scope.SY1000PF1Change = function($isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pUsrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pBarcode", $scope.Widgets.SY1000PF1.datavalue);
        $scope.Variables.svProcFd723pk0GetFabDetails.invoke();
    };


    $scope.svProcFd723pk0GetFabDetailsonSuccess = function(variable, data) {
        if (data.poutMsg === null) {
            $scope.Widgets.lblFabDet.show = true;
        } else {
            $scope.Widgets.lblFabDet.show = false;
            $scope.Widgets.SY1000PF1.datavalue = null;
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data.poutMsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };


    $scope.button3Tap = function($event, $isolateScope) {
        $scope.Widgets.lblFabDet.show = false;
        $scope.Widgets.SY1000PF1.clear();
        $scope.Widgets.SY1000PF1.datavalue = "";

    };


    $scope.btnRelaeseTap = function($event, $isolateScope) {
        $scope.Variables.statUpdSts.dataSet.dataValue = "APV";
        $scope.updateSatus($event, $isolateScope);
    };


    $scope.updateSatus = function($event, $isolateScope) {
        $scope.Variables.statListValues.dataSet.dataValue = "";

        for (var i = 0; i < $scope.Widgets.list1.dataset.length; i++) {
            $scope.Widgets.list1.selectItem(i);
            if ($scope.Widgets.list1.selectedItemWidgets.label9.caption === "0" || $scope.Widgets.list1.selectedItemWidgets.label9.caption === 0 ||
                $scope.Widgets.list1.selectedItemWidgets.label9.caption === "") {
                if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                    $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.list1.selecteditem.cqcondseq + ",;";
                } else {
                    $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.list1.selecteditem.cqcondseq + ",;";
                }
            } else {

                if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                    $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.list1.selecteditem.cqcondseq + "," + $scope.Widgets.list1.selectedItemWidgets.label9.caption + ";";
                } else {
                    $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.list1.selecteditem.cqcondseq + "," + $scope.Widgets.list1.selectedItemWidgets.label9.caption + ";";
                }
            }
        }

        for (var j = 0; j < $scope.Widgets.listtab2.dataset.length; j++) {
            $scope.Widgets.listtab2.selectItem(j);
            if ($scope.Widgets.listtab2.selecteditem.condtype === "TOGGLE") {
                if ($scope.Widgets.listtab2.selectedItemWidgets.tgleCond.datavalue === null || $scope.Widgets.listtab2.selectedItemWidgets.tgleCond.datavalue === undefined ||
                    $scope.Widgets.listtab2.selectedItemWidgets.tgleCond.datavalue === false) {
                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.listtab2.selecteditem.cqcondseq + ",;";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.listtab2.selecteditem.cqcondseq + ",;";
                    }
                } else {

                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.listtab2.selecteditem.cqcondseq + "," + $scope.Widgets.listtab2.selectedItemWidgets.tgleCond.datavalue + ";";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.listtab2.selecteditem.cqcondseq + "," + $scope.Widgets.listtab2.selectedItemWidgets.tgleCond.datavalue + ";";
                    }

                }
            } else if ($scope.Widgets.listtab2.selecteditem.condtype === "CHOICE") {
                if ($scope.Widgets.listtab2.selectedItemWidgets.radioset2.datavalue === null || $scope.Widgets.listtab2.selectedItemWidgets.radioset2.datavalue === undefined ||
                    $scope.Widgets.listtab2.selectedItemWidgets.radioset2.datavalue === "") {
                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.listtab2.selecteditem.cqcondseq + ",;";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.listtab2.selecteditem.cqcondseq + ",;";
                    }
                } else {

                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.listtab2.selecteditem.cqcondseq + "," + $scope.Widgets.listtab2.selectedItemWidgets.radioset2.datavalue + ";";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.listtab2.selecteditem.cqcondseq + "," + $scope.Widgets.listtab2.selectedItemWidgets.radioset2.datavalue + ";";
                    }

                }
            }
        }
        for (var k = 0; k < $scope.Widgets.list3.dataset.length; k++) {
            $scope.Widgets.list3.selectItem(k);
            if ($scope.Widgets.list3.selecteditem.condtype === "CHOICE") {
                if ($scope.Widgets.list3.selectedItemWidgets.radioset3.datavalue === null || $scope.Widgets.list3.selectedItemWidgets.radioset3.datavalue === undefined ||
                    $scope.Widgets.list3.selectedItemWidgets.radioset3.datavalue === "") {
                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.list3.selecteditem.cqcondseq + ",;";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.list3.selecteditem.cqcondseq + ",;";
                    }
                } else {

                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.list3.selecteditem.cqcondseq + "," + $scope.Widgets.list3.selectedItemWidgets.radioset3.datavalue + ";";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.list3.selecteditem.cqcondseq + "," + $scope.Widgets.list3.selectedItemWidgets.radioset3.datavalue + ";";
                    }

                }
            } else if ($scope.Widgets.list3.selecteditem.condtype === "TOGGLE") {
                if ($scope.Widgets.list3.selectedItemWidgets.toggle3.datavalue === null || $scope.Widgets.list3.selectedItemWidgets.toggle3.datavalue === undefined ||
                    $scope.Widgets.list3.selectedItemWidgets.toggle3.datavalue === false) {
                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.list3.selecteditem.cqcondseq + ",;";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.list3.selecteditem.cqcondseq + ",;";
                    }
                } else {

                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Widgets.list3.selecteditem.cqcondseq + "," + $scope.Widgets.list3.selectedItemWidgets.toggle3.datavalue + ";";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Widgets.list3.selecteditem.cqcondseq + "," + $scope.Widgets.list3.selectedItemWidgets.toggle3.datavalue + ";";
                    }

                }
            }
        }


        if ($scope.Variables.statUpdSts.dataSet.dataValue === "REJ") {
            $scope.Widgets.RejectPop.open();
        } else {
            $scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_cqsheetid", $scope.Variables.svProcFd107pk0GetInspectionCondList.dataSet.poutCqsheetid);
            $scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_remarks", $scope.Widgets.txtRemarks.datavalue);
            $scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_Mainsts", $scope.Variables.statUpdSts.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_CondList", $scope.Variables.statListValues.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.invoke();
        }
    };



    $scope.btnHoldTap = function($event, $isolateScope) {
        $scope.Variables.statUpdSts.dataSet.dataValue = "HLD";
        $scope.updateSatus($event, $isolateScope);
    };


    $scope.svProcFd107pk0_CqprocUpdInspectionStsonSuccess = function(variable, data) {
        if ($scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.dataSet.poutMsg !== null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.dataSet.poutMsg);
            $scope.Variables.appNotification.setAlertType = "error";
            $scope.Variables.appNotification.notify();
        } else if ($scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.dataSet.pfabupdated !== null) {
            $scope.Widgets.lblFabDet.show = false;
            $scope.Widgets.SY1000PF1.clear();
            $scope.Widgets.RejectPop.close();
            $scope.Widgets.SY1000PF1.datavalue = "";

            $scope.Variables.appNotification.operation = "toast";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd107pk0_CqprocUpdInspectionSts.dataSet.pfabupdated + " Fabric Inspection Update");
            $scope.Variables.appNotification.setToasterClass("success");
            $scope.Variables.appNotification.notify();

            $scope.Variables.Dyejoblist = $scope.Variables.svProcFd723pk0GetFabDetails.dataSet.poutDyejob + "," + $scope.Variables.svProcFd723pk0GetFabDetails.dataSet.poutFabseq + ";";

            if (variable.dataBinding.p_Mainsts === "REJREPRO") {
                window.open(location.href.split("FD1015WB")[0] + "FD1000WB/#/ReprocessJob?pSrcUpdType=INSP&pJobFablist=" + $scope.Variables.Dyejoblist);
            } else {
                //Added by Jl13 
                if ($scope.Variables.statUpdSts.dataSet.dataValue == "HLD") {
                    if ($scope.Variables.svProcFd107pk0GetInspectionCondList.dataSet.poutCallplacement == 'Y') {
                        $scope.Variables.goToPage_FabricIntersectionPlacement.dataSet.pBarcode = $scope.pageParams.pBarcode;
                        $scope.Variables.goToPage_FabricIntersectionPlacement.invoke();
                    }
                } else {
                    $scope.Variables.goToPage_FabricIntersectionPlacement.dataSet.pBarcode = $scope.pageParams.pBarcode;
                    $scope.Variables.goToPage_FabricIntersectionPlacement.invoke();
                }
            }
        }
    };


    $scope.svProcFd723pk0GetFabDetailsonError = function(variable, data) {
        $scope.Widgets.lblFabDet.show = false;
        $scope.Widgets.SY1000PF1.datavalue = null;
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.radioset2Change = function($event, $isolateScope, item, currentItemWidgets, newVal, oldVal) {
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", newVal);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
    };


    $scope.tgleCondChange = function($event, $isolateScope, item, currentItemWidgets, newVal, oldVal) {
        if (newVal === false) {
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", null);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
        } else {
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", newVal);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
        }
    };


    $scope.radioset3Change = function($event, $isolateScope, item, currentItemWidgets, newVal, oldVal) {
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", newVal);
        $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
    };


    $scope.toggle3Change = function($event, $isolateScope, item, currentItemWidgets, newVal, oldVal) {
        if (newVal === false) {
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", null);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
        } else {
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqsheetid", item.cqsheetid);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_cqcondseq", item.cqcondseq);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.setInput("p_condval", newVal);
            $scope.Variables.svProcFd107pk0_cqprocUpdInspectCondition.invoke();
        }
    };


    $scope.button11Tap = function($event, $isolateScope) {
        $scope.Variables.statUpdSts.dataSet.dataValue = "REJREPRO";
        $scope.updateSatus($event, $isolateScope);
    };


    $scope.button10_1Tap = function($event, $isolateScope) {
        $scope.Variables.statUpdSts.dataSet.dataValue = "REJ";
        $scope.updateSatus($event, $isolateScope);
    };


    $scope.svProcFd107pk0GetInspectionCondListonError = function(variable, data) {
        $scope.Widgets.lblFabDet.show = false;
        $scope.Widgets.SY1000PF1.datavalue = null;
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.svQrySy9200pk0CallWmakerapponSuccess = function(variable, data) {
        $scope.Variables.statModifyJobUrl.dataSet.dataValue = data;
        $scope.Widgets.iframepop.open();
    };

}]);


Application.$controller("alertdialog1Controller", ["$scope",
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

Application.$controller("RejectPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);