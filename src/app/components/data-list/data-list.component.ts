import { Component, HostBinding, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  @HostBinding("class") clases ="row";

  datas : any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDates();
  }
  getDates() {
    this.dataService.getDatas().subscribe(
      res =>{
        this.datas = res;
      },
      err => console.log(err)
    )
  }
  editData(id: String){
    console.log(id);
  }
 deleteData(id: String){
    this.dataService.deleteData(id).subscribe(
      res => {
        console.log(res);
        this.getDates();
      },
      err => console.log(err)
    )
  }
}
