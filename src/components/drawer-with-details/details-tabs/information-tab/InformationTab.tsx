import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ScrollShadow, Skeleton } from '@nextui-org/react';
import { DataContext } from '../../../../context';
import informations from '../../../../assets/data/informations.json';
import {
  InformationCaseStructured,
  InformationPlace,
  InformationTabProps,
} from './InformationTab.types';
import { defineMessages, useIntl } from 'react-intl';
import { useContainerScrolledDown } from '../../../../hooks/useContainerScrolledDown';

const InformationTab = ({ level }: InformationTabProps) => {
  const {
    state: { case: dataCase, lang },
  } = useContext(DataContext);

  const { formatMessage } = useIntl();

  const [placeLoaded, setPlaceLoaded] = useState(false);
  const [analysisLoaded, setAnalysisLoaded] = useState(false);

  const [place, setPlace] = useState<InformationPlace | null>(null);
  const [analysis, setAnalysis] = useState<string>('');

  const scrollShadowRef = useRef<HTMLElement | null>(null);

  const [scrolledDown] = useContainerScrolledDown(scrollShadowRef);

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
      setPlace(
        caseInformation[`case-${dataCase ?? 1}-${lang.toString()}`].place,
      );
      setPlaceLoaded(true);
    }, 1000);
  };

  const loadAnalysis = () => {
    setAnalysisLoaded(false);

    setTimeout(() => {
      const analysis =
        caseInformation[`case-${dataCase ?? 1}-${lang.toString()}`].analysis[
          level
        ];

      setAnalysis(analysis);
      setAnalysisLoaded(true);
    }, 1000);
  };

  useEffect(() => loadPlace(), [dataCase, lang]);

  useEffect(() => loadAnalysis(), [level, dataCase, lang]);

  return (
    <ScrollShadow
      ref={scrollShadowRef}
      isEnabled={!scrolledDown}
      className="px-[16px] max-h-[calc(100%_-_120px)]"
    >
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
              <strong>{formatMessage(messages.name)}: </strong>
              <span>{place?.name}</span>
            </div>
          </Skeleton>

          <Skeleton isLoaded={placeLoaded} className="w-[100%] mt-2 rounded-lg">
            <div className="flex justify-between px-1.5">
              <strong>{formatMessage(messages.location)}: </strong>
              <span>{place?.location}</span>
            </div>
          </Skeleton>
        </div>
      </div>

      {analysisLoaded ? (
        <>
        <span className="w-full text-[14px] indent-5 whitespace-break-spaces">
          {analysis}
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
    </ScrollShadow>
  );
};

const messages = defineMessages({
  name: {
    id: 'src.components.drawer-with-details.details-tabs.information-tab.name',
    defaultMessage: 'Name',
  },
  location: {
    id: 'src.components.drawer-with-details.details-tabs.information-tab.location',
    defaultMessage: 'Location',
  },
});

export default InformationTab;
