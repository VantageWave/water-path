export interface DrawerProps {
  // opened: boolean;
  children: React.ReactElement | React.ReactElement[];
  className: string;
  // close: () => void;
  enableToggle: boolean;
  position?: 'left' | 'right';
}
