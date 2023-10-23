import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../assets/customIcon';
import { User } from './interfaces/user.interface';

interface ResultPageProps {
  result: Array<User>;
}

const ResultPage: FC<ResultPageProps> = ({ result }) => {
  const navigate = useNavigate();
  const handleGoToLastPage = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <div className="w-full py-[92px]">
      <div className="flex gap-[25px] pl-[87px]">
        <button className="text-h4" onClick={handleGoToLastPage} type="button">
          <LeftArrow />
        </button>
        <span className="text-h4 text-white capitalize font-normal">
          results
        </span>
      </div>
      <div className="w-full px-[130px]">
        {result.length === 0 && <div> no result</div>}
        <div className="grid grid-cols-3 gap-x-[34px] gap-y-[31px] pt-[24px]">
          {result.length > 0 &&
            result.map((item) => (
              <div key={item.id}>
                <img
                  src={item.avater}
                  alt={item.name}
                  className="w-[219px] h-[146px]"
                />
                <div className="flex flex-col">
                  <span className="text-white text-[14.9px] leading-[22.35px] tracking-[0.14px]">
                    this is a title
                  </span>
                  <span className="text-[11.175px] leading-[16.762px] text-grey-400">
                    by
                    {item.username}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ResultPage);
