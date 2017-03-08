import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [
        '.green { color: #003300 !important; } .bold { font-weight: bold; } .pad-left { margin-left: 10px; } .well div { color: #bbb; } .thumbnail { min-height: 210px; }'
    ]
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'

        //{ green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}

        return {
            green: isEarlyStart,
            bold: isEarlyStart
        }
    }

    getStartTimeStyle() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'

        if (isEarlyStart) {
            return {
                color: '#003300',
                'font-weight': 'bold'
            }
        }
        else {
            return {}
        }
    }
}