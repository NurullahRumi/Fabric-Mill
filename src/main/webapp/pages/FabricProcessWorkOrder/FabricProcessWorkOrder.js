Application.$controller("FabricProcessWorkOrderPageController", ["$scope", function($scope) {
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

        if (!($scope.pageParams.Pbarcode === null || $scope.pageParams.Pbarcode === undefined || $scope.pageParams.Pbarcode === "")) {
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_usrid", $scope.pageParams.psyslocusr);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_option", null);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_dyejob", null);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_redye", null);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_fabseq", null);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_procseq", null);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_barcode", $scope.pageParams.Pbarcode);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_wrkid", $scope.Variables.statOperator.dataSet.dataValue);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.invoke();
        }

    };


    $scope.changePos = function(btnname, left, top, btnparam, btnparamval, btnparamcod, caneditparam) {
        var canedit = "";
        document.getElementById(btnname).style.top = `${top}`;
        document.getElementById(btnname).style.left = `${left}`;
        document.getElementById(btnname).name = btnparam;
        document.getElementById(btnname).paramcod = btnparamcod;


        eval("$scope.Widgets." + btnname + ".show = true");
        eval("$scope.Widgets." + btnname + ".caption = " + btnparamval);

        if (caneditparam === "Y") {
            eval("$scope.Widgets." + btnname + ".caneditparam = 'Y' ");
        }


        return true;
    };


    $scope.switch1Change = function($event, $isolateScope, newVal, oldVal) {

        if (newVal === "Machine View") {

            var x = "";
            var y = "";
            var btnname = "";


            for (var i = 0; i < $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutFnparamlist.length; i++) {
                btnname = "button" + (i + 1);


                x = $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutFnparamlist[i].xpos + "%";
                y = $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutFnparamlist[i].ypos + "%";

                $scope.changePos(btnname, x, y, $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutFnparamlist[i].paramdesc, $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutFnparamlist[i].paramval, $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutFnparamlist[i].paramcod, $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutFnparamlist[i].canEditParam);

            }
        } else if (newVal === "Test Result") {

            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_usrid", $scope.pageParams.psyslocusr);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_barcode", $scope.pageParams.Pbarcode);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_cqstage", "PRE-PROCESS");
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.invoke();


            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_usrid", $scope.pageParams.psyslocusr);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_barcode", $scope.pageParams.Pbarcode);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_cqstage", "POST-PROCESS");
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.invoke();
        }

    };


    $scope.btnClick = function($event, $isolateScope) {

        if ($isolateScope.caneditparam === "Y") {
            $scope.Variables.statParamDesc.dataSet.dataValue = document.getElementById($isolateScope.id).name;
            $scope.Variables.statParamCod.dataSet.dataValue = document.getElementById($isolateScope.id).paramcod;
            $scope.Variables.statParamValue.dataSet.dataValue = $isolateScope.caption;
            $scope.Widgets.setParameterPop.open();
        }
    };


    $scope.paramValTap = function($event, $isolateScope, item, currentItemWidgets) {

        if (item.canEditParam === "Y") {
            $scope.Variables.statParamDesc.dataSet.dataValue = item.paramdesc;
            $scope.Variables.statParamCod.dataSet.dataValue = item.paramcod;
            $scope.Variables.statParamValue.dataSet.dataValue = item.paramval;
            $scope.Widgets.setParameterPop.open();

        }

    };



    $scope.ActValTap = function($event, $isolateScope, item, currentItemWidgets) {

        if ($scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.dataSet.poutCanupdactual === "Y") {
            $scope.Variables.statTestSltItem.dataSet = item;
            $scope.Widgets.SetTestValuesPop.open();
        }

    };


    $scope.listtestresultBeforedatarender = function($isolateScope, $data) {

        $scope.Variables.statHideLabel.dataSet.dataValue = $data[0].cqcod;
    };


    $scope.btnArrow2Tap = function($event, $isolateScope) {
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_usrid", $scope.pageParams.psyslocusr);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_option", 'NEXT-TANDEM');
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_dyejob", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].dyejob);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_redye", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].redye);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_fabseq", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].fabseq);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_procseq", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].procseq);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_barcode", null);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_wrkid", $scope.Variables.statOperator.dataSet.dataValue);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.invoke();
    };


    $scope.btnArrowTap = function($event, $isolateScope) {
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_usrid", $scope.pageParams.psyslocusr);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_option", 'PREV-TANDEM');
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_dyejob", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].dyejob);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_redye", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].redye);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_fabseq", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].fabseq);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_procseq", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].procseq);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_barcode", null);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.setInput("p_wrkid", $scope.Variables.statOperator.dataSet.dataValue);
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.invoke();
    };


    $scope.svFD800WPK0_MCSETUPSprocGetProcessWOonSuccess = function(variable, data, options) {

        if (data.poutJobdetails[0].canQryTstresult === "Y" && data.poutJobdetails[0].canQryMclayout === "Y" && data.poutJobdetails[0].canViewWodetails === "Y") {
            $scope.Widgets.switchView.dataset = "Grid View,Machine View,Test Result";
            $scope.Widgets.switchView.datavalue = "Machine View";
            $scope.switch1Change(null, null, "Machine View", null);
            $scope.Widgets.listPosttestresults.show = true;
            $scope.Widgets.listtestresult.show = true;

        } else if (data.poutJobdetails[0].canQryTstresult === "Y" && data.poutJobdetails[0].canQryMclayout === null && data.poutJobdetails[0].canViewWodetails === "Y") {
            $scope.Widgets.switchView.dataset = "Grid View,Test Result";
            $scope.Widgets.switchView.datavalue = "Grid View";
            $scope.Widgets.listPosttestresults.show = true;
            $scope.Widgets.listtestresult.show = true;

        } else if (data.poutJobdetails[0].canQryTstresult === null && data.poutJobdetails[0].canQryMclayout === "Y" && data.poutJobdetails[0].canViewWodetails === "Y") {
            $scope.Widgets.switchView.dataset = "Grid View,Machine View";
            $scope.Widgets.switchView.datavalue = "Machine View";
            $scope.Widgets.listPosttestresults.show = false;
            $scope.Widgets.listtestresult.show = false;
            $scope.switch1Change(null, null, "Machine View", null);

        } else if (data.poutJobdetails[0].canQryTstresult === null && data.poutJobdetails[0].canQryMclayout === null && data.poutJobdetails[0].canViewWodetails === "Y") {
            $scope.Widgets.switchView.dataset = "Grid View";
            $scope.Widgets.switchView.datavalue = "Grid View";
            $scope.Widgets.listPosttestresults.show = false;
            $scope.Widgets.listtestresult.show = false;

        } else if (data.poutJobdetails[0].canQryTstresult === "Y" && data.poutJobdetails[0].canQryMclayout === null && data.poutJobdetails[0].canViewWodetails === "N") {
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_usrid", $scope.pageParams.psyslocusr);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_barcode", $scope.pageParams.Pbarcode);
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.setInput("p_cqstage", "PRE-PROCESS");
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.invoke();


            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_usrid", $scope.pageParams.psyslocusr);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_barcode", $scope.pageParams.Pbarcode);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.setInput("p_cqstage", "POST-PROCESS");
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.invoke();
            $scope.Widgets.switchView.dataset = "Test Result";
            $scope.Widgets.switchView.datavalue = "Test Result";
            $scope.switch1Change(null, null, "Test Result", null);
            $scope.Widgets.listPosttestresults.show = true;
            $scope.Widgets.listtestresult.show = true;
        } else {
            $scope.Widgets.switchView.dataset = "";
            $scope.Widgets.listPosttestresults.show = false;
            $scope.Widgets.listtestresult.show = false;
            $scope.Widgets.panel3.show = false;
            $scope.Widgets.panelGridView.show = false;
        }

    };


    $scope.ActValPostTap = function($event, $isolateScope, item, currentItemWidgets) {
        if ($scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.dataSet.poutCanupdactual === "Y") {
            $scope.Variables.statTestSltItem.dataSet = item;
            $scope.Widgets.SetTestValuesPop.open();
        }
    };


    $scope.svProcFD800WPK0_MCSETUPSprocUpdTstRsltonSuccess = function(variable, data, options) {
        $scope.Widgets.SetTestValuesPop.close();
        if (variable.dataBinding.p_cqstage === "PRE-PROCESS") {
            $scope.Variables.svFD800WPK0_MCSETUPSprocGetPreTestResults.invoke();
        } else if (variable.dataBinding.p_cqstage === "POST-PROCESS") {
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocGetPOSTTestResults.invoke();
        }

    };


    $scope.svProcFD800WPK0_MCSETUPSprocUpdWOValueonSuccess = function(variable, data, options) {
        $scope.Widgets.setParameterPop.close();
        $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.invoke();
    };


    $scope.button22_1Tap = function($event, $isolateScope) {
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.pappky = $scope.Variables.statAPPKEY.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.psyslocusr = $scope.Variables.statUSER.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
    };


    $scope.button23_1Tap = function($event, $isolateScope) {

        $scope.Variables.goToPage_FabricProcessScan.dataSet.Pbarcode = $scope.pageParams.Pbarcode;
        $scope.Variables.goToPage_FabricProcessScan.invoke();
    };

}]);

Application.$controller("setParameterPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnOkTap = function($event, $isolateScope) {
            $scope.Variables.WODyejobList = "";

            for (var i = 0; i < $scope.Widgets.listDyejobWO.dataset.length; i++) {
                $scope.Widgets.listDyejobWO.selectItem(i);
                if ($scope.Widgets.listDyejobWO.selectedItemWidgets.cbWODyejob.datavalue !== undefined) {
                    for (var j = 0; j < $scope.Widgets.listDyejobWO.selectedItemWidgets.cbWODyejob.datavalue.length; j++) {
                        $scope.Variables.WODyejobList = $scope.Variables.WODyejobList + $scope.Widgets.listDyejobWO.selectedItemWidgets.cbWODyejob.datavalue[j] + "," +
                            $scope.Widgets.listDyejobWO.selectedItemWidgets.WOFabseq.caption + ";";
                    }
                }
            }

            if ($scope.Variables.WODyejobList === "") {
                $scope.Variables.WODyejobList = $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataBinding.p_dyejob + "," + $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataBinding.p_fabseq + ";";
            }

            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_usrid", $scope.Variables.statUSER.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_wrkid", $scope.Variables.statOperator.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_dyejoblist", $scope.Variables.WODyejobList);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_redye", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].redye);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_procseq", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].procseq);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_paramcod", $scope.Variables.statParamCod.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.setInput("p_actval", $scope.Widgets.txtParamVal.datavalue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdWOValue.invoke();

        };

    }
]);

Application.$controller("SetTestValuesPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button21Tap = function($event, $isolateScope) {

            $scope.Variables.DyejobList = "";


            for (var i = 0; i < $scope.Widgets.listDyejobWO.dataset.length; i++) {
                $scope.Widgets.listDyejobWO.selectItem(i);
                if ($scope.Widgets.listDyejobWO.selectedItemWidgets.cbWODyejob.datavalue !== undefined) {
                    for (var j = 0; j < $scope.Widgets.listDyejobWO.selectedItemWidgets.cbWODyejob.datavalue.length; j++) {
                        $scope.Variables.DyejobList = $scope.Variables.DyejobList + $scope.Widgets.listDyejobWO.selectedItemWidgets.cbWODyejob.datavalue[j] + "," +
                            $scope.Widgets.listDyejobWO.selectedItemWidgets.WOFabseq.caption + ";";
                    }
                }
            }



            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_usrid", $scope.Variables.statUSER.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_wrkid", $scope.Variables.statOperator.dataSet.dataValue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_dyejoblist", $scope.Variables.DyejobList);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_redye", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].redye);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_procseq", $scope.Variables.svFD800WPK0_MCSETUPSprocGetProcessWO.dataSet.poutJobdetails[0].procseq);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_cqcod", $scope.Variables.statTestSltItem.dataSet.cqcod);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_actval", $scope.Widgets.txtTestValue.datavalue);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_cqstage", $scope.Variables.statTestSltItem.dataSet.cqstage);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.setInput("p_riblance", $scope.Variables.statTestSltItem.dataSet.riblaceBarcode);
            $scope.Variables.svProcFD800WPK0_MCSETUPSprocUpdTstRslt.invoke();
        };


        $scope.txtTestValueChange = function($event, $isolateScope, newVal, oldVal) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };


    }
]);