import React from 'react';

const Statusbar = ({isLocked, volumeLevel, batteryLevel, isBluetoothOn, carrier }) => {
  const lock = isLocked ? <div className="Statusbar__lock">lock</div>: null;
  const volume = <div className="Statusbar__volume">volume: {volumeLevel}</div>
  const battery = <div className="Statusbar__battery">battery: {batteryLevel}%</div>
  const bluetooth = isBluetoothOn ? <div className="Statusbar__bluetooth">bluetooth on</div> : null;
  return (
    <div className="Statusbar">
      <div className="Statusbar__left">
        <div className="Statusbar__signal"></div>
        <div className="Statusbar__carrier">{carrier}</div>
      </div>
      <div className="Statusbar__right">
        {lock}
        {volume}
        {battery}
        {bluetooth}
      </div>
    </div>
  );
};

export default Statusbar;