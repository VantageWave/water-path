import { useContext, useEffect, useMemo, useState } from 'react';
import { DataCaseStructured, DataSource, DataTabProps } from './DataTab.types';
import { DataContext } from '../../../../context';
import dataSource from '../../../../assets/data/source.json';
import { ScrollShadow, Skeleton } from '@nextui-org/react';

const DataTab = ({ level }: DataTabProps) => {
  const {
    state: { case: dataCase },
  } = useContext(DataContext);

  const [sourceLoaded, setSourceLoaded] = useState(false);
  const [summaryLoaded, setSummaryLoaded] = useState(false);

  const [source, setSource] = useState<DataSource | null>(null);
  const [summary, setSummary] = useState<string>('');

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
      setSource(caseInformation[`case-${dataCase ?? 1}`].source);
      setSourceLoaded(true);
    }, 1000);
  };

  const loadSummary = () => {
    setSummaryLoaded(false);

    setTimeout(() => {
      const summary = caseInformation[`case-${dataCase ?? 1}`].summary[level];

      setSummary(summary);
      setSummaryLoaded(true);
    }, 1000);
  };

  useEffect(() => loadSource(), [dataCase]);

  useEffect(() => loadSummary(), [level, dataCase]);

  return (
    <ScrollShadow className="max-h-[calc(100%_-_60px)]">
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
              <strong>Name: </strong>
              <span>{source?.name}</span>
            </div>
          </Skeleton>

          <Skeleton
            isLoaded={sourceLoaded}
            className="w-[100%] mt-2 rounded-lg"
          >
            <div className="flex justify-between px-1.5">
              <strong>Launch year: </strong>
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

export default DataTab;
