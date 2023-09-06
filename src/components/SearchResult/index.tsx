import React from 'react';
import { SickResponse } from '../../types/SickType';
import * as S from './SearchResult.style';

interface IProps {
  isFocused: boolean;
  searchedArr: SickResponse[];
  isLoading: boolean;
}
export const SearchResult = ({ isFocused, searchedArr, isLoading }: IProps) => {
  if (!isFocused) return <></>;
  if (isLoading) return <>Loading...</>;
  return (
    <S.Ul>
      {searchedArr.length < 1 && <>최근 검색어가 없습니다.</>}
      {searchedArr.length >= 1 &&
        searchedArr?.map(({ sickCd, sickNm }) => <li key={sickCd}>{sickNm}</li>)}
    </S.Ul>
  );
};
