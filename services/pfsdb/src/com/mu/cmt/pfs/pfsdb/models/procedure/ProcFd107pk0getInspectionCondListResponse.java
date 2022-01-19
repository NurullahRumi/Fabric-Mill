/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd107pk0getInspectionCondListResponse implements Serializable {


    @ColumnAlias("p_outMsg")
    private String poutMsg;

    @ColumnAlias("p_outCondlist")
    private List<ProcFd107pk0getInspectionCondListResponsePoutCondlist> poutCondlist;

    @ColumnAlias("p_outCqsheetid")
    private String poutCqsheetid;

    @ColumnAlias("pOutCallplacement")
    private String poutCallplacement;

    public String getPoutMsg() {
        return this.poutMsg;
    }

    public void setPoutMsg(String poutMsg) {
        this.poutMsg = poutMsg;
    }

    public List<ProcFd107pk0getInspectionCondListResponsePoutCondlist> getPoutCondlist() {
        return this.poutCondlist;
    }

    public void setPoutCondlist(List<ProcFd107pk0getInspectionCondListResponsePoutCondlist> poutCondlist) {
        this.poutCondlist = poutCondlist;
    }

    public String getPoutCqsheetid() {
        return this.poutCqsheetid;
    }

    public void setPoutCqsheetid(String poutCqsheetid) {
        this.poutCqsheetid = poutCqsheetid;
    }

    public String getPoutCallplacement() {
        return this.poutCallplacement;
    }

    public void setPoutCallplacement(String poutCallplacement) {
        this.poutCallplacement = poutCallplacement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd107pk0getInspectionCondListResponse)) return false;
        final ProcFd107pk0getInspectionCondListResponse procFd107pk0getInspectionCondListResponse = (ProcFd107pk0getInspectionCondListResponse) o;
        return Objects.equals(getPoutMsg(), procFd107pk0getInspectionCondListResponse.getPoutMsg()) &&
                Objects.equals(getPoutCondlist(), procFd107pk0getInspectionCondListResponse.getPoutCondlist()) &&
                Objects.equals(getPoutCqsheetid(), procFd107pk0getInspectionCondListResponse.getPoutCqsheetid()) &&
                Objects.equals(getPoutCallplacement(), procFd107pk0getInspectionCondListResponse.getPoutCallplacement());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutMsg(),
                getPoutCondlist(),
                getPoutCqsheetid(),
                getPoutCallplacement());
    }
}