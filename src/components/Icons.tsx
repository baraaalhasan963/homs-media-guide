import React from 'react';
import {
  FileText,
  Landmark,
  ClipboardCheck,
  Video,
  Palette,
  Send,
  HardDrive,
  Award,
  ShieldCheck,
  AlertTriangle,
  GraduationCap,
  Layers
} from 'lucide-react';

export const PartIcon: React.FC<{ num: number | string; className?: string }> = ({ num, className = "w-5 h-5" }) => {
  switch (num) {
    case 1:
      return <Landmark className={className} />;
    case 2:
      return <ClipboardCheck className={className} />;
    case 3:
      return <Video className={className} />;
    case 4:
      return <Palette className={className} />;
    case 5:
      return <Send className={className} />;
    case 6:
      return <HardDrive className={className} />;
    case 7:
      return <Award className={className} />;
    case 8:
      return <ShieldCheck className={className} />;
    case 9:
      return <AlertTriangle className={className} />;
    case 10:
      return <GraduationCap className={className} />;
    case 11:
      return <Layers className={className} />;
    default:
      return <FileText className={className} />;
  }
};
