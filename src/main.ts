/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 14:03:18
 * @LastEditTime: 2019-10-18 16:14:05
 * @LastEditors: Please set LastEditors
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';
if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

bootstrap().catch(err => console.error(err));
