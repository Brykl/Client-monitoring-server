import { Box } from "@mui/material";
import ProcessorContent from "./ProcessorContant";

interface ContantProps {
    barName: 'Processor'| 'Disk' | 'GPU';
}

const ComponentsContant: React.FC<ContantProps> = ({ barName })  => {
    let contantName: 'Processor'| 'Disk' | 'GPU';

    const DiskComponent = () => <div>Disk Component</div>;
    const GPUComponent = () => <div>GPU Component</div>;

    let componentToRender;

    switch (barName) {
        case "Processor":
                componentToRender = <ProcessorContent />
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