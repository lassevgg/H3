import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/Models/Seat';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  title: string = "Seats";

  seatList: Seat[] = [];
  seatListMulti: Seat[][];

  constructor(private ApiService:APIService) { }

  ngOnInit(): void {
  }

  getSeatsSpecificAuditorium(auditoriumId:number): void{
    this.ApiService.getSeatsOnAuditorimId(auditoriumId).subscribe(
      data => {this.seatList = data}
    );
    this.createAuditoriumSeatArr();
  }

  createAuditoriumSeatArr(){
    let totalRows = this.seatList;

    this.seatList.forEach(function (value) {
      if(value.row >= i){
        i++;
      };



    }); }
}
