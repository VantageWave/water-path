import type { EducationLevel } from '../../../school-grade-switcher/SchoolGradeSwitcher.types';

export interface NewsTabProps {
  level: EducationLevel;
}

export interface NewsCaseStructured {
  [key: `case-${number}`]: NewsContent;
}

export interface NewsContent {
  news: NewsItem[];
  summary: NewsSummary;
}

export interface NewsItem {
  imageUrl: string;
  title: string;
  source: string;
  date: string;
  description: string;
}

export type NewsSummary = Record<EducationLevel, string>;
