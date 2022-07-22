export interface User {
  id: string,
  email: string,
  name: string,
  lastName: string,
  token: string,
  receiveEmails: boolean,
  receiveEmailsAboutLookedItems: boolean,
  receiveEmailsAboutGivingFeedback: boolean,
  receiveEmailsAboutServiceQuality: boolean,
  registeredDate: Date,
  role: string;
}
