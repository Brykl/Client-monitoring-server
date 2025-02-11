import axios from "axios";

const DataFromServer = async () => {
    try {
        const response = await axios.get("http://localhost:8080/server/info");
        return response.data;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export default DataFromServer;