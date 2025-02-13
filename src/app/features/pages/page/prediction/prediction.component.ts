import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initDrawers, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-prediction',
  standalone: false,
  
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.scss'
})
export class PredictionComponent implements AfterViewInit {
  temperatures = [30, 35, 40, 38, 36, 32, 34, 37, 39, 38, 36, 35];

  forecast = [
    { date: 'Aujourd’hui\n10/02', temp: '+25° ... +38°', precip: '0 mm', wind: '3 m/s', cover: '11%' },
    { date: 'mar.\n11/02', temp: '+26° ... +38°', precip: '0 mm', wind: '4 m/s', cover: '18%' },
    { date: 'mer.\n12/02', temp: '+25° ... +37°', precip: '0 mm', wind: '4 m/s', cover: '6%' },
    { date: 'jeu.\n13/02', temp: '+25° ... +38°', precip: '0 mm', wind: '4 m/s', cover: '12%' },
    { date: 'ven.\n14/02', temp: '+24° ... +38°', precip: '0 mm', wind: '3 m/s', cover: '12%' },
    { date: 'sam.\n15/02', temp: '+25° ... +38°', precip: '0 mm', wind: '3 m/s', cover: '13%' },
    { date: 'dim.\n16/02', temp: '+27° ... +38°', precip: '0 mm', wind: '3 m/s', cover: '14%' },
  ];

  constructor() { }
  ngAfterViewInit(): void {
    initFlowbite()  
  }
}
