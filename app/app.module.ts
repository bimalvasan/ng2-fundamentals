import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { NavbarComponent } from './nav/navbar.component'
import { EventsAppComponent } from './event-app.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'

import { appRoutes } from './routes'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [NavbarComponent, EventsAppComponent, EventListComponent, EventThumbnailComponent, EventDetailsComponent],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule{}