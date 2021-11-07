import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { nameArr } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private dataSource = new BehaviorSubject<String>('');
  currentString = this.dataSource.asObservable();

  constructor() { }

  changeString(message: string): any{
    return this.dataSource.next(message);
  }
}
