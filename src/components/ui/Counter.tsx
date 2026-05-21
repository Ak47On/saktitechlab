"use client";

import CountUp from "react-countup";

export default function Counter({
  number,
  suffix,
}: {
  number: number;
  suffix?: string;
}) {
  return (
    <CountUp
      end={number}
      duration={3}
      suffix={suffix}
    />
  );
}