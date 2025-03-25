import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-generic-table-component',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './generic-table-component.component.html',
  styleUrl: './generic-table-component.component.css',
})
export class GenericTableComponentComponent {
  @Input() headers: any[] = [];
  @Input() data: any[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 5;

  /**
   * @description slice data on pages depending on itemsPerPage input
   * @returns the data that will be showen in current page
   */

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  /**
   * @description calculate total pages
   * @returns the number of total pages
   */

  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  /**
   * @description go to next page
   */

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  /**
   * @description go to previous page
   */

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  /**
   * @description go to a given page using its number
   * @param {number}  page page number
   */

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  /**
   * @description sort table data according to the clicked column
   * @param {number}  index the index of the selected header
   */

  sortData(index: number) {
    this.data.sort((a, b) => {
      //In case data are numbers define a sort logique
      if (isFinite(a[index]) && isFinite(b[index])) {
        return a[index] - b[index];
      }
      //else we're keeping normal str order
      return a[index].localeCompare(b[index]);
    });
  }
}
