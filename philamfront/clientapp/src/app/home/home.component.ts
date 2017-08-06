import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 

   title.setTitle('The Philippine-American Society of Greater Dayton');

    meta.addTags([
      {name: 'author', content: 'Christopher R. Francisco, Maria Blesya Asanon Mamitag'},
      { name: 'keywords', content: 'The Philippine-American Society of Greater Dayton, PhilAm Society, Phil-Am Society, Phil-Am Datyon, Philam Dayton, Philam Society Dayton, Phil-Am Society of Greater Dayton, The Philippine Society of Greater Dayton Ohio, Non-profit Org, nonprofit organization, culture, tradition, community, religion, Pamana, Heritage'},
      { name: 'description', content: 'The Philippine-American Society of Greater Dayton, Inc., non-profit organization, exists exclusively for charitable, religious, educational, and scientific purposes, including the making of distributions to organizations that qualify as exempt organizations under section 501(c)(3) of the Internal Revenue Code, or corresponding section of any future tax code' }
    ]);
       


  }

  ngOnInit() {
  }

}
