import React from 'react';
import {
  Card,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  CardBody,
} from '@nextui-org/react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { DateSelectorProps, dateSelector } from './DateSelector.types';
import { useContext, useMemo, useState } from 'react';

import allData from '../../assets/data';

import { ActionType, DataContext } from '../../context';
import { defineMessages, useIntl } from 'react-intl';

const DropdownSelector = ({
  text,
  selectedStartDate,
  onStartDateChange,
}: dateSelector) => {
  const [selectedKey, setselectedKey] = useState<Set<string>>(new Set([text]));
  const data = allData[1];

  const { dispatch } = useContext(DataContext);

  const selectedValue = useMemo(() => Array.from(selectedKey), [selectedKey]);
  return (
    <Dropdown>
      <DropdownTrigger className="px-2">
        {selectedStartDate === '' ? (
          <Button variant="bordered" className="capitalize" isDisabled>
            {selectedValue}
            <CalendarTodayIcon fontSize="small" />
          </Button>
        ) : (
          <Button variant="bordered" className="capitalize px-5">
            {selectedValue}
            <CalendarTodayIcon fontSize="small" />
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
            if (selectedStartDate === 'any') {
              dispatch({
                type: ActionType.UPDATE_START_DATE,
                payload: startDate,
              });
            } else {
              dispatch({
                type: ActionType.UPDATE_END_DATE,
                payload: startDate,
              });
            }
          }
        }}
        className="text-center"
      >
        {selectedStartDate === 'any'
          ? data
            .slice(0, -1)
            .map((ob) => <DropdownItem key={ob.date}>{ob.date}</DropdownItem>)
          : data
            .filter((item) => item.date > selectedStartDate)
            .map((ob) => (
              <DropdownItem key={ob.date}>{ob.date}</DropdownItem>
            ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const DateSelector = ({ className }: DateSelectorProps) => {
  const [selectedStartDate, setSelectedStartDate] = useState<string>('');
  const { formatMessage } = useIntl();

  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

  console.log(formatMessage(messages.endDate));

  return (
    <Card className={`${className} dark:bg-foreground-100/80 px-0 py-1`}>
      <CardBody className="p-0">
        <div className="items-center justify-center gap-2">
          <DropdownSelector
            text={formatMessage(messages.startDate)}
            selectedStartDate={'any'}
            onStartDateChange={(startDate) => setSelectedStartDate(startDate)}
          />
          <KeyboardDoubleArrowRightIcon
            fontSize="large"
            className="basis-1/3"
          />
          <DropdownSelector
            text={formatMessage(messages.endDate)}
            selectedStartDate={selectedStartDate}
            onStartDateChange={() => null}
          />
        </div>
      </CardBody>
    </Card>
  );
};

const messages = defineMessages({
  startDate: {
    id: 'src.components.date-selector.startDate',
    defaultMessage: 'Start date',
  },
  endDate: {
    id: 'src.components.date-selector.endDate',
    defaultMessage: 'End date',
  },
});

export default DateSelector;
