/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.InputStream;

import com.mu.cmt.pfs.pfsdb.models.procedure.*;

public interface PfsdbProcedureExecutorService {

    ProcFd723pk0updateDeliveryOutResponse executeProcFd723pk0UpdateDeliveryOut(String pusrid, String pprgid, String pbarcode, String psaveOption, String psrcLcn, String pdestLcn, String pmanualdn);

    ProcFd730wpk0GetNextProcessResponse executeProcFD730WPK0_GetNextProcess(String pprgId, String pdyejob, Integer pfabseq);

    ProcFd730wpk0GetLastLocationResponse executeProcFD730WPK0_GetLastLocation(String pprgId);

    ProcFd730wpk0GetRackbinResponse executeProcFD730WPK0_GetRackbin(String pprgId);

    SprocFd107pk0CqprocGetRejCodResponse executeSprocFd107pk0_cqprocGetRejCod(String pprgid);

    ProcFd730wpk0GetUndeliveredJobsResponse executeProcFD730WPK0_GetUndeliveredJobs(String pprgId, String prackbin, String pdestScn);

    ProcFd730wpk0InsScanDyejobFabResponse executeProcFD730WPK0_InsScanDyejobFab(String pprgId, String pbarcode, String pddelNum, String prackbin, String pdestScn);

    ProcFd107pk0CqprocGetLocationListResponse executeProcFd107pk0_cqprocGetLocationList(String pusrid, String pprgid);

    ProcFd730wpk0GetDelDestLovResponse executeProcFD730WPK0_GetDelDestLOV(String pprgId, String prackbin);

    Procfd723pk0getJobissueHisResponse executeProcfd723pk0GetJobissueHis(String pusrid, String pprgid, String pbarcode);

    Void executeProcFD730WPK0_DelDN(String pprgId, String pddelNum);

    Void executeProcFD730WPK0_InsNewDN(String pprgId, String prackbin, String pdesLcn);

    ProcFd800wpk0McsetupsprocUpdWovalueResponse executeProcFD800WPK0_MCSETUPSprocUpdWOValue(String pprgid, String pusrid, String pwrkid, String pdyejoblist, Integer predye, Integer pprocseq, String pparamcod, String pactval);

    ProcFd730wpk0GetJobGroupsResponse executeProcFD730WPK0_GetJobGroups(String pprgId, String pdyejob, Integer pfabseq, String pjobGroup);

    UpdateProcFd107pk0CqprocUpdInspectionStsResponse executeUpdateProcFd107pk0_CqprocUpdInspectionSts(UpdateProcFd107pk0CqprocUpdInspectionStsRequest updateProcFd107pk0cqprocUpdInspectionStsRequest);

    ProcFd723pk0getDeliveryInDetailsResponse executeProcFd723pk0GetDeliveryInDetails(String pusrid, String pprgid, String pbarcode);

    InputStream executeProcFD800WPK0_MCSETUPSprocGetFmchpic(String pprgid, String pusrid, String pfmchgrp);

    ProcFd107pk0CqprocUptCqResponse executeProcFd107pk0_cqprocUptCQ(String pusrid, String pprgid, String pcqsheetid, String premarks, String pmainsts, String pcondList, String prejectcod, String pfabseqlist, String poperator);

    Void executeProcFD730WPK0_InsDeliveredJobs(String pprgId, String pddelNum, String prackbin, String pdyejobList, Integer pfabseq, Integer predye, String pcanDeliver);

    ProcFd730wpk0GetDeliveryResponse executeProcFD730WPK0_GetDelivery(String pprgId, String prackbin);

    ProcFd800wpk0McsetupsprocGetProcessWoResponse executeProcFD800WPK0_MCSETUPSprocGetProcessWO(String pprgid, String pusrid, String pdyejob, Integer predye, Integer pfabseq, Integer pprocseq, String poption, String pbarcode, String pwrkid);

    Void executeProcFD730WPK0_DelDeliveredJobs(String pprgId, String pddelNum, String pdyejob, Integer pfabseq, Integer predye);

    ProcFd107pk0CqprocCqPendingListResponse executeProcFd107pk0_cqprocCqPendingList(String pusrid, String pprgid, String pstatusType, String pprocess, String plocation);

    Void executeUpdateProcFd107pk0_cqprocUpdInspectCondition(UpdateProcFd107pk0CqprocUpdInspectConditionRequest updateProcFd107pk0cqprocUpdInspectConditionRequest);

    ProcFd723pk0deliveryOutDetailsResponse executeProcFd723pk0DeliveryOutDetails(String pusrid, String pprgid, String pbarcode);

    ProcFd723pk0placementDetailsResponse executeProcFd723pk0PlacementDetails(String pusrid, String pprgid, String pbarcode);

    ProcFd800wpk0McsetupsprocGetTestResultsResponse executeProcFD800WPK0_MCSETUPSprocGetTestResults(String pprgid, String pusrid, String pdyejob, Integer predye, Integer pfabseq, Integer pprocseq, String pcqstage, String pbarcode);

    ProcFd350pk0ModjobGetBatchDetailResponse executeProcFD350PK0_MODJOB_GetBatchDetail(String pprgid, String pbatchSeqBarcode);

    Void executeProcFd107pk0_CqprocUpdateIssue(String pusrid, String pprgid, String pbarcode, String premarks);

    ProcFd1000wpk0ModjobIsPalletReadyResponse executeProcFD1000WPK0_MODJOB_isPalletReady(String pprgid, String pdyejob, String pbarcode);

    ProcFd730wpk0GetMakLcnResponse executeProcFD730WPK0_GetMakLcn(String pprgId, String pdyejob, Integer pfabseq);

    ProcFd107pk0CqprocGetDetailsAndSheetResponse executeProcFd107pk0_CqprocGetDetailsAndSheet(String pusrid, String pprgid, String pbarcode);

    ProcFd107pk0getInspectionCondListResponse executeProcFd107pk0GetInspectionCondList(String pusrid, String pprgid, String pbarcode, Integer pinslayout);

    Void executeUpdateProcFD730WPK_LastRackbin(UpdateProcFd730wpkLastRackbinRequest updateProcFd730wpkLastRackbinRequest);

    ProcFd107pk0CqprocCheckUserResponse executeProcFd107pk0_cqprocCheckUser(String puser, String pprgid, String paccessKey);

    ProcFd724pk0scanDetResponse executeProcFd724pk0ScanDet(String pusrid, String pprgid, String pbarcode, String poperatorEmpCode);

    ProcFd107pk0CqprocReqSignOffJobListResponse executeProcFd107pk0_cqprocReqSignOffJobList(String pusrid, String pprgid, String pbarcode);

    ProcFd723pk0updateDeliveryInResponse executeProcFd723pk0UpdateDeliveryIn(String pusrid, String pprgid, String pbarcode, String psaveOption, String pdestLcn);

    ProcFd724pk0checkEmpCodeResponse executeProcFd724pk0CheckEmpCode(String pempcode, String pprgid);

    ProcFd730wpk0GetDeliveryDetResponse executeProcFD730WPK0_GetDeliveryDet(String pprgId, String pddelNum, String prackbin);

    ProcFd723pk0updPlacementResponse executeProcFd723pk0UpdPlacement(String pusrid, String pprgid, String pbarcode2, String psaveOption, String pplaceLcn, String pplaceRackbin, String poperator, String pfabseqlist);

    ProcFd800wpk0McsetupsprocUpdTstRsltResponse executeProcFD800WPK0_MCSETUPSprocUpdTstRslt(String pprgid, String pusrid, String pwrkid, String pdyejoblist, Integer predye, Integer pprocseq, String pcqcod, String pactval, String pcqstage, String priblance);

    ProcFd107pk0CqprocGetProcessListResponse executeProcFd107pk0_cqprocGetProcessList(String pusrid, String pprgid);

    ProcFd723pk0getFabDetailsResponse executeProcFd723pk0GetFabDetails(String pusrid, String pprgid, String pbarcode);

    ProcFd724updateScanProcessResponse executeProcFd724UpdateScanProcess(String pusrid, String pprgid, String pbarcode, String psaveOption, String pprocess, String poperator, String pmchcod, String pscanmts, String pprocessAction, String pfabseqlist, String phaltRemarks);

    Void executeUpdateProcFD1000WPK0_MODJOB_updJobWeight(UpdateProcFd1000wpk0ModjobUpdJobWeightRequest updateProcFd1000wpk0modjobUpdJobWeightRequest);

    Void executeUpdateProcFD730WPK0_UpdJobCount(UpdateProcFd730wpk0UpdJobCountRequest updateProcFd730wpk0updJobCountRequest);

    Void executeProcFD350PK0_MODJOB_SaveBatchWgt(String pprgid, String pbchseq, Double pwgt, String pwrkid);

    UpdateFd107pk0CqprocRequestSignoffResponse executeUpdateFd107pk0_cqprocRequestSignoff(UpdateFd107pk0CqprocRequestSignoffRequest updateFd107pk0cqprocRequestSignoffRequest);

}