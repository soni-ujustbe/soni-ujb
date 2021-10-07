import { HttpClient } from '@angular/common/http';
import { Component, OnInit,OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { UsersService } from '../services/users/users.service';
import {Subject} from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit,AfterViewInit,OnDestroy {
  
  data: any= []; 
  dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject<any>();

   constructor(private http:HttpClient) 
   {}
  // private gridApi;
  // private gridColumnApi;
  // private columnDefs;
  // private sortingOrder;

  // constructor(){
  //   this.columnDefs=[
  //     {
  //       headerName:"Name",
  //       field:"firstname",
  //       width:150,
  //       this.sortingOrder:["asc","desc"]
  //     },
  //     { headerName:"age",
  //     field:"age",
  //     width:50


  //     }
  //   ];
  // }
  

 
 
 

  // users(): void{
  //   this.http
  //       .users()
  //       .Subscribe((response: any) => {
  //         this.data = response.data;
  //       });
  // }
    ngOnInit():void{
      this.http.get("https://api-test.ujustbe.com/Meeting/getallmeetings")
      .subscribe(data=>{
       console.log(data);
       this.data=data;
       this.dtTrigger.next();
      
       });
    
    }
  
    
    ngAfterViewInit(): void {
     
    //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //     dtInstance.columns().every(function () {
    //       const that = this;
    //       $('input', this.footer()).on('keyup change', function () {
    //         if (that.search() !== this['value']) {
    //           that
    //             .search(this['value'])
    //             .draw();
    //         }
    //       });
    //     });
    //   });

     }
    
    


    ngOnDestroy():void{
      this.dtTrigger.unsubscribe();
    }
  

}
