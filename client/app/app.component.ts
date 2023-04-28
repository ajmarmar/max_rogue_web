import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  constructor(
              private changeDetector: ChangeDetectorRef) { 
    setTheme('bs5');
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
