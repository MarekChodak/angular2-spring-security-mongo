package com.chodak.api.tasks;

import com.chodak.api.tasks.repository.TasksRepository;
import com.chodak.controller.task.OverviewTaskData;
import com.chodak.model.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by marekchodak on 15/08/16.
 */
@Service
public class TasksOverviewService {

    @Autowired
    private TasksRepository tasksRepository;

    public Task addTask(Task task) {
        task.setCreatedDate(new Date());
        task.addComment("Comment Text");
        tasksRepository.insertTask(task);
        return task;
    }

    public OverviewTaskData overviewData() {
        long overallCount = tasksRepository.tasksCount();
        long lastWeekCount = tasksRepository.lastWeekTasksCount();
        return new OverviewTaskData(overallCount, lastWeekCount);
    }

    public List<Task> allTasks() {
        return tasksRepository.allTasks();
    }
}
