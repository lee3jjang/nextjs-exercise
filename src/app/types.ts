export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchParase: string;
    bs: string;
  };
};
