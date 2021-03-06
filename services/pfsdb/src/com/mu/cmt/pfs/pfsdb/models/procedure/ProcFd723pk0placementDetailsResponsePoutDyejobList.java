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

public class ProcFd723pk0placementDetailsResponsePoutDyejobList implements Serializable {


    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("JOBS")
    private String jobs;

    @ColumnAlias("FABDES")
    private String fabdes;

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    public String getJobs() {
        return this.jobs;
    }

    public void setJobs(String jobs) {
        this.jobs = jobs;
    }

    public String getFabdes() {
        return this.fabdes;
    }

    public void setFabdes(String fabdes) {
        this.fabdes = fabdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd723pk0placementDetailsResponsePoutDyejobList)) return false;
        final ProcFd723pk0placementDetailsResponsePoutDyejobList procFd723pk0placementDetailsResponsePoutDyejobList = (ProcFd723pk0placementDetailsResponsePoutDyejobList) o;
        return Objects.equals(getOrdnum(), procFd723pk0placementDetailsResponsePoutDyejobList.getOrdnum()) &&
                Objects.equals(getFabseq(), procFd723pk0placementDetailsResponsePoutDyejobList.getFabseq()) &&
                Objects.equals(getJobs(), procFd723pk0placementDetailsResponsePoutDyejobList.getJobs()) &&
                Objects.equals(getFabdes(), procFd723pk0placementDetailsResponsePoutDyejobList.getFabdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrdnum(),
                getFabseq(),
                getJobs(),
                getFabdes());
    }
}