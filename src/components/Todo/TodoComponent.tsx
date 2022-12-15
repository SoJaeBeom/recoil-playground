import { ChangeEvent, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  selectStatus,
  selectToDo,
  status,
  toDo,
  toDos,
} from '../../recoil/Todo/atoms';

const TodoComponent = () => {
  const [status, setStatus] = useRecoilState<status>(selectStatus);
  const selectToDos = useRecoilValue(selectToDo);

  const toDoAtom = useRecoilValue(toDos);

  const [contents, setContents] = useState<string>('');
  const setNewToDos = useSetRecoilState(selectToDo);

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.currentTarget.value as status);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.currentTarget.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    /**
     * event.preventDefault();
     *
     * a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나, 창이 새로고침하여 실행되는데
     * preventDefault 를 통해 이러한 동작을 막아줄 수 있다.
     */
    event.preventDefault();

    if (contents === '') {
      return;
    } else {
      const newTodoList: toDo[] = [
        ...toDoAtom,
        {
          contents,
          status: 'DOING',
        },
      ];

      setNewToDos(newTodoList);
      setContents('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={contents} onChange={handleInputChange} />
        <button>Submit</button>
      </form>
      <br />
      <div>
        <select value={status} onChange={handleStatus}>
          <option value='DOING'>DOING</option>
          <option value='DONE'>DONE</option>
        </select>
        <ul>
          {selectToDos.map((toDo, index) => {
            return (
              <li key={index}>
                <span>status: {toDo.status}</span>
                <br />
                <span>content: {toDo.contents}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoComponent;
