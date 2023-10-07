import { useState } from 'react';
import DetailsTabs from './details-tabs/DetailsTabs';
import Drawer from '../shared/drawer/Drawer';
import SchoolGradeSwitcher from '../school-grade-switcher/SchoolGradeSwitcher';
import { EducationLevel } from '../school-grade-switcher/SchoolGradeSwitcher.types';

const DrawerWithDetails = () => {
  const [level, setLevel] = useState<EducationLevel>(EducationLevel.ELEMENTARY);

  return (
    <Drawer position="right" className="p-5" enableToggle>
      <DetailsTabs level={level} />

      <footer className="flex justify-center bg-black w-full absolute bottom-0 py-2 left-1/2 transform -translate-x-1/2">
        <SchoolGradeSwitcher level={level} setLevel={setLevel} />
      </footer>
    </Drawer>
  );
};

export default DrawerWithDetails;
