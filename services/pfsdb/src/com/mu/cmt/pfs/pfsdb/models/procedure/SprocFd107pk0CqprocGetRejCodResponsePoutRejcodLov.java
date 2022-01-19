/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class SprocFd107pk0CqprocGetRejCodResponsePoutRejcodLov implements Serializable {


    @ColumnAlias("REJCOD")
    private String rejcod;

    @ColumnAlias("REJDESC")
    private String rejdesc;

    @ColumnAlias("DESCRIPTION")
    private String description;

    @ColumnAlias("REJCAT")
    private String rejcat;

    @ColumnAlias("REJCATDESC")
    private String rejcatdesc;

    public String getRejcod() {
        return this.rejcod;
    }

    public void setRejcod(String rejcod) {
        this.rejcod = rejcod;
    }

    public String getRejdesc() {
        return this.rejdesc;
    }

    public void setRejdesc(String rejdesc) {
        this.rejdesc = rejdesc;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRejcat() {
        return this.rejcat;
    }

    public void setRejcat(String rejcat) {
        this.rejcat = rejcat;
    }

    public String getRejcatdesc() {
        return this.rejcatdesc;
    }

    public void setRejcatdesc(String rejcatdesc) {
        this.rejcatdesc = rejcatdesc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SprocFd107pk0CqprocGetRejCodResponsePoutRejcodLov)) return false;
        final SprocFd107pk0CqprocGetRejCodResponsePoutRejcodLov sprocFd107pk0cqprocGetRejCodResponsePoutRejcodLov = (SprocFd107pk0CqprocGetRejCodResponsePoutRejcodLov) o;
        return Objects.equals(getRejcod(), sprocFd107pk0cqprocGetRejCodResponsePoutRejcodLov.getRejcod()) &&
                Objects.equals(getRejdesc(), sprocFd107pk0cqprocGetRejCodResponsePoutRejcodLov.getRejdesc()) &&
                Objects.equals(getDescription(), sprocFd107pk0cqprocGetRejCodResponsePoutRejcodLov.getDescription()) &&
                Objects.equals(getRejcat(), sprocFd107pk0cqprocGetRejCodResponsePoutRejcodLov.getRejcat()) &&
                Objects.equals(getRejcatdesc(), sprocFd107pk0cqprocGetRejCodResponsePoutRejcodLov.getRejcatdesc());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRejcod(),
                getRejdesc(),
                getDescription(),
                getRejcat(),
                getRejcatdesc());
    }
}