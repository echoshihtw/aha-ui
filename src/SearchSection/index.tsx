import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { GET } from '../utils/request';
import ResultPage from './ResultPage';
import SearchPage from './SearchPage';
import { User } from './interfaces/user.interface';

const SearchSection = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [sliderValue, setSliderValue] = useState<number>(75.2);
  const [result, setResult] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = new URLSearchParams(document.location.search);
  let pageNumberFromUrl = params.get('page') ? Number(params.get('page')) : 1;
  const keywordFromUrl = params.get('keyword');
  const navigate = useNavigate();

  useEffect(() => {
    const pageSize = sliderValue === 75.2 ? 30 : sliderValue;
    GET(
      `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${pageNumberFromUrl}&pageSize=${pageSize}&keyword=${keyword}`,
    ).then((r) => {
      setResult(r.data);
      setIsLoading(false);
    });
  }, [keyword, sliderValue, pageNumberFromUrl, setResult]);

  const handleEnterInput = useCallback(
    (e: ChangeEvent) => {
      setKeyword((e.target as HTMLInputElement).value);
    },
    [setKeyword],
  );

  const handleSearchClick = useCallback(() => {
    if (keyword === '') return;
    navigate(`?keyword=${keyword}`, { state: 'search' });
  }, [navigate, keyword]);

  const handleLoadNextPage = useCallback(() => {
    navigate(`?keyword=${keyword}&page=${(pageNumberFromUrl += 1)}`, {
      state: 'search',
    });
  }, [navigate, keyword, pageNumberFromUrl]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter') {
        handleSearchClick();
      }
    },
    [handleSearchClick],
  );
  const searchMode = keywordFromUrl === null;
  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex justify-between">
      {searchMode ? (
        <SearchPage
          keyword={keyword}
          onEnterInput={handleEnterInput}
          sliderValue={sliderValue}
          onSetSliderValue={setSliderValue}
          onKeyDown={handleKeyDown}
          onSearchButtonClick={handleSearchClick}
        />
      ) : (
        <ResultPage
          result={result}
          isLoading={isLoading}
          sliderValue={sliderValue}
          onLoadNextPage={handleLoadNextPage}
        />
      )}
    </div>
  );
};

export default memo(SearchSection);
