import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Page} from "../../models/page";
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  user: User | null = {};
  itemsPage!: Page | null;
  subscription!: Subscription;
  selectedOption = "popular";
  defaultProductDisplay = "blocks";
  selectedPageAmount = "8";
  selectedView = false;
  page = 0;
  isLoading: boolean = true;

  constructor(private productsService: ProductsService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(data => {
      this.user = data;
    })
    this.subscription = this.productsService
    .getPagedListOfLaptops(this.selectedPageAmount, this.page)
    this.productsService.pageSubject.asObservable().subscribe(page => {
      this.itemsPage = page;
      this.isLoading = false;
    })
  }

  changeSizeOfPage(event: string) {
    this.selectedPageAmount = event;
    this.request(this.page, this.selectedPageAmount);
  }

  changePage(event: number) {
    this.page = event;
    this.request(this.page, this.selectedPageAmount);
  }

  request(page: number, size: string) {
    this.subscription = this.productsService
    .getPagedListOfLaptops(size, (page - 1));
    this.productsService.pageSubject.asObservable().subscribe(page => {
      this.itemsPage = page;
    })
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
        return this.itemsPage?.totalElements - this.itemsPage?.numberOfElements + 1;
      }
      return ((this.getCurrentPage() * this.itemsPage?.numberOfElements) - (this.itemsPage?.numberOfElements - 1));
    }
    return 0;
  }

  getCurrentPage() {
    if (this.page === 0) {
      return 1;
    }
    return this.page;
  }
}

