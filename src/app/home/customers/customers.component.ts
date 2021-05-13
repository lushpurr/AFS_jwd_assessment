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

  listOfColumns: ColumnItem[] = [
    {
      name: 'First Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.first_name.localeCompare(b.first_name)
      ,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Second Name',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Email',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Gender',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'Female', value: 'Female' },
        { text: 'Male', value: 'Male' }
      ],
      filterFn: (address: string, item: DataItem) => item.gender.indexOf(address) !== -1
    },
    {
      name: 'Employed',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [],
      filterFn: null
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(data);
    
  }

}
