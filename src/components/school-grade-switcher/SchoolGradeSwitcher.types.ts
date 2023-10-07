export interface SchoolGradeSwitcherProps {
  level: EducationLevel;
  setLevel: (key: EducationLevel) => void;
  className?: string;
}

export enum EducationLevel {
  ELEMENTARY = 'k-5',
  SECONDARY = '6-8',
  PRE_COLLEGE = '9-12',
}
