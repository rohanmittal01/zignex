import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import Dexie from 'Dexie';
import IDBExportImport from 'indexeddb-export-import';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DexieService } from './dexie.service';
export interface Todo {
  title: string;
  done: boolean;
}

export interface TodoWithID extends Todo {
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  table: Dexie.Table<TodoWithID, number>;
  rp: Dexie.Table;
  constructor(
    private dexieService: DexieService,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    // this.idbDatabase = this.dexieService.idb;
    this.table = this.dexieService.table('todos');
    this.rp = this.dexieService.table('routeData');
  }
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/data', { observe: 'response' })
  }
  getAll() {
    return this.table.toArray();
  }
  getAllRP() {
    return this.rp.toArray();
  }

  add(data) {
    return this.table.add(data);
  }
  async addRP(data: any) {
    return await this.rp
      .bulkPut(data)
      .then(() => {
        console.log('success');
        this.spinner.hide();
      })
      .catch(() => {
        console.log('fail');
        this.spinner.hide();
      })
      .finally(() => {
        this.spinner.hide;
      });
  }

  update(id, data) {
    return this.table.update(id, data);
  }
  updateRP(id: any) {
    let res: any;
    this.dexieService.transaction('r', this.rp, async () => {
      res = await this.rp
        .where('title')
        .equals('552368884')
        .each((cust) => {
          console.log(cust);
        });
      // console.log(res)
    });
    return res;
  }

  remove(id) {
    return this.table.delete(id);
  }
  removeRP(id) {
    return this.rp.delete(id);
  }
  clearRP() {
    return this.rp.clear();
  }
}
