import { Component, OnInit } from '@angular/core';
/*graphql imports */
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as subscriptions from '../../../graphql/subscriptions';

import { API, graphqlOperation } from 'aws-amplify';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
    const oneTodo = await API.graphql(graphqlOperation(queries.getTodo, { id: 1 }));
// Simple query
const allTodos = await API.graphql({ query: queries.listTodos });
console.log(allTodos); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }


  }

}
