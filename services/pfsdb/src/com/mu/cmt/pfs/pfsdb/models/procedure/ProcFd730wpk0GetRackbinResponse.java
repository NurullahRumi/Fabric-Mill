/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd730wpk0GetRackbinResponse implements Serializable {


    @ColumnAlias("poutRackbin")
    private List<ProcFd730wpk0GetRackbinResponsePoutRackbin> poutRackbin;

    public List<ProcFd730wpk0GetRackbinResponsePoutRackbin> getPoutRackbin() {
        return this.poutRackbin;
    }

    public void setPoutRackbin(List<ProcFd730wpk0GetRackbinResponsePoutRackbin> poutRackbin) {
        this.poutRackbin = poutRackbin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd730wpk0GetRackbinResponse)) return false;
        final ProcFd730wpk0GetRackbinResponse procFd730wpk0getRackbinResponse = (ProcFd730wpk0GetRackbinResponse) o;
        return Objects.equals(getPoutRackbin(), procFd730wpk0getRackbinResponse.getPoutRackbin());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutRackbin());
    }
}