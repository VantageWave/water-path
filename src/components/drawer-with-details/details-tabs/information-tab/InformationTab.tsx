import { useContext, useEffect, useMemo, useState } from 'react';
import { Skeleton } from '@nextui-org/react';
import { DataContext } from '../../../../context';
import informations from '../../../../assets/data/informations.json';
import {
  InformationCaseStructured,
  InformationContent,
} from './InformationTab.types';

const InformationTab = () => {
  const {
    state: { case: dataCase },
  } = useContext(DataContext);

  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState<InformationContent | null>(null);

  const typeToInformationCaseStructured = (
    json: unknown,
  ): InformationCaseStructured => {
    return json as InformationCaseStructured;
  };

  const caseInformation = useMemo(
    () => typeToInformationCaseStructured(informations),
    [],
  );

  const loadInformations = () => {
    setLoaded(false);

    setTimeout(() => {
      setContent(caseInformation[`case-${dataCase ?? 1}`]);
      setLoaded(true);
    }, 1000);
  };

  useEffect(() => loadInformations(), [dataCase]);

  return (
    <>
      <Skeleton isLoaded={loaded} className="rounded-lg">
        <img
          src={content?.imageUrl}
          className="h-[200px] w-[100%] rounded-lg"
        />
      </Skeleton>
      <div className="mt-3">
        <Skeleton isLoaded={loaded} className="w-[100%] rounded-lg">
          <div className="flex justify-between">
            <strong>Name: </strong>
            <span>{content?.name}</span>
          </div>
        </Skeleton>
      </div>
    </>
  );
};

export default InformationTab;
