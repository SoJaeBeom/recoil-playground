import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import {
  IUser,
  selectId,
  selectingUser,
} from '../../recoil/UserManagement/atoms';
import { getUserList } from './api';

const UserManagement = () => {
  const { data, isLoading } = useQuery<IUser[]>('userList', getUserList);
  const [id, setId] = useRecoilState(selectId);

  // const user = useRecoilValue<IUser>(selectUser(id));
  const [user, setUser] = useRecoilState(selectingUser);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setId(+event.currentTarget.value);
  };

  return (
    <>
      {isLoading ? (
        <div>is isLoading...</div>
      ) : (
        <div>
          <h1>List</h1>
          <ul>
            {data?.map((user) => (
              <li key={user.id}>
                <div>id: {user.id}</div>
                <div>name: {user.name}</div>
                <div>company: {user.company.name}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h1>Select</h1>
        <select onChange={handleChange}>
          {data?.map((user) => (
            <option key={user.id} value={user.id}>
              {user.id}
            </option>
          ))}
        </select>
        <h3>select User</h3>
        <div>
          {user ? (
            <div>
              <div>userId: {user.id}</div>
              <div>userName: {user.username}</div>
              <div>email: {user.email}</div>
            </div>
          ) : (
            <div>no User</div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserManagement;
