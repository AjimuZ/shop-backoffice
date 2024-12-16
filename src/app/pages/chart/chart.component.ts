import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { StatsCategories } from '../../interfaces/stats-categories.interface';
import { ChartService } from './chart.service';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  Title,
} from 'chart.js';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  imports: [NavbarComponent],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  statsCategories: StatsCategories[] = [];

  constructor(private chartService: ChartService, private router: Router) {
    Chart.register(
      ArcElement,
      Tooltip,
      Legend,
      PolarAreaController,
      RadialLinearScale,
      Title
    );

    // listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

   async ngOnInit(): Promise<void> {
     await this.chartService.loadProducts(this.statsCategories);
     this.createChart();
  }

  createChart(): void {
    const categories = this.statsCategories.map((item) => item.category);
    const productCounts = this.statsCategories.map(
      (item) => item.numberOfProducts
    );

    new Chart('productsChart', {
      type: 'polarArea',
      data: {
        labels: categories,
        datasets: [
          {
            label: 'Products per Category',
            data: productCounts,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#C9CBCF',
              '#FF6F61',
              '#F7B7A3',
              '#B8E986',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'left',
          },
          title: {
            display: true,
            text: 'Distribution of Products by Category',
            align: 'center',
            position: 'bottom'
          },
        },
      },
    });
  }

  // lifecycle: ensures the price input field is focused after each view check
  ngAfterViewChecked(): void {}
}
