Application.$controller("MainPageController", ["$scope", function($scope) {
    "use strict";
    /*Comments to be updated here 
    v1.01 ys08 15/04/2017 template created
    V1.02 CN04 27/04/2017 add security and app roles.
    V1.03 PI01 02/09/2017 trap error messages for call procedures.

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
        //Below should be defined in the variable definition itself in the datavalue section
        //statAppid(id of the whole app)
        //statAppname(General name for the application)
        //statPrgid(Page id)
        //statPrgname(Page name)


        // cn04 get app roles for the loggedInUser
        //console.log("User Approles= " + $scope.Variables.loggedInUser.getData().roles);


    };



}]);