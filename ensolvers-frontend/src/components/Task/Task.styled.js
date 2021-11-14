import styled from "styled-components";
import { theme } from "../../theme";

const StyledTask = styled.section`
  margin: 4rem auto;
  padding: 2rem;
  border: 2px solid ${theme.primaryColor};
  border-radius: 8px;
  @media (max-width: ${theme.small}) {
    width: 50%;
    margin: 4rem auto;
    padding: 2rem 1rem;
  }
  @media (min-width: ${theme.medium}) {
    width: 30%;
  }
  @media (min-width: ${theme.large}) {
    width: 25%;
  }
  .tasks-title {
    margin-bottom: 2rem;
    a {
      color: ${theme.primaryColor};
    }
  }
  .edit-task-title {
    margin-bottom: 1rem;
    text-align: center;
  }
  .edit-task {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      padding: 0.125rem 1rem;
      border: 2px solid ${theme.primaryColor};
      border-radius: 4px;
      font-size: 1rem;
      width: 100%;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-size: 1rem;
      }
    }
    .edit-buttons {
      width: 100%;
      margin-top: 0.5rem;
      display: flex;
      justify-content: space-around;
      button {
        background-color: ${theme.thirdColor};
        border: 2px solid ${theme.thirdColor};
        border-radius: 2px;
        padding: 0.2rem 1rem;
        cursor: pointer;
      }
    }
  }
`;

export default StyledTask;
