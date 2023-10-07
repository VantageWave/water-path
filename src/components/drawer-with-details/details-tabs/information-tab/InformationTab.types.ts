import type { EducationLevel } from '../../../school-grade-switcher/SchoolGradeSwitcher.types';

export interface InformationTabProps {
  level: EducationLevel;
}

export interface InformationCaseStructured {
  [key: `case-${number}`]: InformationContent;
}

export interface InformationContent {
  name: string;
  imageUrl: string;
}
