import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [
        '.pad-left { margin-left: 50px; }' 
    ]
})
export class EventThumbnailComponent{
   @Input() event: any
   @Output() eventClick = new EventEmitter()
}