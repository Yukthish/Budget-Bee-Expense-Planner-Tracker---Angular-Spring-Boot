import { Component } from '@angular/core';
import { StatsService } from '../../services/stats/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  stats:any;
  gridStyle = {
    width:'25%',
    textAlign:'center'

    // 'background-color': 'lightblue', // Add any other styles you want to apply
    // 'font-size': '16px',
    // 'padding': '10px'
  };

  constructor(private statsService: StatsService){
    this.getStats();
  }

  getStats(){
    this.statsService.getStats().subscribe(res=>{
      console.log(res);
      this.stats =res;
    })
  }
}
