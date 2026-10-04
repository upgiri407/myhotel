// Custom pipe: formats the name string with a title for display in templates.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormatType',
})
export class NameFormatTypePipe implements PipeTransform {
  transform(value: string): string {
    return `Mr. ${value}`;
  }
}
