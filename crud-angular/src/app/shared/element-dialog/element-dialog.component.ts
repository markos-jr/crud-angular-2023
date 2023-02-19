import { Component, Inject, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/views/home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: PeriodicElement;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    
  ) {}


  
  ngOnInit(): void {
    if (this.data.position != null){
        this.isChange =true;
    } else {
      this.isChange = false;
    }
        
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
