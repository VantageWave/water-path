import {
  Card,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  CardBody,
} from '@nextui-org/react';
import LinkIcon from '@mui/icons-material/Link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { DateSelectorProps } from './DateSelector.types';
import { useMemo, useState } from 'react';

const dates = [
  {
    startDate: '2017-02-01',
    endDates: ['2023-01-02', '2023-01-02', '2023-01-02'],
  },
  {
    startDate: '2020-08-15',
    endDates: ['2021-03-20', '2021-09-30'],
  },
];

interface t {
  text: string;
  selectedStartDate: string;
  onStartDateChange: (startDate: string) => void;
}

const DropdownSelector = ({
  text,
  selectedStartDate,
  onStartDateChange,
}: t) => {
  const [selectedKey, setselectedKey] = useState<Set<string>>(new Set([text]));

  const selectedValue = useMemo(() => Array.from(selectedKey), [selectedKey]);
  return (
    <Dropdown>
      <DropdownTrigger>
        {selectedStartDate === '' ? (
          <Button variant="bordered" className="capitalize" isDisabled>
            {selectedValue}
          </Button>
        ) : (
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        )}
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKey={selectedKey}
        onSelectionChange={(newselectedKey: Set<string>) => {
          setselectedKey(newselectedKey);
          if (onStartDateChange && newselectedKey.size === 1) {
            const startDate = Array.from(newselectedKey)[0];
            onStartDateChange(startDate);
          }
        }}
      >
        {selectedStartDate === 'any'
          ? dates.map((ob) => (
              <DropdownItem key={ob.startDate.toString()}>
                {ob.startDate.toString()}
              </DropdownItem>
            ))
          : (
              dates.find(
                (dateObj) => dateObj.startDate === selectedStartDate,
              ) || {
                endDates: [],
              }
            ).endDates.map((ob) => (
              <DropdownItem key={ob.toString()}>{ob.toString()}</DropdownItem>
            ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const DateSelector = ({ className }: DateSelectorProps) => {
  const [selectedStartDate, setSelectedStartDate] = useState<string>('');

  return (
    <Card className={`${className} w-[600px] dark:bg-foreground-100/30`}>
      <CardBody>
        <div className="flex items-center justify-center gap-2">
          <DropdownSelector
            text="Start date"
            selectedStartDate={'any'}
            onStartDateChange={(startDate) => setSelectedStartDate(startDate)}
          />
          <LinkIcon fontSize="small" className="basis-1/3" />
          <DropdownSelector
            text="End date"
            selectedStartDate={selectedStartDate}
            onStartDateChange={() => null}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default DateSelector;
