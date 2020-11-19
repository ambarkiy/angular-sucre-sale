export interface DishesGroup {
  groupName: string;
  dishes: Dish[];
}

export interface Dish {
  name: string;
  price: string;
  img: string;
  composition: string;
}
