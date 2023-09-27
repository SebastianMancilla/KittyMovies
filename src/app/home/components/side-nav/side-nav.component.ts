import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../../models/Movies.model';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent{
  sidebarVisible: boolean = false;
  visible: boolean = false;
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ){
      this.searchForm = this.formBuilder.group({
        searchTerm: ['', Validators.required]
      })
    }


    goHome(){
      this.router.navigateByUrl('/movies');
    }

    searchMovie(){
      const term: string = this.searchForm.get('searchTerm')?.value;
      this.searchForm.reset();
      this.visible = false;
      this.router.navigate(['/movies/results-movie', term]);

    }

    showDialogModal() {
        this.visible = true;
    }

}
