import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryDisplay } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public categories: CategoryDisplay[] = [];
  public subscription!: Subscription;
  public selectedCategory: CategoryDisplay | null = null;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.categoriesService
      .getCategories()
      .subscribe((category) => {
        this.categories = category;
      });
  }

  navigate(category: CategoryDisplay) {
    this.router.navigate(['/category', category.categoryForEnum]).then();
  }

  selectCategory(category: CategoryDisplay) {
    this.selectedCategory = category;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
