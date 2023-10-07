import { useContext } from "react";
import { defineMessages, useIntl } from "react-intl";
import { Select, SelectItem } from '@nextui-org/react';
import { CaseSelectorProps } from './CaseSelector.types';
import { DataContext, ActionType } from '../../context';

const CaseSelector = ({ className }: CaseSelectorProps) => {
  const { formatMessage } = useIntl();
  const { dispatch, state } = useContext(DataContext);

  return (
    <Select
      color="primary"
      label="Data case"
      placeholder="Select a case"
      variant='faded'
      onChange={(data) => {
        dispatch({
          type: ActionType.UPDATE_CASE,
          payload: data.target.value,
        })
      }}
      value={state.case}
      className={className}
    >
      <SelectItem key={1} value={1}>
        {formatMessage(messages.lake1)}
      </SelectItem>
      <SelectItem key={2} value={2}>
        {formatMessage(messages.lake2)}
      </SelectItem>
      <SelectItem key={3} value={3}>
        {formatMessage(messages.san)}
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
    defaultMessage: 'Aralskie Lake',
  },
  san: {
    id: 'src.components.CaseSelector.san',
    defaultMessage: 'San',
  },
})
