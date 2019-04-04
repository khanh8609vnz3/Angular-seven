import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { Store } from "@ngrx/store";
import { UserModel } from "src/app/model/user.model";
import { Observable } from "rxjs";
import { AppState } from "../../app.state";
import * as _ from "lodash";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  postData: Observable<UserModel[]>;

  constructor(
    private homeService: HomeService,
    private store: Store<AppState>
  ) {
    // this.postData = store.select("users");
  }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.homeService
      .getData()
      .subscribe((response: Observable<UserModel[]>) => {
        this.postData = response;
        this.testLodashFunction(JSON.parse(JSON.stringify(this.postData)));
      });
  }

  testLodashFunction(postData) {
    console.log(_.last(postData));
    console.log(_.chunk(postData, 5));
    console.log(_.join(postData, "~"));
    console.log(
      _.findIndex(postData, function(data) {
        return data.userId === 1;
      })
    );
    console.log(_.filter(postData, { id: 4 }));
    console.log(_.sortBy(postData, ["title"]));
  }
}
