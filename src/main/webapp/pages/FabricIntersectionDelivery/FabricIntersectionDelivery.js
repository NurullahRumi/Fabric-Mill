Application.$controller("FabricIntersectionDeliveryPageController", ["$scope", function($scope) {
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

        $scope.Widgets.btnFabSeq.show = false;
        $scope.Widgets.lblFabSeqDet.show = false;
        $scope.Widgets.layoutLcnSlt.show = false;
        $scope.Widgets.txtBarcode.focus();
    };




    $scope.txtBarcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd723pk0DeliveryOutDetails.invoke();
    };


    $scope.svProcFd723pk0DeliveryOutDetailsonSuccess = function(variable, data) {
        if ($scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutMsg === null) {
            $scope.Widgets.btnFabSeq.show = true;
            $scope.Widgets.txtScroll.focus();
            $scope.Widgets.lblFabSeqDet.show = true;
            $scope.Variables.statFilterDest.dataSet.length = 0;
            for (var i = 0; i < $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList.length; i++) {
                if ($scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].mainlcncod === $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDefDsestMainlcn) {
                    $scope.Variables.statFilterDest.dataSet.push({

                        "dataValue": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].destlcncod,
                        "indexi": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].indexi,
                        "lcndes": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].lcndes

                    });


                }
            }

        } else {
            $scope.Widgets.txtBarcode.datavalue = null;
            $scope.Widgets.btnFabSeq.show = false;
            $scope.Widgets.lblFabSeqDet.show = false;
            $scope.Widgets.layoutLcnSlt.show = false;
            $scope.Widgets.txtBarcode.focus();
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutMsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }

    };




    $scope.svProcFd723pk0UpdateDeliveryOutonSuccess = function(variable, data) {
        if ($scope.Variables.svProcFd723pk0UpdateDeliveryOut.dataSet.poutMsg !== null) {
            $scope.Variables.appNotification.operation = "toast";
            $scope.Variables.appNotification.setMessage($scope.Variables.svProcFd723pk0UpdateDeliveryOut.dataSet.poutMsg);
            $scope.Variables.appNotification.setToasterClass("success");
            $scope.Variables.appNotification.notify();
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
    };


    $scope.btnFabSeqTap = function($event, $isolateScope) {
        $scope.Widgets.txtScroll.show = false;
        $scope.Widgets.layoutLcnSlt.show = true;
        $scope.Variables.statSaveOption.dataSet.dataValue = "FABSEQ";
    };


    $scope.btnCancelTap = function($event, $isolateScope) {
        location.reload();
    };




    $scope.txtBarcodeKeypress = function($event, $isolateScope) {
        if ($event.which === 35) {
            $event.preventDefault();
            $scope.Widgets.txtScroll.focus();
        } else if ($event.which === 42) {
            $event.preventDefault();
            $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
        }
    };


    $scope.txtScrollKeypress = function($event, $isolateScope) {
        // if ($event.which === 49) {
        //     $event.preventDefault();
        //     $scope.btnFabSeqTap();
        //     $scope.Widgets.txtScroll2.focus();
        // } else if ($event.which === 42) {
        //     $event.preventDefault();
        //     $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
        // } else if ($event.which === 57) {
        //     $scope.btnCancelTap();
        // } else {
        //     $event.preventDefault();
        // }
    };


    $scope.txtScroll2Keypress = function($event, $isolateScope) {
        // if ($event.which === 50) {
        //     $event.preventDefault();
        //     $scope.Widgets.SrcLocationsPop.open();
        // } else if ($event.which === 51) {
        //     $event.preventDefault();
        //     $scope.Widgets.DestLocationsPop.open();
        //     $scope.Widgets.txtScroll2.focus();
        // } else if ($event.which === 52) {
        //     $event.preventDefault();
        //     $scope.Widgets.UnitDestinationPop.open();
        //     $scope.Widgets.txtScroll2.focus();
        // } else if ($event.which === 53) {
        //     $event.preventDefault();
        //     $scope.Widgets.txtDnNo.focus();
        // } else if ($event.which === 54) {
        //     $event.preventDefault();
        //     $scope.Variables.svProcFd723pk0UpdateDeliveryOut.invoke();
        // } else if ($event.which === 42) {
        //     $event.preventDefault();
        //     $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
        // } else if ($event.which === 57) {
        //     $scope.btnCancelTap();
        // } else {
        //     $event.preventDefault();
        // }
    };


    $scope.txtDnNoKeypress = function($event, $isolateScope) {
        // if ($event.which === 35) {
        //     $event.preventDefault();
        //     $scope.Widgets.txtScroll2.focus();
        // }
    };

}]);

Application.$controller("SrcLocationsPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.txtSrcNoKeypress = function($event, $isolateScope) {
            if ($event.which === 35) {
                $event.preventDefault();
                $scope.Widgets.txtChooseSrc.datavalue = $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutSrclcnList[($scope.Widgets.txtSrcNo.datavalue - 1)].srclcncod;
                $scope.Widgets.SrcLocationsPop.close();
                $scope.Widgets.txtScroll2.focus();
            } else if ($event.which === 42) {
                $event.preventDefault();
                $scope.Widgets.SrcLocationsPop.close();
                $scope.Widgets.txtScroll2.focus();
            }
        };


        $scope.NameTap = function($event, $isolateScope, item, currentItemWidgets) {

            $scope.Widgets.txtChooseSrc.datavalue = item.srclcncod;
            $scope.Widgets.SrcLocationsPop.close();
            $scope.Widgets.txtScroll2.focus();
        };


        $scope.button6Tap = function($event, $isolateScope) {
            $scope.Widgets.SrcLocationsPop.close();
            $scope.Widgets.txtScroll2.focus();
        };

    }
]);

Application.$controller("DestLocationsPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        $scope.txtDestNoKeypress = function($event, $isolateScope) {
            if ($event.which === 35) {
                $event.preventDefault();
                $scope.Variables.statFilterDest.dataSet.length = 0;
                $scope.Variables.statFilterDestIndex.dataSet.length = 0;
                for (var i = 0; i < $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList.length; i++) {
                    if ($scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].mainlcncod === $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutMainDestlcnList[($scope.Widgets.txtDestNo.datavalue - 1)].mainlcncod) {
                        $scope.Variables.statFilterDest.dataSet.push({
                            "dataValue": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].destlcncod,
                            "indexi": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].indexi,
                            "lcndes": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].lcndes

                        });



                    }
                }
                $scope.Widgets.txtChooseDestination.datavalue = $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutMainDestlcnList[($scope.Widgets.txtDestNo.datavalue - 1)].mainlcncod;
                $scope.Widgets.DestLocationsPop.close();
                $scope.Widgets.txtUnitDest.datavalue = null;
                $scope.Widgets.UnitDestinationPop.open();
            } else if ($event.which === 42) {
                $event.preventDefault();
                $scope.Widgets.DestLocationsPop.close();
                $scope.Widgets.txtScroll2.focus();
            }
        };


        $scope.MainDestTap = function($event, $isolateScope, item, currentItemWidgets) {
            $scope.Variables.statFilterDest.dataSet.length = 0;
            $scope.Variables.statFilterDestIndex.dataSet.length = 0;

            for (var i = 0; i < $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList.length; i++) {
                if ($scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].mainlcncod === item.mainlcncod) {
                    $scope.Variables.statFilterDest.dataSet.push({
                        "dataValue": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].destlcncod,
                        "indexi": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].indexi,
                        "lcndes": $scope.Variables.svProcFd723pk0DeliveryOutDetails.dataSet.poutDestlcnList[i].lcndes

                    });
                }
            }
            $scope.Widgets.txtChooseDestination.datavalue = item.mainlcncod;
            $scope.Widgets.DestLocationsPop.close();
            $scope.Widgets.txtUnitDest.datavalue = null;
            $scope.Widgets.UnitDestinationPop.open();
        };


        $scope.button7Tap = function($event, $isolateScope) {
            $scope.Widgets.DestLocationsPop.close();
            $scope.Widgets.txtScroll2.focus();
        };

    }
]);

Application.$controller("UnitDestinationPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.txtUnitDestNoKeypress = function($event, $isolateScope) {
            // if ($event.which === 35) {
            //     $event.preventDefault();
            //     $scope.Widgets.txtUnitDest.datavalue = $scope.Variables.statFilterDest.dataSet[($scope.Widgets.txtUnitDestNo.datavalue - 1)].dataValue;
            //     $scope.Widgets.UnitDestinationPop.close();
            //     $scope.Widgets.txtScroll2.focus();
            // } else if ($event.which === 42) {
            //     $event.preventDefault();
            //     $scope.Widgets.UnitDestinationPop.close();
            //     $scope.Widgets.txtScroll2.focus();
            // }
        };



        $scope.UnitDestTap = function($event, $isolateScope, item, currentItemWidgets) {

            $scope.Widgets.txtUnitDest.datavalue = item.dataValue;
            $scope.Widgets.UnitDestinationPop.close();
            $scope.Widgets.txtScroll2.focus();
        };


        $scope.button8Tap = function($event, $isolateScope) {
            $scope.Widgets.UnitDestinationPop.close();
            $scope.Widgets.txtScroll2.focus();
        };

    }
]);