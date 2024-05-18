// components/SmoothScrollLink.tsx
import { MouseEvent } from 'react';
import styles from './SmoothScrollLink.module.css';

interface SmoothScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ targetId, children }) => {
  const smoothScrollTo = (target: HTMLElement) => {
    window.scrollTo({
      behavior: 'smooth',
      top: target.offsetTop,
    });
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      smoothScrollTo(target);
    }
  };

  return (
    <button  onClick={handleClick}>
      {children}
    </button>
  );
};

export default SmoothScrollLink;
