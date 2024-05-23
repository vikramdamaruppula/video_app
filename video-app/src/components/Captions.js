import React, { useState } from 'react'

const Captions = ({onSubmit}) => {
    const [captionText, setCaptionText] = useState('');

    const handleCaptionTextChange = (e) => {
      setCaptionText(e.target.value);
    };
  
    const handleSubmit = () => {
      const newCaption = {
        text: captionText,
        timestamp: '', // Calculate timestamp here,
      };
      onSubmit(newCaption);
      setCaptionText('');
    };
    
  return (
    <div className="caption-form-container">
    <input
      type="text"
      value={captionText}
      onChange={handleCaptionTextChange}
      placeholder="Enter caption"
      className="caption-input"
    />
    <button onClick={handleSubmit} className="add-caption-button">
      Add Caption
    </button>
  </div>
  )
}

export default Captions