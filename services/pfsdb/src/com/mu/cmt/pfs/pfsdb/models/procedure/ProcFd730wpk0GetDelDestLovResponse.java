/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd730wpk0GetDelDestLovResponse implements Serializable {


    @ColumnAlias("poutDelDestLOV")
    private List<ProcFd730wpk0GetDelDestLovResponsePoutDelDestLov> poutDelDestLov;

    public List<ProcFd730wpk0GetDelDestLovResponsePoutDelDestLov> getPoutDelDestLov() {
        return this.poutDelDestLov;
    }

    public void setPoutDelDestLov(List<ProcFd730wpk0GetDelDestLovResponsePoutDelDestLov> poutDelDestLov) {
        this.poutDelDestLov = poutDelDestLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd730wpk0GetDelDestLovResponse)) return false;
        final ProcFd730wpk0GetDelDestLovResponse procFd730wpk0getDelDestLovResponse = (ProcFd730wpk0GetDelDestLovResponse) o;
        return Objects.equals(getPoutDelDestLov(), procFd730wpk0getDelDestLovResponse.getPoutDelDestLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDelDestLov());
    }
}