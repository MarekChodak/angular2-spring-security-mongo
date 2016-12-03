import {TaskComment} from "./Comment";

export class Task {
    name : string;
    createdDate : Date;
    comments : TaskComment[] = [];

    monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    constructor(name:string, createdDate:Date) {
        this.name = name;
        this.createdDate = createdDate;
    }

    addComment(comment : String){
        this.comments.push(new TaskComment(comment));
    }

    get commentsCount() : number{
        return this.comments.length;
    }

    get createdDateMonth(){
        if(this.createdDate){
            return this.monthNames[this.createdDate.getMonth()];
        } else {
            return "Unknown"
        }
    }

    get commentsContent() {
        let content : string = "";
        for(let comment of this.comments){
            content += comment.content;
            content += '</br>';
        }
        return content;
    }

    get createdDateDay() : number {
        if(this.createdDate){
            return this.createdDate.getDay();
        } else {
            return 0;
        }
    }
}