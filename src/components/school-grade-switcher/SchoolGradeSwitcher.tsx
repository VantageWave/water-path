import { Tab, Tabs } from '@nextui-org/react';
import {
  EducationLevel,
  SchoolGradeSwitcherProps,
} from './SchoolGradeSwitcher.types';
import { Key } from 'react';

const SchoolGradeSwitcher = ({
  level,
  setLevel,
  className,
}: SchoolGradeSwitcherProps) => {
  const levelChanged = (e: Key): void => {
    setLevel(e as EducationLevel);
  };

  return (
    <Tabs
      color="primary"
      variant="bordered"
      radius="full"
      className={className}
      selectedKey={level}
      onSelectionChange={levelChanged}
    >
      <Tab key={EducationLevel.ELEMENTARY} title="K-5" />
      <Tab key={EducationLevel.SECONDARY} title="6-8" />
      <Tab key={EducationLevel.PRE_COLLEGE} title="9-12" />
    </Tabs>
  );
};

export default SchoolGradeSwitcher;
