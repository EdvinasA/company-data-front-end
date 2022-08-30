import { Component, OnInit } from '@angular/core';
import { CategoryDisplay, SubCategoryDisplay } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: CategoryDisplay[] = [];
  subCategories: SubCategoryDisplay[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  setSubCategories(list: SubCategoryDisplay[]) {
    this.subCategories = list;
    console.log(list);
  }
}
