import type { EducationLevel } from '../../../school-grade-switcher/SchoolGradeSwitcher.types';

export interface InformationTabProps {
  level: EducationLevel;
}

export interface InformationCaseStructured {
  [key: `case-${number}-${string}`]: InformationContent;
}

export interface InformationContent {
  place: InformationPlace;
  analysis: InformationAnalysis;
}

export interface InformationPlace {
  name: string;
  location: string;
  imageUrl: string;
}

export type InformationAnalysis = Record<EducationLevel, string>;
