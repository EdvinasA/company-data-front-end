export interface User {
  id?: string,
  email?: string,
  name?: string,
  lastName?: string,
  password?: string,
  token?: string,
  subscriptionDetails?: SubscriptionDetails,
  registeredDate?: Date,
  role?: string[];
}

export type SubscriptionDetails = {
  id: number,
  receiveEmails: boolean,
  receiveEmailsDate: string,
  receiveEmailsAboutLookedItems: boolean,
  receiveEmailsAboutLookedItemsDate: string,
  receiveEmailsAboutGivingFeedback: boolean,
  receiveEmailsAboutGivingFeedbackDate: string,
  receiveEmailsAboutServiceQuality: boolean,
  receiveEmailsAboutServiceQualityDate: string,
}

export type UserUpdateInput = {
  id: string | undefined,
  name: string | undefined,
  lastName: string | undefined,
  password: string | undefined,
  subscriptionDetails: SubscriptionDetails | undefined,
  role: string[] | undefined,
}
