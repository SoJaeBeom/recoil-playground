import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputForm from '../components/GithubStar/InputForm';
import Main from '../components/Main/Main';
import TodoComponent from '../components/Todo/TodoComponent';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/githubstar' element={<InputForm />} />
          <Route path='/todo' element={<TodoComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
