import styled from "styled-components";

interface StyledInputProps {
  readonly isTyping?: boolean;
}

export const StyledInput = styled("input")<StyledInputProps>`
  color: ${({ isTyping = false }) => (isTyping ? "red" : "blue")};
`;
