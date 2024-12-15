import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { StatsCategories } from '../../interfaces/stats-categories.interface';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  imports: [NavbarComponent],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  statsCategories: StatsCategories[] = [];

  constructor(private chartService: ChartService) {}

  async ngOnInit(): Promise<void> {
    await this.chartService.loadProducts(this.statsCategories);
    console.log(this.statsCategories);
  }
}
