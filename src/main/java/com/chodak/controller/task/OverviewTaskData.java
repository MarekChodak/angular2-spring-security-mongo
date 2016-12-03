package com.chodak.controller.task;

/**
 * Created by marekchodak on 15/08/16.
 */
public class OverviewTaskData {

    private Long tasksCount;
    private Long taskAddedInLastWeek;

    public OverviewTaskData(Long tasksCount, Long taskAddedInLastWeek) {
        this.tasksCount = tasksCount;
        this.taskAddedInLastWeek = taskAddedInLastWeek;
    }

    public Long getTasksCount() {
        return tasksCount;
    }

    public Long getTaskAddedInLastWeek() {
        return taskAddedInLastWeek;
    }
}
