import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AppMaterialModule } from '../../_Shared/app-material/app-material.module';

interface IErrorAlert {
  name: string;
  status: string;
  statusText: string;
  message: string;
}


@Component({
  selector: 'app-errro-alert',
  standalone: true,
  imports: [
    AppMaterialModule,
  ],
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.scss'
})
export class ErrorAlertComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public error: IErrorAlert
  ) { }

  ngOnInit(): void { }
}

