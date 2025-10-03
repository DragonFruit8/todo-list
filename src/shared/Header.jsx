import { NavLink } from "react-router";
import TodoLogo from "../assets/favicon.ico";
import styled from "styled-components";

function Header({ title }) {
  return (
    <Nav>
      <span>
        <img src={TodoLogo} alt="Terra'Novare logo" />
        <h1>{title}</h1>
      </span>
      <div>
        <NavLink
          to={"/"}
          className={({isActive}) => (isActive ? "active" : "inactive")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({isActive}) => (isActive ? "active" : "inactive")}
        >
          About
        </NavLink>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  margin: auto 10vw;
  padding: 1rem 0.25rem;
  align-items: center;
  justify-content: space-between;
  span {
    display: flex;
    gap: 0.7rem;
    align-self: center;
    img {
      border-radius: 15px;
      width: 35px;
      height: 35px;
    }
  }
  a {
    text-decoration: none;
    padding: 0.25rem 0.75rem;
    font-size: 20px;
  }
  h1 {
    font-size: 26px;
  }
  .active {
    color: white;
    font-size: bold;
  }
  .inactive {
    font-size: thin;
    color: gray;
  }
`;

export default Header;
