import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  imageData = [
    { id: 1, text: 'ด้านหน้ารถ', image: 'assets/car-outline/Car%20Front.png' },
    { id: 2, text: 'ด้านซ้ายตรง', image: 'assets/car-outline/Car%20Left.png' },
    { id: 3, text: 'ด้านท้ายรถ', image: 'assets/car-outline/Car%20Back.png' },
    { id: 4, text: 'ด้านขวาตรง', image: 'assets/car-outline/Car%20Right.png' },
    { id: 5, text: 'หลังคารถ', image: 'assets/car-outline/Car%20Top.png' },
    { id: 6, text: 'ด้านหน้าซ้าย (45 ํ)', image: 'assets/car-outline/Car%20Front%20Left.png' },
    { id: 7, text: 'ด้านหน้าขวา (45 ํ)', image: 'assets/car-outline/Car%20Front%20Right.png' },
    { id: 8, text: 'ด้านหลังซ้าย (45 ํ)', image: 'assets/car-outline/Car%20Back%20Left.png' },
    { id: 9, text: 'ด้านหลังขวา (45 ํ)', image: 'assets/car-outline/Car%20Back%20Right.png' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('hello')
  }

}
