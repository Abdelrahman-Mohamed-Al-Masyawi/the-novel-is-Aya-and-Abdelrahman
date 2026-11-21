import { useEffect, useState } from "react";

const DAY = 86400000;

/** يحسب الفرق بالأيام/الساعات/الدقائق بين الآن وتاريخ معين. */
export default function useCountdown(targetISO) {
  const target = new Date(targetISO).getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  const diff = target - now;
  const abs = Math.abs(diff);

  return {
    isPast: diff < 0,
    days: Math.floor(abs / DAY),
    hours: Math.floor((abs % DAY) / 3600000),
    minutes: Math.floor((abs % 3600000) / 60000),
  };
}
