import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Acão',
      url: '/acao',
      icon: 'list'
    },
    {
      title: 'Aventura',
      url: '/aventura',
      icon: 'list'
    },
    {
      title: 'Comédia',
      url: '/comedia',
      icon: 'list'
    },
    {
      title: 'Documentário',
      url: '/documentario',
      icon: 'list'
    },
    {
      title: 'Drama',
      url: '/drama',
      icon: 'list'
    },
    {
      title: 'Ficção científica',
      url: '/ficcao',
      icon: 'list'
    },
    {
      title: 'Séries',
      url: '/series',
      icon: 'list'
    },
    {
      title: 'Suspense',
      url: '/suspense',
      icon: 'list'
    },
    {
      title: 'Terror',
      url: '/terror',
      icon: 'list'
    },
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
