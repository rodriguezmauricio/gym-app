import styled from "styled-components/native";

export const themeColors = {
  black: "#111",
  white: "#fff",
  grey: "#888",
};

export const TitleDark = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

export const TitleLight = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #111;
`;

export const TextDark = styled.Text`
  color: ${themeColors.black};
`;

export const TextLight = styled.Text`
  color: ${themeColors.white};
`;

export const TextGrey = styled.Text`
  color: ${themeColors.grey};
`;
