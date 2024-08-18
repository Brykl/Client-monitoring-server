import { Box, Typography } from '@mui/material';
import DenseAppBar from '../component_main/appbar';
import InfoServerData from '../component_main/dataserver';

export default function MainSpace() {
    const dataFromServer = InfoServerData();
    console.log(dataFromServer);

    if (!dataFromServer) {
        return <Typography>Loading data...</Typography>; // Пока данные загружаются
    }

    return (
        <Box sx={{ height: '100vh', width: '100vw', bgcolor: '#322787' }}>
            <Box sx={{ maxHeight: '10%' }}>
                <DenseAppBar />
            </Box>
            <Box sx={{
                height: '90%',
                width: '100%',
                display: 'flex',
                color: 'white',
            }}>
                <Box sx={{
                    bgcolor: '#5449a3', 
                    height: '90%',
                    width: '25%', 
                    marginTop: '3%', 
                    marginLeft: '3%', 
                    border: '1px black solid',
                    display: 'flex', 
                    flexDirection: 'column', 
                    paddingTop: '1%'
                }}>
                    <Typography variant="h6" sx={{ marginLeft: '4%' }}>Server information:</Typography>
                    <Box sx={{ marginLeft: '6%' }}>
                        <Typography>Platform: {dataFromServer.platform}</Typography>
                        <Typography>Processor: {dataFromServer.procInfo[0]?.model}</Typography>
                        <Typography>Architecture: {dataFromServer.arch}</Typography>
                        <Typography>Main directory: {dataFromServer.homDir}</Typography>
                        <Typography>Memory: {dataFromServer.allMem} GB</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingTop: '1%',
                    bgcolor: '#5449a3', 
                    height: '90%',
                    width: '65%', 
                    marginTop: '3%', 
                    marginLeft: '3%', 
                    border: '1px black solid',
                }}></Box>
            </Box>
        </Box>
    );
}

