import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
`;
const StyledMain = styled.main`
  background-color: #edf3f8;
  overflow: scroll;
`;

const BaseTemplate = () => {
  return (
    <StyledLayout>
      <Header />
      <SideBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledLayout>
  );
};

export default BaseTemplate;
