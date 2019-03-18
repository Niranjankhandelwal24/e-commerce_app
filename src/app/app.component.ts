import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'My Account',
      url: '/myaccount',
      icon: 'myaccount'
    },
    {
      title: 'Products',
      url: '/product',
      icon: 'product'
    },
    // {
    //  title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'My Orders',
      url: '/myorder',
      icon: 'myorders'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
