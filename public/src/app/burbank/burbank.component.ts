import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  @Input() weather: any;
  api = 'burbank';

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getburbank();
  }
  getburbank() {
    this._httpService.getWeather(this.api).subscribe(data=>{
      this.weather = data;
    })
  }
}
