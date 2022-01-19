Application.$controller("FabricProcessScanPageController", ["$scope", "DialogService", function($scope, DialogService) {
    "use strict";

    $scope.onPageReady = function() {
        /* //JL13 10/07/2019 -- Add navigation goto FabricIntersectionPlacementPage
         */

        $scope.Widgets.containerDetails.show = false;
        $scope.Widgets.containerProcess.show = false;


        if (!($scope.pageParams.pBarcode === null || $scope.pageParams.pBarcode === undefined || $scope.pageParams.pBarcode === "")) {
            $scope.Widgets.txtBarcode.datavalue = $scope.pageParams.pBarcode;
            $scope.Variables.svProcFd724pk0ScanDet.setInput("pBarcode", $scope.pageParams.pBarcode);
            $scope.Variables.svProcFd724pk0ScanDet.invoke();
        }
    };


    $scope.txtBarcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd724pk0ScanDet.setInput("pBarcode", $scope.Widgets.txtBarcode.datavalue);
        $scope.Variables.svProcFd724pk0ScanDet.invoke();
    };


    $scope.svProcFd724pk0ScanDetonSuccess = function(variable, data) {
        if ($scope.Variables.svProcFd724pk0ScanDet.dataSet.poutMsg === null) {
            $scope.Widgets.containerDetails.show = true;
            $scope.Widgets.lblFabSeq.show = true;
            $scope.Widgets.containerProcess.show = false;
            $scope.Variables.statMachines.dataSet.length = 0;
            $scope.Widgets.containerProcess.show = true;
            $scope.Variables.statSaveOption.dataSet.dataValue = "FABSEQ";
            $scope.Widgets.btnSave.disabled = false;
            $scope.Widgets.btnHaltJob.disabled = false;

            var mac;
            $scope.Variables.statProcessAction.dataSet.dataValue = $scope.Variables.svProcFd724pk0ScanDet.dataSet.poutDefProcessAction;
            if ($scope.Variables.svProcFd724pk0ScanDet.dataSet.poutDefProcessAction == "START-PROCESS") {
                $scope.Widgets.lblMeters.show = false;
                $scope.Widgets.container13.show = false;
            } else {
                $scope.Widgets.lblMeters.show = true;
                $scope.Widgets.container13.show = true;
            }

            for (var i = 0; i < $scope.Variables.svProcFd724pk0ScanDet.dataSet.poutProcessList.length; i++) {
                if ($scope.Variables.svProcFd724pk0ScanDet.dataSet.poutProcessList[i].process === $scope.Variables.svProcFd724pk0ScanDet.dataSet.poutDefProcess) {

                    if (!($scope.Variables.svProcFd724pk0ScanDet.dataSet.poutProcessList[i].mclist === null || $scope.Variables.svProcFd724pk0ScanDet.dataSet.poutProcessList[i].mclist === undefined)) {
                        mac = $scope.Variables.svProcFd724pk0ScanDet.dataSet.poutProcessList[i].mclist.split(",");
                        for (i = 0; i < mac.length; i++) {
                            $scope.Variables.statMachines.dataSet.push({
                                "dataValue": mac[i],
                                "indexi": (i + 1)
                            });
                        }

                        for (var k = 0; k < $scope.Variables.statMachines.dataSet.length; k++) {
                            if ($scope.Variables.statMachines.dataSet[k].dataValue.indexOf($scope.Variables.statScanMachine.dataSet.dataValue.toUpperCase()) === 0) {
                                $scope.Variables.statDefaultMachine.dataSet.dataValue = $scope.Variables.statScanMachine.dataSet.dataValue.toUpperCase();
                            }
                        }

                        if (!($scope.Variables.statDefaultMachine.dataSet.dataValue === null || $scope.Variables.statDefaultMachine.dataSet.dataValue === undefined || $scope.Variables.statDefaultMachine.dataSet.dataValue === "")) {
                            $scope.Widgets.txtMachine.datavalue = $scope.Variables.statDefaultMachine.dataSet.dataValue;
                            $scope.Widgets.txtMachine.defaultvalue = $scope.Variables.statDefaultMachine.dataSet.dataValue;
                        } else if ($scope.Variables.statMachines.dataSet.length === 1) {
                            $scope.Widgets.txtMachine.datavalue = $scope.Variables.statMachines.dataSet[0].dataValue;
                            $scope.Widgets.txtMachine.defaultvalue = $scope.Variables.statMachines.dataSet[0].dataValue;
                        } else {

                            $scope.Widgets.txtMachine.datavalue = "";
                            $scope.Widgets.txtMachine.defaultvalue = "";
                        }
                        break;
                    } else {

                    }
                }
            }


        } else {
            $scope.Widgets.containerDetails.show = false;
            $scope.Widgets.txtBarcode.datavalue = null;
            $scope.Widgets.containerProcess.show = false;

            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd724pk0ScanDet.dataSet.poutMsg);
            $scope.Variables.appNotification.setAlertType = "error";
            $scope.Variables.appNotification.notify();
        }
    };


    $scope.svProcFd724UpdateScanProcessonSuccess = function(variable, data) {
        if ($scope.Variables.svProcFd724UpdateScanProcess.dataSet.poutErrmsg !== null) {
            $scope.Widgets.alertdialog1.open();
        } else {

            if ($scope.Variables.svProcFd724pk0ScanDet.dataSet.poutDefProcessAction == "START-PROCESS") {
                $scope.Widgets.containerDetails.show = false;
                $scope.Widgets.containerProcess.show = false;
                $scope.Widgets.txtMeter.datavalue = "";

                if ($scope.Variables.svProcFd724pk0ScanDet.dataSet.poutHasWorkOrder === "Y") {
                    $scope.Variables.goToPage_FabricProcessWorkOrder.dataSet.Pbarcode = $scope.Variables.svProcFd724UpdateScanProcess.dataBinding.pBarcode;
                    $scope.Variables.goToPage_FabricProcessWorkOrder.invoke();
                } else {
                    $scope.Variables.svProcFd724pk0ScanDet.invoke();
                }

            } else if ($scope.Variables.svProcFd724UpdateScanProcess.dataSet.poutNextAction === "Y") {
                $scope.Variables.goToPage_FabricProcessCQ.dataSet.pBarcode = $scope.Variables.svProcFd724UpdateScanProcess.dataBinding.pBarcode;
                $scope.Variables.goToPage_FabricProcessCQ.dataSet.pCallingPage = $scope.Variables.statPrgid.dataSet.dataValue; //Added by jl13 
                $scope.Variables.goToPage_FabricProcessCQ.invoke();
            } else {

                $scope.Widgets.containerDetails.show = false;
                $scope.Widgets.containerProcess.show = false;
                $scope.Widgets.txtBarcode.clear();
                $scope.Widgets.txtBarcode.datavalue = "";
                $scope.Widgets.txtMeter.datavalue = "";
                //Added by jl13 
                $scope.Variables.goToPage_FabricIntersectionPlacement.dataSet.pBarcode = $scope.Variables.svProcFd724UpdateScanProcess.dataBinding.pBarcode;
                $scope.Variables.goToPage_FabricIntersectionPlacement.invoke();
            }
        }
        $scope.Variables.statTrnWIP.dataSet.dataValue = 'N';
    };


    $scope.btnSaveTap = function($event, $isolateScope) {
        $scope.Variables.statTrnWIP.dataSet.dataValue = 'Y';

        $scope.Variables.DyejobList = "";

        for (var i = 0; i < $scope.Widgets.executeProcFd724pk0ScanDetList1.dataset.length; i++) {
            $scope.Widgets.executeProcFd724pk0ScanDetList1.selectItem(i);
            if ($scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.cbDyejobs.datavalue !== undefined) {
                for (var j = 0; j < $scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.cbDyejobs.datavalue.length; j++) {
                    $scope.Variables.DyejobList = $scope.Variables.DyejobList + $scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.cbDyejobs.datavalue[j] + "," +
                        $scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.Fabseq.caption + ";";
                }
            }
        }

        if ($scope.Widgets.txtMachine.datavalue === undefined || $scope.Widgets.txtMachine.datavalue === null || $scope.Widgets.txtMachine.datavalue === "") {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Choose a Machine to scan!!");
            $scope.Variables.appNotification.setAlertType = "error";
            $scope.Variables.appNotification.notify();
            $scope.Variables.statTrnWIP.dataSet.dataValue = 'N';
        } else {
            $isolateScope.disabled = true;
            $scope.Widgets.btnHaltJob.disabled = true;

            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pUsrid", $scope.Variables.statUSER.dataSet.dataValue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pBarcode", $scope.Widgets.txtBarcode.datavalue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pSaveOption", $scope.Variables.statSaveOption.dataSet.dataValue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pProcess", $scope.Widgets.txtProcess.datavalue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pMchcod", $scope.Widgets.txtMachine.datavalue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pScanmts", $scope.Widgets.txtMeter.datavalue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pProcessAction", $scope.Variables.statProcessAction.dataSet.dataValue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pOperator", $scope.Widgets.txtOperator.datavalue);
            $scope.Variables.svProcFd724UpdateScanProcess.setInput("pFabseqlist", $scope.Variables.DyejobList);
            $scope.Variables.svProcFd724UpdateScanProcess.invoke();
        }
    };


    $scope.button5Tap = function($event, $isolateScope) {
        $scope.Widgets.containerDetails.show = false;
        $scope.Widgets.containerProcess.show = false;
        $scope.Widgets.txtBarcode.clear();
        $scope.Widgets.txtBarcode.datavalue = "";
        $scope.Widgets.txtMeter.datavalue = "";
    };


    $scope.svProcFd724UpdateScanProcessonError = function(variable, data) {
        $scope.Widgets.alertdialog1.open();
        $scope.Variables.statTrnWIP.dataSet.dataValue = 'N';
    };


    $scope.txtOperatorChange = function($isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFd724pk0CheckEmpCode.setInput("p_empcode", $scope.Widgets.txtOperator.datavalue);
        $scope.Variables.svProcFd724pk0CheckEmpCode.invoke();
    };


    $scope.button4Tap = function($event, $isolateScope) {
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.pappky = $scope.Variables.statAPPKEY.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.psyslocusr = $scope.Variables.statUSER.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
    };


    $scope.svProcFd724pk0CheckEmpCodeonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType = "error";
        $scope.Variables.appNotification.notify();
        $scope.Widgets.txtOperator.clear();
        $scope.Widgets.txtOperator.datavalue = "";
    };


    $scope.FabseqTap = function($event, $isolateScope, item, currentItemWidgets) {
        currentItemWidgets.cbDyejobs.datavalue = currentItemWidgets.cbDyejobs.dataset.split(",");
    };


    $scope.svProcFd724pk0ScanDetonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType = "error";
        $scope.Variables.appNotification.notify();
        $scope.Widgets.containerDetails.show = false;
        $scope.Widgets.containerProcess.show = false;
        $scope.Widgets.txtBarcode.clear();
        $scope.Widgets.txtBarcode.datavalue = "";
        $scope.Widgets.txtMeter.datavalue = "";
    };

}]);

Application.$controller("ChooseProcessPopController", ["$scope", "DialogService",
    function($scope, DialogService) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.lblProcessesTap = function($event, $isolateScope, item, currentItemWidgets) {
            $scope.Variables.statMachines.dataSet.length = 0;
            $scope.Widgets.txtProcess.datavalue = item.process;
            $scope.Variables.statProcessAction.dataSet.dataValue = currentItemWidgets.lblAction.caption;
            if (currentItemWidgets.lblAction.caption === "START-PROCESS") {
                $scope.Widgets.btnSave.caption = "START";
                $scope.Widgets.lblMeters.show = false;
                $scope.Widgets.container13.show = false;
            } else {
                $scope.Widgets.btnSave.caption = "END";
                $scope.Widgets.lblMeters.show = true;
                $scope.Widgets.container13.show = true;
            }
            if (!(currentItemWidgets.lblMachineList.caption === null || currentItemWidgets.lblMachineList.caption === undefined || currentItemWidgets.lblMachineList.caption === "")) {
                var mac = currentItemWidgets.lblMachineList.caption.split(",");

                for (var i = 0; i < mac.length; i++) {
                    $scope.Variables.statMachines.dataSet.push({
                        "dataValue": mac[i],
                        "indexi": (i + 1)
                    });
                }
                if ($scope.Variables.statMachines.dataSet.length === 1) {
                    $scope.Widgets.txtMachine.datavalue = $scope.Variables.statMachines.dataSet[0].dataValue;
                    $scope.Widgets.txtMachine.defaultvalue = $scope.Variables.statMachines.dataSet[0].dataValue;
                } else {
                    $scope.Widgets.txtMachine.datavalue = "";
                    $scope.Widgets.txtMachine.defaultvalue = "";
                }
            }

            $scope.Widgets.ChooseProcessPop.close();
        };


        $scope.button6Tap = function($event, $isolateScope) {
            $scope.Widgets.ChooseProcessPop.close();
        };
    }
]);

Application.$controller("MachinesPopController", ["$scope", "DialogService",
    function($scope, DialogService) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.label15Tap = function($event, $isolateScope, item, currentItemWidgets) {
            $scope.Widgets.txtMachine.datavalue = item.dataValue;
            $scope.Widgets.txtMachine.defaultvalue = item.dataValue;

            $scope.Widgets.MachinesPop.close();
        };


        $scope.button8Tap = function($event, $isolateScope) {
            $scope.Widgets.MachinesPop.close();
        };
    }
]);

Application.$controller("alertdialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.alertdialog1Ok = function($event, $isolateScope) {
            $scope.Widgets.alertdialog1.close();
            $scope.Widgets.containerDetails.show = false;
            $scope.Widgets.containerProcess.show = false;
            $scope.Widgets.txtBarcode.clear();
            $scope.Widgets.txtBarcode.datavalue = "";
            $scope.Widgets.txtMeter.datavalue = "";
        };
    }
]);

Application.$controller("dialogPGremarkController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.butSavePGTap = function($event, $isolateScope) {
            $scope.Widgets.btnSave.disabled = true;
            $scope.Widgets.btnHaltJob.disabled = true;
            $scope.Widgets.dialogPGremark.close();

            $scope.Variables.DyejobList = "";
            for (var i = 0; i < $scope.Widgets.executeProcFd724pk0ScanDetList1.dataset.length; i++) {
                $scope.Widgets.executeProcFd724pk0ScanDetList1.selectItem(i);
                if ($scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.cbDyejobs.datavalue !== undefined) {
                    for (var j = 0; j < $scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.cbDyejobs.datavalue.length; j++) {
                        $scope.Variables.DyejobList = $scope.Variables.DyejobList + $scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.cbDyejobs.datavalue[j] + "," +
                            $scope.Widgets.executeProcFd724pk0ScanDetList1.selectedItemWidgets.Fabseq.caption + ";";
                    }
                }
            }

            if ($scope.Widgets.txtMachine.datavalue === undefined || $scope.Widgets.txtMachine.datavalue === null || $scope.Widgets.txtMachine.datavalue === "") {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Choose a Machine to scan!!");
                $scope.Variables.appNotification.setAlertType = "error";
                $scope.Variables.appNotification.notify();
            } else {

                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pUsrid", $scope.Variables.statUSER.dataSet.dataValue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pBarcode", $scope.Widgets.txtBarcode.datavalue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pSaveOption", $scope.Variables.statSaveOption.dataSet.dataValue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pProcess", $scope.Widgets.txtProcess.datavalue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pMchcod", $scope.Widgets.txtMachine.datavalue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pScanmts", $scope.Widgets.txtMeter.datavalue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pProcessAction", 'HALT-JOB');
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pOperator", $scope.Widgets.txtOperator.datavalue);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pFabseqlist", $scope.Variables.DyejobList);
                $scope.Variables.svProcFd724UpdateScanProcess.setInput("pHaltRemarks", $scope.Widgets.txtHaltRemarks.datavalue);
                $scope.Variables.svProcFd724UpdateScanProcess.invoke();
            }
        };
    }
]);