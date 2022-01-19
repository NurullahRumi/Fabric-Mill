/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd724pk0scanDetResponsePoutProcessList implements Serializable {


    @ColumnAlias("PROCESS")
    private String process;

    @ColumnAlias("PROCESSACTION")
    private String processaction;

    @ColumnAlias("MCLIST")
    private String mclist;

    @ColumnAlias("INDEXI")
    private BigInteger indexi;

    public String getProcess() {
        return this.process;
    }

    public void setProcess(String process) {
        this.process = process;
    }

    public String getProcessaction() {
        return this.processaction;
    }

    public void setProcessaction(String processaction) {
        this.processaction = processaction;
    }

    public String getMclist() {
        return this.mclist;
    }

    public void setMclist(String mclist) {
        this.mclist = mclist;
    }

    public BigInteger getIndexi() {
        return this.indexi;
    }

    public void setIndexi(BigInteger indexi) {
        this.indexi = indexi;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd724pk0scanDetResponsePoutProcessList)) return false;
        final ProcFd724pk0scanDetResponsePoutProcessList procFd724pk0scanDetResponsePoutProcessList = (ProcFd724pk0scanDetResponsePoutProcessList) o;
        return Objects.equals(getProcess(), procFd724pk0scanDetResponsePoutProcessList.getProcess()) &&
                Objects.equals(getProcessaction(), procFd724pk0scanDetResponsePoutProcessList.getProcessaction()) &&
                Objects.equals(getMclist(), procFd724pk0scanDetResponsePoutProcessList.getMclist()) &&
                Objects.equals(getIndexi(), procFd724pk0scanDetResponsePoutProcessList.getIndexi());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProcess(),
                getProcessaction(),
                getMclist(),
                getIndexi());
    }
}