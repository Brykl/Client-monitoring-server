import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AreaChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, Legend, ResponsiveContainer } from 'recharts';



    
const ProcessorContent = () => {

    const getStartedTime = new Date();
    const formatedTime = getStartedTime.getHours() + ':' + (getStartedTime.getMinutes() < 10 ? "0" + getStartedTime.getMinutes(): getStartedTime.getMinutes()) + ':' + (getStartedTime.getSeconds() < 10 ? "0" + getStartedTime.getSeconds(): getStartedTime.getSeconds());

    const [data, setData] = useState([
        { time: formatedTime, load: 0 },
    ]);
    
    useEffect(() => {
        
        console.log(formatedTime)
        const interval = setInterval(() => {
            const getNewTime = new Date();
    const formatedTime = getNewTime.getHours() + ':' + (getNewTime.getMinutes() < 10 ? "0" + getNewTime.getMinutes(): getNewTime.getMinutes()) + ':' + (getNewTime.getSeconds() < 10 ? "0" + getNewTime.getSeconds(): getNewTime.getSeconds());
            setData((prevData) => [
                ...prevData,
                { time: `${formatedTime}`, load: Math.random() * 100 },
            ]);
        }, 3000);
    
        return () => clearInterval(interval); 
    }, []);

    const processorChart = (
        <AreaChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="load" stroke="#d8ccb5" fill="#d8ccb5" />
    </AreaChart>
    )
    
    return (
        <>
        <Box sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 4}}>
            <Box>
                {processorChart}
            </Box>
        </Box>
        </>
    )
} 

export default ProcessorContent;