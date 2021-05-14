import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
/*graphql imports */
import * as queries from '../../../graphql/queries';
import { createTodo, updateTodo, deleteTodo } from '../../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../../../graphql/queries';


interface DataItem {
  name: string;
  description: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
}

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  todos: Array<DataItem>;



  listOfColumns: ColumnItem[] = [

    {
      name: 'Name',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Description',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    }

 
  ];

  


constructor() { }

async ngOnInit(): Promise<void> {

  var response = await API.graphql(graphqlOperation(listTodos))
  this.todos = (response as any).data.listTodos.items;
 
 
}

createTodo = () => {
  const todo =  { name: "My first todo", description: "Hello world!" };
  API.graphql(graphqlOperation(createTodo, {input: todo}));
}


// listOfData = this.getData()


//   /* create a todo */
// await API.graphql(graphqlOperation(createTodo, {input: todo}));

// /* update a todo */
// await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" }}));

// /* delete a todo */
// await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId }}));
  
}


