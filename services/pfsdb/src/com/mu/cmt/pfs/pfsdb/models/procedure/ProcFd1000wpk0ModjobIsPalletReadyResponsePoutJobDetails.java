/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd1000wpk0ModjobIsPalletReadyResponsePoutJobDetails implements Serializable {


    @ColumnAlias("DYEJOB")
    private String dyejob;

    @ColumnAlias("FABSEQ")
    private Byte fabseq;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd1000wpk0ModjobIsPalletReadyResponsePoutJobDetails)) return false;
        final ProcFd1000wpk0ModjobIsPalletReadyResponsePoutJobDetails procFd1000wpk0modjobIsPalletReadyResponsePoutJobDetails = (ProcFd1000wpk0ModjobIsPalletReadyResponsePoutJobDetails) o;
        return Objects.equals(getDyejob(), procFd1000wpk0modjobIsPalletReadyResponsePoutJobDetails.getDyejob()) &&
                Objects.equals(getFabseq(), procFd1000wpk0modjobIsPalletReadyResponsePoutJobDetails.getFabseq());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDyejob(),
                getFabseq());
    }
}