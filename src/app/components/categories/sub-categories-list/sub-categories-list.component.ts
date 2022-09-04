import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryDisplay, SubCategoryDisplay } from '../../../models/category';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-sub-categories-list',
  templateUrl: './sub-categories-list.component.html',
  styleUrls: ['./sub-categories-list.component.scss'],
})
export class SubCategoriesListComponent implements OnInit {
  public subCategories: SubCategoryDisplay[] = [];
  public category!: CategoryDisplay;
  public currentCategory: string = '';
  public subscription!: Subscription;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentCategory = params['category'];
      this.subscription = this.categoriesService
        .getCategories()
        .subscribe((category) => {
          this.category = category.filter(
            (category) => category.categoryForEnum === this.currentCategory
          )[0];
        });
      this.subscription = this.categoriesService
        .getSubCategories(this.currentCategory)
        .subscribe((category) => {
          this.subCategories = category;
        });
    });
  }
}
