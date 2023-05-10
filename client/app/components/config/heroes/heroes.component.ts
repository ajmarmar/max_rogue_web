import { Component } from '@angular/core';
import { UploaderService } from '../../../services/uploader.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  showFormHero = false;

  url = '/api/upload/file';
  imageFake = './../../../assets/images/meeple.jpg';


  selectedCar: number | undefined;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  public files: NgxFileDropEntry[] = [];

  constructor(private uploaderService: UploaderService) {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          this.uploaderService.upload(file).subscribe(
            res => {
              console.log(res);
              this.imageFake = '/api/file/' + res.fileName;
              /*
              input.value=null;
              this.message = res.fileName;
              this.uploaded.emit(res.fileName);
              */
            },
            /*
            msg => {
              input.value = null;
              this.message = msg;
            }*/
          );

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }

  backListHeroes(){
    this.showFormHero = false;
  }

  addHero(){
    this.showFormHero = true;
  }

}
