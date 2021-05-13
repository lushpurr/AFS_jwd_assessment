import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
/*graphql imports */
import * as queries from '../../../graphql/queries';
import { createTodo, updateTodo, deleteTodo } from '../../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

interface DataItem {
  created_at: string;
  description: string;
  id: string;
  name: string;
  updated_at: string;
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

  listOfColumns: ColumnItem[] = [
    {
      name: 'Created',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Description',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'ID',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Name',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Updated',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [],
      filterFn: null
    }
  ];

  allTodos = () => {
    API.graphql({ query: queries.listTodos });
  };
  
  createTodo = () => {
  const todo =  { name: "My first todo", description: "Hello world!" };
  API.graphql(graphqlOperation(createTodo, {input: todo}));

  
  }

   

constructor() { }

async ngOnInit(): Promise<void> {

    
}

}
