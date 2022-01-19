/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd800wpk0McsetupsprocGetProcessWoResponse implements Serializable {


    @ColumnAlias("p_out_jobdetails")
    private List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutJobdetails> poutJobdetails;

    @ColumnAlias("p_out_fnparamlist")
    private List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutFnparamlist> poutFnparamlist;

    @ColumnAlias("poutDyejobList")
    private List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutDyejobList> poutDyejobList;

    public List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutJobdetails> getPoutJobdetails() {
        return this.poutJobdetails;
    }

    public void setPoutJobdetails(List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutJobdetails> poutJobdetails) {
        this.poutJobdetails = poutJobdetails;
    }

    public List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutFnparamlist> getPoutFnparamlist() {
        return this.poutFnparamlist;
    }

    public void setPoutFnparamlist(List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutFnparamlist> poutFnparamlist) {
        this.poutFnparamlist = poutFnparamlist;
    }

    public List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutDyejobList> getPoutDyejobList() {
        return this.poutDyejobList;
    }

    public void setPoutDyejobList(List<ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutDyejobList> poutDyejobList) {
        this.poutDyejobList = poutDyejobList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd800wpk0McsetupsprocGetProcessWoResponse)) return false;
        final ProcFd800wpk0McsetupsprocGetProcessWoResponse procFd800wpk0mcsetupsprocGetProcessWoResponse = (ProcFd800wpk0McsetupsprocGetProcessWoResponse) o;
        return Objects.equals(getPoutJobdetails(), procFd800wpk0mcsetupsprocGetProcessWoResponse.getPoutJobdetails()) &&
                Objects.equals(getPoutFnparamlist(), procFd800wpk0mcsetupsprocGetProcessWoResponse.getPoutFnparamlist()) &&
                Objects.equals(getPoutDyejobList(), procFd800wpk0mcsetupsprocGetProcessWoResponse.getPoutDyejobList());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutJobdetails(),
                getPoutFnparamlist(),
                getPoutDyejobList());
    }
}