/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd107pk0CqprocUptCqResponse implements Serializable {


    @ColumnAlias("poutMsg")
    private String poutMsg;

    @ColumnAlias("poutErrmsg")
    private String poutErrmsg;

    public String getPoutMsg() {
        return this.poutMsg;
    }

    public void setPoutMsg(String poutMsg) {
        this.poutMsg = poutMsg;
    }

    public String getPoutErrmsg() {
        return this.poutErrmsg;
    }

    public void setPoutErrmsg(String poutErrmsg) {
        this.poutErrmsg = poutErrmsg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd107pk0CqprocUptCqResponse)) return false;
        final ProcFd107pk0CqprocUptCqResponse procFd107pk0cqprocUptCqResponse = (ProcFd107pk0CqprocUptCqResponse) o;
        return Objects.equals(getPoutMsg(), procFd107pk0cqprocUptCqResponse.getPoutMsg()) &&
                Objects.equals(getPoutErrmsg(), procFd107pk0cqprocUptCqResponse.getPoutErrmsg());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutMsg(),
                getPoutErrmsg());
    }
}