import { Component, OnInit } from '@angular/core';
import data from '../../../assets/mock_data_(1).json';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  employed: boolean;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
  

})
export class CustomersComponent implements OnInit {
  listOfData: DataItem[] = data;
  listOfFilter: [
    { text: 'Female', value: 'Female' },
    { text: 'Male', value: 'Male' }
  ]

 


  

  constructor() { }

  ngOnInit(): void {
    console.log(data);
    
  }

  sortFn = (a, b) => a.first_name.localeCompare(b.first_name);

  // filterFn = (a, b) => void;

}
