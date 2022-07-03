import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories!: Category

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

}
