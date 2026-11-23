import React, { useState } from 'react';
import { DirectorTopic } from '../../data/roles/directorStructure';

interface DirectorProductionViewProps {
  topics: DirectorTopic[];
}

export const DirectorProductionView: React.FC<DirectorProductionViewProps> = ({ topics }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0]?.id || 'dir-3-1');

  const activeTopic = topics.find((t) => t.id === selectedTopicId) || topics[0];
  const activeIndex = topics.findIndex((t) => t.id === selectedTopicId);

  return (
    <div className="space-y-6">
      {/* Sub-tabs Navigation */}
      <div className="bg-[#134F47]/5 p-2 sm:p-2.5 rounded-2xl border border-[#134F47]/10 flex flex-wrap gap-2">
        {topics.map((topic, index) => {
          const isSelected = topic.id === selectedTopicId;
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#134F47] text-[#FFF4E0] shadow-sm font-black'
                  : 'bg-white text-[#134F47]/80 hover:text-[#134F47] hover:bg-white/95 border border-[#134F47]/15 font-bold'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  isSelected ? 'bg-[#E85B0D]' : 'bg-[#134F47]/30'
                }`}
              />
              <span>{index + 1}. {topic.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Sub-tab Content Card */}
      {activeTopic && (
        <div className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#134F47]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#134F47] flex items-center justify-center text-[#FFF4E0] font-black text-base shadow-sm">
                {activeIndex + 1}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#134F47]">
                  {activeTopic.title}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-[#134F47]/70 mt-0.5">
                  المحاور والأقسام الفرعية
                </p>
              </div>
            </div>
          </div>

          {/* Subtopics List */}
          {activeTopic.subtopics && activeTopic.subtopics.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {activeTopic.subtopics.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#134F47]/[0.03] border border-[#134F47]/15 hover:border-[#134F47]/30 hover:bg-[#134F47]/[0.06] transition-all duration-200"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#E85B0D]/15 text-[#E85B0D] flex items-center justify-center text-xs font-black flex-shrink-0">
                    {sIdx + 1}
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#134F47]">
                    {sub.replace(/\.$/, '')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
