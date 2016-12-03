package com.chodak.controller.task;

import com.chodak.api.tasks.TasksOverviewService;
import com.chodak.model.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by marekchodak on 15/08/16.
 */
@RestController()
@RequestMapping("/rest/tasks")
public class TaskController {

    @Autowired
    private TasksOverviewService tasksOverviewService;

    @RequestMapping(value = "/overview", method = RequestMethod.GET)
    public OverviewTaskData tasksCount(){
        return tasksOverviewService.overviewData();
    }

    @RequestMapping(value = "/addTask", method = RequestMethod.POST)
    public Task addTask(@RequestBody Task task){
        return tasksOverviewService.addTask(task);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Task> allTasks(){
        return tasksOverviewService.allTasks();
    }


}
