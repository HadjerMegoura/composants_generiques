import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableComponentComponent } from './generic-table-component.component';

describe('GenericTableComponentComponent', () => {
  let component: GenericTableComponentComponent<any>;
  let fixture: ComponentFixture<GenericTableComponentComponent<any>>;
  let componentDom: any;
  let data: any[];
  let headers: any[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTableComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTableComponentComponent);
    component = fixture.componentInstance;

    componentDom = fixture.nativeElement;
    data = [
      ['001', 'Math', 10.5, true],
      ['002', 'Physics', 8, false],
      ['003', 'English', 15, true],
    ];
    headers = ['id', 'Subject', 'Note', 'Result'];
    component.data = data;
    component.headers = headers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //La vérification que les en-têtes de colonnes sont rendus correctement.
  it('should render table columns correctly', () => {
    let tableHeader = componentDom.querySelectorAll('table th');

    let tableHeadersContent = [];
    tableHeader.forEach((element) => {
      tableHeadersContent.push(element.textContent);
    });
    expect(headers.length).toEqual(tableHeader.length);
    expect(tableHeadersContent).toEqual(headers);
  });

  //La vérification que les données sont correctement affichée dans le tableau.
  it('should render table data correctly', () => {
    let tableContent = [];

    const rows = componentDom.querySelectorAll('table tbody tr');
    //Le tableau doit avoir un nombre correct de ligne
    expect(rows.length).toEqual(data.length);

    rows.forEach((row) => {
      let rowData = [];
      const rowCells = row.querySelectorAll('td');
      rowCells.forEach((elem) => {
        rowData.push(elem.textContent.trim());
      });
      tableContent.push(rowData);
    });
    //la contenue de tableau == data
    expect(tableContent).toEqual(component.data.map((row) => row.map(String)));
  });

  //tester la fonction de tri
  it('should sort data correctly', () => {
    let result = [
      ['002', 'Physics', 8, false],
      ['001', 'Math', 10.5, true],
      ['003', 'English', 15, true],
    ];
    component.sortData(2);
    expect(component.data).toEqual(result);
  });

  //tester la pagination
  it('pagination should work correctly', () => {
    spyOn(component, 'prevPage');
    spyOn(component, 'goToPage');
    spyOn(component, 'nextPage');
    const previousButton = componentDom.querySelector('#Previous');
    const currentButton = componentDom.querySelector('#current');
    const nextButton = componentDom.querySelector('#next');

    //previous
    previousButton.click();
    fixture.detectChanges();
    expect(component.prevPage).toHaveBeenCalled();
    //current
    currentButton.click();
    fixture.detectChanges();
    expect(component.goToPage).toHaveBeenCalled();
    //next
    nextButton.click();
    fixture.detectChanges();
    expect(component.nextPage).toHaveBeenCalled();
  });
});
