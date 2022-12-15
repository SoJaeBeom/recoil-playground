import { atom, selector, selectorFamily } from 'recoil';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  addr: {
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
    catchPhrase: string;
    bs: string;
  };
}

export const userList = atom<IUser[]>({
  key: 'userList',
  default: [],
});

export const selectId = atom({
  key: 'selectId',
  default: 1,
});

export const nowUser = atom<IUser>({
  key: 'nowUser',
  default: undefined,
});

export const selectUser = selectorFamily({
  key: 'selectOne',
  get: (id: number) => async () => {
    const user = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (res) => res.json()
    );
    return user;
  },
});

export const selectingUser = selector({
  key: 'selectingUser',
  get: async ({ get }) => {
    const id = get(selectId);
    const user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((res) => res.json());
    return user;
  },
  set: ({ set }, newValue) => {
    set(nowUser as any, newValue);
  },
});
