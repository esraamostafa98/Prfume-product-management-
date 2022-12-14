import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Customer } from './customer';

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max))
      return { range: true };
    return null;
  };
}
function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) return null;
  if (emailControl.value === confirmControl.value) return null;
  return { match: true };
}

// function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
//   if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5))
//     return { range: true };
//   return null;
// }

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();
  emailMessage: string;

  get addresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses');
  }

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', Validators.required],
        },
        { validator: emailMatcher }
      ),
      phone: '',
      notification: 'email',
      rating: [null, ratingRange(1, 5)],
      sendCatalog: true,
      addresses: this.fb.array([this.buildAddress()]),
    });
    this.customerForm
      .get('notification')
      .valueChanges.subscribe((value) => this.setNotification(value));

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.setMessage(emailControl));

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true),
    // });
  }
  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Esraa',
      lastName: 'Mostafa',
      sendCatalog: false,
    });

    // populateTestData(): void {
    // this.customerForm.setValue({
    //   firstName: 'Esraa',
    //   lastName: 'Mostafa',
    //   email: 'esraamostafa9734@gmail.com',
    //   sendCatalog: false,
    // });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
    });
  }
  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map((key) => this.validationMessages[key])
        .join(' ');
    }
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') phoneControl.setValidators(Validators.required);
    else phoneControl.clearValidators();
    phoneControl.updateValueAndValidity();
  }
}

// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Customer } from './customer';
// @Component({
//   selector: 'pm-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.css'],
// })
// export class CustomerComponent implements OnInit {
//   customer = new Customer();
//   constructor() {}

//   ngOnInit(): void {}

//   save(customerForm: NgForm) {
//     console.log(customerForm.form);
//     console.log('Saved: ' + JSON.stringify(customerForm.value));
//   }
// }
