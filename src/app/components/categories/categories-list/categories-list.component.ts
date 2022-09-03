import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryDisplay } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  public categories: CategoryDisplay[] = [];
  public subscription!: Subscription;
  public selectedCategory: CategoryDisplay | null = null;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.subscription = this.categoriesService
      .getCategories()
      .subscribe((category) => {
        this.categories = category;
      });
  }

  selectCategory(category: CategoryDisplay) {
    this.selectedCategory = category;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
