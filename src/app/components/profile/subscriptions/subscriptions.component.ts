import {Component, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {ConverterService} from "../../../services/converter.service";
import {MatSlideToggleChange} from "@angular/material/slide-toggle/slide-toggle";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {

  isLoading: boolean = true;
  color: ThemePalette = 'primary';
  user: User | null = {};

  constructor(private userService: UserService,
              private converterService: ConverterService) {
  }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      if (user != null) {
        this.user = user;
        this.isLoading = false;
      }
    })
  }

  updateSubscriptionReceiveEmails(event: MatSlideToggleChange) {
    this.user!.subscriptionDetails!.receiveEmails = event.checked;
    this.user!.subscriptionDetails!.receiveEmailsDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.updateRequest();
  }

  updateSubscriptionReceiveEmailsAboutLookedItems(event: MatSlideToggleChange) {
    this.user!.subscriptionDetails!.receiveEmailsAboutLookedItems = event.checked;
    this.user!.subscriptionDetails!.receiveEmailsAboutLookedItemsDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.updateRequest();
  }

  updateSubscriptionReceiveEmailsAboutServiceQuality(event: MatSlideToggleChange) {
    this.user!.subscriptionDetails!.receiveEmailsAboutServiceQuality = event.checked;
    this.user!.subscriptionDetails!.receiveEmailsAboutServiceQualityDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.updateRequest();
  }

  updateSubscriptionReceiveEmailsAboutGivingFeedback(event: MatSlideToggleChange) {
    this.user!.subscriptionDetails!.receiveEmailsAboutGivingFeedback = event.checked;
    this.user!.subscriptionDetails!.receiveEmailsAboutGivingFeedbackDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.updateRequest();
  }

  updateRequest() {
    if (this.user != null) {
      this.userService.updateUser(this.converterService.convertToUpdateUserInput(this.user)).subscribe(user => {
        this.user = user;
      });
    }
  }

}
