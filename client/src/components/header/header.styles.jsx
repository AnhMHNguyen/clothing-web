import styled from "styled-components";
// import { css } from "styled-components";
import { Link } from "react-router-dom";

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    height: 0px;
    padding: 10px;
    margin-bottom: 50px;
  }
`; 

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 5px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-top: 30px;
    font-size: 15px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionLink = styled(Link)`
//   ${OptionContainerStyles}
// `;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;