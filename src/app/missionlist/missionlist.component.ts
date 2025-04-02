import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpacexApiService } from '../services/spacex-api.service';

@Component({
  selector: 'app-missionlist',
  standalone: false,
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];

  constructor(private spacexApi: SpacexApiService, private router: Router) { }

  ngOnInit(): void {
    this.spacexApi.getLaunches().subscribe(data => {
      this.launches = data;
      this.filteredLaunches = this.launches;
    });
  }

  onFilterChange(year: string): void {
    if (year) {
      this.filteredLaunches = this.launches.filter(launch => launch.launch_year === year);
    }
    else {
      this.filteredLaunches = this.launches;
    }
  }

  viewMissionDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }
}