
const MonthBar: React.FC<MonthBarProps> = ({ month, height }) => {
    return (
      <div className="flex flex-col flex-1 items-center px-1.5 h-[200px] justify-end">
        <div className={`shrink-0 w-8 bg-emerald-900 rounded-full`} style={{ height: `${height}px` }} />
        <div className="mt-2.5">{month}</div>
      </div>
    );
  };
  
  export default MonthBar;