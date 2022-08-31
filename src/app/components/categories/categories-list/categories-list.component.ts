import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryDisplay } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  public categories: CategoryDisplay[] = [];
  public subscription!: Subscription;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.subscription = this.categoriesService
      .getCategories()
      .subscribe((category) => {
        this.categories = category;
      });
  }
}
