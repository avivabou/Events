import React from 'react';
import {WORK_STATUSES_COLORS, type WorkStatus} from "@employee-statuses/shared";

interface StatusWithColorProps {
  status: WorkStatus;
}

const StatusWithColor: React.FC<StatusWithColorProps> = ({ status }) => {
  const color = WORK_STATUSES_COLORS[status] || 'gray';

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          border: `3px solid ${color}`, 
          backgroundColor: 'transparent', 
          marginRight: '8px',
          flexShrink: 0,
        }}
      ></div>
      <span>{status}</span>
    </div>
  );
};

export default StatusWithColor;
