export interface User {
  id: string,
  email: string,
  name: string,
  lastName: string,
  token: string,
  subscriptionDetails: SubscriptionDetails,
  registeredDate: Date,
  role: string[];
}

export type SubscriptionDetails = {
  receiveEmails: boolean,
  receiveEmailsDate: Date,
  receiveEmailsAboutLookedItems: boolean,
  receiveEmailsAboutLookedItemsDate: Date,
  receiveEmailsAboutGivingFeedback: boolean,
  receiveEmailsAboutGivingFeedbackDate: Date,
  receiveEmailsAboutServiceQuality: boolean,
  receiveEmailsAboutServiceQualityDate: Date,
}
