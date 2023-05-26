import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  todoArray=[]
  
  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
  }
  deleteItem(todo){
    for(let i=0;i<=this.todoArray.length;i++){
      if(todo==this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }
  todoSubmit(value){
    if(value!=""){
      this.todoArray.push(value.todo)
    }else{
      alert("Field required **")
    }
  }
}
