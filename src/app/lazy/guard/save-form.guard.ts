import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface IsSaveForm {
  isSaveForm: () => boolean
}

@Injectable({
  providedIn: 'root'
})
export class SaveFormGuard implements CanDeactivate<IsSaveForm> {
  canDeactivate(
    component: IsSaveForm,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!component.isSaveForm()) {
      if (confirm('您的模板驱动表单尚未提交，确定要离开么？')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

}
