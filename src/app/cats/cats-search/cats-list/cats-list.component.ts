import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PageChange } from 'src/app/shared/enum/page-change.enum';
import { CatsPaths } from '../../cats-paths.const';
import { SortLimit } from '../../shared/enum/cats-sort-limit.enum';
import { Cats } from '../../shared/models/cats.interface';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsListComponent {
  CatsPaths = CatsPaths;

  @Input() catsData: Cats[];
  @Input() loading: boolean;
  @Input() sortLimit: number;
  @Output() limitChange = new EventEmitter<SortLimit>();
  @Output() pageChange = new EventEmitter<PageChange>();


  catHasDescription(cat: Cats): boolean {
    return !!(cat?.breeds.length && cat.breeds[0].description);
  }

  onLimitChange(limit: SortLimit): void {
    this.limitChange.emit(limit);
  }

  onPageChange(change: PageChange): void {
    this.pageChange.emit(change);
  }
}
