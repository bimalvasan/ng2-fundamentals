import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NavbarComponent } from './nav/navbar.component'
import { EventsAppComponent } from './event-app.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'

@NgModule({
    imports: [BrowserModule],
    declarations: [NavbarComponent, EventsAppComponent, EventListComponent, EventThumbnailComponent],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule{}