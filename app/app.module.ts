import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { NavbarComponent } from './nav/navbar.component'
import { EventsAppComponent } from './event-app.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

import { appRoutes } from './routes'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [NavbarComponent, EventsAppComponent, EventListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, Error404Component],
    providers: [EventService, ToastrService, EventRouteActivator],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }