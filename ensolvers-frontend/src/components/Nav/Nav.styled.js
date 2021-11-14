import styled from "styled-components";
import { theme } from "../../theme";

const StyledNav = styled.nav`
  width: 100%;
  background-color: ${theme.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${theme.small}) {
    padding: 1rem 1rem;
  }
  @media (min-width: ${theme.medium}) {
    padding: 1rem 3rem;
  }
  @media (min-width: ${theme.large}) {
    padding: 1rem 3rem;
  }
  .nav-links {
    display: flex;
    align-items: center;
    li {
      margin-right: 1rem;
      a {
        color: #fff;
        font-weight: 700;
      }
      transition: ease-in-out 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  button {
    background-color: ${theme.primaryColor};
    border: none;
    font-size: 1.125rem;
    font-weight: 700;
    color: #fff;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default StyledNav;
