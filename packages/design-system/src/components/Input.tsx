import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { StyledInput } from "../styles/Input.styled";

export function Input() {
  const [value, setValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const debouncedCancelIsTyping = useDebouncedCallback(() => {
    setIsTyping(false);
  }, 500);

  useEffect(() => {
    setIsTyping(true);
    debouncedCancelIsTyping();
  }, [value]);

  return (
    <StyledInput
      isTyping={isTyping}
      type="text"
      value={value}
      onChange={(changeEvent) => setValue(changeEvent?.target?.value)}
    />
  );
}
