import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DataContext } from '../../../../context';
import type {
  NewsCaseStructured,
  NewsItem,
  NewsTabProps,
} from './NewsTab.types';
import newsCases from '../../../../assets/data/news.json';
import { Card, ScrollShadow, Skeleton } from '@nextui-org/react';
import { useContainerScrolledDown } from '../../../../hooks/useContainerScrolledDown';

const NewsTab = ({ level }: NewsTabProps) => {
  const {
    state: { case: dataCase },
  } = useContext(DataContext);

  const { state } = useContext(DataContext);

  const [newsLoaded, setNewsLoaded] = useState(false);
  const [summaryLoaded, setSummaryLoaded] = useState(false);

  const [news, setNews] = useState<NewsItem[]>([]);
  const [summary, setSummary] = useState<string>('');

  const scrollShadowRef = useRef<HTMLElement | null>(null);

  const [scrolledDown] = useContainerScrolledDown(scrollShadowRef);

  const typeToNewsCaseStructured = (json: unknown): NewsCaseStructured => {
    return json as NewsCaseStructured;
  };

  const caseInformation = useMemo(
    () => typeToNewsCaseStructured(newsCases),
    [],
  );

  const loadNews = () => {
    setNewsLoaded(false);

    setTimeout(() => {
      const { news } =
        caseInformation[`case-${dataCase ?? 1}-${state.lang.toString()}`];

      setNews(news);
      setNewsLoaded(true);
    }, 1000);
  };

  const loadSummary = () => {
    setSummaryLoaded(false);

    setTimeout(() => {
      const summary =
        caseInformation[`case-${dataCase ?? 1}-${state.lang.toString()}`]
          .summary[level];

      setSummary(summary);
      setSummaryLoaded(true);
    }, 1000);
  };

  useEffect(() => loadNews(), [dataCase, state]);

  useEffect(() => loadSummary(), [dataCase, level, state]);

  return (
    <ScrollShadow
      ref={scrollShadowRef}
      isEnabled={!scrolledDown}
      className="px-[16px] max-h-[calc(100%_-_120px)]"
    >
      <div className="flex flex-col gap-3">
        {newsLoaded
          ? news.map((newsItem) => (
            <Card
              key={newsItem.title}
              className="w-full space-y-5 p-4"
              radius="lg"
            >
              <div className="max-w-[300px] w-full flex gap-3">
                <img
                  src={newsItem.imageUrl}
                  className="flex w-[50px] h-[50px] rounded-full"
                />
                <div className="w-full flex flex-col gap-2">
                  <span className="text-[12px] font-semibold">
                    {newsItem.title}
                  </span>
                  <span className="text-[10px]">
                    {newsItem.source} / {newsItem.date}
                  </span>
                </div>
              </div>
            </Card>
          ))
          : Array.from(Array(3)).map((_, i) => (
            <Card key={i} className="w-full space-y-5 p-4" radius="lg">
              <div className="max-w-[300px] w-full flex items-center gap-3">
                <div>
                  <Skeleton className="flex rounded-full w-12 h-12" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Skeleton className="h-3 w-3/5 rounded-lg" />
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
              </div>
            </Card>
          ))}
      </div>

      <div className="mt-[24px] h-[100%]">
        {summaryLoaded ? (
          <>
            <span className="w-full pb-[10px] text-[14px] indent-5 whitespace-break-spaces">
              {summary}
            </span>
            <div className="h-7" />
          </>
        ) : (
          <div className="flex flex-col	gap-[12px]">
            {Array.from(Array(12)).map((_, i) => (
              <Skeleton
                key={i}
                className="w-full h-4 rounded-lg bg-secondary"
              ></Skeleton>
            ))}
          </div>
        )}
      </div>
    </ScrollShadow>
  );
};

export default NewsTab;
