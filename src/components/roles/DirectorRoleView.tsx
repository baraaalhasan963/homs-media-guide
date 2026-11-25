import type React from 'react';
import { DIRECTOR_MODULES, getDirectorModuleById } from '../../data/roles/directorStructure';
import { DirectorDocumentationView } from './DirectorDocumentationView';
import { DirectorManagementView } from './DirectorManagementView';
import { DirectorPlanningView } from './DirectorPlanningView';
import { DirectorProductionView } from './DirectorProductionView';
import { DirectorPublishingView } from './DirectorPublishingView';

interface DirectorRoleViewProps {
  activeTabId: string;
  activeSubTabId?: string;
  onSelectModule: (moduleId: string) => void;
  onSwitchRole: () => void;
}

export const DirectorRoleView: React.FC<DirectorRoleViewProps> = ({ activeTabId, activeSubTabId }) => {
  const activeModule = getDirectorModuleById(activeTabId) || DIRECTOR_MODULES[0];

  return (
    <div key={activeModule.id} className="space-y-6 font-cairo select-none animate-tab-enter">
      {/* Main Tab Title */}
      <h1 className="text-xl sm:text-2xl font-black text-[#134F47] pb-3 border-b border-[#134F47]/15">
        {activeModule.title}
      </h1>

      {activeModule.id === 'dir-management' && (
        <DirectorManagementView topics={activeModule.topics} externalSubTabId={activeSubTabId} />
      )}
      {activeModule.id === 'dir-planning' && (
        <DirectorPlanningView topics={activeModule.topics} externalSubTabId={activeSubTabId} />
      )}
      {activeModule.id === 'dir-production' && (
        <DirectorProductionView topics={activeModule.topics} externalSubTabId={activeSubTabId} />
      )}
      {activeModule.id === 'dir-publishing' && (
        <DirectorPublishingView topics={activeModule.topics} externalSubTabId={activeSubTabId} />
      )}
      {activeModule.id === 'dir-documentation' && (
        <DirectorDocumentationView topics={activeModule.topics} externalSubTabId={activeSubTabId} />
      )}
    </div>
  );
};
