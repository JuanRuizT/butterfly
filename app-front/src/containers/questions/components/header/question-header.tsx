import React, { useState } from 'react';
import './question-header-styles.scss';
import { EditIcon, HappyIcon, NeutralIcon, UnhappyIcon, VeryHappyIcon, VeryUnhappyIcon } from '../../../../components/icons';
import MoodsCard from '../moods-card/mood-card';
import { useGetCompaniesQuery } from '../../../../store/api/companiesApi';
import { Company } from '../../../../types';

const QuestionHeader: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState('1');
  const { data: companies = [] }: { data?: Company[] } = useGetCompaniesQuery();

  const [isMoodSelectorOpen, setIsMoodSelectorOpen] = useState<boolean>(false);

  const setMood = (mood: string) => {
    setSelectedMood(mood);
    setIsMoodSelectorOpen(!isMoodSelectorOpen);
  };

  const openMoodCardSelector = () => {
    setIsMoodSelectorOpen(!isMoodSelectorOpen);
  };

  const renderIcon = (selection: string) => {
    switch (selection) {
      case '1':
        return <VeryHappyIcon width={120} height={120} />;
      case '2':
        return <HappyIcon width={120} height={120} />;
      case '3':
        return <NeutralIcon width={120} height={120} />;
      case '4':
        return <UnhappyIcon width={120} height={120} />;
      case '5':
        return <VeryUnhappyIcon width={120} height={120} />;
      default:
        return <VeryHappyIcon width={120} height={120} />;
    }
  };

  const renderText = (selection: string) => {
    switch (selection) {
      case '1':
        return 'Awesome! Thank you for your Feedback.';
      case '2':
        return 'Great! Thank you for your Feedback.';
      case '3':
        return 'OK… things could be better. Thank you for your Feedback.';
      case '4':
        return 'Mmmmh, things should improve. Thank you for your Feedback.';
      case '5':
        return 'Oops, something needs to change. Thank you for your Feedback.';
      default:
        return 'Awesome! Thank you for your Feedback.';
    }
  };

  return (
    <>
      <div className="questionHeaderWrapper">
        {!isMoodSelectorOpen ? (
          <div className="left">
            <div className="icon" onClick={openMoodCardSelector}>
              <div className="editIcon">
                <EditIcon />
              </div>
              <div className="moodIcon">{renderIcon(selectedMood)}</div>
            </div>
            <div className="text">
              <div className="mood">{renderText(selectedMood)}</div>
              <div className="note">
                Your answers will <span className="blue">always remain anonymous</span>
              </div>
            </div>
          </div>
        ) : (
          <MoodsCard setMood={setMood} />
        )}
        <div className="company">{companies[0]?.name ?? 'Demo Inc.'}</div>
      </div>
    </>
  );
};

export default QuestionHeader;
