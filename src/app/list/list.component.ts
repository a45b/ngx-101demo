import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('lable') h1: ElementRef;
  // @ViewChildren('list') li:  QueryList<any>;
  @ViewChildren("list") list: QueryList<any>

  users: any;
  searchText: string;
  resp: QueryList<any>;

  constructor(
    private http: HttpClient, 
    private renderer: Renderer2) 
  { 
    this.users = [];
    this.searchText = '';
  }

  ngOnInit(){     
    this.getUsers();    
    this.renderer.addClass(this.h1.nativeElement, 'col')    

    
  }  

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((res) => {      
      this.users = res;
    })    
  }

  ngAfterViewInit() {    
    // this.renderer.addClass(this.h1.nativeElement, 'col')
    console.log(this.list);
    // this.li.forEach(alertInstance => {
    //   console.log(alertInstance)
    // });
    // console.log()
    //this.list.forEach(div => console.log(div));

    this.list.changes.subscribe((r) => {       
      this.resp = r;
      this.checker();
    });
  }

  checker() {
    console.log(this.resp);   
    this.renderer.addClass(this.resp.last.nativeElement, 'col')    
  }
}
