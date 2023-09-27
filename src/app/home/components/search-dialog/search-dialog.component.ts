import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent {
  sidebarVisible: boolean = false;
  @Input()
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


    searchMovie(){
      const term: string = this.searchForm.get('searchTerm')?.value;
      this.searchForm.reset();
      this.visible = false;
      this.router.navigate(['/movies/results-movie', term]);

    }

}
