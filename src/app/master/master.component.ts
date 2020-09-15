import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

 


  constructor() { }

  ngOnInit(): void {
  }

    hubspotScript ='<script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/v2.js"></script><script>hbspt.forms.create({portalId: "8448374", formId: "175afe06-02b6-4fc3-8e8c-c4b948fd88e5" }); </script>';
}
