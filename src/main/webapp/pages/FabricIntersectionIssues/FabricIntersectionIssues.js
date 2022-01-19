Application.$controller("FabricIntersectionIssuesPageController", ["$scope", "DialogService", function($scope, DialogService) {
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
        $scope.Widgets.container1.show = false;
        $scope.Widgets.label7.show = false;


        if (!($scope.pageParams.pBarcode === null || $scope.pageParams.pBarcode === undefined)) {
            $scope.Widgets.txtBarcode.datavalue = $scope.pageParams.pBarcode;
            $scope.Variables.svProcFd723pk0GetFabDetails.setInput("pBarcode", $scope.pageParams.pBarcode);
            $scope.Variables.svProcFd723pk0GetFabDetails.invoke();
        }

    };


    $scope.btnCancelTap = function($event, $isolateScope) {

        location.href = location.href.split("FabricIntersectionIssues")[0] + "FabricIntersectionIssues";
        location.reload();
    };


    $scope.txtBarcodeChange = function($isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFd723pk0GetFabDetails.invoke();
    };


    $scope.svProcFd723pk0GetFabDetailsonSuccess = function(variable, data) {
        $scope.Widgets.container1.show = true;
        $scope.Widgets.label7.show = true;
    };


    $scope.svProcFd107pk0_CqprocUpdateIssueonSuccess = function(variable, data) {
        $scope.Variables.appNotification.operation = "toast";
        $scope.Variables.appNotification.setMessage("Issue Updated");
        $scope.Variables.appNotification.setToasterClass("success");
        $scope.Variables.appNotification.notify();
        setTimeout(function() {
            location.href = location.href.split("FabricIntersectionIssues")[0] + "FabricIntersectionIssues";
            location.reload();

        }, 2000);
    };

}]);


Application.$controller("dialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);