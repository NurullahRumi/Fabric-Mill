/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd723pk0getDeliveryInDetailsResponse implements Serializable {


    @ColumnAlias("poutDestLcn")
    private String poutDestLcn;

    @ColumnAlias("poutDyejobDet")
    private String poutDyejobDet;

    @ColumnAlias("poutFabdet")
    private String poutFabdet;

    @ColumnAlias("poutMsg")
    private String poutMsg;

    public String getPoutDestLcn() {
        return this.poutDestLcn;
    }

    public void setPoutDestLcn(String poutDestLcn) {
        this.poutDestLcn = poutDestLcn;
    }

    public String getPoutDyejobDet() {
        return this.poutDyejobDet;
    }

    public void setPoutDyejobDet(String poutDyejobDet) {
        this.poutDyejobDet = poutDyejobDet;
    }

    public String getPoutFabdet() {
        return this.poutFabdet;
    }

    public void setPoutFabdet(String poutFabdet) {
        this.poutFabdet = poutFabdet;
    }

    public String getPoutMsg() {
        return this.poutMsg;
    }

    public void setPoutMsg(String poutMsg) {
        this.poutMsg = poutMsg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd723pk0getDeliveryInDetailsResponse)) return false;
        final ProcFd723pk0getDeliveryInDetailsResponse procFd723pk0getDeliveryInDetailsResponse = (ProcFd723pk0getDeliveryInDetailsResponse) o;
        return Objects.equals(getPoutDestLcn(), procFd723pk0getDeliveryInDetailsResponse.getPoutDestLcn()) &&
                Objects.equals(getPoutDyejobDet(), procFd723pk0getDeliveryInDetailsResponse.getPoutDyejobDet()) &&
                Objects.equals(getPoutFabdet(), procFd723pk0getDeliveryInDetailsResponse.getPoutFabdet()) &&
                Objects.equals(getPoutMsg(), procFd723pk0getDeliveryInDetailsResponse.getPoutMsg());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDestLcn(),
                getPoutDyejobDet(),
                getPoutFabdet(),
                getPoutMsg());
    }
}