package com.chodak.api.tasks.repository;

import com.chodak.model.task.Task;

import java.util.List;

/**
 * Created by marekchodak on 15/08/16.
 */
public interface TasksRepository {

    long tasksCount();

    long lastWeekTasksCount();

    void insertTask(Task task);

    List<Task> allTasks();
}
