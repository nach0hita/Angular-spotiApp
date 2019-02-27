import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artist : any = {};
  topTracks : any = {};

  loading : boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {
   this.loading = true;

    this.router.params.subscribe( params => {
      this.getDetailArtist( params['id'] );
      this.getTopTracks( params['id'] );
      this.loading = false;
    });
  }

  getDetailArtist( id : string ){

    this.spotify.getDetailArtist( id )
      .subscribe( artista => {
        this.artist = artista;
      });
  }

  getTopTracks( id : string ){
    this.spotify.getTopTrackArtist( id )
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }

  ngOnInit() {
  }

}
