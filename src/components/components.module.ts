import { NgModule } from '@angular/core';
import { DashboardButtonComponent } from './dashboard-button/dashboard-button';
import { ListItemComponent } from './list-item/list-item';
@NgModule({
	declarations: [DashboardButtonComponent,
    ListItemComponent],
	imports: [],
	exports: [DashboardButtonComponent,
    ListItemComponent]
})
export class ComponentsModule {}
