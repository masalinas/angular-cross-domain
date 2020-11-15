import { Component,  } from '@angular/core';

import { environment } from '../environments/environment';

const TOKEN = "1234";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Token Cross Domain';

  portals: any[];
  portalFrames: any[] = [];

  token: string;

  constructor() {
    this.portals = environment.portals;

    this.getToken();
  }

  ngAfterViewInit() {
    this.createTokenIframes();
  }

  getToken() {
    this.token = localStorage.getItem('token');
  }

  createTokenIframes() {
    let body = document.getElementsByTagName('body')[0];

    this.portals.forEach(portal => {
      // append iframe token element
      let tokenFrame = document.createElement('iframe');
      tokenFrame.setAttribute( 'id', portal.code);  
      tokenFrame.setAttribute( 'src', portal.iframe);
      tokenFrame.setAttribute( 'style', 'display:none;');
            
      body.appendChild(tokenFrame);

      // add token iframe to collection iframe collection
      this.portalFrames.push({code: portal.code, url: portal.url, frame: tokenFrame});
    });
  }

  onclick(event, portal) {
    const portalFrame = this.portalFrames.find(tokenFrame => tokenFrame.code == portal.code);

    // set local domain token
    localStorage.setItem('token', TOKEN);

    // set remote domain token
    this.token = TOKEN;

    let token = JSON.stringify({method: 'set', key: 'token', data: TOKEN});

    portalFrame.frame.contentWindow.postMessage(token, '*');

    // open new portal
    window.open(portalFrame.url, "_blank");
  }
}
