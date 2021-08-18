import { FC } from 'react';
import TypewriterComponent from 'typewriter-effect';

interface TypewriterProps {
  typewriterText: string;
}

const Typewriter: FC<TypewriterProps> = ({
  typewriterText,
}: TypewriterProps) => {
  return (
    <TypewriterComponent
      options={{ strings: typewriterText, autoStart: true, loop: true }}
    />
  );
};

export default Typewriter;
