import React from 'react';

function ReviewData({ label, value }) {
  return (
    <>
      <label className="col-lg-3 mb-2">{label} </label>
      <p className="col-lg-9" style={{ fontSize: '1rem', fontWeight: '600' }}>
        {value}
      </p>
    </>
  );
}

export default ReviewData;
