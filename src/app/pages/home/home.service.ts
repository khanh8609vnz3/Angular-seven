import { Injectable } from "@angular/core";
import { CommonService } from "src/app/services/common.service";
import { Constant } from "src/app/model/constant";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class HomeService {
  constructor(private commonService: CommonService) {}

  getData() {
    let params = new HttpParams().set("userId", "1").set("completed", "true");
    return this.commonService.httpGet(Constant.DUMMY_DATA_API_URL, params);
  }
}
