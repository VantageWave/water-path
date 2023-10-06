import { Select, SelectItem } from '@nextui-org/react';
import { CaseSelectorProps } from './CaseSelector.types';

const CaseSelector = ({ className }: CaseSelectorProps) => {
  return (
    <Select
      color="primary"
      label="Data case"
      placeholder="Select a case"
      variant='faded'
      className={className}
    >
      <SelectItem key={1} value={1}>
        1
      </SelectItem>
      <SelectItem key={2} value={2}>
        2
      </SelectItem>
      <SelectItem key={3} value={3}>
        3
      </SelectItem>
    </Select>
  );
};

export default CaseSelector;
