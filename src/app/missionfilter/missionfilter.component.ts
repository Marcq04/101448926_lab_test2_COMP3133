import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: false,
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  selectedYear: string = '';

  @Output() filterChange = new EventEmitter<string>();

  onFilterChange() {
    this.filterChange.emit(this.selectedYear);
  }
}