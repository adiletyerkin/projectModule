import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable()
export class UserService{

  api = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) {
  }

  getUserById(request: string): Observable<User[]>{
    return this.httpClient.get<User[]>(this.api + '/' + request)

  }


}
