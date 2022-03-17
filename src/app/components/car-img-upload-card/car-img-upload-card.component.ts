import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-car-img-upload-card',
  templateUrl: './car-img-upload-card.component.html',
  styleUrls: ['./car-img-upload-card.component.scss']
})
export class CarImgUploadCardComponent implements OnInit {

  @Input() imgId: number = 0
  @Input() textTitle: string = ''
  @Input() thumbnail: string = ''
  selectedImage: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  uploadImage(imageInput: any): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      // console.log(event.target.result)
      this.selectedImage = event.target.result
    });

    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.selectedImage = ''
  }

}
