/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateProcFd730wpkLastRackbinRequest implements Serializable {


    @JsonProperty("pPrgId")
    private String pprgId;

    @JsonProperty("pRackbin")
    private String prackbin;

    public String getPprgId() {
        return this.pprgId;
    }

    public void setPprgId(String pprgId) {
        this.pprgId = pprgId;
    }

    public String getPrackbin() {
        return this.prackbin;
    }

    public void setPrackbin(String prackbin) {
        this.prackbin = prackbin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcFd730wpkLastRackbinRequest)) return false;
        final UpdateProcFd730wpkLastRackbinRequest updateProcFd730wpkLastRackbinRequest = (UpdateProcFd730wpkLastRackbinRequest) o;
        return Objects.equals(getPprgId(), updateProcFd730wpkLastRackbinRequest.getPprgId()) &&
                Objects.equals(getPrackbin(), updateProcFd730wpkLastRackbinRequest.getPrackbin());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgId(),
                getPrackbin());
    }
}