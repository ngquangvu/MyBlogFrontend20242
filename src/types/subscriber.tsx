export type Subscriber = {
  email: string;
  isActive: boolean;
  isAgree: boolean;
};

export type SubscriberResponseData = {
  data: Subscriber
};
