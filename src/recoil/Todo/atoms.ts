import { atom, selector } from 'recoil';

export type status = 'DONE' | 'DOING';

export interface toDo {
  status: status;
  contents: string;
}

export const selectStatus = atom<status>({
  key: 'nowStatus',
  default: 'DOING',
});

export const toDos = atom<toDo[]>({
  key: 'toDos',
  default: [
    { status: 'DOING', contents: 'default 1' },
    { status: 'DONE', contents: 'default 2' },
    { status: 'DONE', contents: 'default 3' },
    { status: 'DOING', contents: 'default 4' },
    { status: 'DOING', contents: 'default 5' },
  ],
});

export const selectToDo = selector<toDo[]>({
  key: 'selectToDos',
  get: ({ get }) => {
    const originalToDos = get(toDos);
    const nowStatus = get(selectStatus);
    return originalToDos.filter((toDo) => toDo.status === nowStatus);
  },
  set: ({ set }, newToDo) => {
    set(toDos, newToDo);
  },
});
