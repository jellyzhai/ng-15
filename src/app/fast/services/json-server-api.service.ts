import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonServerApiService {
  jsonServerOrigin = 'http://localhost:3000';

  dbJson = {
    posts: [
      {
        id: 1,
        title: 'json-server',
        author: 'xiaoming',
      },
      {
        id: 2,
        title: 'angular',
        author: 'jelly',
      },
    ],
    comments: [
      {
        id: 1,
        body: 'some comment1',
        postId: 1,
      },
      {
        id: 2,
        body: 'some comment2',
        postId: 1,
      },
      {
        body: 'oh my god!',
        postId: 2,
        id: 3,
      },
    ],
    profile: {
      name: 'xiaoming',
    },
  };

  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(this.jsonServerOrigin + `/${url}`);
  }

  queryAssociatedSubData() {
    return this.http.get(this.jsonServerOrigin + '/posts/?_embed=comments');
    // return this.http.get(this.jsonServerOrigin + '/posts/1/?_embed=comments');
  }

  queryAssociatedParentData() {
    // return this.http.get(this.jsonServerOrigin + '/comments/?_expand=post');
    return this.http.get(this.jsonServerOrigin + '/comments/2/?_expand=post');
  }

  addData(url: 'posts' | 'comments', body: any) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this.jsonServerOrigin + `/${url}`, body, {
      headers,
    });
  }

  putUpdate(url: string, body: any) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put(this.jsonServerOrigin + `/${url}/1`, body, {
      headers,
    });
  }

  patchUpdate(url: string, body: any) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.patch(this.jsonServerOrigin + `/${url}/1`, body, {
      headers,
    });
  }

  deleteData(url: string) {
    return this.http.delete(this.jsonServerOrigin + `/${url}/1`);
  }
}
