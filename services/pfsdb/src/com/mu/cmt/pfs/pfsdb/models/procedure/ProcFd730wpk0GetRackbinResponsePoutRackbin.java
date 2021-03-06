/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd730wpk0GetRackbinResponsePoutRackbin implements Serializable {


    @ColumnAlias("RACKBIN")
    private String rackbin;

    public String getRackbin() {
        return this.rackbin;
    }

    public void setRackbin(String rackbin) {
        this.rackbin = rackbin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd730wpk0GetRackbinResponsePoutRackbin)) return false;
        final ProcFd730wpk0GetRackbinResponsePoutRackbin procFd730wpk0getRackbinResponsePoutRackbin = (ProcFd730wpk0GetRackbinResponsePoutRackbin) o;
        return Objects.equals(getRackbin(), procFd730wpk0getRackbinResponsePoutRackbin.getRackbin());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRackbin());
    }
}