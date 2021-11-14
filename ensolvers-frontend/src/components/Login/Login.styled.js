import styled from 'styled-components';
import theme from '../../theme';

const StyledLogin = styled.section`
  margin: 4rem auto;
  @media (max-width: ${theme.small}) {
    width: 75%;
  }
  @media (min-width: ${theme.medium}) {
    width: 30%;
  }
  @media (min-width: ${theme.large}) {
    width: 25%;
  }
  .login {
    display: flex;
    flex-direction: column;
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    form {
      display: flex;
      flex-direction: column;
      input {
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        border: 2px solid ${theme.primaryColor};
        border-radius: 4px;
        :focus {
          outline: none;
        }
        ::placeholder {
          font-size: 1rem;
        }
        font-size: 1rem;
      }
      button {
        padding: 0.25rem 0.75rem;
        border: 2px solid ${theme.secondaryColor};
        background-color: ${theme.secondaryColor};
        border-radius: 4px;
        color: #fff;
        font-size: 1rem;
      }
    }
  }
`;

export default StyledLogin;
