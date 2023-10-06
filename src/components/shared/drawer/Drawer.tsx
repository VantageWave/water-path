import { useEffect, useRef, useState } from 'react';
import { cn } from '@nextui-org/react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { BsArrowLeft } from 'react-icons/bs';
import { DrawerProps } from './Drawer.types';
import './Drawer.css';

function createPortalRoot(): HTMLDivElement {
  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'drawer-root');

  return drawerRoot;
}

const Drawer = ({
  children,
  className,
  enableToggle,
  position = 'left',
}: DrawerProps) => {
  const [opened, setOpened] = useState(false);

  const bodyRef = useRef(document.querySelector('body')!);

  const portalRootRef = useRef(
    document.getElementById('drawer-root') || createPortalRoot(),
  );

  useEffect(() => {
    const updatePageScroll = () => {
      if (opened) {
        bodyRef.current.style.overflow = 'hidden';
      } else {
        bodyRef.current.style.overflow = '';
      }
    };

    updatePageScroll();
  }, [opened]);

  useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current);

    return () => {
      portalRootRef.current.remove();
      bodyRef.current.style.overflow = '';
    };
  }, []);

  return createPortal(
    <>
      <FocusTrap active={opened}>
        <div
          className={cn('drawer-container', {
            open: opened,
          })}
        >
          {enableToggle && (
            <div
              className={cn('toggle', position)}
              onClick={() => setOpened((state) => !state)}
            >
              <BsArrowLeft className="icon" />
            </div>
          )}
          <div
            className={`${cn('drawer', position)} ${className}`}
            role="dialog"
          >
            {children}
          </div>
          <div className="backdrop" onClick={() => setOpened(false)} />
        </div>
      </FocusTrap>
    </>,
    portalRootRef.current,
  );
};

export default Drawer;
