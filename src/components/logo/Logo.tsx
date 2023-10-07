import { Tooltip } from '@nextui-org/react';
import { LogoProps } from './Logo.types';
import projectLogo from '../../assets/logo.png';

// LogoContainer that has black background and rounded edges
const LogoContainer = ({ className }: any) => {
  return (
    <div
      className={`flex flex-row items-center justify-center bg-black rounded-md opacity-40 ${className}`}
      style={{ padding: '4px 8px' }}
    >
      <strong>Water Path&nbsp;</strong>{"@ 2023"}
    </div>
  );
}

const Logo = ({ className }: LogoProps) => {
  return (
    <footer className={`flex flex-col items-center gap-[6px] ${className}`}>
      <Tooltip content="Created by Vantage Wave">
        <img src={projectLogo} alt="SmartPath" className="w-[60px] h-[60px]" />
      </Tooltip>

      <LogoContainer className="text-[12px]" />        
    </footer>
  );
};

export default Logo;
