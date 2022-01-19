/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd800wpk0McsetupsprocGetTestResultsResponse implements Serializable {


    @ColumnAlias("p_out_testresults")
    private List<ProcFd800wpk0McsetupsprocGetTestResultsResponsePoutTestresults> poutTestresults;

    @ColumnAlias("p_out_canupdactual")
    private String poutCanupdactual;

    @ColumnAlias("poutDyejobList")
    private List<ProcFd800wpk0McsetupsprocGetTestResultsResponsePoutDyejobList> poutDyejobList;

    public List<ProcFd800wpk0McsetupsprocGetTestResultsResponsePoutTestresults> getPoutTestresults() {
        return this.poutTestresults;
    }

    public void setPoutTestresults(List<ProcFd800wpk0McsetupsprocGetTestResultsResponsePoutTestresults> poutTestresults) {
        this.poutTestresults = poutTestresults;
    }

    public String getPoutCanupdactual() {
        return this.poutCanupdactual;
    }

    public void setPoutCanupdactual(String poutCanupdactual) {
        this.poutCanupdactual = poutCanupdactual;
    }

    public List<ProcFd800wpk0McsetupsprocGetTestResultsResponsePoutDyejobList> getPoutDyejobList() {
        return this.poutDyejobList;
    }

    public void setPoutDyejobList(List<ProcFd800wpk0McsetupsprocGetTestResultsResponsePoutDyejobList> poutDyejobList) {
        this.poutDyejobList = poutDyejobList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd800wpk0McsetupsprocGetTestResultsResponse)) return false;
        final ProcFd800wpk0McsetupsprocGetTestResultsResponse procFd800wpk0mcsetupsprocGetTestResultsResponse = (ProcFd800wpk0McsetupsprocGetTestResultsResponse) o;
        return Objects.equals(getPoutTestresults(), procFd800wpk0mcsetupsprocGetTestResultsResponse.getPoutTestresults()) &&
                Objects.equals(getPoutCanupdactual(), procFd800wpk0mcsetupsprocGetTestResultsResponse.getPoutCanupdactual()) &&
                Objects.equals(getPoutDyejobList(), procFd800wpk0mcsetupsprocGetTestResultsResponse.getPoutDyejobList());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutTestresults(),
                getPoutCanupdactual(),
                getPoutDyejobList());
    }
}