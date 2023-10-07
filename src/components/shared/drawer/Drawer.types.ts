export interface DrawerProps {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  enableToggle: boolean;
  position?: 'left' | 'right';
}
