import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import {
  ConditionInterface,
  DeathInterface,
  PersonInterface,
  VisitInterface,
} from "~/interfaces";
import DiseaseInfo from "~/components/Module/Main/DiseaseInfo";
import { useModalState } from "~/hooks/useModalState";
import { useFilter } from "~/hooks/useFetch";
interface Props {
  person?: PersonInterface;
  condition: ConditionInterface[];
  visit: VisitInterface[];
  death: DeathInterface[];
}

const Detail = ({ person, condition, visit, death }: Props) => {
  const diseaseData = useFilter(condition, person);
  const visitTotal = useFilter(visit, person).length;
  const deathData = useFilter(death, person).length;
  console.log(death);
  const diseaseInfo = useModalState();
  return (
    <__DetailWrapper>
      <__PersonWrapper>
        <__Id>환자 ID {person.person_id}</__Id>
        <__Gender>성별 {person.gender_source_value}</__Gender>
        <__Birth>
          생년월일 {moment(person.birth_datetime).format("YYYY-MM-DD")}
        </__Birth>
        <__Age>
          나이{" "}
          {moment().diff(
            moment(person.birth_datetime).format("YYYY-MM-DD"),
            "years"
          )}
        </__Age>
        <__Race>인종 {person.race_source_value}</__Race>
        <__Ethnicity>민족 {person.ethnicity_source_value}</__Ethnicity>
        <__Death>사망 여부 {deathData > 0 ? "O" : "X"}</__Death>
        <__VisitTotal>전체 방문 수 {visitTotal}</__VisitTotal>
      </__PersonWrapper>
      <__ConditionWrapper>
        <__ConditionBtn onClick={() => diseaseInfo.open()}>
          진단 정보
        </__ConditionBtn>
      </__ConditionWrapper>
      {diseaseInfo.if(<DiseaseInfo list={diseaseData} />)}
      <div id="__disease-info-portal" />
    </__DetailWrapper>
  );
};
const __DetailWrapper = styled.div`
  position: relative;
  border-top: 1px solid #ffffff;
  padding: 20px;
`;
const __PersonWrapper = styled.div``;
const __Id = styled.p`
  color: #41b43d;
  padding: 5px 0;
`;
const __Gender = styled(__Id)``;
const __Birth = styled(__Id)``;
const __Age = styled(__Id)``;
const __Race = styled(__Id)``;
const __Ethnicity = styled(__Id)``;
const __Death = styled(__Id)``;
const __VisitTotal = styled(__Id)``;
const __ConditionWrapper = styled.div`
  margin-top: 20px;
`;
const __ConditionBtn = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  color: #000000;
  position: relative;
  &:after {
    position: absolute;
    right: 0;
    top: 0;
    content: ">";
    font-size: 16px;
  }
`;

export default Detail;
