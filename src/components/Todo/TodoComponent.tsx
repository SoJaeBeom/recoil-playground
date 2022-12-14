import { useRecoilState, useRecoilValue } from 'recoil';
import { selectStatus, selectToDo } from '../../recoil/Todo/atoms';

const TodoComponent = () => {
  const [status, setStatus] = useRecoilState(selectStatus);
  const selectToDos = useRecoilValue(selectToDo);

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.currentTarget.value as any);
  };

  return (
    <>
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
