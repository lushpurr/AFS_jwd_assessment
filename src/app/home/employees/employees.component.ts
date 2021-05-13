import { Component, OnInit } from '@angular/core';
/*graphql imports */
import * as queries from '../../../graphql/queries';
import { createTodo, updateTodo, deleteTodo } from '../../../graphql/mutations';
import * as subscriptions from '../../../graphql/subscriptions';



import { API, graphqlOperation } from 'aws-amplify';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
createTodo = () => {
const todo =  { name: "My first todo", description: "Hello world!" };
API.graphql(graphqlOperation(createTodo, {input: todo}));

this.getAllTodos();
}

getAllTodos = async () => {
// Simple query
const allTodos = await API.graphql({ query: queries.listTodos });
console.log(allTodos); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }

}

constructor() { }

async ngOnInit(): Promise<void> {


  }

}
