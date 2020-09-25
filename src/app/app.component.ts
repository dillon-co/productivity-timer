import { Component, OnInit } from '@angular/core';
import { of, interval, timer } from 'rxjs';
import { map, takeWhile, take, tap } from 'rxjs/operators';
import {CustomTime} from './custom-times/custom-time';
import {CustomTimesService} from './custom-times.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron';
  max = 1;
  current = 0;
  isFinished = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  isPaused = false;
  customTimes: CustomTime[];

  constructor(private customTimeService: CustomTimesService) {}

  ngOnInit(): void {
    this.getCustomTimes();
  }

  getCustomTimes(): void {
    this.customTimeService.getCustomTimes()
      .subscribe(times => this.customTimes = times)
  }

  get timeLeft() {
    return new Date((this.max-this.current) * 1000).toISOString().substr(11, 8)
  }

  start(){
    const int = interval(100);
    this.max = this.calculateMax();
    int.pipe(
      takeWhile(_ => (this.current < this.max && !this.isPaused) ),
    ).subscribe(
      (i) => {this.current += 0.1},
      (error) => {console.log(error)},
      () => {this.finishOrPause();}
      )
  }

  cancelTimer(){
    this.isPaused = true
    this.reset();
  }

  pausePlayTimer() {
    if (this.isPaused){
      this.start();
    }
      return this.isPaused = !this.isPaused;
  }

  finishOrPause(){
    if (!this.isPaused){
      this.finish()
    }
  }

  finish() {
    this.current = this.max;
    this.isFinished = true;
  }

  reset() {
    this.current = 0;
    this.isFinished = false
  }

  hoursAsSeconds(): number{
    return this.hours * 60**2
  }

  minutesAsSeconds(): number{
    return this.minutes*60
  }

  calculateMax(): number{
    return this.hoursAsSeconds()+this.minutesAsSeconds()+this.seconds
  }

  customTimer(time: CustomTime){
    this.hours = time.hours
    this.minutes = time.minutes
    this.seconds = time.seconds
    this.start();
  }

  get isNotFinished() {
    return this.current < this.max;
  }

  get timerIsPaused() {
    return this.isPaused
  }
}
