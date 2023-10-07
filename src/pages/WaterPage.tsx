import { motion } from "framer-motion";
import ImageComparator from '../components/ImageComparator/ImageComparator';
import CaseSelector from '../components/CaseSelector/CaseSelector';
import DrawerWithDetails from '../components/drawer-with-details/DrawerWithDetails';
import DateSelector from '../components/date-selector/DateSelector';
import Logo from '../components/logo/Logo';
import { LanguagePicker } from '../components/LanguagePicker/languagePicker';

export const WaterPage = () => (
    <motion.main
        className="main__container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.6 }}
    >
        <CaseSelector className="max-w-xs absolute left-2 top-2 z-10" />
        <ImageComparator />
        <DateSelector className="absolute bottom-3 left-1/2 transform -translate-x-1/2" />
        <DrawerWithDetails />
        <LanguagePicker />
    </motion.main>)