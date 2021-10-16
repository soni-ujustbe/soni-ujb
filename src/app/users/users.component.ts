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
  // dtColumnDefs: DataTables.Settings={};
   dtTrigger: Subject<any> = new Subject<any>();

   constructor(private http:HttpClient) {}

  
    ngOnInit():void{
      this.http.get("https://api-test.ujustbe.com/Meeting/getallmeetings")
      .subscribe(data=>{
       console.log(data);
       this.data=data;
       this.dtTrigger.next();
       this.dtOptions={
         columnDefs:[

         //newColumnDef([3,4,5,11]).withOption('type', 'date')

          
         { targets: 3, type: 'date' }

         ]
       }
      
       });
    
    }
    
    
    ngAfterViewInit(): void {
     
     }
    
    ngOnDestroy():void{
      this.dtTrigger.unsubscribe();
    }
  

}
