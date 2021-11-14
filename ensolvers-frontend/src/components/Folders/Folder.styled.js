import styled from "styled-components";
import { theme } from "../../theme";

const StyledFolders = styled.section`
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
  ul {
    li {
      display: flex;
      margin-bottom: 1rem;
      p {
        width: 40%;
      }
      a {
        width: 40%;
        color: ${theme.secondaryColor};
      }
      button {
        width: 20%;
        border: none;
        background-color: transparent;
        color: #c85c5c;
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }
  .add-folder-title {
    margin-bottom: 1rem;
  }
  .add-folder {
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

export default StyledFolders;
