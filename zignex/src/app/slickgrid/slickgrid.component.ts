import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Column, GridOption, FieldType, Filter } from 'angular-slickgrid';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';

import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { TodoWithID, HttpService, Todo } from '../_services/http.service';

@Component({
  selector: 'app-slickgrid',
  templateUrl: './slickgrid.component.html',
  styleUrls: ['./slickgrid.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlickgridComponent implements OnInit {

  title = 'slickgrid';
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];
  loadedData = [];

  todosList: Array<TodoWithID> = [];
  rp: any;
  rpData = [];
  helpMenuOpen: string;
  mapCanvas: string;
  arrowBtn: string;
  maxVisibleRows = 5;
  constructor(
    private http: HttpClient,
    private papa: Papa,
    private todosService: HttpService,
    private spinner: NgxSpinnerService
  ) {
    // this.backgroundSyncIdb();
    navigator.serviceWorker.onmessageerror = (e) => {
      console.log('sw-onerror:', e);
    };
  }
  ngOnInit() {
    // this.helpMenuOpen = 'out';
    // this.mapCanvas = 'in';
    // this.arrowBtn = 'out';
    // this.todosService.clearRP();
    this.spinner.show();
    // this.getData()

    this.http.get('http://localhost:3000/data').subscribe((response: any) => {
      this.loadedData = response;
      console.log(this.loadedData);
      // this.onAddRP(response);
      this.prepareGrid(response);
    },
      (error) => {
        this.spinner.hide();
      });

    this.gridOptions.enableFiltering = true;
  }
  // getData() {
  //   this.todosService.getData().subscribe((response) => {
  //     this.prepareGrid(response.body);
  //     this.rpData = response.body;
  //     this.spinner.hide();
  //   });
  // }
  ngAfterViewInit() {
  }

  prepareGrid(response) {
    this.gridOptions = {
      enableFiltering: true,
      gridMenu: {
        hideExportCsvCommand: true, // true by default, so if you want it, you will need to enable it
        hideExportTextDelimitedCommand: true, // true by default, so if you want it, you will need to enable it
        hideExportExcelCommand: true,
      },
      // enableColumnReorder: false,
      autoHeight: true,
      enableSorting: true
    };
    this.columnDefinitions = [
      {
        id: 'cusno',
        name: 'Customer Number',
        field: 'cusno',
        sortable: true,
        type: FieldType.string,
        width: 70,
        filterable: true,
      },
      {
        id: 'cnm',
        name: 'Customer Name',
        field: 'cnm',
        sortable: true,
        type: FieldType.string,
        width: 70,
        filterable: true,
      },
      {
        id: 'dow',
        name: 'Day of Week',
        field: 'dow',
        sortable: true,
        type: FieldType.string,
        width: 70,
        filterable: true,
      },
      {
        id: 'rno',
        name: 'Route No',
        field: 'rno',
        sortable: true,
        type: FieldType.string,
        width: 70,
        filterable: true,
      },
      {
        id: 'sqno',
        name: 'Seq No',
        field: 'sqno',
        sortable: true,
        type: FieldType.string,
        width: 70,
        filterable: true,
      },
      {
        id: 'sz',
        name: 'Container Size',
        field: 'sz',
        sortable: true,
        type: FieldType.string,
        width: 70,
        filterable: true,
      },
      {
        id: 'srvtm',
        name: 'Service Time',
        field: 'srvtm',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'stm',
        name: 'Start Time',
        field: 'stm',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'etm',
        name: 'Stop Time',
        field: 'etm',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'hno',
        name: 'House #',
        field: 'hno',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'snm',
        name: 'Street Name',
        field: 'snm',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'cty',
        name: 'City',
        field: 'cty',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'st',
        name: 'State',
        field: 'st',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'zp',
        name: 'Zip',
        field: 'zp',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'sdow',
        name: 'Source Day of Week',
        field: 'sdow',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
      {
        id: 'srno',
        name: 'Source Route No',
        field: 'srno',
        type: FieldType.string,
        width: 70,
        sortable: true,
        filterable: true
      },
    ];

    this.dataset = [];
    for (let i = 0; i < response.length; i++) {
      this.dataset[i] = {
        id: i,
        cusno: response[i].cusno,
        cnm: response[i].cnm,
        dow: response[i].dow,
        rno: response[i].rno,
        sqno: response[i].sqno,
        sz: response[i].sz,
        srvtm: response[i].srvtm,
        stm: response[i].stm,
        etm: response[i].etm,
        hno: response[i].hno,
        snm: response[i].snm,
        cty: response[i].cty,
        zp: response[i].zp,
        st: response[i].st,
        sdow: response[i].sdow,
        srno: response[i].srno,
      };
    }
    this.spinner.hide();
  }
  // onAddTodo(title: string) {
  //   const todo: Todo = {
  //     title,
  //     done: false,
  //   };
  //   this.todosService.add(todo).then((id) => {
  //     this.todosList = [...this.todosList, Object.assign({}, todo, { id })];
  //   });
  // }
  // onAddRP(response) {
  //   this.spinner.show();
  //   // console.log(response);
  //   const drops = [];

  //   for (var i = 0; i <= response.length - 1; i++) {
  //     const temp = { ...response[i], id: i };
  //     drops.push(temp);
  //   }
  //   const chunks = _.chunk(response, 5000);
  //   chunks.map((val, i) => {
  //     this.todosService.addRP(val);

  //     console.log(val);
  //   });
  // }

  // onToggleTodo({ id, done }: { id: number; done: boolean }) {
  //   this.todosService.update(id, { done }).then(() => {
  //     const todoToUpdate = this.todosList.find((todo) => todo.id === id);
  //     this.todosList = [
  //       ...this.todosList.filter((todo) => todo.id !== id),
  //       Object.assign({}, todoToUpdate, { done }),
  //     ];
  //   });
  // }

  // onDeleteTodo(id: number) {
  //   this.todosService.remove(id).then(() => {
  //     this.todosList = this.todosList.filter((todo) => todo.id !== id);
  //   });
  // }
  // backgroundSyncIdb() {
  //   navigator.serviceWorker.ready
  //     .then((SwRegistration) => {
  //       SwRegistration.sync.register('sync-idb');
  //     })
  //     .catch(console.log);
  // }
  // toggleHelpMenu(): void {
  //   this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  //   this.mapCanvas = this.mapCanvas === 'out' ? 'in' : 'out';
  //   this.arrowBtn = this.arrowBtn === 'out' ? 'in' : 'out';
  // }
}
