import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  userobj: user = new user();
  OtpEntered!: number;
  DisplayOtpField: boolean = false;
  otpgenetared: any;
  otpTimer!: number;
  isotpverified: boolean = false;
  isotpinvalid:boolean=false;
  sub: any;

  constructor(private http:HttpService) {}
  ngOnInit() {}

  GetOtp() {
    this.DisplayOtpField = true;
    this.otpgenetared = this.generatedrandomnumber();
    console.log('otp', this.otpgenetared);
    this. sub = interval(1000).subscribe({
      next: (response) => {
        this.otpTimer = 60 - response;
        if (this.otpTimer == 0) {
         this. sub.unsubscribe();
        }
      },
    });
  }
  generatedrandomnumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1) + minm);
  }

  verifyOtp() {
    if (this.otpgenetared == this.OtpEntered) {
      this.DisplayOtpField = false;
      this.isotpverified = true;
      this.isotpinvalid=false;
      this.userobj.isotpverified=true;
      this.sub.unsubscribe()
    } else {
      this.DisplayOtpField = true;
      this.isotpverified = false;
      this.isotpinvalid=true
    }
  }
  signUp(){
    if(this.isotpverified){
      this.http.postDatafromserver('users',this.userobj).subscribe({
      next:()=>{
        if(Response){

        }
      }
      })
    }
  }
}

class user {
  name!: string;
  email!: string;
  mobile!: string;
  password!: string;
  isotpverified!: boolean;
}
