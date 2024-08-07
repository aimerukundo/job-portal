import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      'X-APN': `${environment.APN}`,
      'Content-Type': 'application/json',
    },
  });

  return next(req);
};
