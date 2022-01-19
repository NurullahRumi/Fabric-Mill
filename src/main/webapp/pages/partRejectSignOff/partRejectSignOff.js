Application.$controller("partRejectSignOffPageController", ["$scope", function($scope) {
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

        if ($scope.pageParams.pAppCall === "SIGNOFF") {
            if ($scope.$parent.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutProcess === "VE") {
                $scope.Widgets.list1.show = false;
                $scope.Widgets.label1.show = false;
            }
        }
        $scope.Variables.svSprocFd107pk0_cqprocGetRejCod.setInput("p_prgid", $scope.$parent.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svSprocFd107pk0_cqprocGetRejCod.invoke();
    };


    $scope.button15Tap = function($event, $isolateScope) {

        $scope.Variables.RejectedProcess = "";

        for (var i = 0; i < $scope.Variables.svQrySignOffDyeJobFabRoute.dataSet.content.length; i++) {
            $scope.Widgets.list1.selectItem(i);
            if ($scope.Widgets.list1.selectedItemWidgets.cbSelected.caption === "N") {
                if ($scope.Variables.RejectedProcess === "") {
                    $scope.Variables.RejectedProcess = $scope.Widgets.list1.selecteditem.procseq + ":" + $scope.Widgets.list1.selecteditem.process;
                } else {
                    $scope.Variables.RejectedProcess = $scope.Variables.RejectedProcess + "," + $scope.Widgets.list1.selecteditem.procseq + ":" + $scope.Widgets.list1.selecteditem.process;
                }
            }
        }

        $scope.Widgets.list1.selectItem(0);
        $scope.Variables.DyejobFabProcList = $scope.Widgets.list1.selecteditem.dyejob + "," + $scope.Widgets.list1.selecteditem.fabseq + "," + $scope.Variables.RejectedProcess;


        //pAppcall defines from which page this partial is call.
        //-SIGNOFF = Sign-Off page 
        //-INSP = 100% Inspection

        if ($scope.pageParams.pAppCall === "SIGNOFF") {
            if (!!$scope.Widgets.searchRejCod.datavalue) {
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pUsrid", $scope.$parent.Variables.statUSER.dataSet.dataValue);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pPrgid", $scope.$parent.Variables.statPrgid.dataSet.dataValue);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pCqsheetid", $scope.pageParams.pCqsheetid);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pRemarks", $scope.$parent.Widgets.txtRemarks.datavalue);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pMainsts", $scope.$parent.Widgets.radioset1.datavalue);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pCondList", $scope.$parent.Variables.statListValues.dataSet.dataValue);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pRejectcod", $scope.Widgets.searchRejCod.datavalue);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pFabseqlist", $scope.Variables.DyejobFabProcList);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pOperator", $scope.$parent.Widgets.txtoperator.datavalue);
                $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.invoke();
            } else {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Choose at least a Reject Code.");
                $scope.Variables.appNotification.setAlertType("error");
                $scope.Variables.appNotification.notify();

            }

        } else if ($scope.pageParams.pAppCall === "INSP") {
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_usrid", $scope.$parent.Variables.statAppUsrid.dataSet.dataValue);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_prgid", $scope.$parent.Variables.statPrgid.dataSet.dataValue);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_cqsheetid", $scope.pageParams.pCqsheetid);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_remarks", $scope.$parent.Widgets.txtRemarks.datavalue);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_Mainsts", $scope.$parent.Variables.statUpdSts.dataSet.dataValue);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_CondList", $scope.$parent.Variables.statListValues.dataSet.dataValue);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_Processlist", $scope.Variables.DyejobFabProcList);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.setInput("p_rejectcod", $scope.Widgets.searchRejCod.datavalue);
            $scope.$parent.Variables.svProcFd107pk0_CqprocUpdInspectionSts.invoke();
        }

    };


    $scope.btnRejectProcessTap = function($event, $isolateScope, item, currentItemWidgets) {

        if (currentItemWidgets.cbSelected.caption === "N") {
            currentItemWidgets.cbSelected.caption = "Y";
        } else if (currentItemWidgets.cbSelected.caption === "Y") {
            currentItemWidgets.cbSelected.caption = "N";
        }
    };

}]);