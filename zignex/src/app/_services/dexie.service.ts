import Dexie from 'dexie';
import { Injectable } from "@angular/core";

@Injectable()
export class DexieService extends Dexie {
  constructor() {
    super('zxStore');

    this.version(1).stores({
      todos: '++id',
      routeData:
        '++id,cusno,cnm,dow,rno,sqno,sz,srvtm,stm,etm,hno,snm,cty,zp,st,sdow,srno',
    });
    // this.todos = this.table('todos');
    // this.open().then(function (db:any) {
    //   this.idb = db.backendDB()
    //   console.log(this.idb);
    // });
    // this.routeData = this.table('routeData');
  }
}

// cusno,cnm,dow,rno,sqno,sz,srvtm,stm,etm,hno,snm,cty,zp,st,sdow,srno,
