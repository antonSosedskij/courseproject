import { Component, EventEmitter, Output } from '@angular/core';
import { FileService } from 'src/app/core/services/file/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @Output() onUpload = new EventEmitter<string>();

  constructor(private fileService: FileService){}

  upload(event: Event){
    console.log(event);
    console.log(event.target as HTMLInputElement);
    console.log((event.target as HTMLInputElement).files);
  }

}
