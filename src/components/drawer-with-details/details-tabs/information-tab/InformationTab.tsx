import { useContext, useEffect, useMemo, useState } from 'react';
import { ScrollShadow, Skeleton } from '@nextui-org/react';
import { DataContext } from '../../../../context';
import informations from '../../../../assets/data/informations.json';
import {
  InformationCaseStructured,
  InformationPlace,
  InformationTabProps,
} from './InformationTab.types';

const InformationTab = ({ level }: InformationTabProps) => {
  const {
    state: { case: dataCase },
  } = useContext(DataContext);

  const [placeLoaded, setPlaceLoaded] = useState(false);
  const [analysisLoaded, setAnalysisLoaded] = useState(false);

  const [place, setPlace] = useState<InformationPlace | null>(null);
  const [analysis, setAnalysis] = useState<string>('');

  const typeToInformationCaseStructured = (
    json: unknown,
  ): InformationCaseStructured => {
    return json as InformationCaseStructured;
  };

  const caseInformation = useMemo(
    () => typeToInformationCaseStructured(informations),
    [],
  );

  const loadPlace = () => {
    setPlaceLoaded(false);

    setTimeout(() => {
      setPlace(caseInformation[`case-${dataCase ?? 1}`].place);
      setPlaceLoaded(true);
    }, 1000);
  };

  const loadAnalysis = () => {
    setAnalysisLoaded(false);

    setTimeout(() => {
      const analysis = caseInformation[`case-${dataCase ?? 1}`].analysis[level];

      setAnalysis(analysis);
      setAnalysisLoaded(true);
    }, 1000);
  };

  useEffect(() => loadPlace(), [dataCase]);

  useEffect(() => loadAnalysis(), [level, dataCase]);

  return (
    <ScrollShadow className="max-h-[calc(100%_-_60px)]">
      <div className="mb-[24px]">
        <Skeleton isLoaded={placeLoaded} className="rounded-lg">
          <img
            src={place?.imageUrl}
            className="h-[200px] w-[100%] rounded-lg"
          />
        </Skeleton>
        <div className="mt-3">
          <Skeleton isLoaded={placeLoaded} className="w-[100%] rounded-lg">
            <div className="flex justify-between px-1.5">
              <strong>Name: </strong>
              <span>{place?.name}</span>
            </div>
          </Skeleton>

          <Skeleton isLoaded={placeLoaded} className="w-[100%] mt-2 rounded-lg">
            <div className="flex justify-between px-1.5">
              <strong>Location: </strong>
              <span>{place?.location}</span>
            </div>
          </Skeleton>
        </div>
      </div>

      {analysisLoaded ? (
        <span className="w-full pb-[10px] text-[14px] indent-5 whitespace-break-spaces">
          {analysis}
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

export default InformationTab;
