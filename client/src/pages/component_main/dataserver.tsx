
// import axios from 'axios'
// import { useEffect, useState } from 'react';

export default function InfoServerData () {

    // const [dataFromServer, setDataFromServer] = useState()

    // useEffect(() => {
    //     axios.get("http://127.0.0.1:3000/info")
    //       .then(response => {
    //         setDataFromServer(response.data)
    //         console.log(response.data);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, [])


    //   if (!dataFromServer) {
    //     return null;  // Или можно вернуть пустой объект: {}
    // }
    //   const dfs = dataFromServer;
      
      return {
        platform: "linux",
        arch: "x64 bit",
        allMem: "8",
        freeMem: "4.5",
        homDir: "/etc/home",
        netInfo: "192.168.1.205",
        procInfo: "Ryzen 5 5500x",
        time: "11:11",
    };
    //   return {
    //     platform: dataFromServer.plat,
    //     arch: dataFromServer.arch,
    //     allMem: dataFromServer.allMem,
    //     freeMem: dataFromServer.freeMem,
    //     homDir: dataFromServer.homDir,
    //     netInfo: dataFromServer.netInfo,
    //     procInfo: dataFromServer.procInfo,
    //     time: dataFromServer.time,
    // };
}
