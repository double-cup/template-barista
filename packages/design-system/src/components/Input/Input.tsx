import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import StyledInput from "../../styles/Input";

interface InputProps {
  backgroundColor?: string;
  initialValue?: string;
}

function Input({ initialValue = "", backgroundColor }: InputProps) {
  const [value, setValue] = useState<string>(initialValue);
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
      backgroundColor={backgroundColor}
      isTyping={isTyping}
      type="text"
      value={value}
      onChange={(changeEvent) => setValue(changeEvent?.target?.value)}
    />
  );
}

export default Input;
