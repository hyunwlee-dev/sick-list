import React from 'react';
import { SickResponse } from '../../types/SickType';
import * as S from './SearchResult.style';

interface IProps {
  isFocused: boolean;
  searchedArr: SickResponse[];
  isLoading: boolean;
  updateSearchValue: any;
  pushRecommendItems: any;
  keyDownRecommendedList: any;
}
export const SearchResult = ({
  isFocused,
  searchedArr,
  isLoading,
  updateSearchValue,
  pushRecommendItems,
  keyDownRecommendedList,
}: IProps) => {
  // if (!isFocused) return <></>;
  if (isLoading) return <>Loading...</>;
  console.info(isFocused, updateSearchValue);
  return (
    <S.Ul>
      <S.P>추천 검색어</S.P>
      {searchedArr.length < 1 && <>최근 검색어가 없습니다.</>}
      {searchedArr.length >= 1 &&
        searchedArr?.map(({ sickCd, sickNm }, index) => (
          //FIX: unavailable click
          <S.Li
            key={sickCd}
            // onClick={() => updateSearchValue(sickNm)}
            tabIndex={index}
            ref={element => element && pushRecommendItems(element)}
            onKeyDown={event => keyDownRecommendedList(event, index)}
          >
            <S.ImageWrapper>
              <img src="/search.svg" width={16} height={16} alt="search icon" />
            </S.ImageWrapper>
            <span>{sickNm}</span>
          </S.Li>
        ))}
    </S.Ul>
  );
};
