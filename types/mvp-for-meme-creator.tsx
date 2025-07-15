// /components/meme-editor.tsx
import React, { ChangeEvent } from 'react';

interface MemeEditorProps {
  image: File;
  topText: string;
  bottomText: string;
  onTopTextChange: (text: string) => void;
  onBottomTextChange: (text: string) => void;
}

export const MemeEditor: React.FC<MemeEditorProps> = ({
  image,
  topText,
  bottomText,
  onTopTextChange,
  onBottomTextChange,
}) => {
  const handleTopTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onTopTextChange(event.target.value);
  };

  const handleBottomTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onBottomTextChange(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="topText" className="block font-medium mb-1">
          Top Text
        </label>
        <input
          type="text"
          id="topText"
          value={topText}
          onChange={handleTopTextChange}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
      <div>
        <label htmlFor="bottomText" className="block font-medium mb-1">
          Bottom Text
        </label>
        <input
          type="text"
          id="bottomText"
          value={bottomText}
          onChange={handleBottomTextChange}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
    </div>
  );
};