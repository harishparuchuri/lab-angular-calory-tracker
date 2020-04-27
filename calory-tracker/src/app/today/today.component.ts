import { Component, OnInit } from '@angular/core';
import { items } from '../items';
import { food } from '../food';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  items: food[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
}