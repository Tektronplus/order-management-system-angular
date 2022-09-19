import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormOrderComponent } from './main/form-order/form-order.component';
import { OrdersComponent } from './main/orders/orders.component';
import { OrderCardComponent } from './main/orders/order-card/order-card.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent,
		FormOrderComponent,
		OrdersComponent,
		OrderCardComponent,
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
