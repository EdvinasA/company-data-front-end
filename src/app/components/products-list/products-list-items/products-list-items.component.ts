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
  public selectedOption = 'popular';
  public defaultProductDisplay = 'card';
  public selectedPageAmount = '8';
  public selectedView = false;
  public page = 0;
  public isLoading: boolean = true;
  private currentSubCategory: string = '';

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
      this.request(this.page, this.selectedPageAmount, this.currentSubCategory);
    });
    this.productsService.pageSubject.asObservable().subscribe((page) => {
      this.itemsPage = page;
      this.isLoading = false;
    });
  }

  changeSizeOfPage(event: string) {
    this.selectedPageAmount = event;
    this.request(this.page, this.selectedPageAmount);
  }

  changePage(event: number) {
    this.page = event;
    this.request(this.page, this.selectedPageAmount);
  }

  request(page: number, size: string, subCategory?: string) {
    this.subscription = this.productsService.getPagedListOfLaptops(
      size,
      page - 1,
      subCategory
    );
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
