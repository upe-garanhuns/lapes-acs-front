import { colors } from '../../../../styles/colors';
import { Register } from '../../../signin/components/Register';

import styled from 'styled-components';
export const StyledRegister = styled(Register)`
  & RegisterButton {
    width: 100%;
    height: 40px;
    background: #fff;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`;
