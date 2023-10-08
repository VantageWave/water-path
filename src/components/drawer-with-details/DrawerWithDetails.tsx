import { useState } from 'react';
import DetailsTabs from './details-tabs/DetailsTabs';
import Drawer from '../shared/drawer/Drawer';
import SchoolGradeSwitcher from '../school-grade-switcher/SchoolGradeSwitcher';
import { EducationLevel } from '../school-grade-switcher/SchoolGradeSwitcher.types';

const DrawerWithDetails = () => {
  const [level, setLevel] = useState<EducationLevel>(EducationLevel.ELEMENTARY);

  return (
    <Drawer position="right" enableToggle>
      <DetailsTabs level={level} className="px-5 pt-5" />

      <footer className="flex justify-center bg-foreground-50 w-full absolute bottom-0 py-2 left-1/2 transform -translate-x-1/2">
        <SchoolGradeSwitcher level={level} setLevel={setLevel} />
      </footer>
    </Drawer>
  );
};

export default DrawerWithDetails;
