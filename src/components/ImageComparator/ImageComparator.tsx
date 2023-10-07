import { useContext } from "react";
import ReactCompareImage from 'react-compare-image';
import Cat1 from "./images/cat1.jpg";
import Cat2 from "./images/cat2.jpg";
import monkey1 from "./images/monkey1.jpg";
import monkey2 from "./images/monkey2.jpg";
import landscape1 from "./images/landscape1.jpg";
import landscape2 from "./images/landscape2.jpg";
import { DataContext } from '../../context';

const data = {
  1: [Cat1, Cat2],
  2: [monkey1, monkey2],
  3: [landscape1, landscape2],
}

const ImageComparator = () => {
  const { state } = useContext(DataContext);
  const currentCase = state.case as keyof typeof data;
  const currentData = data[currentCase] || data[1];
  return <ReactCompareImage leftImage={currentData[0]} rightImage={currentData[1]} />;;
};

export default ImageComparator;
