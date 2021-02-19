import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { JsonInterface } from "~/components/Template/Main/MainWrapper";
import themes from "~/styles/themes";
import Detail from "~/components/Module/Main/Detail";
import { TablePagination } from "@trendmicro/react-paginations";
import Select from "react-select";
import { ethnicity, gender, race } from "~/utils/lib/select-dummy";

const PersonInfo = ({ list }: JsonInterface) => {
  const [stack, setStack] = useState([]);
  const [item, setItem] = useState([]);
  const [tabOn, setTabOn] = useState<number | null>(null);
  const [page, setPage] = useState<any>({
    page: 1,
    pageLength: 10,
  });
  const [personPage, setPersonPage] = useState<any>({
    page: 1,
    pageLength: 10,
  });
  const personDetailHandler = (index: number) => {
    if (index === tabOn) {
      setTabOn(null);
    } else {
      setTabOn(index);
    }
  };
  const customStyles = {
    // select 옵션
    option: (provided, state) => {
      return {
        ...provided,
        width: "300px",
      };
    },
    //select
    control: (provided, state) => {
      return {
        ...provided,
        width: 300,
      };
    },
  };
  const handleInputChange = (data) => {
    const ele = (item) => item.type === data.type;
    const dummy = stack;
    let result = list.person;
    const duplicate = stack.some(ele);
    if (duplicate) {
      dummy.splice(dummy.findIndex(ele), 1);
      dummy.push(data);
    } else {
      dummy.push(data);
    }
    setStack(dummy);

    dummy.map((it) => {
      result = result.filter((item) => item[it.type] === it.value);
    });

    setItem(result);
  };

  useEffect(() => {
    setItem(list.person);
  }, []);
  return (
    <__Wrapper>
      <__SelectWrapper>
        <Select
          defaultOptions
          onChange={handleInputChange}
          options={gender}
          placeholder={<div>성별</div>}
          styles={customStyles}
        />
        <Select
          defaultOptions
          onChange={handleInputChange}
          options={race}
          placeholder={<div>인종</div>}
          styles={customStyles}
        />
        <Select
          defaultOptions
          onChange={handleInputChange}
          options={ethnicity}
          placeholder={<div>민족</div>}
          styles={customStyles}
        />
      </__SelectWrapper>
      <__PersonWrapper>
        {item?.map(
          (item, index) =>
            index >= personPage.page - 1 &&
            index < personPage.pageLength && (
              <>
                <__PersontItem
                  key={index}
                  onClick={() => personDetailHandler(index)}
                  on={tabOn === index}
                >
                  환자{index + 1}
                </__PersontItem>
                {tabOn === index && (
                  <Detail
                    person={item}
                    condition={list.condition}
                    visit={list.visit}
                    death={list.death}
                  />
                )}
              </>
            )
        )}
      </__PersonWrapper>
      <TablePagination
        type="full"
        page={page.page}
        pageLength={page.pageLength}
        totalRecords={list.person.length}
        onPageChange={({ page, pageLength }) => {
          setPage({ ...page, page: page, pageLength: pageLength });
          setPersonPage({
            ...page,
            page: page * pageLength - pageLength + 1,
            pageLength: page * pageLength,
          });
        }}
        prevPageRenderer={() => <div>{"<"}</div>}
        nextPageRenderer={() => <div>{">"}</div>}
      />
    </__Wrapper>
  );
};
const __Wrapper = styled.div``;
const __PersonWrapper = styled.ul`
  width: 300px;
  border: 1px solid ${themes.color.grayBold};
`;
const __SelectWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  & > div {
    margin-right: 5px;
  }
`;
const __PersontItem = styled.li<{ on: boolean }>`
  width: 300px;
  line-height: 2;
  padding: 5px 10px;
  border-bottom: ${(props) =>
    !props.on && `1px solid ${themes.color.grayBold}`};
  background: ${themes.color.grayNormal};
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;

export default PersonInfo;
