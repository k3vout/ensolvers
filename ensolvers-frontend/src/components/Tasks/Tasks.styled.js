import styled from 'styled-components';
import theme from '../../theme';

const StyledTasks = styled.section`
  margin: 4rem auto;
  padding: 2rem;
  border: 2px solid ${theme.primaryColor};
  border-radius: 8px;
  @media (max-width: ${theme.small}) {
    width: 80%;
    margin: 4rem auto;
    padding: 2rem 1rem;
  }
  @media (min-width: ${theme.medium}) {
    width: 60%;
  }
  @media (min-width: ${theme.large}) {
    width: 40%;
  }
  .tasks-title {
    margin-bottom: 2rem;
    a {
      color: ${theme.primaryColor};
    }
  }
  ul {
    li {
      display: flex;
      margin-bottom: 1rem;
      .task-checkbox {
        display: flex;
        align-items: center;
        width: 80%;
        input {
          margin-right: 0.75rem;
        }
        label {
          color: #000;
        }
      }
      a {
        width: 20%;
        border: none;
        background-color: transparent;
        color: #c85c5c;
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }
  .add-task-title {
    margin-bottom: 1rem;
  }
  .add-task {
    display: flex;
    align-items: center;
    input {
      margin: 0 1rem 0 0;
      padding: 0.125rem 1rem;
      border: 2px solid ${theme.primaryColor};
      border-radius: 4px;
      font-size: 1rem;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-size: 1rem;
      }
      @media (max-width: ${theme.small}) {
        width: 70%;
      }
      @media (min-width: ${theme.medium}) {
        width: 60%;
      }
      @media (min-width: ${theme.large}) {
        width: 60%;
      }
    }
    button {
      background-color: ${theme.thirdColor};
      border: 2px solid ${theme.thirdColor};
      border-radius: 2px;
      padding: 0.2rem 1rem;
      cursor: pointer;
    }
  }
`;

export default StyledTasks;
