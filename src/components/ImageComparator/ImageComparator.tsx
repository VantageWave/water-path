import { useContext } from "react";
import { DataContext } from '../../context';
import { ReactCompareImage } from "../CompareImage"
import waterData from "../../assets/data";

const data = {
  1: waterData[1],
  // 2: [monkey1, monkey2],
  // 3: [landscape1, landscape2],
}
const ImageComparator = () => {
  const { state } = useContext(DataContext);
  const currentCase = state.case as keyof typeof data;
  const currentData = data[currentCase] || data[1];

  return (
    <div className="relative border-r">
      <ReactCompareImage
        leftImage={currentData[0].filename}
        rightImage={currentData[1].filename}
        leftImageLabel={`${currentData[0].metadata.area} ${currentData[0].metadata.unit}`}
        rightImageLabel={`${currentData[1].metadata.area} ${currentData[1].metadata.unit}`}
        leftLabelClass="rounded-md"
        rightLabelClass="rounded-md"
      />
    </div>)
};

export default ImageComparator;
