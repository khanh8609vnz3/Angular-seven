import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Store} from '@ngrx/store';
import {UserModel} from 'src/app/model/user.model';
import {Observable} from 'rxjs';
import {AppState} from '../../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postData: Observable<UserModel[]>;

  constructor(
    private homeService: HomeService,
    private store: Store<AppState>
  ) {
    this.postData = store.select('users');
  }

  ngOnInit() {
    // this.setData();
    console.log(this.postData);
  }

  setData() {
    this.homeService.getData().subscribe((response: Observable<UserModel[]>) => {
      this.postData = response;
    });
  }
}
