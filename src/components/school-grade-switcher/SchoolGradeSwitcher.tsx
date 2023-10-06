import { Tab, Tabs } from '@nextui-org/react';
import { SchoolGradeSwitcherProps } from './SchoolGradeSwitcher.types';

const SchoolGradeSwitcher = ({ className }: SchoolGradeSwitcherProps) => {
  return (
    <Tabs
      color="primary"
      variant="bordered"
      radius="full"
      className={className}
    >
      <Tab key="k6" title="K-6" />
      <Tab key="k9" title="K-9" />
      <Tab key="k12" title="K-12" />
    </Tabs>
  );
};

export default SchoolGradeSwitcher;
