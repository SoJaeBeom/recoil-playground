import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputForm from '../components/GithubStar/InputForm';
import Main from '../components/Main/Main';
import TodoComponent from '../components/Todo/TodoComponent';
import UserManagement from '../components/UserManagement/UserManagement';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/githubstar' element={<InputForm />} />
          <Route path='/todo' element={<TodoComponent />} />
          <Route path='/usermanagement' element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
