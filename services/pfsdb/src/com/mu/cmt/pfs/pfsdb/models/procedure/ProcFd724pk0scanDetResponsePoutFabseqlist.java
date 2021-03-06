/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd724pk0scanDetResponsePoutFabseqlist implements Serializable {


    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("FABDES")
    private String fabdes;

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
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
        if (!(o instanceof ProcFd724pk0scanDetResponsePoutFabseqlist)) return false;
        final ProcFd724pk0scanDetResponsePoutFabseqlist procFd724pk0scanDetResponsePoutFabseqlist = (ProcFd724pk0scanDetResponsePoutFabseqlist) o;
        return Objects.equals(getFabseq(), procFd724pk0scanDetResponsePoutFabseqlist.getFabseq()) &&
                Objects.equals(getFabdes(), procFd724pk0scanDetResponsePoutFabseqlist.getFabdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFabseq(),
                getFabdes());
    }
}