import styled from "styled-components";
// import { css } from "styled-components";
import { Link } from "react-router-dom";

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

export const HeaderContainer = styled.div`
  eight: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`; 

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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