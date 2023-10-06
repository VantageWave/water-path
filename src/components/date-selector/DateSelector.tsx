import { Card } from '@nextui-org/react';
import { DateSelectorProps } from './DateSelector.types';

const DateSelector = ({ className }: DateSelectorProps) => {
  return (
    <Card className={`${className} w-[600px] h-[150px] dark:bg-foreground-100`}>
      Date picker here
    </Card>
  );
};

export default DateSelector;
