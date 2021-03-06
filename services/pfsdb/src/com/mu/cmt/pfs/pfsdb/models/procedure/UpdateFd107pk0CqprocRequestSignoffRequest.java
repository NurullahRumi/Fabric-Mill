/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateFd107pk0CqprocRequestSignoffRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pDyejoblist")
    private String pdyejoblist;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public String getPdyejoblist() {
        return this.pdyejoblist;
    }

    public void setPdyejoblist(String pdyejoblist) {
        this.pdyejoblist = pdyejoblist;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateFd107pk0CqprocRequestSignoffRequest)) return false;
        final UpdateFd107pk0CqprocRequestSignoffRequest updateFd107pk0cqprocRequestSignoffRequest = (UpdateFd107pk0CqprocRequestSignoffRequest) o;
        return Objects.equals(getPprgid(), updateFd107pk0cqprocRequestSignoffRequest.getPprgid()) &&
                Objects.equals(getPdyejoblist(), updateFd107pk0cqprocRequestSignoffRequest.getPdyejoblist());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPdyejoblist());
    }
}