import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deal',
  templateUrl: './top-deal.component.html',
  styleUrls: ['./top-deal.component.scss'],
})
export class TopDealComponent {
  topDeal: any = [];
  constructor(private httpservice: HttpService) {}
  ngOnInit() {
    this.getTopDeal();
  }
  getTopDeal() {
    const endpointName = 'top-deals';

    this.httpservice.GetDatafromserver(endpointName).subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          this.topDeal = response;
          console.log('top deal', this.topDeal);
        }
      },
      error: () => {},
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



}
