import { Component, OnInit } from '@angular/core';
import data from '../../../assets/mock_data_(1).json';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
  

})
export class CustomersComponent implements OnInit {
  customers = data;
  
  constructor() { }

  ngOnInit(): void {
    console.log(data);
    

    
  }

}
