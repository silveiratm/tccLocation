import { Component, ViewChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-zone',
  templateUrl: 'zone.page.html',
  styleUrls: ['zone.page.scss']
})
export class ZonePage implements OnInit {
  map: any;
  marker: any;
  drawingManager: any;
  savedPolygon: any;

  @ViewChild('map', { static: true }) mapElement;



  constructor(private router: Router) { }

  ngOnInit() {
    this.initMap();
  }

  // ionViewDidLoad(){
  //   this.initMap()
  // }

  initMap() {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: { lat: -30.032991, lng: -51.122973 },
        zoom: 18
      }
    );

    this.drawingManager = new google.maps.drawing.DrawingManager({
      //drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      },
      polygonOptions: {
        fillColor: '#BCDCF9',
        fillOpacity: 0.5,
        strokeWeight: 3,
        clickable: false,
        editable: true,
        zIndex: 1
      }

    });
    console.log(this.drawingManager);
    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(this.drawingManager, 'polygoncomplete', function(polygon: any) {
      var path = polygon.getPath();
      for(var i = 0; i < polygon.getPath().getLength(); i++) {
        
        /* #Split
        var str = path.getAt(i).toUrlValue(6);
        var splitted = str.split(",", 2);
        console.log(splitted[0]);*/

        console.log(path.getAt(i).toUrlValue(6));


        //this.savedPolygon[i] = path.getAt(i).toUrlValue(6);
      };
      var name = window.prompt("Insira o nome da Zona.");
      console.log(name);
      
    });
    

  }

  saveZone(){
    
      console.log(this.savedPolygon);
    
  }

  cancelZone(){
    //this.router.navigate(['home/zone']);
  }

}
