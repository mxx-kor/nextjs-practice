'use client';

import {Box, Typography} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';

const size = 800;
const tolerance = 5;

const PerfectCircle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<number[]>([]);
  const [roundness, setRoundness] = useState<number | null>(null);
  const center = size / 2;

  const drawLine = (
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
  ) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setIsDrawing(true);
    setRoundness(null);
    setCoordinates([]);

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addCoordinate(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    addCoordinate(x, y);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (coordinates.length >= 2) {
      const startX = coordinates[coordinates.length - 2];
      const startY = coordinates[coordinates.length - 1];
      drawLine(ctx, startX, startY, x, y);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (coordinates.length < 3) return;
    analyzeDrawing();
  };

  const addCoordinate = (x: number, y: number) => {
    setCoordinates((prev) => [...prev, x, y]);
  };

  const analyzeDrawing = () => {
    if (coordinates.length === 0) return;
    const distances = [];
    let totalDistance = 0;

    for (let i = 0; i < coordinates.length - 1; i += 2) {
      const x = coordinates[i];
      const y = coordinates[i + 1];

      const distance = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
      distances.push(distance);
      totalDistance += distance;
    }

    const averageDistance = totalDistance / (coordinates.length / 2);
    const count = distances.reduce((acc, curr) => {
      if (
        curr < averageDistance + tolerance &&
        curr > averageDistance - tolerance
      ) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const percentage = (count / distances.length) * 100;
    setRoundness(percentage);
  };

  useEffect(() => {
    const drawCenterPoint = (ctx: CanvasRenderingContext2D, center: number) => {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(center, center, 3, 0, Math.PI * 2);
      ctx.fill();
    };

    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // 도형을 그릴 때마다 중심의 점을 다시 그림
    drawCenterPoint(ctx, center);
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'white';
  }, []);

  return (
    <Box>
      <Typography>가운데 점을 중심으로 원을 그려보세요!</Typography>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        style={{border: '2px solid white'}}
      />
      {roundness !== null && (
        <>
          <Typography variant='h3'>score: {roundness.toFixed(2)}%</Typography>
          <Typography>
            hint: 중심의 점과 선 사이의 거리가 일정해야합니다!
          </Typography>
        </>
      )}
    </Box>
  );
};

export default PerfectCircle;
