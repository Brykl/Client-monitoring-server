import { Box } from "@mui/material";
import ProcessorContent from "./ProcessorContant";
import DiskContent from "./DiskContent";

interface ContantProps {
    barName: 'Processor'| 'Disk' | 'GPU';
}

const ComponentsContant: React.FC<ContantProps> = ({ barName })  => {

    const GPUComponent = () => <div>GPU Component</div>;

    let componentToRender;

    switch (barName) {
        case "Processor":
                componentToRender = <ProcessorContent />
                break;
        case "Disk":
                componentToRender = <DiskContent/>
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