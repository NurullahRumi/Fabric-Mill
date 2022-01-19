/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.wavemaker.runtime.data.export.ExportOptions;

import com.mu.cmt.pfs.pfsdb.models.query.*;

public interface PfsdbQueryExecutorService {

    Integer executeQryDelDN(String pddelNum);

    QryDefEmpcodeResponse executeQryDefEmpcode(String pusrid);

    Page<QryDyejobFabRoutesResponse> executeQryDyejobFabRoutes(String dyejob, String fabseq, Pageable pageable);

    void exportQryDyejobFabRoutes(String dyejob, String fabseq, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    QrySy9200pk0callWmakerappResponse executeQrySy9200pk0CallWmakerapp(String pwmprogid, String pparamList);

    Page<QyProcessCqradioset2valuesResponse> executeQyProcessCQRadioset2Values(Pageable pageable);

    void exportQyProcessCQRadioset2Values(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QyProcessCqradiosetValuesResponse> executeQyProcessCQRadiosetValues(Pageable pageable);

    void exportQyProcessCQRadiosetValues(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QrySignOffReldoubtDyeJobFabRouteResponse> executeQrySignOffReldoubtDyeJobFabRoute(String dyejob, Integer fabseq, Pageable pageable);

    void exportQrySignOffReldoubtDyeJobFabRoute(String dyejob, Integer fabseq, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryEmployeeCodeSignOffResponse> executeQryEmployeeCodeSignOff(String pusrid, Pageable pageable);

    void exportQryEmployeeCodeSignOff(String pusrid, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryFabseqLovResponse> executeQryFabseqLOV(String pdyejob, Pageable pageable);

    void exportQryFabseqLOV(String pdyejob, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QrySignOffRejectDyeJobFabRouteResponse> executeQrySignOffRejectDyeJobFabRoute(String dyejob, Integer fabseq, Pageable pageable);

    void exportQrySignOffRejectDyeJobFabRoute(String dyejob, Integer fabseq, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    QryCheckEmpcodeResponse executeQryCheckEmpcode(String pusrid);

}