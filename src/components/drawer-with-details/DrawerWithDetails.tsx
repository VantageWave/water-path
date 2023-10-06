import DetailsTabs from './details-tabs/DetailsTabs';
import Drawer from '../shared/drawer/Drawer';

const DrawerWithDetails = () => {
  return (
    <Drawer position="right" className="p-5" enableToggle>
      <DetailsTabs />
    </Drawer>
  );
};

export default DrawerWithDetails;
