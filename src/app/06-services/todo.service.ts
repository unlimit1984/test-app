import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo);
  }

  //
  getTodos() {
    return this.http.get('...').pipe(map(value => [5, 6, 7]));
    // return this.http.get('...').pipe(map(value => Object.keys(value)));
  }

  delete(id) {
    return this.http.delete('...');
  }
}
