/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class UpdateFd107pk0CqprocRequestSignoffResponse implements Serializable {


    @ColumnAlias("pOutmsg")
    private String poutmsg;

    @ColumnAlias("pOuterrmsg")
    private String pouterrmsg;

    public String getPoutmsg() {
        return this.poutmsg;
    }

    public void setPoutmsg(String poutmsg) {
        this.poutmsg = poutmsg;
    }

    public String getPouterrmsg() {
        return this.pouterrmsg;
    }

    public void setPouterrmsg(String pouterrmsg) {
        this.pouterrmsg = pouterrmsg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateFd107pk0CqprocRequestSignoffResponse)) return false;
        final UpdateFd107pk0CqprocRequestSignoffResponse updateFd107pk0cqprocRequestSignoffResponse = (UpdateFd107pk0CqprocRequestSignoffResponse) o;
        return Objects.equals(getPoutmsg(), updateFd107pk0cqprocRequestSignoffResponse.getPoutmsg()) &&
                Objects.equals(getPouterrmsg(), updateFd107pk0cqprocRequestSignoffResponse.getPouterrmsg());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutmsg(),
                getPouterrmsg());
    }
}