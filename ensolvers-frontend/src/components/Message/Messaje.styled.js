import styled from 'styled-components';
import theme from '../../theme';

const StyledMessage = styled.div`
  margin: 4rem auto;
  text-align: center;
  @media (max-width: ${theme.small}) {
    width: 70%;
  }
  @media (min-width: ${theme.medium}) {
    width: 50%;
  }
  @media (min-width: ${theme.large}) {
    width: 30%;
  }
  .alert-success {
    padding: 1.5rem;
    border-radius: 8px;
    color: ${theme.sixthColor};
    background-color: ${theme.seventhColor};
    border: 2px solid ${theme.sixthColor};
  }
  .alert-error {
    padding: 1.5rem;
    border-radius: 8px;
    color: ${theme.fourthColor};
    background-color: ${theme.fifthColor};
    border: 2px solid ${theme.fourthColor};
  }
`;

export default StyledMessage;
