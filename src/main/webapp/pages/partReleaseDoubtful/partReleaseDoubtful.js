Application.$controller("partReleaseDoubtfulPageController", ["$scope", function($scope) {
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


    };





    $scope.btnRelDoubtTap = function($event, $isolateScope) {


        $scope.Variables.DyejobFabProcList = "";

        if (!$scope.Widgets.list1.selecteditem.dyejob) {

            if (!$scope.$parent.pageParams.pFabseq || !$scope.$parent.pageParams.pDyejob || $scope.$parent.pageParams.pFabseq === 0) {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Please select a dyejob first !!");
                $scope.Variables.appNotification.setAlertType("error");
                $scope.Variables.appNotification.notify();

            } else {
                $scope.Variables.DyejobFabProcList = $scope.$parent.pageParams.pDyejob + "," + $scope.$parent.pageParams.pFabseq + "," + $scope.Widgets.list1.selecteditem.procseq + ":" + $scope.Widgets.list1.selecteditem.process + ";";

            }

        } else {
            $scope.Variables.DyejobFabProcList = $scope.Widgets.list1.selecteditem.dyejob + "," + $scope.Widgets.list1.selecteditem.fabseq + "," + $scope.Widgets.list1.selecteditem.procseq + ":" + $scope.Widgets.list1.selecteditem.process + ";";

        }



        if (!!$scope.Variables.DyejobFabProcList) {

            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pUsrid", $scope.$parent.Variables.statUSER.dataSet.dataValue);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pPrgid", $scope.$parent.Variables.statPrgid.dataSet.dataValue);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pCqsheetid", $scope.$parent.Variables.svProcFd107pk0_CqprocGetDetails.dataSet.poutJobDet[0].cqsheetid);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pRemarks", $scope.$parent.Widgets.txtRemarks.datavalue);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pMainsts", $scope.$parent.Widgets.radioset1.datavalue);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pCondList", $scope.$parent.Variables.statListValues.dataSet.dataValue);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pPendingcod", "");
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pFabseqlist", $scope.Variables.DyejobFabProcList);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.setInput("pOperator", $scope.$parent.Widgets.txtoperator.datavalue);
            $scope.$parent.Variables.svProcFd107pk0_cqprocUptCQ.invoke();
        }


    };


    $scope.container1Tap = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.list1.selecteditem = item;
    };


    $scope.btnlblProcessTap = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.list1.selecteditem = item;
    };

}]);