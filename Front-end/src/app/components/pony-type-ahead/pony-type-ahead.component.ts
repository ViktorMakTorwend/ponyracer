import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PonyModel } from '../../types/ponyModel';
import { HTTP_PoniesService } from '../../services/HTTP-ponies.service';
import { catchError, concatMap, debounceTime, distinctUntilChanged, filter, of, switchMap } from 'rxjs';

@Component({
  selector: 'eva-pony-type-ahead',
  standalone: true,
  imports: [
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './pony-type-ahead.component.html',
  styleUrl: './pony-type-ahead.component.css'
})
export class PonyTypeAheadComponent implements OnInit {
  input = new FormControl();
  ponies: Array<PonyModel> = [];

  constructor(private ponyService: HTTP_PoniesService) { }

  ngOnInit(): void {
    // this.input.valueChanges.subscribe(value => {
    //   this.ponyService.searchPony(value).subscribe(response => this.ponies = response);
    // });

    // with the concatMap operator all the values emited
    // this.input.valueChanges
    //   .pipe(concatMap(value => this.ponyService.searchPony(value)))
    //   .subscribe(response => this.ponies = response);

    // with the switchMap operator only last value emited
    // this.input.valueChanges
    //  .pipe(switchMap(value => this.ponyService.searchPony(value)))
    //  .subscribe(response => this.ponies = response);

    // discard the queries that are less than three characters
    // this.input.valueChanges
    //   .pipe(
    //     filter(query => query.length >= 3),
    //     switchMap(value => this.ponyService.searchPony(value)))
    //   .subscribe(response => this.ponies = response);

    // with delay
    // this.input.valueChanges
    //   .pipe(
    //     filter(query => query.length >= 3),
    //     debounceTime(400),
    //     switchMap(value => this.ponyService.searchPony(value)))
    //   .subscribe(response => this.ponies = response);

    // to exclude subsequent requests
    // this.input.valueChanges
    //   .pipe(
    //     filter(query => query.length >= 3),
    //     debounceTime(400),
    //     distinctUntilChanged(),
    //     switchMap(value => this.ponyService.searchPony(value)))
    //   .subscribe(response => this.ponies = response);

    // with error handle
    this.input.valueChanges
    .pipe(
      filter(query => query.length >= 3),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => this.ponyService
        .searchPony(value)
        .pipe(catchError(error => of([])))))
    .subscribe(response => this.ponies = response);
  }
}
