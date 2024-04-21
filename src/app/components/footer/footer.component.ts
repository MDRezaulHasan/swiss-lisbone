import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
   mapOptions: google.maps.MapOptions = {
   center: { lat: 38.9987208, lng: -77.2538699 },
   zoom : 14
}
marker = {
   position: { lat: 38.9987208, lng: -77.2538699 },
}
  ngOnInit(): void {
 
  }

}
