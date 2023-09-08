import React, { ChangeEvent, useId, useRef, useState } from 'react';
import { styled, css } from 'styled-components';
import { SearchInput } from '../components/SearchInput';
import { SearchResult } from '../components/SearchResult';
import { useSearchInput } from '../hooks/useSearchInput';
const DisesaseContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchedArr, isLoading } = useSearchInput(searchValue);
  const diseaseId = useId();
  const searchDisesase = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const [isFocused, setIsFocused] = useState(false);
  const focus = () => {
    setIsFocused(true);
  };
  const blur = () => {
    setIsFocused(false);
  };
  const updateSearchValue = (recommend: string) => {
    setSearchValue(recommend);
  };
  //FIX: no necessarily ref
  const searchInputRef = useRef(null);
  return (
    <>
      <H2>국내 모든 임상시험 검색하고 온라인으로 참여하기</H2>
      <Label htmlFor={diseaseId}>질환명 입력</Label>
      <SearchInput
        ref={searchInputRef}
        id={diseaseId}
        searchDisease={searchDisesase}
        searchValue={searchValue}
        placeholder="질환명을 입력해주세요."
        focus={focus}
        blur={blur}
      />
      <SearchResult
        isFocused={isFocused}
        searchedArr={searchedArr}
        isLoading={isLoading}
        updateSearchValue={updateSearchValue}
      />
    </>
  );
};

const A11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clippath: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  whitespace: nowrap;
`;

const H2 = styled.h2`
  margin: 2rem auto;
  font-size: 2rem;
  width: 24rem;
  text-align: center;
`;

const Label = styled.label`
  ${A11yHidden}
`;

export default DisesaseContainer;
