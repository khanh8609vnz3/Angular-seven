import { Injectable } from "@angular/core";
import { CommonService } from "src/app/services/common.service";
import { Constant } from "src/app/model/constant";

@Injectable()
export class HomeService {
  constructor(private commonService: CommonService) {}

  getData() {
    return this.commonService.httpGet(Constant.DUMMY_DATA_API_URL);
  }
}
