import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/models/Data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  @HostBinding("class") classes ="row";
  data: Data = {
    name: "",
    age: 0,
    colour: "",
  }
  edit: boolean = false;
  constructor(private dataService: DataService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params["id"]){
      this.dataService.getData(params["id"]).subscribe(
        res => {
          this.data.id = res["_id"];
          this.data.name = res["name"];
          this.data.age = res["age"];
          this.data.colour = res["colour"];
          this.edit = true;
        },
        err => console.log(err)
      )
    }

  }
  editData(){
    this.dataService.updateData(this.data.id, this.data)
    .subscribe(
      res => {
        console.log("Editado correctamente");
        this.router.navigate(["/data"]);
      },
      err => console.log(err)
    )
  }

  saveNewData(){
    this.dataService.saveData(this.data).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(["/data"]);
      },
      err => console.log(err)
    )
  }
 

}
