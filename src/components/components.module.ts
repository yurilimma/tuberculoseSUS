import { NgModule } from '@angular/core';
import { DashboardButtonComponent } from './dashboard-button/dashboard-button';
import { ListItemComponent } from './list-item/list-item';
import { TubercususFooterComponent } from './tubercusus-footer/tubercusus-footer';
@NgModule({
	declarations: [DashboardButtonComponent,
    ListItemComponent,
    TubercususFooterComponent],
	imports: [],
	exports: [DashboardButtonComponent,
    ListItemComponent,
    TubercususFooterComponent]
})
export class ComponentsModule {}
