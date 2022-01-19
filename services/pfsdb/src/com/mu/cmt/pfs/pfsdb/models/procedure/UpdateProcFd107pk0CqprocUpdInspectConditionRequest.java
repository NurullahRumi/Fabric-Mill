/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateProcFd107pk0CqprocUpdInspectConditionRequest implements Serializable {


    @JsonProperty("p_usrid")
    private String pusrid;

    @JsonProperty("p_prgid")
    private String pprgid;

    @JsonProperty("p_cqsheetid")
    private String pcqsheetid;

    @JsonProperty("p_cqcondseq")
    private String pcqcondseq;

    @JsonProperty("p_condval")
    private String pcondval;

    public String getPusrid() {
        return this.pusrid;
    }

    public void setPusrid(String pusrid) {
        this.pusrid = pusrid;
    }

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public String getPcqsheetid() {
        return this.pcqsheetid;
    }

    public void setPcqsheetid(String pcqsheetid) {
        this.pcqsheetid = pcqsheetid;
    }

    public String getPcqcondseq() {
        return this.pcqcondseq;
    }

    public void setPcqcondseq(String pcqcondseq) {
        this.pcqcondseq = pcqcondseq;
    }

    public String getPcondval() {
        return this.pcondval;
    }

    public void setPcondval(String pcondval) {
        this.pcondval = pcondval;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcFd107pk0CqprocUpdInspectConditionRequest)) return false;
        final UpdateProcFd107pk0CqprocUpdInspectConditionRequest updateProcFd107pk0cqprocUpdInspectConditionRequest = (UpdateProcFd107pk0CqprocUpdInspectConditionRequest) o;
        return Objects.equals(getPusrid(), updateProcFd107pk0cqprocUpdInspectConditionRequest.getPusrid()) &&
                Objects.equals(getPprgid(), updateProcFd107pk0cqprocUpdInspectConditionRequest.getPprgid()) &&
                Objects.equals(getPcqsheetid(), updateProcFd107pk0cqprocUpdInspectConditionRequest.getPcqsheetid()) &&
                Objects.equals(getPcqcondseq(), updateProcFd107pk0cqprocUpdInspectConditionRequest.getPcqcondseq()) &&
                Objects.equals(getPcondval(), updateProcFd107pk0cqprocUpdInspectConditionRequest.getPcondval());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPusrid(),
                getPprgid(),
                getPcqsheetid(),
                getPcqcondseq(),
                getPcondval());
    }
}