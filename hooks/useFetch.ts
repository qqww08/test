import { ConditionInterface, VisitInterface } from "~/interfaces";
import { useEffect, useState } from "react";
/**
 * @params list  = condition,visit ,death
 * @return 일치하는 person_id
 * */
export const useFilter = (list, person) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(list.filter((item) => item.person_id === person.person_id));
    return () => setData([]);
  }, []);
  return data;
};
