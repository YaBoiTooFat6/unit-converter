import React, { useState } from 'react';

export function KmToMiles(km) {
  return km * 0.621371;
}

function OliComponent() {
  const [km, setKm] = useState(0);

  return (
    <div>
      <input type="number" value={km} onChange={e => setKm(+e.target.value)} />
      <p>{km} km = {KmToMiles(km)} mil</p>
    </div>
  );
}

export default OliComponent;
