import { Component, OnInit, ViewChild } from "@angular/core";
import { HomeService } from "./home.service";
import { Store } from "@ngrx/store";
import { UserModel } from "src/app/model/user.model";
import { Observable } from "rxjs";
import { AppState } from "../../app.state";
import * as _ from "lodash";
import { Constant } from "src/app/model/constant";
import { HomeChildComponent } from "./home-child.component";
declare var $;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild(HomeChildComponent)
  myChild: HomeChildComponent;

  parentData: string = "Test data";

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
        // this.testLodashFunction(JSON.parse(JSON.stringify(this.postData)));
        // this.testAjaxFunction();
        this.testJqueryAjax();
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

  testAjaxFunction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", Constant.DUMMY_DATA_API_URL, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this);
      }
    };
  }

  testJqueryAjax() {
    $.get(Constant.DUMMY_DATA_API_URL, function(data, status, xhr) {
      console.log(data);
      console.log(status);
      console.log(xhr);
    });
  }

  changeData(myInput) {
    // $("#postId1").show();
    // $("#postId1").text("asd");
    // console.log(myInput.value);
    this.myChild.value++;
  }

  changeEventFromChild(value) {
    alert(value);
  }
}
