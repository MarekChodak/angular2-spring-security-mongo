package com.chodak.model.task;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by marekchodak on 15/08/16.
 */
public class Task {

    @Id
    private String id;

    private Date createdDate;

    private String name;

    private String description;

    private List<Comment> comments;

    public Task() {
    }

    public Task(String name) {
        this.name = name;
        createdDate = new Date();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public String getId() {
        return id;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getName() {
        return name;
    }

    public void addComment(String commentText) {
        if(comments == null){
            comments = new ArrayList<>();
        }
        comments.add(new Comment(commentText));
    }
}
