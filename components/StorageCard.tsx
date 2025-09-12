import { imgMyIcons, imgFrame } from "../imports/svg-j9m6t";

interface StorageCardProps {
  name: string;
  capacity: string;
  usedPercentage: number;
  warningLevel?: 'normal' | 'warning' | 'critical';
  icon?: string;
  color?: string;
  onClick?: () => void;
}

function MyIcons({ icon }: { icon?: string }) {
  return (
    <div className="absolute left-[9px] size-6 top-3.5" data-name="MyIcons">
      <img className="block max-w-none size-full" src={icon || imgMyIcons} />
    </div>
  );
}

function IconContainer({ icon }: { icon?: string }) {
  return (
    <div className="bg-white h-[52px] relative rounded-[8px] shrink-0 w-[42px] transition-transform hover:scale-105" data-name="div">
      <div className="h-[52px] overflow-clip relative w-[42px]">
        <MyIcons icon={icon} />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame} />
    </div>
  );
}

function WarningIcon() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-3.5 top-[2.75px]" data-name="svg">
      <Frame />
    </div>
  );
}

function WarningIndicator({ percentage, level = 'normal' }: { percentage: number; level?: 'normal' | 'warning' | 'critical' }) {
  const getTextColor = () => {
    switch (level) {
      case 'critical': return 'text-red-300';
      case 'warning': return 'text-yellow-300';
      default: return 'text-white';
    }
  };

  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <WarningIcon />
    </div>
  );
}

function UsageDisplay({ percentage, level = 'normal' }: { percentage: number; level?: 'normal' | 'warning' | 'critical' }) {
  const getTextColor = () => {
    switch (level) {
      case 'critical': return 'text-red-300';
      case 'warning': return 'text-yellow-300';
      default: return 'text-white';
    }
  };

  return (
    <div className="bg-[rgba(0,0,0,0)] h-5 relative shrink-0 w-[48.141px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <WarningIndicator percentage={percentage} level={level} />
      <div className={`absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[18px] not-italic text-[14px] text-nowrap top-0 transition-colors ${getTextColor()}`}>
        <p className="leading-[20px] whitespace-pre">{percentage}%</p>
      </div>
    </div>
  );
}

function HeaderSection({ percentage, level, icon }: { percentage: number; level?: 'normal' | 'warning' | 'critical'; icon?: string }) {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-start flex flex-wrap gap-[72px] items-start justify-between relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <IconContainer icon={icon} />
      <UsageDisplay percentage={percentage} level={level} />
    </div>
  );
}

function ProgressBar({ percentage, level = 'normal' }: { percentage: number; level?: 'normal' | 'warning' | 'critical' }) {
  const getProgressColor = () => {
    switch (level) {
      case 'critical': return 'bg-red-400';
      case 'warning': return 'bg-yellow-400';
      default: return 'bg-[#ffdd20]';
    }
  };

  return (
    <div className="bg-gray-200 h-2 relative rounded-[9999px] shrink-0 w-full transition-all duration-500" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div 
        className={`absolute h-2 left-0 rounded-[9999px] top-0 transition-all duration-700 ease-out ${getProgressColor()}`}
        style={{ width: `${percentage}%` }}
        data-name="div"
      >
        <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

export default function StorageCard({ 
  name, 
  capacity, 
  usedPercentage, 
  warningLevel = 'normal',
  icon,
  color = '#378ff9',
  onClick 
}: StorageCardProps) {
  return (
    <div 
      className="relative rounded-[12px] size-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{ backgroundColor: color }}
      onClick={onClick}
      data-name="div"
    >
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-[25px] py-6 relative size-full">
          <HeaderSection percentage={usedPercentage} level={warningLevel} icon={icon} />
          <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
            <p className="leading-[normal]">{capacity}</p>
          </div>
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
            <p className="leading-[normal]">{name}</p>
          </div>
          <ProgressBar percentage={usedPercentage} level={warningLevel} />
        </div>
      </div>
    </div>
  );
}