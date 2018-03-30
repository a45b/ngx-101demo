import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userInfo: any;
  
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient
  ) {
    this.userInfo = null;
  }

  ngOnInit() {        
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    });    
  }

  getUser(id: any) {
    this.http.get('https://jsonplaceholder.typicode.com/users/'+ id)
    .subscribe((res) => { 
      console.log(res);
      this.userInfo = res;
    });
  }

}
