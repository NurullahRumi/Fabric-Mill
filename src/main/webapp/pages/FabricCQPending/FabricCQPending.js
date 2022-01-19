Application.$controller("FabricCQPendingPageController", ["$scope", function($scope) {
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




    $scope.gridCqPendingSelect = function($event, $isolateScope, $rowData) {

        if ($rowData.inspreq === null || $rowData.inspreq === undefined) {
            $scope.Widgets.partFabricProcessCQPop.open();
        } else if ($rowData.inspreq === "Y") {
            window.open(location.href.split("FabricCQPending")[0] + "FabricInspectionCertificate?pBarcode=" + $rowData.barcode);
        }

    };



}]);

Application.$controller("gridCqPendingController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("partFabricProcessCQPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);