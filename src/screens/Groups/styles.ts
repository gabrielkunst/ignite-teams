import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	flex: 1;
	padding: 24px;
`;

export const Text = styled.Text`
	font-size: 32px;
	color: #fff;
`;
