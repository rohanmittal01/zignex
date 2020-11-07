import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { LatLngBounds } from '@google/maps';
import tt from '@tomtom-international/web-sdk-maps';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from '../shared/services/http.service';
@Component({
  selector: 'app-tomtom-map',
  templateUrl: './tomtom-map.component.html',
  styleUrls: ['./tomtom-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TomtomMapComponent implements OnInit {
  map: any;
  marker: any;
  config: {
    key: string;
    container: 'map',
    style: string;
  };
  rpData: any;
  constructor(private http: HttpService, private spinner: NgxSpinnerService) {
    console.log(tt)
  }

  ngOnInit(): void {
    this.map = tt.map({
      key: 'a4yfznzr0WueH8kQ27ASjNmRF1GbNfPt',
      container: 'map',
      style: 'tomtom://vector/1/basic-main',
      zoom: 10,
      // center: [-0.2046175878910219, 51.52327158962092]
    });


    // this.map.addTo
    // this.map.on('load', () => {
    //   this.map.addTier(new tt.TrafficFlowTilesTier(this.config)).then(() => {
    //     this.map.addLayer({
    //       'id': 'overlay',
    //       'type': 'fill',
    //       'source': {
    //         'type': 'geojson',
    //         'data': {
    //           'type': 'Feature',
    //           'geometry': {
    //             'type': 'Polygon',
    //             'coordinates': [[[-0.2046175878910219, 51.52327158962092],
    //             [-0.05355557617221507, 51.53523241868879],
    //             [-0.13045987304786877, 51.46299250930767]]]
    //           }
    //         }
    //       },
    //       'layout': {},
    //       'paint': {
    //         'fill-color': '#db356c',
    //         'fill-opacity': 0.5,
    //         'fill-outline-color': 'black'
    //       }
    //     },
    //       'Vector Traffic Outline One Side Parking road');
    //   });
    // });
    // 
    this.getData()
  }
  getData() {
    this.http.getData().subscribe((response) => {
      this.rpData = response.body;
      this.spinner.hide();
      this.createMarker()
    }, (error => {
      alert('data failed to load please try refreshing the page')

    }))
  }
  createMarker() {
    this.map.setCenter({ lng: this.rpData[1].Longitude, lat: this.rpData[1].Latitude })
    for (var i = 0; i < this.rpData.length - 218900; i++) {
      const marker = new tt.Marker().setLngLat({ lng: this.rpData[i].Longitude, lat: this.rpData[i].Latitude }).addTo(this.map);
    }
  }
}

