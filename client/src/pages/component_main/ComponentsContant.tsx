import { Box } from "@mui/material";
import ProcessorContent from "./ProcessorContant";
import DiskContent from "./DiskContent";
import GPUContent from "./GPUContent";

interface ContantProps {
    barName: 'Processor'| 'Disk' | 'GPU';
}

const ComponentsContant: React.FC<ContantProps> = ({ barName })  => {


    let componentToRender;

    switch (barName) {
        case "Processor":
                componentToRender = <ProcessorContent />
                break;
        case "Disk":
                componentToRender = <DiskContent/>
                break;
        case "GPU":
                componentToRender = <GPUContent/>
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