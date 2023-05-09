import { Component, OnInit } from '@angular/core';
import { TableHotService } from './services/table-hot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public serviceTable:TableHotService){

  }

  ngOnInit(): void {
    this.serviceTable.loadJson('assets/json/inputs-otfx.json').subscribe(
      (data) => {
        console.log("resultadoConsulta = "+ JSON.stringify(data) )
      },
      (error) => {
        console.error('Error fetching JSON data:', error);
      }
    );
  }

  title = 'basic-test-prj';

}
