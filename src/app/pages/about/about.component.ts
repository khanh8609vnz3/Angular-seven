import { Component, OnInit } from "@angular/core";

declare var $;

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  tableData = [
    {
      id: 1,
      name: "Khanh",
      age: 24,
      job: "IT"
    },
    {
      id: 2,
      name: "Yen",
      age: 14,
      job: "Student"
    }
  ];

  ngOnInit() {
    this.addEventToTableHeader();
  }

  addEventToTableHeader() {
    console.log(this.tableData);
    $("#table-user").DataTable({
      data: this.tableData,
      columns: [
        { data: "id" },
        { data: "name" },
        { data: "age" },
        { data: "job" }
      ]
    });
  }
}
