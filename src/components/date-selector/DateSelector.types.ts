export interface DateSelectorProps {
  className: string;
}

export interface dateSelector {
  text: string;
  selectedStartDate: string;
  onStartDateChange: (startDate: string) => void;
}
