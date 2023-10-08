import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DataCaseStructured, DataSource, DataTabProps } from './DataTab.types';
import { DataContext } from '../../../../context';
import dataSource from '../../../../assets/data/source.json';
import { ScrollShadow, Skeleton } from '@nextui-org/react';
import { defineMessages, useIntl } from 'react-intl';
import { useContainerScrolledDown } from '../../../../hooks/useContainerScrolledDown';

const DataTab = ({ level }: DataTabProps) => {
  const {
    state: { case: dataCase, lang },
  } = useContext(DataContext);

  const { formatMessage } = useIntl();

  const [sourceLoaded, setSourceLoaded] = useState(false);
  const [summaryLoaded, setSummaryLoaded] = useState(false);

  const [source, setSource] = useState<DataSource | null>(null);
  const [summary, setSummary] = useState<string>('');

  const scrollShadowRef = useRef<HTMLElement | null>(null);

  const [scrolledDown] = useContainerScrolledDown(scrollShadowRef);

  const typeToDateCaseStructured = (json: unknown): DataCaseStructured => {
    return json as DataCaseStructured;
  };

  const caseInformation = useMemo(
    () => typeToDateCaseStructured(dataSource),
    [],
  );

  const loadSource = () => {
    setSourceLoaded(false);

    setTimeout(() => {
      setSource(
        caseInformation[`case-${dataCase ?? 1}-${lang.toString()}`].source,
      );
      setSourceLoaded(true);
    }, 1000);
  };

  const loadSummary = () => {
    setSummaryLoaded(false);

    setTimeout(() => {
      const summary =
        caseInformation[`case-${dataCase ?? 1}-${lang.toString()}`].summary[
          level
        ];

      setSummary(summary);
      setSummaryLoaded(true);
    }, 1000);
  };

  useEffect(() => loadSource(), [dataCase]);

  useEffect(() => loadSummary(), [level, dataCase]);

  return (
    <ScrollShadow
      ref={scrollShadowRef}
      isEnabled={!scrolledDown}
      className="px-[16px] max-h-[calc(100%_-_120px)]"
    >
      <div className="mb-[24px]">
        <Skeleton isLoaded={sourceLoaded} className="rounded-lg">
          <img
            src={source?.imageUrl}
            className="h-[200px] w-[100%] rounded-lg"
          />
        </Skeleton>
        <div className="mt-3">
          <Skeleton isLoaded={sourceLoaded} className="w-[100%] rounded-lg">
            <div className="flex justify-between px-1.5">
              <strong>{formatMessage(messages.name)}: </strong>
              <span>{source?.name}</span>
            </div>
          </Skeleton>

          <Skeleton
            isLoaded={sourceLoaded}
            className="w-[100%] mt-2 rounded-lg"
          >
            <div className="flex justify-between px-1.5">
              <strong>{formatMessage(messages.year)}: </strong>
              <span>{source?.launchYear}</span>
            </div>
          </Skeleton>
        </div>
      </div>

      {summaryLoaded ? (
        <span className="w-full text-[14px] indent-5 whitespace-break-spaces">
          {summary}
        </span>
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
    </ScrollShadow>
  );
};

const messages = defineMessages({
  name: {
    id: 'src.components.drawer-with-details.data-tab.name',
    defaultMessage: 'Name',
  },
  year: {
    id: 'src.components.drawer-with-details.data-tab.year',
    defaultMessage: 'Launch year',
  },
});

export default DataTab;
