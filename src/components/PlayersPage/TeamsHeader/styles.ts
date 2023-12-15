import styled, { css } from "styled-components/native";

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  row-gap: 12px;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  margin-left: 12px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
