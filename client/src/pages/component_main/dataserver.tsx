import { useEffect, useState } from "react";
import DataFromServer from "../../services/ServerInfo/DataAboutServer";

export default function InfoServerData() {
  const [serverInfo, setServerInfo] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await DataFromServer();
      setServerInfo(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(serverInfo);
  }, [serverInfo]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime =
        now.getHours() +
        ":" +
        String(now.getMinutes()).padStart(2, "0") +
        ":" +
        String(now.getSeconds()).padStart(2, "0");

      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval); // Очищаем таймер при размонтировании
  }, []);

  if (!serverInfo) return null; // Проверка перенесена после объявления стейтов

  return {
    platform: serverInfo?.data?.platform,
    arch: serverInfo?.data?.arch,
    allMem: (serverInfo?.data?.memory?.total / 1024 / 1024 / 1024).toFixed(2),
    freeMem: (serverInfo?.data?.memory?.free / 1024 / 1024 / 1024).toFixed(2),
    homDir: serverInfo?.data?.maindir,
    netInfo: serverInfo?.data?.network?.address,
    procInfo: serverInfo?.data?.cpu?.[0]?.model, // Добавил `?.[]`, чтобы избежать ошибки, если `cpu` нет
    time: currentTime, // Теперь обновляется корректно
  };
}
