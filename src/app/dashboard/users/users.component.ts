import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface UsersData {
  userId: number,
  name: string;
  email: string;
  mobile: number;
}

const USER_DATA: UsersData[] = [
  {userId: 1, name: 'John', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 2, name: 'Jithin', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 3, name: 'Rahul', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 4, name: 'Adam', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 5, name: 'Micheal', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 6, name: 'Mane', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 7, name: 'Salah', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 8, name: 'Arnold', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 9, name: 'Gerrard', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 10, name: 'Jack', email: 'john@yopmail.com', mobile: 94164564641},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'email', 'mobile'];
  dataSource = new MatTableDataSource<UsersData>(USER_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }

}
