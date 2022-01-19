/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd730wpk0InsScanDyejobFabResponsePoutBarcodeDetails implements Serializable {


    @ColumnAlias("DYEJOB")
    private String dyejob;

    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("FABTYP")
    private String fabtyp;

    @ColumnAlias("REDYE")
    private Byte redye;

    @ColumnAlias("NEXTSTEP")
    private String nextstep;

    @ColumnAlias("JOBGROUP")
    private String jobgroup;

    @ColumnAlias("CAN_DELIVER")
    private String canDeliver;

    public String getDyejob() {
        return this.dyejob;
    }

    public void setDyejob(String dyejob) {
        this.dyejob = dyejob;
    }

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    public String getFabtyp() {
        return this.fabtyp;
    }

    public void setFabtyp(String fabtyp) {
        this.fabtyp = fabtyp;
    }

    public Byte getRedye() {
        return this.redye;
    }

    public void setRedye(Byte redye) {
        this.redye = redye;
    }

    public String getNextstep() {
        return this.nextstep;
    }

    public void setNextstep(String nextstep) {
        this.nextstep = nextstep;
    }

    public String getJobgroup() {
        return this.jobgroup;
    }

    public void setJobgroup(String jobgroup) {
        this.jobgroup = jobgroup;
    }

    public String getCanDeliver() {
        return this.canDeliver;
    }

    public void setCanDeliver(String canDeliver) {
        this.canDeliver = canDeliver;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd730wpk0InsScanDyejobFabResponsePoutBarcodeDetails)) return false;
        final ProcFd730wpk0InsScanDyejobFabResponsePoutBarcodeDetails procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails = (ProcFd730wpk0InsScanDyejobFabResponsePoutBarcodeDetails) o;
        return Objects.equals(getDyejob(), procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails.getDyejob()) &&
                Objects.equals(getFabseq(), procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails.getFabseq()) &&
                Objects.equals(getFabtyp(), procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails.getFabtyp()) &&
                Objects.equals(getRedye(), procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails.getRedye()) &&
                Objects.equals(getNextstep(), procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails.getNextstep()) &&
                Objects.equals(getJobgroup(), procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails.getJobgroup()) &&
                Objects.equals(getCanDeliver(), procFd730wpk0insScanDyejobFabResponsePoutBarcodeDetails.getCanDeliver());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDyejob(),
                getFabseq(),
                getFabtyp(),
                getRedye(),
                getNextstep(),
                getJobgroup(),
                getCanDeliver());
    }
}