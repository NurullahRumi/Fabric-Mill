/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcFd730wpk0GetJobGroupsResponsePoutJobs implements Serializable {


    @ColumnAlias("DYEJOB")
    private String dyejob;

    @ColumnAlias("NEXTSTEP")
    private String nextstep;

    public String getDyejob() {
        return this.dyejob;
    }

    public void setDyejob(String dyejob) {
        this.dyejob = dyejob;
    }

    public String getNextstep() {
        return this.nextstep;
    }

    public void setNextstep(String nextstep) {
        this.nextstep = nextstep;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcFd730wpk0GetJobGroupsResponsePoutJobs)) return false;
        final ProcFd730wpk0GetJobGroupsResponsePoutJobs procFd730wpk0getJobGroupsResponsePoutJobs = (ProcFd730wpk0GetJobGroupsResponsePoutJobs) o;
        return Objects.equals(getDyejob(), procFd730wpk0getJobGroupsResponsePoutJobs.getDyejob()) &&
                Objects.equals(getNextstep(), procFd730wpk0getJobGroupsResponsePoutJobs.getNextstep());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDyejob(),
                getNextstep());
    }
}