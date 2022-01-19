Application.$controller("FabricDeliveryPageController", ["$scope", function($scope) {
    "use strict";
    /*Comments to be updated here 
    perform any action on widgets/variables within this block */

    $scope.onPageReady = function() {};

    //Reset DN Details to null
    $scope.resetSelectedDNDet = function(variable, data) {
        $scope.Variables.statSelectedDN.dataSet.dataValue = null;
        $scope.Variables.statDNDestScn.dataSet.dataValue = null;
    };

    //Show existing DN details(Dyejob, Fabseq,...)
    $scope.containerClickTap = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.containerDNDetails.show = true;
        $scope.Widgets.containerMenu.show = false;
    };

    /*//Hide DN details when back btn tapped
    $scope.btnBackToDelMenuTap = function($event, $isolateScope) {
        $scope.Widgets.containerDNDetails.show = false;
        $scope.Widgets.containerMenu.show = true;
        $scope.resetSelectedDNDet(); //Reset DN Details to null when back btn tapped so that a new ddelnum is obtained when another DN is selected
    };*/

    $scope.containerBackToDelMenuTap = function($event, $isolateScope) {
        $scope.Widgets.containerDNDetails.show = false;
        $scope.Widgets.containerMenu.show = true;
        $scope.resetSelectedDNDet(); //Reset DN Details to null when back btn tapped so that a new ddelnum is obtained when another DN is selected
    };

    //Back to Main Menu Screen
    $scope.btnBackToMainTap = function($event, $isolateScope) {
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.pappky = $scope.Variables.statAPPKEY.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.dataSet.psyslocusr = $scope.Variables.statUSER.dataSet.dataValue;
        $scope.Variables.goToPage_FabricIntersectionMenu.invoke();
    };


    $scope.svProcFD730WPK0_GetRackbinonBeforeUpdate = function(variable, inputData) {
        if (inputData.pPrgId == undefined) {
            return false;
        }
    };

    $scope.svProcFD730WPK0_GetDeliveryonBeforeUpdate = function(variable, inputData) {
        if (inputData.pPrgId == undefined || inputData.pRackbin == undefined) {
            return false;
        }
    };

    $scope.svProcFD730WPK0_GetUndeliveredJobsonBeforeUpdate = function(variable, inputData) {
        if (inputData.pRackbin == undefined) {
            return false;
        }
    };

    //DN list tapped
    $scope.listDNTap = function($event, $isolateScope) {
        $scope.Variables.statSelectedDN.dataSet.dataValue = $scope.Widgets.listDN.selecteditem.ddelnum; //This variable stores a different ddelnum each time a DN is selected
        $scope.Variables.statDNDestScn.dataSet.dataValue = $scope.Widgets.listDN.selecteditem.destscn; //Reset the value of destscn to the new DN chosen. 
        $scope.Variables.svProcFD730WPK0_GetDeliveryDet.invoke();
    };

    $scope.svProcFD730WPK0_GetDeliveryDetonBeforeUpdate = function(variable, inputData) {
        if (inputData.pRackbin == undefined || inputData.pDDelNum == undefined) {
            return false;
        }
    };

    $scope.svProcFD730WPK0_GetDeliveryDetonSuccess = function(variable, data) {
        $scope.Variables.svUpdateProcFD730WPK0_UpdJobCount.invoke(); // Update job count
    };

    /*Undelivered list single tapped--->Select/Deselect only one job*/
    $scope.cardUndelJobsTap = function($event, $isolateScope, item, currentItemWidgets) {
        var undeliveredJob = $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs; //Undelivered Job List
        var selectedJob;

        //Get index of selected job
        $scope.Variables.statSelectedJobIndex = (_.findIndex(undeliveredJob, {
            dyejob: item.dyejob,
            fabseq: item.fabseq
        }));

        //Select jobs with access to deliver
        if ($scope.Widgets.listUndelJobs.getWidgets("containerAccess")[$scope.Variables.statSelectedJobIndex].show == false) {
            if ($scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[$scope.Variables.statSelectedJobIndex].datavalue == 'Y') { //If job checked, then deselect  + unchecked job from list

                $scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[$scope.Variables.statSelectedJobIndex].datavalue = 'N';
                $scope.Widgets.listUndelJobs.deselectItem($scope.Variables.statSelectedJobIndex);

            } else { //Select and check job for insertion

                $scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[$scope.Variables.statSelectedJobIndex].datavalue = 'Y';


                if ($scope.Widgets.toggleInstantAdd.datavalue == "Y") {
                    selectedJob = item.dyejob + ',' + item.fabseq; //Dyejob and fabseq of job selected
                    //Bind data input of variable
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pRackbin", $scope.Widgets.searchRackbin.datavalue);
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pDDelNum", $scope.Variables.statSelectedDN.dataSet.dataValue);
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pRedye", item.redye);
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pCanDeliver", item.canDeliver);
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pDyejobList", selectedJob);
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pFabseq", " ");
                    $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.invoke();
                }
            }
        }
    };

    /*Undelivered list double tapped--->Select/Deselect job of same group*/
    $scope.cardUndelJobsDoubletap = function($event, $isolateScope, item, currentItemWidgets) {
        var undeliveredJob = $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs; //Undelivered Job List
        var groupSelected = item.jobgroup; //Group of current item in list

        for (var i = 0; i < undeliveredJob.length; i++) {
            if ($scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs[i].jobgroup == groupSelected) {
                if ($scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[i].datavalue == 'Y') { //If jobs checked,  then deselect + unchecked jobs from list

                    $scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[i].datavalue = 'N';
                    $scope.Widgets.listUndelJobs.deselectItem(i);

                } else if ($scope.Widgets.listUndelJobs.getWidgets("containerAccess")[i].show == false) {
                    //Select and check joblist that have access to insert

                    $scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[i].datavalue = 'Y';
                    $scope.Widgets.listUndelJobs.selectItem(i); // select current item of same group
                }
            }
        }
    };

    $scope.btnAddToDNTap = function($event, $isolateScope) { //Add jobs of same group to DN
        var job;
        var joblist = ''; //A list of jobs with the same process/makeup location
        for (var i = 0; i < $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs.length; i++) {
            //Insert checked jobs to DN
            if ($scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[i].datavalue == 'Y') {

                job = ($scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs[i].dyejob) + ',' + ($scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs[i].fabseq) + ';'; //Concat dyejob + fabseq
                joblist += job; //Concat dyejobs with the same group selected
            }
        }
        //Bind data input of variable
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pPrgId", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pRackbin", $scope.Widgets.searchRackbin.datavalue);
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pDDelNum", $scope.Variables.statSelectedDN.dataSet.dataValue);
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pRedye", $scope.Widgets.listUndelJobs.selecteditem.redye);
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pCanDeliver", $scope.Widgets.listUndelJobs.selecteditem.canDeliver);
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pDyejobList", joblist);
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.setInput("pFabseq", " ");
        $scope.Variables.svProcFD730WPK0_InsDeliveredJobs.invoke();
    };

    //Successful insert of undelivered jobs in DN1
    $scope.svProcFD730WPK0_InsDeliveredJobsonSuccess = function(variable, data) {
        var undeliveredJob = $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs; //Undelivered Job List
        var jobSelected;

        if ($scope.Widgets.toggleInstantAdd.datavalue == "Y") { //Insertion of single dyejob to DN
            jobSelected = undeliveredJob[$scope.Variables.statSelectedJobIndex]; //Dyejob object selected to add

            $scope.Variables.svProcFD730WPK0_GetDeliveryDet.dataSet.poutDelDetList.push(jobSelected); //Add job selected in DN 

            undeliveredJob.splice($scope.Variables.statSelectedJobIndex, 1); //Remove dyejob selected from undelivered job list

        } else { //Insertion of checked jobs to DN
            for (var i = undeliveredJob.length - 1; i > 0; i--) {
                if ($scope.Widgets.listUndelJobs.getWidgets("checkboxAdd")[i].datavalue == 'Y') {
                    jobSelected = undeliveredJob[i]; //Job object selected to add
                    $scope.Variables.svProcFD730WPK0_GetDeliveryDet.dataSet.poutDelDetList.push(jobSelected); //Add job selected in DN 
                    undeliveredJob.splice(i, 1); //Remove job selected from undelivered job list
                }
            }
        }

        $scope.Variables.svUpdateProcFD730WPK0_UpdJobCount.invoke(); // Update job count
    };

    $scope.txtItemBarcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svProcFD730WPK0_InsScanDyejobFab.invoke();
    };

    $scope.svProcFD730WPK0_InsScanDyejobFabonSuccess = function(variable, data) {
        $scope.Variables.svProcFD730WPK0_GetDeliveryDet.invoke(); //Refresh Delivery Detail list to see scanned job
        $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.invoke(); //Refresh Undelivered Job list so that scanned job is removed from Undelivered Job list
        $scope.Variables.svUpdateProcFD730WPK0_UpdJobCount.invoke(); //Update count of jobs in DN
        $scope.Widgets.txtItemBarcode.datavalue = " "; //Clear textfield
    }

    $scope.svUpdateProcFD730WPK0_UpdJobCountonSuccess = function(variable, data) {
        $scope.Variables.svProcFD730WPK0_GetDelivery.invoke();
    };

    $scope.containerDeleteDyeJobTap = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Variables.svProcFD730WPK0_DelDeliveredJobs.invoke(); //Delete Job
    };

    //Successful delete of dyejobs from DN
    $scope.svProcFD730WPK0_DelDeliveredJobsonSuccess = function(variable, data) {

        var DNJob = $scope.Variables.svProcFD730WPK0_GetDeliveryDet.dataSet.poutDelDetList; //DN List

        var jobSelectedIndex = (_.findIndex(DNJob, {
            dyejob: $scope.Widgets.listDyeJobs.selecteditem.dyejob, //Index of selected job to be removed from DN
            fabseq: $scope.Widgets.listDyeJobs.selecteditem.fabseq
        }));

        var jobSelected = $scope.Variables.svProcFD730WPK0_GetDeliveryDet.dataSet.poutDelDetList[jobSelectedIndex]; //Dyejob object selected to delete

        $scope.Variables.svProcFD730WPK0_GetDeliveryDet.dataSet.poutDelDetList.splice(jobSelectedIndex, 1); //Remove dyejob selected from DN list

        $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.dataSet.poutUndelJobs.push(jobSelected); //Add job selected in undelivered job list

        $scope.Variables.svUpdateProcFD730WPK0_UpdJobCount.invoke(); //Update job count

    };

    //On select another location, hide DN Details panel, show DN panel
    $scope.searchRackbinChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.containerDNDetails.show = false;
        $scope.Widgets.containerMenu.show = true;
    };


    $scope.svUpdateProcFD730WPK0_UpdJobCountonBeforeUpdate = function(variable, inputData) {
        if (inputData.pDDelNum == undefined) {
            return false;
        }
    };

    $scope.svUpdateProcFD730WPK0_UpdJobCountonCanUpdate = function(variable, data) {
        $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.invoke(); //Refresh DN list	
    };

    $scope.svProcFD730WPK0_DelDNonSuccess = function(variable, data) {
        $scope.Variables.statQryDelDN.invoke(); // Delete dyejob from DN
        $scope.Widgets.listDN.onReorder(); //Refresh DN list
    };

    $scope.statQryDelDNonSuccess = function(variable, data) {
        $scope.Variables.svProcFD730WPK0_GetUndeliveredJobs.invoke(); //Refresh Undelivered list
        $scope.Widgets.dialogDelDN.close();
    };

}]);

Application.$controller("notificationalertdialog Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogAddDNController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //Add new DN
        $scope.btnAddDNTap = function($event, $isolateScope) {
            $scope.Variables.svProcFD730WPK0_InsNewDN.invoke();
            $scope.Widgets.listDN.onReorder();
        };
    }
]);

Application.$controller("dialogDelDNController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        //Delete DN 
        $scope.btnDeleteTap = function($event, $isolateScope) {
            $scope.Variables.svProcFD730WPK0_DelDN.invoke();
        };
    }
]);