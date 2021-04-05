import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { OrdersComponent } from './components/orders/orders.component';


@NgModule({
  declarations: [

    OrdersComponent
  ],
  imports: [MaterialModule],
  exports: [OrdersComponent],
  providers: [],
  bootstrap: []
})

export class AppModuleOrders { }
