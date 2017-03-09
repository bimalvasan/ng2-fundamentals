import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventListComponent {
    events: any[];
    constructor(private eventService: EventService) {
        this.events = eventService.getEvents();
    }
}