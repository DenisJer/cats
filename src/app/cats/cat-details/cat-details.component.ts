import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cats } from '../shared/models/cats.interface';
import { CatsService } from '../shared/services/cats.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html'
})
export class CatDetailsComponent implements OnInit {
  catDetails$: Observable<Cats>;
  errorMessages: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private catsService: CatsService) { }

  ngOnInit(): void {
    const catId = this.activatedRoute.snapshot.paramMap.get('id');
    this.catDetails$ = this.catsService.getCatById(catId).pipe(
      catchError(error => {
        this.handleError(error);
        return EMPTY;
      })
    );
  }

  private handleError(error: HttpErrorResponse): void {
    const errorBody = error.error;
    if (error.status < 500 && errorBody && errorBody.messages) {
      this.errorMessages = errorBody.messages;
      return;
    }
  }
}
