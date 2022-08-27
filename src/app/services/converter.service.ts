import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartItem } from '../models/cart';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { DeliveryInformation, User, UserUpdateInput } from '../models/user';
import { ViewedItem } from '../models/viewed-item';
import { WishlistCreate, WishlistItem } from '../models/wishlist';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  constructor() {}

  public convertRegisterFormToBody(registerForm: FormGroup) {
    let registerBody: Register = {
      email: registerForm.get('email')?.value,
      name: registerForm.get('name')?.value,
      lastName: registerForm.get('lastName')?.value,
      password: registerForm.get('password')?.value,
    };

    return registerBody;
  }

  public convertLoginFormToBody(loginForm: FormGroup) {
    let loginBody: Login = {
      email: loginForm.get('email')?.value,
      password: loginForm.get('password')?.value,
    };

    return loginBody;
  }

  public convertToWishlistBody(name: FormControl) {
    let body: WishlistCreate = {
      name: name.value,
    };

    return body;
  }

  public convertToUpdateUserInput(user: User) {
    let input: UserUpdateInput = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      password: user.password,
      subscriptionDetails: user.subscriptionDetails,
      role: user.role,
      deliveryInformation: user.deliveryInformation,
    };

    return input;
  }

  public convertToCartItemFromWishlist(item: WishlistItem) {
    let cartItem: CartItem = {
      itemId: item.itemId,
      picture: item.itemPicture,
      itemName: item.itemName,
      itemCode: item.itemCode,
      itemQuantity: 1,
      itemPrice: item.itemPrice,
      itemInsurance: false,
      itemWarranty: false,
    };

    return cartItem;
  }

  public convertToCartItemFromProduct(
    item: Product,
    quantity: number,
    insurance: boolean,
    warranty: boolean
  ) {
    let cartItem: CartItem = {
      itemId: item.id,
      picture: item.picture,
      itemName: item.name,
      itemCode: item.code,
      itemQuantity: quantity,
      itemPrice: item.price,
      itemInsurance: insurance,
      itemWarranty: warranty,
    };

    return cartItem;
  }

  public convertToWishlistItemFromProduct(
    item: Product,
    portfolioId: string | unknown
  ) {
    let wishlistItem: WishlistItem = {
      id: '',
      itemId: item.id,
      itemPicture: item.picture,
      itemCode: item.code,
      itemPrice: item.price,
      itemName: item.name,
      wishListProfileId: portfolioId,
    };

    return wishlistItem;
  }

  public convertToCartItemFromViewedItem(item: ViewedItem) {
    let cartItem: CartItem = {
      itemId: item.id,
      picture: item.itemPicture,
      itemName: item.itemName,
      itemCode: item.itemCode,
      itemQuantity: 1,
      itemPrice: item.itemPrice,
      itemInsurance: false,
      itemWarranty: false,
    };

    return cartItem;
  }

  public convertToDeliveryInformation(info: DeliveryInformation) {
    let infoUpdated: DeliveryInformation = info;

    return infoUpdated;
  }
}
