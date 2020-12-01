import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
import { EmployeeService } from './services/employee.service.ts';
import { UtilsProvider as UtilsService } from './services/utils.service';

declare var navigator;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'employee';
  orgEmployeesList: any = [];
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private employeeDataService: EmployeeService, private utilsProvider: UtilsService) {

  }

  /**
   * Method called on page init.
   */
  ngOnInit(): void {
    this.getEmployeesReportFromServer();
    this.utilsProvider.isDeviceReady().then(data => {
      if (data) {
        navigator.splashscreen.hide();             // hide splash screen

      }
    });
  }

  /**
   * Method called on page destroy.
   */
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  /**
   * Function to get employee report from server.
   */
  getEmployeesReportFromServer() {
    this.orgEmployeesList = this.getEmployeesData();

    /*  Below code commented as Api Not Available
    try {
      this.employeeDataService.getEmployeeReportData()
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(
          (retData: any) => {
            if (retData['status']) {
              this.orgEmployeesList = this.getEmployeesData();
            } else {
              this.showErrorDialog();
            }
          }, (error) => {
            this.showErrorDialog();
          });
    } catch (e) {
      this.showErrorDialog();
    }
    */
  }

  /**
  * Return sample JSON Data
  */
  getEmployeesData() {
    const sampleData = [
      {
        name: 'abc',
        title: 'Manager',
        sub: [
          {
            name: 'def',
            title: 'TL',
            sub: [
              {
                name: 'ghi',
                title: 'Associate',
                sub: []
              },
            ]
          },
          {
            name: 'jkl',
            title: 'TL',
            sub: []
          }
        ]
      },
      {
        name: 'mno',
        title: 'Manager',
        sub: [
          {
            name: 'pqr',
            title: 'Associate',
            sub: []
          }
        ]
      }
    ];
    return sampleData;
  }

  /**
   * Method to show alert error message to user
   */
  showErrorDialog() {
    const errorMessage = 'Unable to process the request. Please try again after sometime';
    alert(errorMessage);
  }

  /**
   *  Function to handle collapse click for nested records.
   * @param event:row click event.
   * @param dataItem: data item for clicked row.
   */
  collapseClick(event, dataItem) {
    dataItem.showSub = !dataItem.showSub;
    event.stopPropagation();
  }

  /**
   * Method to return icon text
   * @param dataItem:current record in grid
   */
  getIconText(dataItem) {
    const labelText = (dataItem.sub.length > 0) ? dataItem.showSub ? '-' : '+' : ' ';
    return labelText;
  }
}
