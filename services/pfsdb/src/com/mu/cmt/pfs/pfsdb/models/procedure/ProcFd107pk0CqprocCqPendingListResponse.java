/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd107pk0CqprocCqPendingListResponse implements Serializable {


    @ColumnAlias("poutPendList")
    private List<ProcFd107pk0CqprocCqPendingListResponsePoutPendList> poutPendList;

    public List<ProcFd107pk0CqprocCqPendingListResponsePoutPendList> getPoutPendList() {
        return this.poutPendList;
    }

    public void setPoutPendList(List<ProcFd107pk0CqprocCqPendingListResponsePoutPendList> poutPendList) {
        this.poutPendList = poutPendList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd107pk0CqprocCqPendingListResponse)) return false;
        final ProcFd107pk0CqprocCqPendingListResponse procFd107pk0cqprocCqPendingListResponse = (ProcFd107pk0CqprocCqPendingListResponse) o;
        return Objects.equals(getPoutPendList(), procFd107pk0cqprocCqPendingListResponse.getPoutPendList());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPendList());
    }
}