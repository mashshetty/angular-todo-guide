import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos:any[]=[
    
  ];

  todo : any = {
    id:3,
    title: '',
    completed:false
  }

  name:string  = "Todo List"

  add(todo:any){
    if(todo==""){
      alert("title cannot be null!!")
      return;
    }
    if(this.todos.length>0){
      let x ={
        id: this.todos[this.todos.length-1].id+1,
        title:todo,
        completed:false
      }
      this.todos.push(x)

    }else{
      let x ={
        id: 0,
        title:todo,
        completed:false
      }
      this.todos.push(x)
    }
    
    this.todo.title='';

  }

  delete(todo:any){
    let index = this.todos.indexOf(todo);

    this.todos.splice(index,1)

   }

   edit(todo:any){
    this.todo.title=todo.title;
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1)


   }





}
