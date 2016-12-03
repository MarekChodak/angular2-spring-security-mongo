import {Injectable} from "@angular/core";
import {HttpClient} from "../httpClient/httpClient";
import {Task} from "./Task";
import {Headers} from "@angular/http";

@Injectable()
export class TasksService {

    private tasksOverviewUrl = "rest/tasks/overview";
    private taskAddUrl = "rest/tasks/addTask";
    private allTasksUrl = "rest/tasks/all";

    constructor(private httpClient:HttpClient) {
    }

    public fetchOverviewData() {
        return this.httpClient.get(this.tasksOverviewUrl, null)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    addNewTask(task:Task) {
        return this.httpClient.post(this.taskAddUrl, task, new Headers())
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    allTasks() {
        return this.httpClient.get(this.allTasksUrl, new Headers())
            .toPromise()
            .then(response => response.json())
            .then(response => this.convertToTasks(response))
            .catch(this.handleError);
    }

    private convertToTasks(response:any):Task[] {
        let tasks : Task[] =[];
        for( let taskDto of response){
            var createdDateInMillis = taskDto.createdDate;
            let createdDate : Date = null;
            if(createdDateInMillis){
                createdDate = new Date(createdDateInMillis);
            }
            let task = new Task(taskDto.name, createdDate);
            let comments = taskDto.comments;
            if(comments){
                for(let comment of comments){
                    task.addComment(comment.content);
                }
            }
            tasks.push(task);
        }
        return tasks;
    }
}