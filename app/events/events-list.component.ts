import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventListComponent implements OnInit {
    events: any[]

    constructor(private eventService: EventService, private toastrService: ToastrService) {

    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    onThumbnailClicked(eventName) {
        this.toastrService.success(eventName)
    }
}