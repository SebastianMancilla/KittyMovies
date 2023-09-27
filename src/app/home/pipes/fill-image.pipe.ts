import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Pipe({
  name: 'fillImage'
})
export class FillImagePipe implements PipeTransform {

  transform(id: string, size: string): string {
    if(!id){
      return '/assets/Image_not_available.png'
    }

    return `${environment.IMG_URL}${size}/${id}`;
  }

}
