import { Button as FlowbiteButton } from 'flowbite-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'blue' | 'gray' | 'dark' | 'light' | 'success' | 'warning' | 'failure' | 'purple' | 'pink';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Button = ({ children, onClick, color = 'blue', size = 'md' }: ButtonProps) => {
  return (
    <FlowbiteButton
      onClick={onClick}
      color={color}
      size={size}
    >
      {children}
    </FlowbiteButton>
  );
}; 