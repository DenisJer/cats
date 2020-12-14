import { PageChange } from '../enum/page-change.enum';

export class PaginationUtils {
  static calculatePageNumber(pageChange: PageChange, pageNumber: number): number {
    switch (pageChange) {
      case PageChange.Next:
        return pageNumber + 1;
      case PageChange.Previous:
        return pageNumber - 1;
    }
  }
}