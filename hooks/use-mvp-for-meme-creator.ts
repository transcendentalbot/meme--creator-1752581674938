// /components/meme-preview.tsx
import React from 'react';
import * as fabric from 'fabric';

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
    if (!canvasRef.current) return;
    const canvas = new fabric.Canvas(canvasRef.current);
    fabric.Image.fromURL(URL.createObjectURL(image)).then((img) => {
      canvas.setDimensions({ width: img.width || 800, height: img.height || 600 });
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));

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
        top: (canvas.height || 600) - 70,
        left: 20,
      });

      canvas.add(topTextObj, bottomTextObj);
      canvas.renderAll();
    });
  }, [image, topText, bottomText]);

  return <canvas ref={canvasRef} />;
};