import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../services/spacex-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Models } from '../models';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule, MatListModule],
})
export class MissiondetailsComponent implements OnInit {
  missionDetails?: Models;
  isLoading = true;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService, private router: Router) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    if (flightNumber) {
      this.spacexApi.getLaunches().subscribe(launches => {
        this.missionDetails = launches.find((launch: { flight_number: number }) => 
          launch.flight_number == +flightNumber // Ensure flightNumber is compared as a number
        );
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
