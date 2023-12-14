import React from 'react';
import './Checkbox.css'; // Import your CSS file for styling

function Checkbox(t) {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" className="custom-checkbox" />
        {t.name}
      </label>
    </div>
  );
}

export default Checkbox;
