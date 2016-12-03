package com.chodak.api.tasks.repository;

import com.chodak.model.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;

/**
 * Created by marekchodak on 15/08/16.
 */
@Component
public class TasksRepositoryImpl implements TasksRepository {

    private final MongoOperations mongoOperations;

    @Autowired
    public TasksRepositoryImpl(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    @Override
    public long tasksCount() {
        Query query = new BasicQuery("{}");
        return mongoOperations.count(new Query(), Task.class);
    }

    @Override
    public long lastWeekTasksCount() {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DAY_OF_YEAR, -7);
        Query query = new Query(where("createdDate").gt(calendar.getTime()));
        return mongoOperations.count(query, Task.class);
    }

    @Override
    public void insertTask(Task task) {
        mongoOperations.insert(task);
    }

    @Override
    public List<Task> allTasks() {
        return mongoOperations.findAll(Task.class);
    }
}
