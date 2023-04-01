import React from 'react';
import './mood-selector-styles.scss';
import { HappyIcon, NeutralIcon, UnhappyIcon, VeryHappyIcon, VeryUnhappyIcon } from '../../../../components/icons';
import { useNavigate } from 'react-router-dom';
import { Company } from '../../../../types';
import { useGetCompaniesQuery } from '../../../../store/api/companiesApi';

const MoodSelector: React.FC = () => {
  const navigate = useNavigate();
  const { data: companies = [] }: { data?: Company[] } = useGetCompaniesQuery();
  const handleOnClick = (selection: string): void => {
    console.log(selection);
    navigate('questions/' + selection);
  };

  return (
    <div className="moodSelectorwrapper">
      <div className="title">
        <span className="companyName">{companies[0]?.name ?? 'Demo Inc.'} </span>would like to know
      </div>
      <div className="question">{'How is your week going?'}</div>
      <div className="moods">
        <div
          onClick={() => {
            handleOnClick('5');
          }}
        >
          <VeryUnhappyIcon width={82} height={82} />
        </div>
        <div
          onClick={() => {
            handleOnClick('4');
          }}
        >
          <UnhappyIcon width={82} height={82} />
        </div>
        <div
          onClick={() => {
            handleOnClick('3');
          }}
        >
          <NeutralIcon width={82} height={82} />
        </div>
        <div
          onClick={() => {
            handleOnClick('2');
          }}
        >
          <HappyIcon width={82} height={82} />
        </div>
        <div
          onClick={() => {
            handleOnClick('1');
          }}
        >
          <VeryHappyIcon width={82} height={82} />
        </div>
      </div>
      <div className="anonymous">{'Your answer will always remain anonymous'}</div>
    </div>
  );
};

export default MoodSelector;
