import ImageComparator from '../components/ImageComparator/ImageComparator';
import CaseSelector from '../components/CaseSelector/CaseSelector';
import DrawerWithDetails from '../components/drawer-with-details/DrawerWithDetails';
import DateSelector from '../components/date-selector/DateSelector';
import Logo from '../components/logo/Logo';

export const WaterPage = () => (
    <>
        <CaseSelector className="max-w-xs absolute left-3 top-3 z-10" />
        <ImageComparator />
        <Logo className="absolute left-3 bottom-3" />
        <DateSelector className="absolute bottom-3 left-1/2 transform -translate-x-1/2" />
        <DrawerWithDetails />
    </>)