import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  username!: string;
  userDetail: any;
  repos: any;


  constructor(
    private active: ActivatedRoute,
    private service: ApiService,
    private route: Router
  ) {
    this.active.params.subscribe((params) => {
      this.username = params['id'];
      console.log('params =', this.username);
    });
    this.service.getUser(this.username).subscribe({
      complete: () => {
        console.log('successfull');
      },
      error: () => {
        //we navigate to the search page
        alert('you have entered the wrong name');
        this.route.navigate(['search']);
      },
      next: (data: any = []) => {
        this.userDetail = data;
        console.log(this.userDetail);
      },
    });

    this.service.getRepos(this.username).subscribe((val: any) => {
      this.repos = val;
      console.log(val.repos);
    });
  }

  // loadRepos() {
  //   const username = 'your-github-username'; // Replace with your GitHub username
  //   this.service.getRepos(username)
  //     .subscribe((repos: any) => {
  //       this.repos = repos;
  //     });
  // }
  
}
