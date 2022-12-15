import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const moveToPage = (e: MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.id) {
      case 'githubstar':
        navigate('/githubstar');
        break;

      case 'todo':
        navigate('/todo');
        break;
    }
  };

  return (
    <>
      <button id='githubstar' onClick={moveToPage}>
        GithubStar
      </button>
      <button id='todo' onClick={moveToPage}>
        Todo
      </button>
    </>
  );
};

export default Main;
