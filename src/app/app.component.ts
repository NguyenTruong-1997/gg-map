import { Marker } from './shared/models/marker.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //zoom level
  zoom: number = 12;
  //Start position
  lat: number = 21.030653;
  lng: number = 105.847130;
  //Marker
  markers: Marker[] = [
    // {
    //   name: 'Lang Bac',
    //   lat: 21.0338137014,
    //   lng: 105.853940339,
    //   draggable: true
    // },
    // {
    //   name: 'Van Mieu',
    //   lat: 20.96914649,
    //   lng: 105.95515466,
    //   draggable: true
    // }
  ];

  constructor() {};

  handleMapClick(event: any) {
    console.log(event);
    
  }

  handleMarkerClick(marker: Marker, i: number ) {
    console.log(marker, i);
    
  }

  markerDragEnd(marker: Marker, event: any) {
    console.log(marker, event);
    
  }
}
