import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value.toLowerCase()) {
      case 'front-end': return 'code';
      case 'back-end': return 'computer';
      case 'data-base': return 'account_tree';
      case 'database': return 'account_tree';
    }
    return 'code';
  }

}
