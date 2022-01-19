Application.$controller("SY1000PFController", ["$scope", "DialogService", function($scope, DialogService) {
    "use strict";

    /*
     * This function will be invoked when any of this prefab's property is changed
     * @key: property name
     * @newVal: new value of the property
     * @oldVal: old value of the property
     */
    function propertyChangeHandler(key, newVal, oldVal) {
        //        switch (key) {
        //          case "labeltext":
        //         // do something with newVal for property 'prop1'+
        //              $scope.Widgets.lblQr.caption = $scope.labeltext;
        //                break;
        //         // 			case "prop2":
        //         // 				// do something with newVal for property 'prop2'
        //         // 				break;
        //        }

    }
    /* register the property change handler */
    $scope.propertyManager.add($scope.propertyManager.ACTIONS.CHANGE, propertyChangeHandler);

    $scope.onInitPrefab = function() {
        // this method will be triggered post initialization of the prefab.

    };






    $scope.txtQrChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.QrPop.close();
        $scope.datavalue = newVal;
        $scope.onChange($isolateScope, newVal, oldVal);

    };


    $scope.cleartext = function() {
        $scope.Widgets.txtQr.datavalue = "";
        $scope.datavalue = "";

    };


    $scope.autoopen = function() {
        $scope.Widgets.QrPop.open();
    };



    $scope.btnQrClick = function($event, $isolateScope) {
        DialogService.open('QrPop', $scope, {});
    };

}]);





Application.$controller("QrPopController", ["$scope", "DialogService",
    function($scope, DialogService) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.onQRCodeScanned = function(scannedText) {

            var oldVal = "";
            if ($scope.Widgets.txtQr.datavalue !== undefined) {
                oldVal = $scope.Widgets.txtQr.datavalue;
            }
            // var scannedTextMemo = document.getElementById("txtQr");
            // if (scannedTextMemo) {
            //     scannedTextMemo.value = scannedText;
            //     $scope.Widgets.txtQr.datavalue = scannedText;
            //     $scope.datavalue = scannedText;
            //     $scope.txtQrChange(null, null, scannedText, oldVal);
            //     $scope.jbScanner.stopScanning();
            //     var scannerParentElement = document.getElementById("scanner");
            //     $scope.jbScanner.removeFrom(scannerParentElement);
            //     $scope.Widgets.QrPop.close();

            //     //
            // }

            $scope.$parent.Widgets.txtQr.datavalue = scannedText;
            $scope.datavalue = scannedText;
            $scope.txtQrChange(null, null, scannedText, oldVal);
            $scope.jbScanner.stopScanning();
            var scannerParentElement = document.getElementById("scanner");
            $scope.jbScanner.removeFrom(scannerParentElement);


        };

        //this function will be called when JsQRScanner is ready to use
        $scope.JsQRScannerReady = function() {

            //create a new scanner passing to it a callback function that will be invoked when
            //the scanner succesfully scan a QR code
            $scope.jbScanner = new JsQRScanner($scope.onQRCodeScanned);
            //reduce the size of analyzed image to increase performance on mobile devices
            $scope.jbScanner.setSnapImageMaxSize(1000);
            var scannerParentElement = document.getElementById("scanner");
            if (scannerParentElement) {
                //append the jbScanner to an existing DOM element
                $scope.jbScanner.appendTo(scannerParentElement);
            }

        };




        $scope.QrPopOpened = function($event, $isolateScope) {
            $scope.JsQRScannerReady();
        };

    }
]);