import React from "react";
import Chart from "~/components/Module/Main/Chart";
import styled from "styled-components";
import { useChartDataFilter } from "~/hooks/useChartDataFilter";

const ChartWrapper = ({ list }) => {
  const gender = useChartDataFilter(list.person, "gender_source_value");
  const ethnicity = useChartDataFilter(list.person, "ethnicity_source_value");
  const race = useChartDataFilter(list.person, "race_source_value");

  return (
    <__ChartWrapper>
      <Chart data={gender} title={"성별 환자"} />
      <Chart data={ethnicity} title={"인종별 환자"} />
      <Chart data={race} title={"민족별 환자"} />
    </__ChartWrapper>
  );
};

const __ChartWrapper = styled.div`
  display: flex;
`;
export default ChartWrapper;
