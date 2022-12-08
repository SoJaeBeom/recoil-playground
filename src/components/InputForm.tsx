import { Suspense, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { githubInfoState } from '../recoil/store';
import Stars from './Stars';

const InputForm = (): JSX.Element => {
  const [githubInfo, setGithubInfo] = useRecoilState(githubInfoState);

  const userRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const repoRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onClickHandler = () => {
    const users = userRef.current.value;
    const repo = repoRef.current.value;
    const info = { users, repo };

    setGithubInfo(info);
  };

  const whoseGitHub = githubInfo.users
    ? `${githubInfo.users}의 ${githubInfo.repo}저장소`
    : '정보를 입력해주세요';

  return (
    <StyledApp className='App'>
      <div>깃헙 아이디</div>
      <input type='text' ref={userRef} />
      <div>레퍼지토리 이름</div>
      <input type='text' ref={repoRef} />
      <button onClick={onClickHandler}>제출하기</button>
      <div>{whoseGitHub}</div>
      <div>star 개수</div>
      <Suspense fallback={<div className='stars'>loading...</div>}>
        <Stars className='stars' />
      </Suspense>
    </StyledApp>
  );
};

export default InputForm;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 5rem;
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
  .btn {
    display: block;
  }
  & > div,
  & > input,
  & > .btn {
    margin-bottom: 1rem;
  }
  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 30px;
    border: 1px solid blue;
  }
`;
