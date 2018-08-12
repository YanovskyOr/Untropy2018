import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Location } from '../maplocation';
import { ServersService } from '../servers.service'
import { } from '@types/googlemaps';
import * as socketIo from 'socket.io-client'

@Component({
  selector: 'google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit, OnChanges {

  public locations: Location[];
  isServerOk : String;

  constructor(private serversService: ServersService) { }

  interval: any;

  @ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    this.getLocations();

    this.interval = setInterval(() => {
      this.getLocations();
      this.initMap();
    }, 1000 * 60 * 10);

    setTimeout(() => {
      if (this.locations)
        this.initMap();
    }, 1000);
  }

  initMap() {
    var mapProp = {
      center: new google.maps.LatLng(32.091027, 34.825510),
      zoom: 12,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
      mapTypeId: google.maps.MapTypeId.HYBRID
      // mapTypeId: google.maps.MapTypeId.SATELLITE
      // mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    for (let location of this.locations) {
      var marker = new google.maps.Marker({ position: new google.maps.LatLng(location.latitude, location.longtitude) });
      //marker.setLabel(location.name);
      var infowindow = new google.maps.InfoWindow({
        content: location.name
      });
      infowindow.open(this.map, marker);
      marker.setMap(this.map);

    }

    // var infowindow = new google.maps.InfoWindow({
    //   content: "Hey, We are here"
    // });
    // infowindow.open(this.map, marker);
  }

  ngOnChanges(){
    this.ngOnInit();
  }

  getLocations() {
    this.serversService.getMapLocations().subscribe(
      data => { this.locations = data; console.log(data) },
      err => console.error(err), () => console.log("got locations"));

    
    const socket = socketIo('http://uvo10ntf2e964aukvam.vm.cld.sr')
      socket.emit('isOk', (data) => {console.log(data)});
      socket.on('serverOk', (data) => {this.isServerOk = data.server});

      socket.emit('locations', (data) => {console.log(data)});
      socket.on('reply', (data) => {console.log(data)});
  }

}
