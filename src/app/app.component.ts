import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newcars';

  constructor(private http: HttpClient, private formb: FormBuilder) {
    this.getCategory();
  }
  //form builder
  //date
  current: Date = new Date();
  todayDate1 = this.current.toISOString().substring(0, 10);
  nextDate = new Date(this.current.getTime() + 24 * 60 * 60 * 1000); // Add one day (24 hours) to current date
  nextDayDate1 = this.nextDate.toISOString().substring(0, 10);
  //date
  form = this.formb.group({
    category: ['', Validators.required],
    car: ['', Validators.required],
    pick: [this.todayDate1, Validators.required],
    drop: [this.nextDayDate1, Validators.required],
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, Validators.required],
  });
  //card
  cate12: any;
  bill: any;
  type: any;
  pickupp: any;
  dropofff: any;
  nameee: any;
  emailll: any;
  phoneee: any;
  cate1: any;
  carr: any;
  pickup: any;
  dropoff: any;
  namee: any;
  emaill: any;
  phonee: any;
  myForm() {
    console.log(this.form.value);
    this.bill = 'Booking  Bill';
    this.cate12 = 'card';
    this.cate1 = 'Car Category:' + '  ' + this.form.value.category;
    this.type = 'Car Type:' + '  ' + this.form.value.car;
    this.nameee = 'Name:       ' + '  ' + this.form.value.name;
    this.phoneee = 'Phone:     ' + '  ' + this.form.value.phone;
    this.emailll = 'Email:     ' + '  ' + this.form.value.email;
    this.pickupp = 'Pick UP:     ' + '  ' + this.form.value.email;
    this.dropofff = 'Drop Off:     ' + '  ' + this.form.value.email;
    this.carr = this.form.value.car;
    this.pickup = this.form.value.pick;
    this.dropoff = this.form.value.drop;
    this.namee = this.form.value.name;
    this.phonee = this.form.value.phone;
    this.emaill = this.form.value.email;
  }
  //form builder
  categories: any;
  getCategory() {
    this.http.get('../assets/category.json').subscribe({
      next: (item) => {
        this.categories = item;
        console.log('id', this.categories);
      },
    });
  }
  cate: any;
  x: any;
  listOptions(event: any) {
    if (event.target.value == 'Transport') {
      this.getTransport();
    } else if (event.target.value == 'Tourist') {
      this.getTourist();
    } else if (event.target.value == 'Private') {
      this.getPrivates();
    } else if (event.target.value == 'Rent') {
      this.getRent();
    } else if (event.target.value == '') {
      this.noSelect();
    }
  }
  listNo: number | undefined;
  colors: any;
  // Rent
  getRent() {
    this.http.get('../assets/rent.json').subscribe({
      next: (item) => {
        this.colors = item;
        console.log(this.colors.id);
      },
    });
  }
  // privates
  getPrivates() {
    this.http.get('../assets/private.json').subscribe({
      next: (item) => {
        this.colors = item;
        console.log('111', this.colors);
      },
    });
  }
  // shipping
  getTransport() {
    this.http.get('../assets/transport.json').subscribe({
      next: (item) => {
        this.colors = item;
        console.log('111', this.colors);
      },
    });
  }
  //Tourist
  getTourist() {
    this.http.get('../assets/tourist.json').subscribe({
      next: (item) => {
        this.colors = item;
        console.log('111', this.colors);
      },
    });
  }
  //No Select
  noSelect() {
    this.http.get('../assets/noselect.json').subscribe({
      next: (item) => {
        this.colors = item;
        console.log('111', this.colors);
      },
    });
  }
}
