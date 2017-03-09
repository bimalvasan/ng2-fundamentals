import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventListComponent implements OnInit {
    events: any[]
    eventService: EventService
    
    constructor(private eventSvc: EventService) {
        this.eventService = eventSvc
    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }
}