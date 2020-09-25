import { Injectable } from '@angular/core';
import {CUSTOM_TIMES} from './custom-times/custom-time-data';
import {CustomTime} from './custom-times/custom-time';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTimesService {

  getCustomTimes(): Observable<CustomTime[]>{
    return of(CUSTOM_TIMES)
  }

  constructor() { }
}
