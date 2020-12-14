import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortLimit } from 'src/app/cats/shared/enum/cats-sort-limit.enum';
import { PageChange } from '../../enum/page-change.enum';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  SortLimit = SortLimit;
  PageChange = PageChange;

  @Input() sortLimit: string;
  @Output() limitChange = new EventEmitter<SortLimit>();
  @Output() pageChange = new EventEmitter<PageChange>();

  onSortLimitChange(limit: SortLimit): void {
    this.limitChange.emit(limit);
  }

  onPageChangeButtonClick(change: PageChange): void {
    this.pageChange.emit(change);
  }
}
