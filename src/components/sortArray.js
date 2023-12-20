import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const sortArray = (dataArray, sorter) => {
  const sortedArray = dataArray.sort(sorter);

  return sortedArray;
}

export default sortArray