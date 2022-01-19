/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wavemaker.runtime.data.dao.procedure.WMProcedureExecutor;
import com.wavemaker.runtime.data.exception.BlobContentNotFoundException;

import com.mu.cmt.pfs.pfsdb.models.procedure.*;

@Service
public class PfsdbProcedureExecutorServiceImpl implements PfsdbProcedureExecutorService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PfsdbProcedureExecutorServiceImpl.class);

    @Autowired
    @Qualifier("pfsdbWMProcedureExecutor")
    private WMProcedureExecutor procedureExecutor;

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd723pk0updateDeliveryOutResponse executeProcFd723pk0UpdateDeliveryOut(String pusrid, String pprgid, String pbarcode, String psaveOption, String psrcLcn, String pdestLcn, String pmanualdn) {
        Map<String, Object> params = new HashMap<>(8);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);
        params.put("pSaveOption", psaveOption);
        params.put("pSrcLcn", psrcLcn);
        params.put("pDestLcn", pdestLcn);
        params.put("pManualdn", pmanualdn);

        return procedureExecutor.executeNamedProcedure("ProcFd723pk0UpdateDeliveryOut", params, ProcFd723pk0updateDeliveryOutResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetNextProcessResponse executeProcFD730WPK0_GetNextProcess(String pprgId, String pdyejob, Integer pfabseq) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pPrgId", pprgId);
        params.put("pDyejob", pdyejob);
        params.put("pFabseq", pfabseq);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetNextProcess", params, ProcFd730wpk0GetNextProcessResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetLastLocationResponse executeProcFD730WPK0_GetLastLocation(String pprgId) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pPrgId", pprgId);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetLastLocation", params, ProcFd730wpk0GetLastLocationResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetRackbinResponse executeProcFD730WPK0_GetRackbin(String pprgId) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pPrgId", pprgId);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetRackbin", params, ProcFd730wpk0GetRackbinResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public SprocFd107pk0CqprocGetRejCodResponse executeSprocFd107pk0_cqprocGetRejCod(String pprgid) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("p_prgid", pprgid);

        return procedureExecutor.executeNamedProcedure("SprocFd107pk0_cqprocGetRejCod", params, SprocFd107pk0CqprocGetRejCodResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetUndeliveredJobsResponse executeProcFD730WPK0_GetUndeliveredJobs(String pprgId, String prackbin, String pdestScn) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pPrgId", pprgId);
        params.put("pRackbin", prackbin);
        params.put("p_DestScn", pdestScn);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetUndeliveredJobs", params, ProcFd730wpk0GetUndeliveredJobsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0InsScanDyejobFabResponse executeProcFD730WPK0_InsScanDyejobFab(String pprgId, String pbarcode, String pddelNum, String prackbin, String pdestScn) {
        Map<String, Object> params = new HashMap<>(6);

        params.put("pPrgId", pprgId);
        params.put("pBarcode", pbarcode);
        params.put("pDDelNum", pddelNum);
        params.put("pRackbin", prackbin);
        params.put("p_DestScn", pdestScn);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_InsScanDyejobFab", params, ProcFd730wpk0InsScanDyejobFabResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0CqprocGetLocationListResponse executeProcFd107pk0_cqprocGetLocationList(String pusrid, String pprgid) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_cqprocGetLocationList", params, ProcFd107pk0CqprocGetLocationListResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetDelDestLovResponse executeProcFD730WPK0_GetDelDestLOV(String pprgId, String prackbin) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pPrgId", pprgId);
        params.put("pRackbin", prackbin);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetDelDestLOV", params, ProcFd730wpk0GetDelDestLovResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Procfd723pk0getJobissueHisResponse executeProcfd723pk0GetJobissueHis(String pusrid, String pprgid, String pbarcode) {
        Map<String, Object> params = new HashMap<>(7);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("Procfd723pk0GetJobissueHis", params, Procfd723pk0getJobissueHisResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcFD730WPK0_DelDN(String pprgId, String pddelNum) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pPrgId", pprgId);
        params.put("pDDelNum", pddelNum);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_DelDN", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcFD730WPK0_InsNewDN(String pprgId, String prackbin, String pdesLcn) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pPrgId", pprgId);
        params.put("pRackbin", prackbin);
        params.put("pDesLcn", pdesLcn);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_InsNewDN", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd800wpk0McsetupsprocUpdWovalueResponse executeProcFD800WPK0_MCSETUPSprocUpdWOValue(String pprgid, String pusrid, String pwrkid, String pdyejoblist, Integer predye, Integer pprocseq, String pparamcod, String pactval) {
        Map<String, Object> params = new HashMap<>(9);

        params.put("p_prgid", pprgid);
        params.put("p_usrid", pusrid);
        params.put("p_wrkid", pwrkid);
        params.put("p_dyejoblist", pdyejoblist);
        params.put("p_redye", predye);
        params.put("p_procseq", pprocseq);
        params.put("p_paramcod", pparamcod);
        params.put("p_actval", pactval);

        return procedureExecutor.executeNamedProcedure("ProcFD800WPK0_MCSETUPSprocUpdWOValue", params, ProcFd800wpk0McsetupsprocUpdWovalueResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetJobGroupsResponse executeProcFD730WPK0_GetJobGroups(String pprgId, String pdyejob, Integer pfabseq, String pjobGroup) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pPrgId", pprgId);
        params.put("pDyejob", pdyejob);
        params.put("pFabseq", pfabseq);
        params.put("pJobGroup", pjobGroup);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetJobGroups", params, ProcFd730wpk0GetJobGroupsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public UpdateProcFd107pk0CqprocUpdInspectionStsResponse executeUpdateProcFd107pk0_CqprocUpdInspectionSts(UpdateProcFd107pk0CqprocUpdInspectionStsRequest updateProcFd107pk0cqprocUpdInspectionStsRequest) {
        Map<String, Object> params = new HashMap<>(10);

        params.put("p_usrid", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPusrid());
        params.put("p_prgid", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPprgid());
        params.put("p_cqsheetid", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPcqsheetid());
        params.put("p_remarks", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPremarks());
        params.put("p_Mainsts", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPmainsts());
        params.put("p_CondList", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPcondList());
        params.put("p_Processlist", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPprocesslist());
        params.put("p_rejectcod", updateProcFd107pk0cqprocUpdInspectionStsRequest.getPrejectcod());

        return procedureExecutor.executeNamedProcedure("updateProcFd107pk0_CqprocUpdInspectionSts", params, UpdateProcFd107pk0CqprocUpdInspectionStsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd723pk0getDeliveryInDetailsResponse executeProcFd723pk0GetDeliveryInDetails(String pusrid, String pprgid, String pbarcode) {
        Map<String, Object> params = new HashMap<>(7);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFd723pk0GetDeliveryInDetails", params, ProcFd723pk0getDeliveryInDetailsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public InputStream executeProcFD800WPK0_MCSETUPSprocGetFmchpic(String pprgid, String pusrid, String pfmchgrp) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("p_prgid", pprgid);
        params.put("p_usrid", pusrid);
        params.put("p_fmchgrp", pfmchgrp);

        ProcFd800wpk0McsetupsprocGetFmchpicResponse _result =  procedureExecutor.executeNamedProcedure("ProcFD800WPK0_MCSETUPSprocGetFmchpic", params, ProcFd800wpk0McsetupsprocGetFmchpicResponse.class);
        if(_result.getPfmchpic() == null) {
            LOGGER.debug("Blob content not exists for pfmchpic in procedure ProcFD800WPK0_MCSETUPSprocGetFmchpic");
            throw new BlobContentNotFoundException("Blob content not found for pfmchpic in procedure ProcFD800WPK0_MCSETUPSprocGetFmchpic");
        }
        return new ByteArrayInputStream(_result.getPfmchpic());
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0CqprocUptCqResponse executeProcFd107pk0_cqprocUptCQ(String pusrid, String pprgid, String pcqsheetid, String premarks, String pmainsts, String pcondList, String prejectcod, String pfabseqlist, String poperator) {
        Map<String, Object> params = new HashMap<>(11);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pCqsheetid", pcqsheetid);
        params.put("pRemarks", premarks);
        params.put("pMainsts", pmainsts);
        params.put("pCondList", pcondList);
        params.put("pRejectcod", prejectcod);
        params.put("pFabseqlist", pfabseqlist);
        params.put("pOperator", poperator);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_cqprocUptCQ", params, ProcFd107pk0CqprocUptCqResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcFD730WPK0_InsDeliveredJobs(String pprgId, String pddelNum, String prackbin, String pdyejobList, Integer pfabseq, Integer predye, String pcanDeliver) {
        Map<String, Object> params = new HashMap<>(7);

        params.put("pPrgId", pprgId);
        params.put("pDDelNum", pddelNum);
        params.put("pRackbin", prackbin);
        params.put("pDyejobList", pdyejobList);
        params.put("pFabseq", pfabseq);
        params.put("pRedye", predye);
        params.put("pCanDeliver", pcanDeliver);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_InsDeliveredJobs", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetDeliveryResponse executeProcFD730WPK0_GetDelivery(String pprgId, String prackbin) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pPrgId", pprgId);
        params.put("pRackbin", prackbin);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetDelivery", params, ProcFd730wpk0GetDeliveryResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd800wpk0McsetupsprocGetProcessWoResponse executeProcFD800WPK0_MCSETUPSprocGetProcessWO(String pprgid, String pusrid, String pdyejob, Integer predye, Integer pfabseq, Integer pprocseq, String poption, String pbarcode, String pwrkid) {
        Map<String, Object> params = new HashMap<>(12);

        params.put("p_prgid", pprgid);
        params.put("p_usrid", pusrid);
        params.put("p_dyejob", pdyejob);
        params.put("p_redye", predye);
        params.put("p_fabseq", pfabseq);
        params.put("p_procseq", pprocseq);
        params.put("p_option", poption);
        params.put("p_barcode", pbarcode);
        params.put("p_wrkid", pwrkid);

        return procedureExecutor.executeNamedProcedure("ProcFD800WPK0_MCSETUPSprocGetProcessWO", params, ProcFd800wpk0McsetupsprocGetProcessWoResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcFD730WPK0_DelDeliveredJobs(String pprgId, String pddelNum, String pdyejob, Integer pfabseq, Integer predye) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("pPrgId", pprgId);
        params.put("pDDelNum", pddelNum);
        params.put("pDyejob", pdyejob);
        params.put("pFabseq", pfabseq);
        params.put("pRedye", predye);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_DelDeliveredJobs", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0CqprocCqPendingListResponse executeProcFd107pk0_cqprocCqPendingList(String pusrid, String pprgid, String pstatusType, String pprocess, String plocation) {
        Map<String, Object> params = new HashMap<>(6);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pStatusType", pstatusType);
        params.put("pProcess", pprocess);
        params.put("pLocation", plocation);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_cqprocCqPendingList", params, ProcFd107pk0CqprocCqPendingListResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeUpdateProcFd107pk0_cqprocUpdInspectCondition(UpdateProcFd107pk0CqprocUpdInspectConditionRequest updateProcFd107pk0cqprocUpdInspectConditionRequest) {
        Map<String, Object> params = new HashMap<>(5);

        params.put("p_usrid", updateProcFd107pk0cqprocUpdInspectConditionRequest.getPusrid());
        params.put("p_prgid", updateProcFd107pk0cqprocUpdInspectConditionRequest.getPprgid());
        params.put("p_cqsheetid", updateProcFd107pk0cqprocUpdInspectConditionRequest.getPcqsheetid());
        params.put("p_cqcondseq", updateProcFd107pk0cqprocUpdInspectConditionRequest.getPcqcondseq());
        params.put("p_condval", updateProcFd107pk0cqprocUpdInspectConditionRequest.getPcondval());

        return procedureExecutor.executeNamedProcedure("updateProcFd107pk0_cqprocUpdInspectCondition", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd723pk0deliveryOutDetailsResponse executeProcFd723pk0DeliveryOutDetails(String pusrid, String pprgid, String pbarcode) {
        Map<String, Object> params = new HashMap<>(12);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFd723pk0DeliveryOutDetails", params, ProcFd723pk0deliveryOutDetailsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd723pk0placementDetailsResponse executeProcFd723pk0PlacementDetails(String pusrid, String pprgid, String pbarcode) {
        Map<String, Object> params = new HashMap<>(13);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFd723pk0PlacementDetails", params, ProcFd723pk0placementDetailsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd800wpk0McsetupsprocGetTestResultsResponse executeProcFD800WPK0_MCSETUPSprocGetTestResults(String pprgid, String pusrid, String pdyejob, Integer predye, Integer pfabseq, Integer pprocseq, String pcqstage, String pbarcode) {
        Map<String, Object> params = new HashMap<>(11);

        params.put("p_prgid", pprgid);
        params.put("p_usrid", pusrid);
        params.put("p_dyejob", pdyejob);
        params.put("p_redye", predye);
        params.put("p_fabseq", pfabseq);
        params.put("p_procseq", pprocseq);
        params.put("p_cqstage", pcqstage);
        params.put("p_barcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFD800WPK0_MCSETUPSprocGetTestResults", params, ProcFd800wpk0McsetupsprocGetTestResultsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd350pk0ModjobGetBatchDetailResponse executeProcFD350PK0_MODJOB_GetBatchDetail(String pprgid, String pbatchSeqBarcode) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pPrgid", pprgid);
        params.put("pBatchSeqBarcode", pbatchSeqBarcode);

        return procedureExecutor.executeNamedProcedure("ProcFD350PK0_MODJOB_GetBatchDetail", params, ProcFd350pk0ModjobGetBatchDetailResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcFd107pk0_CqprocUpdateIssue(String pusrid, String pprgid, String pbarcode, String premarks) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("p_usrid", pusrid);
        params.put("p_prgid", pprgid);
        params.put("p_barcode", pbarcode);
        params.put("p_remarks", premarks);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_CqprocUpdateIssue", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd1000wpk0ModjobIsPalletReadyResponse executeProcFD1000WPK0_MODJOB_isPalletReady(String pprgid, String pdyejob, String pbarcode) {
        Map<String, Object> params = new HashMap<>(6);

        params.put("pprgid", pprgid);
        params.put("pdyejob", pdyejob);
        params.put("pbarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFD1000WPK0_MODJOB_isPalletReady", params, ProcFd1000wpk0ModjobIsPalletReadyResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetMakLcnResponse executeProcFD730WPK0_GetMakLcn(String pprgId, String pdyejob, Integer pfabseq) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pPrgId", pprgId);
        params.put("pDyejob", pdyejob);
        params.put("pFabseq", pfabseq);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetMakLcn", params, ProcFd730wpk0GetMakLcnResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0CqprocGetDetailsAndSheetResponse executeProcFd107pk0_CqprocGetDetailsAndSheet(String pusrid, String pprgid, String pbarcode) {
        Map<String, Object> params = new HashMap<>(14);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_CqprocGetDetailsAndSheet", params, ProcFd107pk0CqprocGetDetailsAndSheetResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0getInspectionCondListResponse executeProcFd107pk0GetInspectionCondList(String pusrid, String pprgid, String pbarcode, Integer pinslayout) {
        Map<String, Object> params = new HashMap<>(8);

        params.put("p_usrid", pusrid);
        params.put("p_prgid", pprgid);
        params.put("pBarcode", pbarcode);
        params.put("p_inslayout", pinslayout);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0GetInspectionCondList", params, ProcFd107pk0getInspectionCondListResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeUpdateProcFD730WPK_LastRackbin(UpdateProcFd730wpkLastRackbinRequest updateProcFd730wpkLastRackbinRequest) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pPrgId", updateProcFd730wpkLastRackbinRequest.getPprgId());
        params.put("pRackbin", updateProcFd730wpkLastRackbinRequest.getPrackbin());

        return procedureExecutor.executeNamedProcedure("UpdateProcFD730WPK_LastRackbin", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0CqprocCheckUserResponse executeProcFd107pk0_cqprocCheckUser(String puser, String pprgid, String paccessKey) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pUser", puser);
        params.put("pPrgid", pprgid);
        params.put("pAccessKey", paccessKey);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_cqprocCheckUser", params, ProcFd107pk0CqprocCheckUserResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd724pk0scanDetResponse executeProcFd724pk0ScanDet(String pusrid, String pprgid, String pbarcode, String poperatorEmpCode) {
        Map<String, Object> params = new HashMap<>(19);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);
        params.put("pOperatorEmpCode", poperatorEmpCode);

        return procedureExecutor.executeNamedProcedure("ProcFd724pk0ScanDet", params, ProcFd724pk0scanDetResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0CqprocReqSignOffJobListResponse executeProcFd107pk0_cqprocReqSignOffJobList(String pusrid, String pprgid, String pbarcode) {
        Map<String, Object> params = new HashMap<>(6);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_cqprocReqSignOffJobList", params, ProcFd107pk0CqprocReqSignOffJobListResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd723pk0updateDeliveryInResponse executeProcFd723pk0UpdateDeliveryIn(String pusrid, String pprgid, String pbarcode, String psaveOption, String pdestLcn) {
        Map<String, Object> params = new HashMap<>(6);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);
        params.put("pSaveOption", psaveOption);
        params.put("pDestLcn", pdestLcn);

        return procedureExecutor.executeNamedProcedure("ProcFd723pk0UpdateDeliveryIn", params, ProcFd723pk0updateDeliveryInResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd724pk0checkEmpCodeResponse executeProcFd724pk0CheckEmpCode(String pempcode, String pprgid) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("p_empcode", pempcode);
        params.put("p_prgid", pprgid);

        return procedureExecutor.executeNamedProcedure("ProcFd724pk0CheckEmpCode", params, ProcFd724pk0checkEmpCodeResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd730wpk0GetDeliveryDetResponse executeProcFD730WPK0_GetDeliveryDet(String pprgId, String pddelNum, String prackbin) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pPrgId", pprgId);
        params.put("pDDelNum", pddelNum);
        params.put("pRackbin", prackbin);

        return procedureExecutor.executeNamedProcedure("ProcFD730WPK0_GetDeliveryDet", params, ProcFd730wpk0GetDeliveryDetResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd723pk0updPlacementResponse executeProcFd723pk0UpdPlacement(String pusrid, String pprgid, String pbarcode2, String psaveOption, String pplaceLcn, String pplaceRackbin, String poperator, String pfabseqlist) {
        Map<String, Object> params = new HashMap<>(10);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode2", pbarcode2);
        params.put("pSaveOption", psaveOption);
        params.put("pPlaceLcn", pplaceLcn);
        params.put("pPlaceRackbin", pplaceRackbin);
        params.put("pOperator", poperator);
        params.put("pFabseqlist", pfabseqlist);

        return procedureExecutor.executeNamedProcedure("ProcFd723pk0UpdPlacement", params, ProcFd723pk0updPlacementResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd800wpk0McsetupsprocUpdTstRsltResponse executeProcFD800WPK0_MCSETUPSprocUpdTstRslt(String pprgid, String pusrid, String pwrkid, String pdyejoblist, Integer predye, Integer pprocseq, String pcqcod, String pactval, String pcqstage, String priblance) {
        Map<String, Object> params = new HashMap<>(11);

        params.put("p_prgid", pprgid);
        params.put("p_usrid", pusrid);
        params.put("p_wrkid", pwrkid);
        params.put("p_dyejoblist", pdyejoblist);
        params.put("p_redye", predye);
        params.put("p_procseq", pprocseq);
        params.put("p_cqcod", pcqcod);
        params.put("p_actval", pactval);
        params.put("p_cqstage", pcqstage);
        params.put("p_riblance", priblance);

        return procedureExecutor.executeNamedProcedure("ProcFD800WPK0_MCSETUPSprocUpdTstRslt", params, ProcFd800wpk0McsetupsprocUpdTstRsltResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd107pk0CqprocGetProcessListResponse executeProcFd107pk0_cqprocGetProcessList(String pusrid, String pprgid) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);

        return procedureExecutor.executeNamedProcedure("ProcFd107pk0_cqprocGetProcessList", params, ProcFd107pk0CqprocGetProcessListResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd723pk0getFabDetailsResponse executeProcFd723pk0GetFabDetails(String pusrid, String pprgid, String pbarcode) {
        Map<String, Object> params = new HashMap<>(10);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);

        return procedureExecutor.executeNamedProcedure("ProcFd723pk0GetFabDetails", params, ProcFd723pk0getFabDetailsResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public ProcFd724updateScanProcessResponse executeProcFd724UpdateScanProcess(String pusrid, String pprgid, String pbarcode, String psaveOption, String pprocess, String poperator, String pmchcod, String pscanmts, String pprocessAction, String pfabseqlist, String phaltRemarks) {
        Map<String, Object> params = new HashMap<>(14);

        params.put("pUsrid", pusrid);
        params.put("pPrgid", pprgid);
        params.put("pBarcode", pbarcode);
        params.put("pSaveOption", psaveOption);
        params.put("pProcess", pprocess);
        params.put("pOperator", poperator);
        params.put("pMchcod", pmchcod);
        params.put("pScanmts", pscanmts);
        params.put("pProcessAction", pprocessAction);
        params.put("pFabseqlist", pfabseqlist);
        params.put("pHaltRemarks", phaltRemarks);

        return procedureExecutor.executeNamedProcedure("ProcFd724UpdateScanProcess", params, ProcFd724updateScanProcessResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeUpdateProcFD1000WPK0_MODJOB_updJobWeight(UpdateProcFd1000wpk0ModjobUpdJobWeightRequest updateProcFd1000wpk0modjobUpdJobWeightRequest) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pprgid", updateProcFd1000wpk0modjobUpdJobWeightRequest.getPprgid());
        params.put("pdyejob", updateProcFd1000wpk0modjobUpdJobWeightRequest.getPdyejob());
        params.put("pfabseq", updateProcFd1000wpk0modjobUpdJobWeightRequest.getPfabseq());
        params.put("pweight", updateProcFd1000wpk0modjobUpdJobWeightRequest.getPweight());

        return procedureExecutor.executeNamedProcedure("UpdateProcFD1000WPK0_MODJOB_updJobWeight", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeUpdateProcFD730WPK0_UpdJobCount(UpdateProcFd730wpk0UpdJobCountRequest updateProcFd730wpk0updJobCountRequest) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pPrgId", updateProcFd730wpk0updJobCountRequest.getPprgId());
        params.put("pDDelNum", updateProcFd730wpk0updJobCountRequest.getPddelNum());

        return procedureExecutor.executeNamedProcedure("UpdateProcFD730WPK0_UpdJobCount", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Void executeProcFD350PK0_MODJOB_SaveBatchWgt(String pprgid, String pbchseq, Double pwgt, String pwrkid) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pPrgid", pprgid);
        params.put("pBchseq", pbchseq);
        params.put("pWgt", pwgt);
        params.put("pWrkid", pwrkid);

        return procedureExecutor.executeNamedProcedure("ProcFD350PK0_MODJOB_SaveBatchWgt", params, Void.class);
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public UpdateFd107pk0CqprocRequestSignoffResponse executeUpdateFd107pk0_cqprocRequestSignoff(UpdateFd107pk0CqprocRequestSignoffRequest updateFd107pk0cqprocRequestSignoffRequest) {
        Map<String, Object> params = new HashMap<>(4);

        params.put("pPrgid", updateFd107pk0cqprocRequestSignoffRequest.getPprgid());
        params.put("pDyejoblist", updateFd107pk0cqprocRequestSignoffRequest.getPdyejoblist());

        return procedureExecutor.executeNamedProcedure("updateFd107pk0_cqprocRequestSignoff", params, UpdateFd107pk0CqprocRequestSignoffResponse.class);
    }

}