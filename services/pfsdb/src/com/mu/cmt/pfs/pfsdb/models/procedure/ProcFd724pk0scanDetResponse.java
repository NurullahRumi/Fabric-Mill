/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd724pk0scanDetResponse implements Serializable {


    @ColumnAlias("poutDyejobDet")
    private String poutDyejobDet;

    @ColumnAlias("poutFabdet")
    private String poutFabdet;

    @ColumnAlias("poutDefProcessAction")
    private String poutDefProcessAction;

    @ColumnAlias("poutDefProcess")
    private String poutDefProcess;

    @ColumnAlias("poutDefOperator")
    private String poutDefOperator;

    @ColumnAlias("poutDefMchcod")
    private String poutDefMchcod;

    @ColumnAlias("poutDeffabseq")
    private Integer poutDeffabseq;

    @ColumnAlias("poutDeffabdes")
    private String poutDeffabdes;

    @ColumnAlias("poutFabseqlist")
    private List<ProcFd724pk0scanDetResponsePoutFabseqlist> poutFabseqlist;

    @ColumnAlias("poutProcessList")
    private List<ProcFd724pk0scanDetResponsePoutProcessList> poutProcessList;

    @ColumnAlias("poutDyejobList")
    private List<ProcFd724pk0scanDetResponsePoutDyejobList> poutDyejobList;

    @ColumnAlias("poutDefDyejob")
    private String poutDefDyejob;

    @ColumnAlias("poutMsg")
    private String poutMsg;

    @ColumnAlias("poutHaltProcessAction")
    private String poutHaltProcessAction;

    @ColumnAlias("poutHasWorkOrder")
    private String poutHasWorkOrder;

    public String getPoutDyejobDet() {
        return this.poutDyejobDet;
    }

    public void setPoutDyejobDet(String poutDyejobDet) {
        this.poutDyejobDet = poutDyejobDet;
    }

    public String getPoutFabdet() {
        return this.poutFabdet;
    }

    public void setPoutFabdet(String poutFabdet) {
        this.poutFabdet = poutFabdet;
    }

    public String getPoutDefProcessAction() {
        return this.poutDefProcessAction;
    }

    public void setPoutDefProcessAction(String poutDefProcessAction) {
        this.poutDefProcessAction = poutDefProcessAction;
    }

    public String getPoutDefProcess() {
        return this.poutDefProcess;
    }

    public void setPoutDefProcess(String poutDefProcess) {
        this.poutDefProcess = poutDefProcess;
    }

    public String getPoutDefOperator() {
        return this.poutDefOperator;
    }

    public void setPoutDefOperator(String poutDefOperator) {
        this.poutDefOperator = poutDefOperator;
    }

    public String getPoutDefMchcod() {
        return this.poutDefMchcod;
    }

    public void setPoutDefMchcod(String poutDefMchcod) {
        this.poutDefMchcod = poutDefMchcod;
    }

    public Integer getPoutDeffabseq() {
        return this.poutDeffabseq;
    }

    public void setPoutDeffabseq(Integer poutDeffabseq) {
        this.poutDeffabseq = poutDeffabseq;
    }

    public String getPoutDeffabdes() {
        return this.poutDeffabdes;
    }

    public void setPoutDeffabdes(String poutDeffabdes) {
        this.poutDeffabdes = poutDeffabdes;
    }

    public List<ProcFd724pk0scanDetResponsePoutFabseqlist> getPoutFabseqlist() {
        return this.poutFabseqlist;
    }

    public void setPoutFabseqlist(List<ProcFd724pk0scanDetResponsePoutFabseqlist> poutFabseqlist) {
        this.poutFabseqlist = poutFabseqlist;
    }

    public List<ProcFd724pk0scanDetResponsePoutProcessList> getPoutProcessList() {
        return this.poutProcessList;
    }

    public void setPoutProcessList(List<ProcFd724pk0scanDetResponsePoutProcessList> poutProcessList) {
        this.poutProcessList = poutProcessList;
    }

    public List<ProcFd724pk0scanDetResponsePoutDyejobList> getPoutDyejobList() {
        return this.poutDyejobList;
    }

    public void setPoutDyejobList(List<ProcFd724pk0scanDetResponsePoutDyejobList> poutDyejobList) {
        this.poutDyejobList = poutDyejobList;
    }

    public String getPoutDefDyejob() {
        return this.poutDefDyejob;
    }

    public void setPoutDefDyejob(String poutDefDyejob) {
        this.poutDefDyejob = poutDefDyejob;
    }

    public String getPoutMsg() {
        return this.poutMsg;
    }

    public void setPoutMsg(String poutMsg) {
        this.poutMsg = poutMsg;
    }

    public String getPoutHaltProcessAction() {
        return this.poutHaltProcessAction;
    }

    public void setPoutHaltProcessAction(String poutHaltProcessAction) {
        this.poutHaltProcessAction = poutHaltProcessAction;
    }

    public String getPoutHasWorkOrder() {
        return this.poutHasWorkOrder;
    }

    public void setPoutHasWorkOrder(String poutHasWorkOrder) {
        this.poutHasWorkOrder = poutHasWorkOrder;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd724pk0scanDetResponse)) return false;
        final ProcFd724pk0scanDetResponse procFd724pk0scanDetResponse = (ProcFd724pk0scanDetResponse) o;
        return Objects.equals(getPoutDyejobDet(), procFd724pk0scanDetResponse.getPoutDyejobDet()) &&
                Objects.equals(getPoutFabdet(), procFd724pk0scanDetResponse.getPoutFabdet()) &&
                Objects.equals(getPoutDefProcessAction(), procFd724pk0scanDetResponse.getPoutDefProcessAction()) &&
                Objects.equals(getPoutDefProcess(), procFd724pk0scanDetResponse.getPoutDefProcess()) &&
                Objects.equals(getPoutDefOperator(), procFd724pk0scanDetResponse.getPoutDefOperator()) &&
                Objects.equals(getPoutDefMchcod(), procFd724pk0scanDetResponse.getPoutDefMchcod()) &&
                Objects.equals(getPoutDeffabseq(), procFd724pk0scanDetResponse.getPoutDeffabseq()) &&
                Objects.equals(getPoutDeffabdes(), procFd724pk0scanDetResponse.getPoutDeffabdes()) &&
                Objects.equals(getPoutFabseqlist(), procFd724pk0scanDetResponse.getPoutFabseqlist()) &&
                Objects.equals(getPoutProcessList(), procFd724pk0scanDetResponse.getPoutProcessList()) &&
                Objects.equals(getPoutDyejobList(), procFd724pk0scanDetResponse.getPoutDyejobList()) &&
                Objects.equals(getPoutDefDyejob(), procFd724pk0scanDetResponse.getPoutDefDyejob()) &&
                Objects.equals(getPoutMsg(), procFd724pk0scanDetResponse.getPoutMsg()) &&
                Objects.equals(getPoutHaltProcessAction(), procFd724pk0scanDetResponse.getPoutHaltProcessAction()) &&
                Objects.equals(getPoutHasWorkOrder(), procFd724pk0scanDetResponse.getPoutHasWorkOrder());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDyejobDet(),
                getPoutFabdet(),
                getPoutDefProcessAction(),
                getPoutDefProcess(),
                getPoutDefOperator(),
                getPoutDefMchcod(),
                getPoutDeffabseq(),
                getPoutDeffabdes(),
                getPoutFabseqlist(),
                getPoutProcessList(),
                getPoutDyejobList(),
                getPoutDefDyejob(),
                getPoutMsg(),
                getPoutHaltProcessAction(),
                getPoutHasWorkOrder());
    }
}