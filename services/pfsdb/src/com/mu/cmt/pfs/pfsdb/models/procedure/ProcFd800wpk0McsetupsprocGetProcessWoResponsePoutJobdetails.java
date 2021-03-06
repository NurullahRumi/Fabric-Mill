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

public class ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutJobdetails implements Serializable {


    @ColumnAlias("DYEJOB")
    private String dyejob;

    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("FABSEQ")
    private BigInteger fabseq;

    @ColumnAlias("CLRDES")
    private String clrdes;

    @ColumnAlias("CAN_QRY_NEXTTANDEM")
    private String canQryNexttandem;

    @ColumnAlias("CAN_QRY_PREVTANDEM")
    private String canQryPrevtandem;

    @ColumnAlias("FABDESC")
    private String fabdesc;

    @ColumnAlias("BCHSEQ")
    private String bchseq;

    @ColumnAlias("FNPROCESS")
    private String fnprocess;

    @ColumnAlias("CAN_QRY_MCLAYOUT")
    private String canQryMclayout;

    @ColumnAlias("PROCESSTOSCAN")
    private String processtoscan;

    @ColumnAlias("FMCHGRP")
    private String fmchgrp;

    @ColumnAlias("SORTSUBSEQ")
    private String sortsubseq;

    @ColumnAlias("PROCSEQ")
    private BigInteger procseq;

    @ColumnAlias("REDYE")
    private BigInteger redye;

    @ColumnAlias("CAN_QRY_TSTRESULT")
    private String canQryTstresult;

    @ColumnAlias("CAN_VIEW_WODETAILS")
    private String canViewWodetails;

    @ColumnAlias("FNWO_REMARKS")
    private String fnwoRemarks;

    @ColumnAlias("MCIMAGELINK")
    private String mcimagelink;

    public String getDyejob() {
        return this.dyejob;
    }

    public void setDyejob(String dyejob) {
        this.dyejob = dyejob;
    }

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public BigInteger getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(BigInteger fabseq) {
        this.fabseq = fabseq;
    }

    public String getClrdes() {
        return this.clrdes;
    }

    public void setClrdes(String clrdes) {
        this.clrdes = clrdes;
    }

    public String getCanQryNexttandem() {
        return this.canQryNexttandem;
    }

    public void setCanQryNexttandem(String canQryNexttandem) {
        this.canQryNexttandem = canQryNexttandem;
    }

    public String getCanQryPrevtandem() {
        return this.canQryPrevtandem;
    }

    public void setCanQryPrevtandem(String canQryPrevtandem) {
        this.canQryPrevtandem = canQryPrevtandem;
    }

    public String getFabdesc() {
        return this.fabdesc;
    }

    public void setFabdesc(String fabdesc) {
        this.fabdesc = fabdesc;
    }

    public String getBchseq() {
        return this.bchseq;
    }

    public void setBchseq(String bchseq) {
        this.bchseq = bchseq;
    }

    public String getFnprocess() {
        return this.fnprocess;
    }

    public void setFnprocess(String fnprocess) {
        this.fnprocess = fnprocess;
    }

    public String getCanQryMclayout() {
        return this.canQryMclayout;
    }

    public void setCanQryMclayout(String canQryMclayout) {
        this.canQryMclayout = canQryMclayout;
    }

    public String getProcesstoscan() {
        return this.processtoscan;
    }

    public void setProcesstoscan(String processtoscan) {
        this.processtoscan = processtoscan;
    }

    public String getFmchgrp() {
        return this.fmchgrp;
    }

    public void setFmchgrp(String fmchgrp) {
        this.fmchgrp = fmchgrp;
    }

    public String getSortsubseq() {
        return this.sortsubseq;
    }

    public void setSortsubseq(String sortsubseq) {
        this.sortsubseq = sortsubseq;
    }

    public BigInteger getProcseq() {
        return this.procseq;
    }

    public void setProcseq(BigInteger procseq) {
        this.procseq = procseq;
    }

    public BigInteger getRedye() {
        return this.redye;
    }

    public void setRedye(BigInteger redye) {
        this.redye = redye;
    }

    public String getCanQryTstresult() {
        return this.canQryTstresult;
    }

    public void setCanQryTstresult(String canQryTstresult) {
        this.canQryTstresult = canQryTstresult;
    }

    public String getCanViewWodetails() {
        return this.canViewWodetails;
    }

    public void setCanViewWodetails(String canViewWodetails) {
        this.canViewWodetails = canViewWodetails;
    }

    public String getFnwoRemarks() {
        return this.fnwoRemarks;
    }

    public void setFnwoRemarks(String fnwoRemarks) {
        this.fnwoRemarks = fnwoRemarks;
    }

    public String getMcimagelink() {
        return this.mcimagelink;
    }

    public void setMcimagelink(String mcimagelink) {
        this.mcimagelink = mcimagelink;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutJobdetails)) return false;
        final ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutJobdetails procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails = (ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutJobdetails) o;
        return Objects.equals(getDyejob(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getDyejob()) &&
                Objects.equals(getOrdnum(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getOrdnum()) &&
                Objects.equals(getFabseq(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getFabseq()) &&
                Objects.equals(getClrdes(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getClrdes()) &&
                Objects.equals(getCanQryNexttandem(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getCanQryNexttandem()) &&
                Objects.equals(getCanQryPrevtandem(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getCanQryPrevtandem()) &&
                Objects.equals(getFabdesc(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getFabdesc()) &&
                Objects.equals(getBchseq(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getBchseq()) &&
                Objects.equals(getFnprocess(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getFnprocess()) &&
                Objects.equals(getCanQryMclayout(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getCanQryMclayout()) &&
                Objects.equals(getProcesstoscan(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getProcesstoscan()) &&
                Objects.equals(getFmchgrp(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getFmchgrp()) &&
                Objects.equals(getSortsubseq(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getSortsubseq()) &&
                Objects.equals(getProcseq(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getProcseq()) &&
                Objects.equals(getRedye(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getRedye()) &&
                Objects.equals(getCanQryTstresult(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getCanQryTstresult()) &&
                Objects.equals(getCanViewWodetails(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getCanViewWodetails()) &&
                Objects.equals(getFnwoRemarks(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getFnwoRemarks()) &&
                Objects.equals(getMcimagelink(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutJobdetails.getMcimagelink());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDyejob(),
                getOrdnum(),
                getFabseq(),
                getClrdes(),
                getCanQryNexttandem(),
                getCanQryPrevtandem(),
                getFabdesc(),
                getBchseq(),
                getFnprocess(),
                getCanQryMclayout(),
                getProcesstoscan(),
                getFmchgrp(),
                getSortsubseq(),
                getProcseq(),
                getRedye(),
                getCanQryTstresult(),
                getCanViewWodetails(),
                getFnwoRemarks(),
                getMcimagelink());
    }
}