import { EducationLevel } from '../../../school-grade-switcher/SchoolGradeSwitcher.types';

export interface DataTabProps {
  level: EducationLevel;
}

export interface DataCaseStructured {
  [key: `case-${number}-${string}`]: DataContent;
}

export interface DataContent {
  source: DataSource;
  summary: SourceSummary;
}

export interface DataSource {
  name: string;
  launchYear: number;
  imageUrl: string;
}

export type SourceSummary = Record<EducationLevel, string>;
