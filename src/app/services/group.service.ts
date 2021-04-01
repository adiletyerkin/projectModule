import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from './group';


@Injectable()
export class GroupService{

  api = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  getGroupById(request: string): Observable<Group[]>{
    return this.httpClient.get<Group[]>(this.api + '/group?' + request)

  }

}
