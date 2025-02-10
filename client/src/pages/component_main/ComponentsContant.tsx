import { Box } from "@mui/material";

interface ContantProps {
    barName: 'Processor'| 'Disk' | 'GPU';
}

const ComponentsContant: React.FC<ContantProps> = ({ barName })  => {
    let contantName: 'Processor'| 'Disk' | 'GPU';

    const ProcessorComponent = () => <div>Processor Component</div>;
    const DiskComponent = () => <div>Disk Component</div>;
    const GPUComponent = () => <div>GPU Component</div>;

    let componentToRender;

    switch (barName) {
        case "Processor":
                componentToRender = <ProcessorComponent/>
                break;
        case "Disk":
                componentToRender = <DiskComponent/>
                break;
        case "GPU":
                componentToRender = <GPUComponent/>
                break;
        default:
                componentToRender = null;
                break;
        
    }
    

    return (
        <>
            <Box>
                {componentToRender}
            </Box>
        </>
    )
}

export default ComponentsContant 