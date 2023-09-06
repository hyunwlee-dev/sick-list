import React from 'react';
import { SickResponse } from '../../types/SickType';
import * as S from './SearchResult.style';

interface IProps {
  searchedArr: SickResponse[];
  isLoading: boolean;
}
export const SearchResult = ({ searchedArr, isLoading }: IProps) => {
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <S.Ul>
      {searchedArr.length < 1 && <>최근 검색어가 없습니다.</>}
      {searchedArr.length >= 1 &&
        searchedArr?.map(({ sickCd, sickNm }) => <li key={sickCd}>{sickNm}</li>)}
    </S.Ul>
  );
};
