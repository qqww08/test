import { PersonInterface } from "~/interfaces";
import { useEffect, useState } from "react";

export const useChartDataFilter = <T extends PersonInterface>(
  list: T[],
  source: "gender_source_value" | "ethnicity_source_value" | "race_source_value"
) => {
  const [data, setData] = useState([]);
  const getUniqueObjectArray = (array) => {
    return array.filter((item, i) => {
      return (
        array.findIndex((item2, j) => {
          return item[source] === item2[source];
        }) === i
      );
    });
  };
  useEffect(() => {
    let result = [];
    const type = getUniqueObjectArray(list).map((item) => {
      return item[source];
    });
    type.map((item, index) => {
      const value = list.filter((item) => item[source] === type[index]).length;
      result = [...result, { name: type[index], value: value }];
    });
    setData(result);
    return () => setData([]);
  }, []);
  return data;
};
