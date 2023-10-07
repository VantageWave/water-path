import { useContext, useEffect, useMemo, useState } from 'react';
import { DataContext } from '../../../../context';
import type {
  NewsAnalysis,
  NewsCaseStructured,
  NewsContent,
  NewsItem,
  NewsTabProps,
} from './NewsTab.types';
import newsCases from '../../../../assets/data/news.json';

const NewsTab = ({ level }: NewsTabProps) => {
  const {
    state: { case: dataCase },
  } = useContext(DataContext);

  const [loaded, setLoaded] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [analysis, setAnalysis] = useState<NewsAnalysis | null>(null);

  const typeToNewsCaseStructured = (json: unknown): NewsCaseStructured => {
    return json as NewsCaseStructured;
  };

  const caseInformation = useMemo(
    () => typeToNewsCaseStructured(newsCases),
    [],
  );

  const loadNews = () => {
    setLoaded(false);

    setTimeout(() => {
      const { news, analysis } = caseInformation[`case-${dataCase ?? 1}`];

      setNews(news);
      setAnalysis(analysis);
      setLoaded(true);
    }, 1000);
  };

  useEffect(() => loadNews(), [dataCase, level]);

  return <>News about place here</>;
};

export default NewsTab;
