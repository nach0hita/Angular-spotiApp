import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases : any[] = [];
  loading : boolean;
  errorValidate : boolean;
  errorMsg : string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.errorValidate = false;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.newReleases = data;
           this.loading = false;
        }, ( error ) => {
          this.loading = false;
          this.errorValidate = true;
          this.errorMsg = error.error.error.message;
        });
  }

  ngOnInit() {
  }

}
