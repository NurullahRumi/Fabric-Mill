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

public class ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutFnparamlist implements Serializable {


    @ColumnAlias("FMCHGRP")
    private String fmchgrp;

    @ColumnAlias("PARAMCOD")
    private String paramcod;

    @ColumnAlias("PARAMDESC")
    private String paramdesc;

    @ColumnAlias("PARAMVAL")
    private String paramval;

    @ColumnAlias("XPOS")
    private Float xpos;

    @ColumnAlias("YPOS")
    private Float ypos;

    @ColumnAlias("CAN_EDIT_PARAM")
    private String canEditParam;

    public String getFmchgrp() {
        return this.fmchgrp;
    }

    public void setFmchgrp(String fmchgrp) {
        this.fmchgrp = fmchgrp;
    }

    public String getParamcod() {
        return this.paramcod;
    }

    public void setParamcod(String paramcod) {
        this.paramcod = paramcod;
    }

    public String getParamdesc() {
        return this.paramdesc;
    }

    public void setParamdesc(String paramdesc) {
        this.paramdesc = paramdesc;
    }

    public String getParamval() {
        return this.paramval;
    }

    public void setParamval(String paramval) {
        this.paramval = paramval;
    }

    public Float getXpos() {
        return this.xpos;
    }

    public void setXpos(Float xpos) {
        this.xpos = xpos;
    }

    public Float getYpos() {
        return this.ypos;
    }

    public void setYpos(Float ypos) {
        this.ypos = ypos;
    }

    public String getCanEditParam() {
        return this.canEditParam;
    }

    public void setCanEditParam(String canEditParam) {
        this.canEditParam = canEditParam;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutFnparamlist)) return false;
        final ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutFnparamlist procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist = (ProcFd800wpk0McsetupsprocGetProcessWoResponsePoutFnparamlist) o;
        return Objects.equals(getFmchgrp(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist.getFmchgrp()) &&
                Objects.equals(getParamcod(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist.getParamcod()) &&
                Objects.equals(getParamdesc(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist.getParamdesc()) &&
                Objects.equals(getParamval(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist.getParamval()) &&
                Objects.equals(getXpos(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist.getXpos()) &&
                Objects.equals(getYpos(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist.getYpos()) &&
                Objects.equals(getCanEditParam(), procFd800wpk0mcsetupsprocGetProcessWoResponsePoutFnparamlist.getCanEditParam());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFmchgrp(),
                getParamcod(),
                getParamdesc(),
                getParamval(),
                getXpos(),
                getYpos(),
                getCanEditParam());
    }
}