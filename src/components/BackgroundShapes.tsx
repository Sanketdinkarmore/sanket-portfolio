import React from 'react';
import { Box } from '@mui/material';

const BackgroundShapesExact: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        bgcolor: '#1e1f22',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderTop: '300px solid transparent',
          borderLeft: '220px solid #06b6d4',
          borderBottom: '300px solid transparent',
          opacity: 0.15,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 0,
          height: 0,
          borderBottom: '350px solid transparent',
          borderLeft: '250px solid #06b6d4',
          borderTop: '350px solid transparent',
          opacity: 0.12,
        }}
      />
    </Box>
  );
};

export default BackgroundShapesExact;