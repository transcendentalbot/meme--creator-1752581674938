// /components/meme-preview.tsx
import React from 'react';
import { fabric } from 'fabric';

interface MemePreviewProps {
  image: File;
  topText: string;
  bottomText: string;
}

export const MemePreview: React.FC<MemePreviewProps> = ({
  image,
  topText,
  bottomText,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    fabric.Image.fromURL(URL.createObjectURL(image), (img) => {
      canvas.setDimensions({ width: img.width, height: img.height });
      canvas.setBackgroundImage(img);

      const topTextObj = new fabric.Text(topText, {
        fontFamily: 'Impact',
        fontSize: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 3,
        top: 20,
        left: 20,
      });

      const bottomTextObj = new fabric.Text(bottomText, {
        fontFamily: 'Impact',
        fontSize: 50,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 3,
        top: canvas.height - 70,
        left: 20,
      });

      canvas.add(topTextObj, bottomTextObj);
      canvas.renderAll();
    });
  }, [image, topText, bottomText]);

  return <canvas ref={canvasRef} />;
};