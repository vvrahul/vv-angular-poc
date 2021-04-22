import { UsersService } from './users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UsersData {
  userId: number,
  name: string;
  email: string;
  mobile: number;
}

const USER_DATA: UsersData[] = [
  {userId: 1, name: 'John', email: 'john@yopmail.com', mobile: 94164564641},
  {userId: 2, name: 'Jithin', email: 'jithin@yopmail.com', mobile: 94164564641},
  {userId: 3, name: 'Rahul', email: 'rahul@yopmail.com', mobile: 94164564641},
  {userId: 4, name: 'Adam', email: 'adam@yopmail.com', mobile: 94164564641},
  {userId: 5, name: 'Micheal', email: 'micheal@yopmail.com', mobile: 94164564641},
  {userId: 6, name: 'Mane', email: 'mane@yopmail.com', mobile: 94164564641},
  {userId: 7, name: 'Salah', email: 'salah@yopmail.com', mobile: 94164564641},
  {userId: 8, name: 'Arnold', email: 'arnold@yopmail.com', mobile: 94164564641},
  {userId: 9, name: 'Gerrard', email: 'gerrard@yopmail.com', mobile: 94164564641},
  {userId: 10, name: 'Jack', email: 'jack@yopmail.com', mobile: 94164564641},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'userId','name', 'email', 'mobile'];
  dataSource = new MatTableDataSource<UsersData>(USER_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();

  }
  exportUser() {
    
    this.userService.downloadFile(USER_DATA, 'users', ['usersId', 'name', 'email', 'mobile'])
  }

}
