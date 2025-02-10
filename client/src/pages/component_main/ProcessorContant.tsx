import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



    
const ProcessorContent = () => {

    const getStartedTime = new Date();
    const formatedTime = getStartedTime.getHours() + ':' + getStartedTime.getMinutes() + ':' + getStartedTime.getSeconds();

    const [data, setData] = useState([
        { name: formatedTime, value: 0 },
    ]);
    
    useEffect(() => {
        
        console.log(formatedTime)
        const interval = setInterval(() => {
            const getNewTime = new Date();
    const formatedTime = getNewTime.getHours() + ':' + getNewTime.getMinutes() + ':' + getNewTime.getSeconds();
            setData((prevData) => [
                ...prevData,
                { name: `${formatedTime}`, value: Math.random() * 100 },
            ]);
        }, 5000);
    
        return () => clearInterval(interval); 
    }, []);

    const processorChart = (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="value" stroke="#d5c7aa" />
    <CartesianGrid  stroke="#ffff" strokeDasharray="20 20" />
    <XAxis dataKey="name" tick={{fill: '#ffff'}}/>
    <YAxis tick={{fill: '#ffff'}}/>
    <Tooltip />
  </LineChart>
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