/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd730wpk0GetNextProcessResponsePoutNextProcess implements Serializable {


    @ColumnAlias("PROCESS")
    private String process;

    public String getProcess() {
        return this.process;
    }

    public void setProcess(String process) {
        this.process = process;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd730wpk0GetNextProcessResponsePoutNextProcess)) return false;
        final ProcFd730wpk0GetNextProcessResponsePoutNextProcess procFd730wpk0getNextProcessResponsePoutNextProcess = (ProcFd730wpk0GetNextProcessResponsePoutNextProcess) o;
        return Objects.equals(getProcess(), procFd730wpk0getNextProcessResponsePoutNextProcess.getProcess());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProcess());
    }
}