import { NgModule,SkipSelf,Optional } from '@angular/core';
import { ServicesModule } from '../services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';
import { SharedModule } from '../shared/shared.module';

import { LocalStorage } from './common/local.storage';

import 'hammerjs';
import { CustomFormsModule } from 'ng2-validation';
import 'rxjs/add/operator/take';
import '../utils/debug.util';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpModule,
    ServicesModule.forRoot(),
  ],
  declarations: [
  ],
  exports: [
    SharedModule,
    HttpModule,  
  ],
  providers: [
    CustomFormsModule,
    LocalStorage,
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://wx.dangxiao.cn/api/v1'
      }
    },
  ]
})

export class CoreModule { 
  constructor( @Optional() @SkipSelf() parent: CoreModule,
  ir: MdIconRegistry,
  ds: DomSanitizer
  ){
    if(parent){
      throw new Error("模块已存在，不能再次加载");
    }
    loadSvgResources(ir,ds);
  }
}
