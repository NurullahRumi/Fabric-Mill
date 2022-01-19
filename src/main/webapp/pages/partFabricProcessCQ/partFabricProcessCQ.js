Application.$controller("partFabricProcessCQPageController", ["$scope", "DialogService", function($scope, DialogService) {
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
         //JL13 10/07/2019 Add goto page (Fabric Intersection Placement)
         */
        $scope.Widgets.cntFabSeqDet.show = false;

        if (!($scope.pageParams.pBarcode === undefined || $scope.pageParams.pBarcode === "" || $scope.pageParams.pBarcode === null)) {

            $scope.Widgets.txtBarcode.datavalue = $scope.pageParams.pBarcode;
            $scope.$apply();
            $scope.Variables.svProcFd107pk0_CqprocGetDetails.invoke();
        }
    };

    $scope.svProcFd107pk0_CqprocGetDetailsonSuccess = function(variable, data) {

        $scope.Variables.names = [];
        $scope.Variables.uniqueNames = [];
        $scope.Variables.conditions = [];
        if ($scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutMsg === null) {

            if ($scope.Variables.statCategory.dataSet.length === 0) {
                for (var i = 0; i < data.poutCondList.length; i++) {
                    if (data.poutCondList[i].condcat !== null) {
                        $scope.Variables.names.push(
                            data.poutCondList[i].condcat //pushing all category in this array
                        );
                        $scope.Variables.conditions.push({
                            "condseq": data.poutCondList[i].cqcondseq,
                            "condcat": data.poutCondList[i].condcat,
                            "actval": data.poutCondList[i].actval,
                            "qualdesc": data.poutCondList[i].qualdesc,
                            "condtype": data.poutCondList[i].condtype,
                            "condval": data.poutCondList[i].condval
                        });
                    }
                }

                $.each($scope.Variables.names, function(i, el) {
                    if ($.inArray(el, $scope.Variables.uniqueNames) === -1)
                        $scope.Variables.uniqueNames.push(el); //this function insert the distinct category an array 
                });
                $scope.Variables.uniqueNames.sort();
                for (i = 0; i < $scope.Variables.uniqueNames.length; i++) {
                    $scope.Variables.statCategory.dataSet.push({ //Transfering the unique category to a static
                        "dataValue": $scope.Variables.uniqueNames[i]
                    });
                }
            }

            $scope.Variables.statCategory.dataSet.push({
                "dataValue": "Reasons Selected"
            });

            $scope.Widgets.cntFabSeqDet.show = true;
            $scope.Widgets.btnChecklistOpen.show = true;
            $scope.Widgets.btnSave.disabled = false;

        } else {

            $scope.Widgets.cntFabSeqDet.show = false;
            $scope.Widgets.txtbarcode.datavalue = null;
            $scope.Widgets.txtbarcode.defaultvalue = null;
            $scope.Variables.statErrMsg.dataSet.dataValue = $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutMsg;
            if ($scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutMsg.indexOf("Can Request Def Sign Off") !== -1) {
                $scope.Variables.statReqSignOff.dataSet.dataValue = "Y";
                $scope.Variables.statErrMsg.dataSet.dataValue = "No Sign-Off required for this process.";
            }
            $scope.Widgets.alertpop1.open();

        }
    };


    $scope.btnFabSeqTap = function($event, $isolateScope) {
        $scope.Widgets.btnChecklistOpen.show = true;
        $scope.Widgets.ChecklistPop.open();
        $scope.Variables.statListSlctedItem.dataSet.dataValue = 0;
    };


    $scope.btnCancelTap = function($event, $isolateScope) {
        //Added by jl13 
        if ($scope.pageParams.pCallingPage == 'FD1015W04') {
            $scope.Variables.goToPage_FabricIntersectionPlacement.dataSet.pBarcode = $scope.pageParams.pBarcode;
            $scope.Variables.goToPage_FabricIntersectionPlacement.invoke();
        }
        //Replaced by above
        // $scope.Variables.goToPage_FabricProcessCQ.dataSet.pBarcode = "";
        // $scope.Variables.goToPage_FabricProcessCQ.invoke();
    };

    $scope.txtBarcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd107pk0_CqprocGetDetails.setInput("pBarcode", $scope.Widgets.txtBarcode.datavalue);
        $scope.Variables.svProcFd107pk0_CqprocGetDetails.invoke();
    };



    $scope.btnSaveTap = function($event, $isolateScope) {

        $scope.Variables.DyejobList = "";
        $scope.Variables.RejDyejobList = "";

        for (var i = 0; i < $scope.Widgets.list3.dataset.length; i++) {
            $scope.Widgets.list3.selectItem(i);
            if ($scope.Widgets.list3.selectedItemWidgets.cbDyejobs.datavalue !== undefined) {
                for (var j = 0; j < $scope.Widgets.list3.selectedItemWidgets.cbDyejobs.datavalue.length; j++) {
                    $scope.Variables.DyejobList = $scope.Variables.DyejobList + $scope.Widgets.list3.selectedItemWidgets.cbDyejobs.datavalue[j] + "," +
                        $scope.Widgets.list3.selectedItemWidgets.Fabseq.caption + ";";
                    for (var k = 0; k < $scope.Widgets.list3.selecteditem.cqsheetlist.split(",").length; k++) {

                        if ($scope.Widgets.list3.selecteditem.cqsheetlist.split(",")[k].substring(0, 9) === $scope.Widgets.list3.selectedItemWidgets.cbDyejobs.datavalue[j]) {
                            $scope.Variables.RejDyejobList = $scope.Variables.RejDyejobList + $scope.Widgets.list3.selectedItemWidgets.cbDyejobs.datavalue[j] + "," +
                                $scope.Widgets.list3.selectedItemWidgets.Fabseq.caption + "," + $scope.Widgets.list3.selecteditem.cqsheetlist.split(",")[k].split(":")[1] + ";";
                        }
                    }
                }
            }

        }


        if ($scope.Widgets.radioset1.datavalue === "RELDOUBT") {
            if ($scope.Widgets.txtRemarks.datavalue === "" || $scope.Widgets.txtRemarks.datavalue === undefined || $scope.Widgets.txtRemarks.datavalue === null) {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Enter remarks !!");
                $scope.Variables.appNotification.setAlertType("error");
                $scope.Variables.appNotification.notify();
            } else {
                $isolateScope.disabled = true;
                $scope.Variables.statDyejobList.dataSet.length = 0;
                $scope.Variables.dyefabprocList = [];
                $scope.Variables.dyefabproc = [];

                if (!($scope.Variables.DyejobList === undefined || $scope.Variables.DyejobList === null || $scope.Variables.DyejobList === "")) {
                    $scope.Variables.dyefabprocList = $scope.Variables.DyejobList.slice(0, -1).split(";");
                    for (i = 0; i < $scope.Variables.dyefabprocList.length; i++) {
                        $scope.Variables.dyefabproc = $scope.Variables.dyefabprocList[i].split(",");
                        $scope.Variables.statDyejobList.dataSet.push({
                            "dyejob": $scope.Variables.dyefabproc[0],
                            "fabseq": $scope.Variables.dyefabproc[1],
                        });
                    }
                }

                $scope.Widgets.RelDoubtPop.open();
            }
        } else if ($scope.Widgets.radioset1.datavalue === "REJ") {

            $isolateScope.disabled = true;
            $scope.Variables.statDyejobList.dataSet.length = 0;
            $scope.Variables.dyefabprocList = [];
            $scope.Variables.dyefabproc = [];
            if (!($scope.Variables.RejDyejobList === undefined || $scope.Variables.RejDyejobList === null || $scope.Variables.RejDyejobList === "")) {
                $scope.Variables.dyefabprocList = $scope.Variables.RejDyejobList.slice(0, -1).split(";");
                for (i = 0; i < $scope.Variables.dyefabprocList.length; i++) {
                    $scope.Variables.dyefabproc = $scope.Variables.dyefabprocList[i].split(",");
                    $scope.Variables.statDyejobList.dataSet.push({
                        "dyejob": $scope.Variables.dyefabproc[0],
                        "fabseq": $scope.Variables.dyefabproc[1],
                        "cqsheetid": $scope.Variables.dyefabproc[2]
                    });
                }
            }
            $scope.Widgets.RejectPop.open();

        } else {
            $isolateScope.disabled = true;
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pUsrid", $scope.Variables.statUSER.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pCqsheetid", $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutJobDet[0].cqsheetid);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pRemarks", $scope.Widgets.txtRemarks.datavalue);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pMainsts", $scope.Widgets.radioset1.datavalue);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pCondList", $scope.Variables.statListValues.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pRejectcod", "");
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pFabseqlist", $scope.Variables.DyejobList);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pOperator", $scope.Widgets.txtoperator.datavalue);
            $scope.Variables.svProcFd107pk0_cqprocUptCQ.invoke();
        }
    };




    $scope.btnChecklistOpenTap = function($event, $isolateScope) {
        $scope.Widgets.ChecklistPop.open();
        $scope.Variables.statListSlctedItem.dataSet.dataValue = 0;

    };


    $scope.svProcFd107pk0_cqprocUptCQonSuccess = function(variable, data) {
        if (data.poutErrmsg !== null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data.poutErrmsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        } else if (data.poutMsg !== null) {
            if (variable.dataBinding.pMainsts === "RELDOUBT") {

                if ($scope.Variables.statDyejobList.dataSet.length > 1) {
                    $scope.Variables.updateddyejobfabseq = variable.dataBinding.pFabseqlist.split(",");

                    $scope.Variables.statDyejobList.dataSet.splice(_.findIndex($scope.Variables.statDyejobList.dataSet, {
                        "dyejob": $scope.Variables.updateddyejobfabseq[0],
                        "fabseq": $scope.Variables.updateddyejobfabseq[1]
                    }), 1);

                } else {
                    $scope.Widgets.RelDoubtPop.close();
                }

                $scope.Variables.appNotification.operation = "toast";
                $scope.Variables.appNotification.setMessage(data.poutMsg);
                $scope.Variables.appNotification.setToasterClass("success");
                $scope.Variables.appNotification.notify();


                $scope.Widgets.cntFabSeqDet.show = false;
                $scope.Widgets.btnChecklistOpen.show = false;
                $scope.Widgets.txtBarcode.clear();
                $scope.Widgets.txtBarcode.datavalue = "";
                $scope.Widgets.txtBarcode.defaultvalue = "";
                $scope.Variables.statCategory.dataSet.length = 0;
            } else if (variable.dataBinding.pMainsts === "REJ") {


                if ($scope.Variables.statDyejobList.dataSet.length > 1) {
                    $scope.Variables.updateddyejobfabseq = variable.dataBinding.pFabseqlist.split(",");

                    $scope.Variables.statDyejobList.dataSet.splice(_.findIndex($scope.Variables.statDyejobList.dataSet, {
                        "dyejob": $scope.Variables.updateddyejobfabseq[0],
                        "fabseq": $scope.Variables.updateddyejobfabseq[1]
                    }), 1);

                } else {
                    $scope.Widgets.RejectPop.close();
                }


                $scope.Variables.appNotification.operation = "toast";
                $scope.Variables.appNotification.setMessage(data.poutMsg);
                $scope.Variables.appNotification.setToasterClass("success");
                $scope.Variables.appNotification.notify();


                $scope.Widgets.cntFabSeqDet.show = false;
                $scope.Widgets.btnChecklistOpen.show = false;
                $scope.Widgets.txtBarcode.clear();
                $scope.Widgets.txtBarcode.datavalue = "";
                $scope.Widgets.txtBarcode.defaultvalue = "";
                $scope.Variables.statCategory.dataSet.length = 0;



            } else {
                $scope.Variables.appNotification.operation = "toast";
                $scope.Variables.appNotification.setMessage(data.poutMsg);
                $scope.Variables.appNotification.setToasterClass("success");
                $scope.Variables.appNotification.notify();


                $scope.Widgets.cntFabSeqDet.show = false;
                $scope.Widgets.btnChecklistOpen.show = false;
                $scope.Widgets.txtBarcode.clear();
                $scope.Widgets.txtBarcode.datavalue = "";
                $scope.Widgets.txtBarcode.defaultvalue = "";
                $scope.Variables.statCategory.dataSet.length = 0;


                if (variable.dataBinding.pMainsts === "REJREPRO") {
                    window.open(location.href.split("FD1015WB")[0] + "FD1000WB/#/ReprocessJob?pSrcUpdType=SIGNOFF&pJobFablist=" + variable.dataBinding.pFabseqlist);
                } else {
                    //Added by jl13 
                    if ($scope.pageParams.pCallingPage == 'FD1015W04') {
                        $scope.Variables.goToPage_FabricIntersectionPlacement.dataSet.pBarcode = $scope.pageParams.pBarcode;
                        $scope.Variables.goToPage_FabricIntersectionPlacement.invoke();
                    }
                }

            }

        }

    };


    $scope.txtoperatorChange = function($isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_empcode", $scope.Widgets.txtoperator.datavalue);
        $scope.Variables.svProcFd724pk0CheckEmpCode.invoke();
    };


    $scope.button3Tap = function($event, $isolateScope) {
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.pappky = $scope.Variables.statAPPKEY.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.psyslocusr = $scope.Variables.statUSER.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
    };


    $scope.svProcFd107pk0_cqprocUptCQonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();



    };


    $scope.svProcFd724pk0CheckEmpCodeonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType = "error";
        $scope.Variables.appNotification.notify();
        $scope.Widgets.txtoperator.clear();
        $scope.Widgets.txtoperator.datavalue = "";
    };


    $scope.label10Tap = function($event, $isolateScope, item, currentItemWidgets) {
        currentItemWidgets.cbDyejobs.datavalue = currentItemWidgets.cbDyejobs.dataset.split(",");
    };


    $scope.svProcFd107pk0_CqprocGetDetailsonError = function(variable, data) {
        $scope.Variables.statReqSignOff.dataSet.dataValue = null;

        $scope.Variables.statErrMsg.dataSet.dataValue = data;
        if (data.indexOf("Can Request Def Sign Off") !== -1) {
            $scope.Variables.statReqSignOff.dataSet.dataValue = "Y";
            $scope.Variables.statErrMsg.dataSet.dataValue = "No Sign-off required for this process.";
            $scope.Widgets.alertpop1.open();
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Variables.statErrMsg.dataSet.dataValue = "No Sign-off required for this process.";
        }

    };


    $scope.svProcFd107pk0RequestSignOffonError = function(variable, data) {

        $scope.Widgets.ReqSignoffPop.close();
    };

    $scope.svProcFd107pk0RequestSignOffonSuccess = function(variable, data) {

        $scope.Widgets.ReqSignoffPop.close();
        // Requery sign off to start sign off
        //$scope.Widgets.txtBarcode.datavalue = $scope.pageParams.pBarcode;
        $scope.$apply();

        $scope.Variables.svProcFd107pk0_CqprocGetDetails.invoke();
    };

}]);

Application.$controller("ChecklistPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        $scope.btnDoneCheckTap = function($event, $isolateScope) {
            $scope.Variables.statListValues.dataSet.dataValue = "";
            $scope.Variables.statUndefined.dataSet.dataValue = 0;


            for (var i = 0; i < $scope.Variables.conditions.length; i++) {
                if ($scope.Variables.conditions[i].actval === null || $scope.Variables.conditions[i].actval === undefined) {
                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.conditions[i].condseq + ",;";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Variables.conditions[i].condseq + ",;";
                    }
                } else {

                    if ($scope.Variables.statListValues.dataSet.dataValue === "") {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.conditions[i].condseq + "," + $scope.Variables.conditions[i].actval + ";";
                    } else {
                        $scope.Variables.statListValues.dataSet.dataValue = $scope.Variables.statListValues.dataSet.dataValue + $scope.Variables.conditions[i].condseq + "," + $scope.Variables.conditions[i].actval + ";";
                    }

                }
            }


            $scope.Variables.statCondList.dataSet.length = 0;
            $scope.Widgets.ChecklistPop.close();


        };



        $scope.button9Tap = function($event, $isolateScope) {
            $scope.Variables.conditions.length = 0;
            for (var i = 0; i < $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList.length; i++) {
                if ($scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList[i].condcat !== null) {
                    $scope.Variables.conditions.push({
                        "condseq": $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList[i].cqcondseq,
                        "condcat": $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList[i].condcat,
                        "actval": $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList[i].actval,
                        "qualdesc": $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList[i].qualdesc,
                        "condtype": $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList[i].condtype,
                        "condval": $scope.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutCondList[i].condval
                    });
                }
            }
            $scope.Widgets.ChecklistPop.close();
            $scope.Variables.statCondList.dataSet.length = 0;
        };



        $scope.toggleCondChange = function($event, $isolateScope, item, currentItemWidgets, newVal, oldVal) {

            for (var j = 0; j < $scope.Variables.conditions.length; j++) {
                if (item.cqcondseq === $scope.Variables.conditions[j].condseq) {
                    if (newVal !== false) {
                        $scope.Variables.conditions[j].actval = newVal;
                    } else {
                        $scope.Variables.conditions[j].actval = null;
                    }
                }
            }
        };




        $scope.radioset3Change = function($event, $isolateScope, item, currentItemWidgets, newVal, oldVal) {
            $scope.Widgets.list2.selecteditem = null;

            for (var j = 0; j < $scope.Variables.conditions.length; j++) {
                if (item.cqcondseq === $scope.Variables.conditions[j].condseq) {
                    if (newVal === "NO ISSUE") {
                        $scope.Variables.conditions[j].actval = null;
                    } else {
                        $scope.Variables.conditions[j].actval = newVal;
                    }
                }
            }
        };


        $scope.toggle2Tap = function($event, $isolateScope, item, currentItemWidgets) {
            $event.preventDefault();
        };


        $scope.PictureTap = function($event, $isolateScope, item, currentItemWidgets) {
            if ($scope.Variables.statCondList.dataSet.length !== 0) {
                $scope.Variables.statCondList.clearData();
                $scope.Variables.statCondList.dataSet.length = 0;
            }

            // if (item.dataValue === "Reasons Selected") {
            //     for (var j = 0; j < $scope.Variables.conditions.length; j++) {
            //         if (!($scope.Variables.conditions[j].actval === null || $scope.Variables.conditions[j].actval === undefined || $scope.Variables.conditions[j].actval === "")) {
            //             $scope.Variables.statCondList.dataSet.push({
            //                 "cqcondseq": $scope.Variables.conditions[j].condseq,
            //                 "actval": $scope.Variables.conditions[j].actval,
            //                 "qualdesc": $scope.Variables.conditions[j].qualdesc,
            //                 "condtype": $scope.Variables.conditions[j].condtype,
            //                 "condval": $scope.Variables.conditions[j].condval
            //             });
            //         }
            //     }

            // } else {
            for (var i = 0; i < $scope.Variables.conditions.length; i++) {
                if (item.dataValue === $scope.Variables.conditions[i].condcat) {
                    $scope.Variables.statCondList.dataSet.push({
                        "cqcondseq": $scope.Variables.conditions[i].condseq,
                        "actval": $scope.Variables.conditions[i].actval,
                        "qualdesc": $scope.Variables.conditions[i].qualdesc,
                        "condtype": $scope.Variables.conditions[i].condtype,
                        "condval": $scope.Variables.conditions[i].condval
                    });
                }
            }
            //}
        };

    }
]);

Application.$controller("statCategoryTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("alertpop1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button10Tap = function($event, $isolateScope) {
            $scope.Variables.goToPage_FabricProcessCQ.dataSet.pBarcode = "";
            $scope.Variables.goToPage_FabricProcessCQ.invoke();
        };

    }
]);

Application.$controller("ReqSignoffPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.label13Tap = function($event, $isolateScope, item, currentItemWidgets) {
            currentItemWidgets.cbDyejobsCQReq.datavalue = currentItemWidgets.cbDyejobsCQReq.dataset.split(",");
        };


        $scope.btnSaveReqSOClick = function($event, $isolateScope) {
            $scope.Widgets.btnSaveReqSO.disabled = true;


            var m_DyejobList = "";
            for (var i = 0; i < $scope.Widgets.listReqNewSignOff.dataset.length; i++) {
                $scope.Widgets.listReqNewSignOff.selectItem(i);
                if ($scope.Widgets.listReqNewSignOff.selectedItemWidgets.cbDyejobsCQReq.datavalue !== undefined) {
                    for (var j = 0; j < $scope.Widgets.listReqNewSignOff.selectedItemWidgets.cbDyejobsCQReq.datavalue.length; j++) {
                        m_DyejobList = m_DyejobList + $scope.Widgets.listReqNewSignOff.selectedItemWidgets.cbDyejobsCQReq.datavalue[j] + "," +
                            $scope.Widgets.listReqNewSignOff.selectedItemWidgets.lblfabseq.caption + ";";
                    }
                }
            }


            $scope.Variables.svProcFd107pk0RequestSignOff.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd107pk0RequestSignOff.setInput("pDyejoblist", m_DyejobList);

            $scope.Variables.svProcFd107pk0RequestSignOff.invoke();
        };

    }
]);

Application.$controller("RelDoubtPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("RejectPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.button14Tap = function($event, $isolateScope) {
            //   debugger;
        };

    }
]);