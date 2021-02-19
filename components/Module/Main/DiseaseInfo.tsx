import React, { useState } from "react";
import { ConditionInterface } from "~/interfaces";
import styled from "styled-components";
import themes from "~/styles/themes";
import { createPortal } from "react-dom";
import moment from "moment";
const Portal = ({ children }) => {
  const modalRoot = document.querySelector("#__disease-info-portal");

  return createPortal(children, modalRoot);
};

interface Props {
  list: ConditionInterface[];
}
const DiseaseInfo = ({ list }: Props) => {
  const [tabOn, setTabOn] = useState<number>(null);
  return (
    <__InfoWrapper>
      {list.map((item, index) => (
        <>
          <__InfoItem key={index} onClick={() => setTabOn(index)}>
            진단 {item.condition_concept_id}
          </__InfoItem>
          {tabOn === index && (
            <Portal>
              <__ConceptWrapper>
                <__Id>환자 id {item.person_id}</__Id>
                <__ConceptId>
                  진단(병명) {item.condition_concept_id}
                </__ConceptId>
                <__StartDate>
                  진단 시작 일시{" "}
                  {moment(item.condition_start_datetime).format("YYYY-MM-DD")}
                </__StartDate>
                <__EndDate>
                  진단 종료 일시{" "}
                  {moment(item.condition_end_datetime).format("YYYY-MM-DD")}
                </__EndDate>
                <__VisitId>방문 ID {item.visit_occurrence_id}</__VisitId>
              </__ConceptWrapper>
            </Portal>
          )}
        </>
      ))}
    </__InfoWrapper>
  );
};
const __InfoWrapper = styled.div`
  overflow: auto;
  width: 300px;
  height: 260px;
  border: 1px solid ${themes.color.grayBold};
  position: absolute;
  left: 320px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const __InfoItem = styled.a`
  display: block;
  padding: 10px 30px;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    right: 0;
    top: 0;
    content: ">";
    font-size: 16px;
  }
`;
const __ConceptWrapper = styled.div`
  border: 1px solid ${themes.color.grayBold};
  height: 260px;
  position: absolute;
  top: 0;
  left: 650px;
  width: 300px;
`;
const __Id = styled.p`
  padding: 10px 30px;
`;
const __ConceptId = styled(__Id)``;
const __StartDate = styled(__Id)``;
const __EndDate = styled(__Id)``;
const __VisitId = styled(__Id)``;
export default DiseaseInfo;
