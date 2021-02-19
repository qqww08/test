import React from "react";
import PersonInfo from "~/components/Module/Main/PersonInfo";
import {
  ConditionInterface,
  DeathInterface,
  PersonInterface,
  VisitInterface,
} from "~/interfaces";
import styled from "styled-components";
import ChartWrapper from "~/components/Template/Main/ChartWrapper";
export interface JsonInterface {
  list: {
    person: PersonInterface[];
    death: DeathInterface[];
    condition: ConditionInterface[];
    visit: VisitInterface[];
  };
}
const MainWrapper = ({ list }: JsonInterface) => {
  return (
    <__MainWrapper>
      <ChartWrapper list={list} />
      <PersonInfo list={list} />
    </__MainWrapper>
  );
};
const __MainWrapper = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vh;
`;
export default MainWrapper;
