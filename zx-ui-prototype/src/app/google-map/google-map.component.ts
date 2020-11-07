import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent {
  @ViewChild(GoogleMap) map: GoogleMap;
  @ViewChild(MapInfoWindow) info: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    mapTypeId: 'hybrid',
    maxZoom: 18,
    minZoom: 5,
  };
  markers = [];
  // markerOptions:google.maps.MarkerOptions = {}
  infoContent = '';

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.addMarker();
    });
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) { this.zoom++; }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) { this.zoom--; }
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }
  onhover(event: google.maps.MouseEvent, marker: MapMarker) {
    console.log(event);
    console.log(marker);
    this.info.open(marker);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      // label: {
      //   color: 'red',
      //   text: 'Marker label ' + (this.markers.length + 1),
      // },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
        draggable: true,
      },
    });
  }
  dragPosition(event, somemarker) {
    console.log(event);
    console.log(somemarker);
  }

  openInfo(marker: MapMarker, content) {
    // const anchor:google.maps.MVCObject = marker.getAnchor();
    this.infoContent = content;
    this.info.open(marker);
    console.log(marker);
    console.log(this.info.open());
    console.log(content);
  }
}
