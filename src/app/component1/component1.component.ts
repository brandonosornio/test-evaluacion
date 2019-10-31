import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.sass']
})
export class Component1Component implements OnInit {

  @Output() ObjectEvent = new EventEmitter<any>();

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  getUser(id: string): void {
    let params = new HttpParams();
    params = params.append('key', id);
    this.httpClient.get('get-person',{params}).subscribe( (data) => {
      var message = JSON.stringify(data);
      this.ObjectEvent.emit(message);
      this.snackBar.open(message,'Cerrar',{
        duration: 10000,
      })
    },
    (error) => {
      console.log(error)
    })
  }

}
