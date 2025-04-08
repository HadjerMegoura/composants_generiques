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
      { id: '001', subject: 'Math', note: 10.5, result: true },
      { id: '002', subject: 'Physics', note: 8, result: false },
      { id: '003', subject: 'English', note: 15, result: true },
    ];

    headers = [
      { key: 'id', label: 'ID' },
      { key: 'subject', label: 'Subject' },
      { key: 'note', label: 'Note' },
      { key: 'result', label: 'Result' },
    ];
    component.data = data;
    component.headers = headers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //La vérification que les en-têtes de colonnes sont rendus correctement.
  it('should render table columns correctly', () => {
    let rendredTableheader = componentDom.querySelectorAll('table th');
    const expectedHeader = headers.map((header) => header.label);

    let rendredTableheadersContent = [];
    rendredTableheader.forEach((element) => {
      rendredTableheadersContent.push(element.textContent);
    });
    expect(rendredTableheader.length).toEqual(expectedHeader.length);
    expect(rendredTableheadersContent).toEqual(expectedHeader);
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
    expect(tableContent).toEqual(
      component.data.map((obj) => Object.values(obj).map(String))
    );
  });

  //tester la fonction de tri
  it('should sort data correctly', () => {
    let result = [
      { id: '003', subject: 'English', note: 15, result: true },
      { id: '001', subject: 'Math', note: 10.5, result: true },
      { id: '002', subject: 'Physics', note: 8, result: false },
    ];
    component.sortData('subject');
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
    if (previousButton) {
      previousButton.click();
      fixture.detectChanges();
      expect(component.prevPage).toHaveBeenCalled();
    }

    //current
    currentButton.click();
    fixture.detectChanges();
    expect(component.goToPage).toHaveBeenCalled();
    //next
    if (nextButton) {
      nextButton.click();
      fixture.detectChanges();
      expect(component.nextPage).toHaveBeenCalled();
    }
  });
});
