import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { HomeService } from "./home.service";
import { map, tap, filter, catchError } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  postData: any;
  data: any;
  person: Object = {
    name: "khanh"
  };
  name = "yen";

  ngOnInit() {
    const personObs: Observable<Object> = of(this.person);

    const nameObs: Observable<String> = of(this.name);

    personObs
      .pipe(map(data => JSON.parse(JSON.stringify(data))))
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });

    nameObs.pipe(map(name => name.toUpperCase())).subscribe(name => {
      console.log(name);
    });

    this.setData();
  }

  setData() {
    this.homeService
      .getData()
      .subscribe(response => {
        this.postData = response;
      });
  }

  changeData() {
    this.setData();
  }
}
