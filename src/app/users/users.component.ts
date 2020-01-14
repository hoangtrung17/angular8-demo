import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = [];
  displayedColumns: string[] = ['userName', 'email', 'phone', 'action'];
  dataSource = new MatTableDataSource<any>(this.users);

  ngOnInit() {
    this.loadUsers();
  }

  constructor(
    public Service: ApiService
  ) {}

  // Users list
  loadUsers() {
    return this.Service.GetUsers().subscribe((data: {}) => {
      this.users = data;
      this.dataSource = new MatTableDataSource<any>(this.users);
    })
  }

  // Delete User
  deleteUser(user) {
    var index = this.users.map(x => { return x._id }).indexOf(user._id);
    return this.Service.DeleteUser(user._id).subscribe(res => {
      this.users.splice(index, 1);
      this.dataSource = new MatTableDataSource<any>(this.users);
    })
  }

}
