import { Component,OnInit,ViewChild } from '@angular/core';
import{MatSidenav} from '@angular/material/sidenav';
import{BreakpointObserver} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoTask';
  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver
   , public dialog: MatDialog) {}
   
   openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
}
}