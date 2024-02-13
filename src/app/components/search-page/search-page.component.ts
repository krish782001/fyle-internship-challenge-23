import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  username: string | null | undefined;

  constructor(private route: Router) {}


  searchForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
  });

  ngOnInIt(): void {}
  sendUser() {
    this.username = this.searchForm.value.username;
    this.route.navigate([`user/${this.username}`])
  }
  
}
