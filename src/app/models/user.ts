export class User {
  id!: string;
  email!: string;
  name!: string;
  lastName!: string;
  password!: string;
  token!: string;
  subscriptionDetails!: SubscriptionDetails;
  registeredDate!: Date;
  role!: string[];
  deliveryInformation!: DeliveryInformation[];
}

export type SubscriptionDetails = {
  id: number;
  receiveEmails: boolean;
  receiveEmailsDate: string;
  receiveEmailsAboutLookedItems: boolean;
  receiveEmailsAboutLookedItemsDate: string;
  receiveEmailsAboutGivingFeedback: boolean;
  receiveEmailsAboutGivingFeedbackDate: string;
  receiveEmailsAboutServiceQuality: boolean;
  receiveEmailsAboutServiceQualityDate: string;
};

export type UserUpdateInput = {
  id: string | undefined;
  name: string | undefined;
  lastName: string | undefined;
  password: string | undefined;
  subscriptionDetails: SubscriptionDetails | undefined;
  role: string[] | undefined;
  deliveryInformation: DeliveryInformation[] | undefined;
};

export type DeliveryInformation = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  city: string;
  postalCode: string;
  companyCode: string;
  companyName: string;
  companyPVMCode: string;
  companyAddress: string;
  isBeingEdited: boolean;
};
