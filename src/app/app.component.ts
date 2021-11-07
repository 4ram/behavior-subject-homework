import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AppServiceService } from './app-service.service';

export interface nameArr {
  name: string;
  position: number;
}

const ELEMENT_DATA: nameArr[] = [
  {position: 1, name:'Hayahay'},
  {position: 2, name:'Heyehey'},
  {position: 3, name:'Hiyihiy'},
  {position: 4, name:'Hoyohoy'},
  {position: 5, name:'Huyuhuy'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position','name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  input: any;

  constructor (
    private appService: AppServiceService
  ) {}

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onInput(event: any){
    const { value } = event.target;
    this.input = this.appService.changeString(value);
  }
}
