import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  public slides = [
    {img: "https://writise.com/wp-content/uploads/2019/03/free-stock-images-for-facebook.jpg"},
    {img: "https://writise.com/wp-content/uploads/2019/03/free-stock-images-for-facebook.jpg"},
    {img: "https://writise.com/wp-content/uploads/2019/03/free-stock-images-for-facebook.jpg"},
    {img: "https://writise.com/wp-content/uploads/2019/03/free-stock-images-for-facebook.jpg"}
  ];

  public slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"dots": true, "arrows": false};

  testForm: FormGroup;
  contact = {
      name: '',
      age: '',
      comments: ''
  };
  submitted = false;
  message: string;

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.testForm = new FormGroup({
        'name': new FormControl(this.contact.name, [
            Validators.required,
            Validators.pattern(/^([^0-9]*)$/)
        ]),
        'age': new FormControl(this.contact.age, [
            Validators.required,
            Validators.pattern(/^[0-9]*$/)
        ]),
        'comments': new FormControl(this.contact.comments, [
          Validators.required,
          Validators.maxLength(30)
        ])
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.httpClient.post('add-person',this.testForm.value).subscribe((data) => {
      var message = JSON.stringify(data)
      this.snackBar.open(message,'Cerrar',{
        duration: 10000,
      })
    },
    (error) => {
      console.log(error)
    });
  }

  receiveObject($event) {
    this.message = $event;
  }

}
