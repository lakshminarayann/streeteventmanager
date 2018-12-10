import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'sem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'streetEventManager';

  ngOnInit() {
    document.addEventListener('deviceready”', function() {
    alert(device.platform);
    }, false);
    }
}
