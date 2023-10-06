import './App.css';
import ImageComparator from './components/image-comparator/ImageComparator';
import CaseSelector from './components/case-selector/CaseSelector';
import DrawerWithDetails from './components/drawer-with-details/DrawerWithDetails';
import SchoolGradeSwitcher from './components/school-grade-switcher/SchoolGradeSwitcher';
import DateSelector from './components/date-selector/DateSelector';
import Logo from './components/logo/Logo';

function App() {
  return (
    <>
      <CaseSelector className="max-w-xs absolute left-3 top-3" />
      <SchoolGradeSwitcher className="absolute top-3 left-1/2 transform -translate-x-1/2" />

      <ImageComparator />

      <Logo className="absolute left-3 bottom-3" />
      <DateSelector className="absolute bottom-3 left-1/2 transform -translate-x-1/2" />

      <DrawerWithDetails />
    </>
  );
}

export default App;
