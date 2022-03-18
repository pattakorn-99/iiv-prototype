import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  stages = [
    {
      name: 'อัปโหลดรูปภาพ',
      timestamp: '07/03/2565, 08:25 น.',
      status: 'COMPLETE'
    },
    {
      name: 'ตรวจสอบข้อมูลรูปภาพ',
      timestamp: '08/03/2565, 11:40 น.',
      status: 'COMPLETE'
    },
    {
      name: 'แก้ไขข้อมูล',
      timestamp: '08/03/2565, 11:40 น.',
      status: 'WARNING'
    },
    {
      name: 'อัปโหลดรูปภาพใหม่',
      timestamp: null,
      status: 'NONE'
    },
    {
      name: 'ตรวจสอบข้อมูลรูปภาพ',
      timestamp: null,
      status: 'NONE'
    },
    {
      name: 'สำเร็จ',
      timestamp: null,
      status: 'NONE'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  reupload(): void {
    console.log('testtest')
  }

}
