import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: false,
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  selectedYear: string = '';
  availableYears: number[] = [];

  @Output() filterChange = new EventEmitter<string>();

  onFilterChange() {
    this.filterChange.emit(this.selectedYear);
  }

  clearFilter() {
    this.selectedYear = '';
    this.filterChange.emit('');
  }

  private populateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 2006;
    this.availableYears = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
  }
}