interface LabelProps {
  children?: React.ReactNode;
}

function Label({ children }: LabelProps) {
  return <label>{children}</label>;
}

export default Label;
