import { Tooltip } from '@nextui-org/react';
import { LogoProps } from './Logo.types';
import projectLogo from '../../assets/logo.png';

const Logo = ({ className }: LogoProps) => {
  return (
    <footer className={`flex flex-col items-center gap-[6px] ${className}`}>
      <Tooltip content="Created by Vantage Wave">
        <img src={projectLogo} alt="SmartPath" className="w-[60px] h-[60px]" />
      </Tooltip>

      <span className="text-[10px]">
        <strong>Water Path</strong> @ 2023
      </span>
    </footer>
  );
};

export default Logo;
