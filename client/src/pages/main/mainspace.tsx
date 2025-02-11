import { Box, Typography } from '@mui/material';
import DenseAppBar from '../component_main/appbar';
import InfoServerData from '../component_main/dataserver';
import '../../css/mainPage.css'
import ComponentBar from '../component_main/componetsBar';
import { useEffect, useState } from 'react';
import ComponentsContant from '../component_main/ComponentsContant';

type barStatusType = "Processor" | "Disk" | "GPU"

export default function MainSpace() {
    const [barStatus, setBarStatus] = useState<barStatusType>("Processor")
    const dataFromServer = InfoServerData();
    console.log(dataFromServer);

    useEffect (() => {

    }, )


    if (!dataFromServer) {
        return <Typography>Loading data...</Typography>; // Пока данные загружаются
    }

    return (
        <Box sx={{ height: '100vh', width: '100vw', bgcolor: '#f6eedb' }}>
            <Box sx={{ maxHeight: '10%' }}>
                <DenseAppBar />
            </Box>
            <Box sx={{
                height: '90%',
                width: '100%',
                display: 'flex',
                color: "#e6e3e3",
            }}>
                <Box sx={{
                    bgcolor: '#d5c7aa', 
                    height: '90%',
                    width: '25%', 
                    marginTop: '3%', 
                    marginLeft: '3%', 
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    paddingTop: '1%'
                }}>
                   <Box sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant="h6" sx={{ fontSize: '25px', color: '#596146'}}>Server information:</Typography></Box> 
                    <Box sx={{ marginLeft: '6%', marginRight: '6%', marginTop: '6%'
                        , display: 'flex', flexDirection: 'column' }}>
                        <Box>
                            <Typography className='text-card' sx={{ fontSize: '20px'}}>Platform:</Typography>
                            <Typography className='text-information'> {dataFromServer.platform} </Typography> 
                        </Box>
                                <Typography className='text-card' sx={{ fontSize: '20px'}}>Processor:</Typography> 
                                <Typography className='text-information'> {dataFromServer.procInfo} </Typography>
                        <Box>
                            <Typography className='text-card'sx={{ fontSize: '20px'}}>Architecture:</Typography> 
                            <Typography className='text-information'> {dataFromServer.arch} </Typography>
                        </Box>
                        <Box>
                            <Typography className='text-card' sx={{ fontSize: '20px'}}>Main directory:</Typography> 
                            <Typography className='text-information'> {dataFromServer.homDir} </Typography>
                        </Box>
                        <Box>
                            <Typography className='text-card' sx={{ fontSize: '20px'}}>Memory:</Typography>
                            <Typography className='text-information'> {dataFromServer.allMem} GB </Typography> 
                        </Box>
                        <Box>
                            <Typography className='text-card' sx={{ fontSize: '20px'}}>Server's Time:</Typography>
                            <Typography className='text-information'> {dataFromServer.time} </Typography> 
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    bgcolor: '#8e9b6d', 
                    height: '90%',
                    width: '65%', 
                    marginTop: '3%', 
                    marginLeft: '3%', 
                    border: '1px solid #E0E0E0',
                    borderRadius: '12px',
                }}>
                    <Box sx={{
                        height: '10%', width: '100%', marginTop: 0,
                        borderRadius: '12px 12px 0 0',
                        display: 'flex', justifyContent: 'space-between'
                    }}>
                            <ComponentBar status={barStatus == "Processor" ? true : false} content='Processor'
                            onClick={ () => setBarStatus("Processor")}
                            />
                            <ComponentBar
                            onClick={ () => setBarStatus("Disk")}
                            status={barStatus == "Disk" ? true : false} content='Disk'/>
                            <ComponentBar
                            onClick={ () => setBarStatus("GPU")}
                            status={barStatus == "GPU" ? true : false} content='GPU' />
                    </Box>
                    <ComponentsContant barName={barStatus}/>
                </Box>
            </Box>
        </Box>
    );
}

