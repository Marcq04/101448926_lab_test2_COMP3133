import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../services/spacex-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MissiondetailsComponent implements OnInit {
  missionDetails: any;

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
