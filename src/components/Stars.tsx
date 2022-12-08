import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getStars } from '../recoil/store';

interface IStars {
  className: string;
}

const Stars = ({ className }: IStars): JSX.Element => {
  const userRepoStars = useRecoilValue(getStars);

  const stars = userRepoStars ? `${userRepoStars} 개` : '';
  return <StyledStars className={className}>{stars}</StyledStars>;
};

export default Stars;
const StyledStars = styled.div``;
