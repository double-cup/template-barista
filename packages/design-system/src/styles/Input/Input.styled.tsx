import styled from "styled-components";

interface StyledInputProps {
  readonly isTyping?: boolean;
  readonly backgroundColor?: string;
}

const StyledInput = styled("input")<StyledInputProps>`
  background: ${({ backgroundColor = "pink" }) => backgroundColor};
  color: ${({ isTyping = false, theme }) =>
    isTyping ? theme?.colors?.main : theme?.colors?.secondary};
`;

export default StyledInput;
