
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SQLService } from '../sql.service';
import Swal from 'sweetalert2';


@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  form!: FormGroup; 
  dbname:any;
  user:any;
  password:any;
  host:any;
  unoptimizedQuery: any;

  optimized_query:any;
  optimized_time:any;
  unoptimized_query:any;
  unoptimized_time:any;
  result:any;

  constructor(private fb: FormBuilder,private sqlService: SQLService,private http: HttpClient, private router: Router,private route: ActivatedRoute) 

  {}

  ngOnInit() {
   
  }

  connect() {
    this.sqlService.connectToDatabase(this.dbname, this.user, this.password, this.host)
      .subscribe((response : any) => {
        console.log(response)
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully established a connection to the database.',
        showConfirmButton: false,
        timer: 1500
      });
  }

  // optimize() {
  //   this.sqlService.optimizeQuery(this.unoptimizedQuery)
  //     .subscribe(response => console.log(response));
  // }

  // optimize() {
  //   this.sqlService.optimizeQuery(this.unoptimizedQuery)
  //     .subscribe(response => {
  //       this.optimizationResult = response;
  //       console.log(response);
  //     });

  // optimize() {
  //   this.sqlService.optimizeQuery(this.unoptimized_query)
  //     .subscribe(response => {
  //       this.optimized_query = response.optimized_query;
  //       this.optimized_time = response.optimized_time;
  //       this.unoptimized_query = response.unoptimized_query;
  //       this.unoptimized_time = response.unoptimized_time;
  //     });



  optimize() {
    this.sqlService.optimizeQuery(this.unoptimizedQuery)
    .subscribe((response : any) => {
    this.optimized_query = response.optimized_query;
    this.optimized_time = response.optimized_time;
    this.unoptimized_query = response.unoptimized_query;
    this.unoptimized_time = response.unoptimized_time;
    this.result = response.result;


      console.log(response)
    });
  }





  }
  
  


