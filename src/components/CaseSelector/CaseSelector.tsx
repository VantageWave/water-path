import React, { useContext } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Select, SelectItem } from '@nextui-org/react';
import { CaseSelectorProps } from './CaseSelector.types';
import { DataContext, ActionType } from '../../context';

const CaseSelector = ({ className }: CaseSelectorProps) => {
  const { formatMessage } = useIntl();
  const { dispatch, state } = useContext(DataContext);

  return (
    <Select
      color="primary"
      label={formatMessage(messages.label)}
      placeholder={formatMessage(messages.placeholder)}
      variant="faded"
      onChange={(data) => {
        dispatch({
          type: ActionType.UPDATE_CASE,
          payload: data.target.value,
        });
      }}
      value={state.case}
      defaultSelectedKeys={[state.case?.toString()]}
      className={className}
    >
      <SelectItem key={1} value={1}>
        {formatMessage(messages.lake1)}
      </SelectItem>
      <SelectItem key={2} value={2}>
        {formatMessage(messages.lake2)}
      </SelectItem>
    </Select>
  );
};

export default CaseSelector;

const messages = defineMessages({
  lake1: {
    id: 'src.components.CaseSelector.lake1',
    defaultMessage: 'Wilczyńskie Lake',
  },
  lake2: {
    id: 'src.components.CaseSelector.lake2',
    defaultMessage: 'Chad Lake',
  },
  label: {
    id: 'src.components.CaseSelector.label',
    defaultMessage: 'label',
  },
  placeholder: {
    id: 'src.components.CaseSelector.placeholder',
    defaultMessage: 'placeholder',
  },
});
