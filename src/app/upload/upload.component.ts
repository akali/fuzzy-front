import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from '../utils/upload/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  fileToUpload: File;
  progress: number;

  constructor(private uploadService: UploadService, private router: Router) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadService.upload(this.fileToUpload).subscribe(res => {
      this.progress = res;
      if (this.progress === 100) {
        this.router.navigateByUrl('/tables');
      }
    });
  }

}
