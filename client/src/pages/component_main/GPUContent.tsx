import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function GpuCoreComponent() {
  const [load, setLoad] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoad((Math.random() * 100)); 
    }, 4000);

   
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      <Box>
        <Typography>{Math.floor(load)}%</Typography>
        <Box sx={{ width: '80px', height: '140px', backgroundColor: '#bbb899', display: 'flex', alignItems: 'end', border: '0.1px solid white' }}>
          <Box
            sx={{
              width: '100px',
              height: `${load}%`, 
              backgroundColor: '#d5c7aa',
              transition: 'height 4s ease', 
            }}
          >
          </Box>
        </Box>
      </Box>
    </>
  );
}

const GPUContent = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2, alignItems: 'center' }}>
        <Typography variant="h5">GPU Load</Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <GpuCoreComponent />
          <GpuCoreComponent />
          <GpuCoreComponent />
          <GpuCoreComponent />
        </Box>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <GpuCoreComponent />
          <GpuCoreComponent />
          <GpuCoreComponent />
          <GpuCoreComponent />
        </Box>
      </Box>
    </>
  );
}

export default GPUContent;
