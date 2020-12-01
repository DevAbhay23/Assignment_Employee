import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, timeout, catchError } from 'rxjs/operators';
import { Constants } from '../core/constants/constants';
import { BaseHttpService } from '../core/http/base-http.service';
import { EndPointService } from '../core/http/end-point.service';



@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private baseHttp: BaseHttpService, private endpoint: EndPointService) { }

    /**
     * Function will get employee report data
     */
    getEmployeeReportData(): Observable<{}> {
        return this.baseHttp.get(this.endpoint.getEmployeeReport)
            .pipe(
                timeout(Constants.ApiTimeout),
                catchError((err) => throwError(err))
            );
    }

}
