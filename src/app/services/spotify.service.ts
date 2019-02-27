import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service Ready');

  }

  getQuery( query : string, version : string ){

    const url = `https://api.spotify.com/${ version }/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBLRxvhtxdX_24AG-knvp7iiHLJsOSE_V3aVL51sAzVnlsh6uXv3xFZlCKlFG4YrYwHVNaSpwSubnmaIDU'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    var obj = this.getQuery( 'browse/new-releases?limit=20', 'v1');
    console.log(obj);
    return obj.pipe( map( data => data['albums'].items));
  }

  getArtista( termino : string ){
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15`, 'v1' )
            .pipe( map( data => data['artists'].items ));
  }

  getDetailArtist( termino : string ){
    return this.getQuery( `artists/${ termino }`, 'v1' );
  }

  getTopTrackArtist( termino : string){
    return this.getQuery( `artists/${ termino }/top-tracks?country=ES`, 'v1' )
      .pipe(map( data => data['tracks'] ));
  }
}
