import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 55px;
  height: 53px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 30px;
  height: 30px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 12px;
`;