import { NextPage, NextPageContext } from "next";
import React from "react";
import condition from "~/utils/lib/cmd-json/condition_occurrence.json";
import death from "~/utils/lib/cmd-json/death.json";
import person from "~/utils/lib/cmd-json/person.json";
import visit from "~/utils/lib/cmd-json/visit_occurrence.json";
import styled from "styled-components";
import MainWrapper from "~/components/Template/Main/MainWrapper";
const list = {
  condition: condition["condition_occurrence"],
  death: death["death"],
  person: person["person"],
  visit: visit["visit_occurrence"],
};
const Index: NextPage = () => {
  return (
    <__Wrapper>
      <MainWrapper list={list} />
    </__Wrapper>
  );
};
Index.getInitialProps = async ({ req }: NextPageContext) => {
  return {};
};
const __Wrapper = styled.div``;

export default Index;
