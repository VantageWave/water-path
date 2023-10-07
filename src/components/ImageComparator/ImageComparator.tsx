import React, { useContext } from 'react';
import { DataContext } from '../../context';
import { ReactCompareImage } from '../CompareImage';
import waterData from '../../assets/data';

const data = {
  1: waterData[1],
  2: waterData[2],
  // 3: [landscape1, landscape2],
};
const ImageComparator = () => {
  const { state } = useContext(DataContext);
  const currentCase = state.case as keyof typeof data;
  const currentData = data[currentCase] || data[1];
  const { startDate, endDate } = state;
  const startData = currentData.find((el) => el.date === startDate);
  const endData = currentData.find((el) => el.date === endDate);

  return (
    <div className="relative border-r text-center">
      <ReactCompareImage
        leftImage={startData?.filename || ''}
        rightImage={endData?.filename || ''}
        leftImageLabel={`${state.lang === 'en' ? ((startData?.metadata.area || 0) / (1.60934 * 1.60934)).toFixed(4) : (startData?.metadata.area || '0')} ${state.lang === 'en' ? 'mi' : (endData?.metadata.unit || 'km')
          }`}
        rightImageLabel={`${state.lang === 'en' ? ((endData?.metadata.area || 0) / (1.60934 * 1.60934)).toFixed(4) : (endData?.metadata.area || '0')} ${state.lang === 'en' ? 'mi' : (endData?.metadata.unit || 'km')
          }`}
        leftLabelClass="rounded-md"
        rightLabelClass="rounded-md"
      />
    </div>
  );
};

export default ImageComparator;
