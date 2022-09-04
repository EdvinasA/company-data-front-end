import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Page } from '../../../models/page';
import { User } from '../../../models/user';
import { ProductsService } from '../../../services/products.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-products-list-items',
  templateUrl: './products-list-items.component.html',
  styleUrls: ['./products-list-items.component.scss'],
})
export class ProductsListItemsComponent implements OnInit, OnDestroy {
  public user!: User | null;
  public itemsPage!: Page | null;
  public subscription!: Subscription;
  public selectedOption = 'asc';
  public defaultProductDisplay = 'card';
  public selectedPageAmount = '8';
  public page = 0;
  public isLoading: boolean = true;
  public sortOptions: string[] = [];
  public currentSubCategory: string = '';
  public currentCategory: string = '';

  constructor(
    private productsService: ProductsService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((data) => {
      this.user = data;
    });
    this.route.params.subscribe((params) => {
      this.currentSubCategory = params['subCategory'];
      this.currentCategory = params['category'];
      this.sortOptions = ['price,asc', 'price,desc'];
      this.request(
        this.page,
        this.selectedPageAmount,
        [{ field: 'subCategory', value: this.currentSubCategory }],
        this.selectedOption === 'asc'
          ? [this.sortOptions[0]]
          : [this.sortOptions[1]]
      );
    });
    this.productsService.pageSubject.asObservable().subscribe((page) => {
      this.itemsPage = page;
      this.isLoading = false;
    });
  }

  changeSizeOfPage(event: string) {
    this.selectedPageAmount = event;
    this.sortOptions = ['price,asc', 'price,desc'];
    this.request(
      this.page,
      this.selectedPageAmount,
      [{ field: 'subCategory', value: this.currentSubCategory }],
      this.selectedOption === 'asc'
        ? [this.sortOptions[0]]
        : [this.sortOptions[1]]
    );
  }

  changePage(event: number) {
    this.page = event;
    this.sortOptions = ['price,asc', 'price,desc'];
    const page = this.page === 0 ? 0 : this.page - 1;
    this.request(
      page,
      this.selectedPageAmount,
      [{ field: 'subCategory', value: this.currentSubCategory }],
      this.selectedOption === 'asc'
        ? [this.sortOptions[0]]
        : [this.sortOptions[1]]
    );
  }

  changeSort() {
    this.sortOptions = ['price,asc', 'price,desc'];
    this.request(
      this.page,
      this.selectedPageAmount,
      [{ field: 'subCategory', value: this.currentSubCategory }],
      this.selectedOption === 'asc'
        ? [this.sortOptions[0]]
        : [this.sortOptions[1]]
    );
  }

  request(
    page: number,
    size: string,
    filter?: { field: string | object | undefined; value: string }[],
    sort?: string[]
  ) {
    this.subscription = this.productsService.getPagedListOfLaptops({
      page: page,
      size: Number(size),
      filter: filter,
      sort: sort,
    });
    this.productsService.pageSubject.asObservable().subscribe((page) => {
      this.itemsPage = page;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSecondAmountOfResultValues() {
    if (this.itemsPage != undefined) {
      if (this.itemsPage?.last) {
        return this.itemsPage?.totalElements;
      }
      return this.itemsPage?.numberOfElements * this.getCurrentPage();
    }
    return 0;
  }

  getFirstAmountOfResultValues() {
    if (this.itemsPage != undefined) {
      if (this.itemsPage?.last) {
        return (
          this.itemsPage?.totalElements - this.itemsPage?.numberOfElements + 1
        );
      }
      return (
        this.getCurrentPage() * this.itemsPage?.numberOfElements -
        (this.itemsPage?.numberOfElements - 1)
      );
    }
    return 0;
  }

  getCurrentPage() {
    if (this.page === 0) {
      return 1;
    }
    return this.page;
  }

  changeProductDisplay(displayType: MatButtonToggleChange) {
    this.defaultProductDisplay = displayType.value;
  }
}
