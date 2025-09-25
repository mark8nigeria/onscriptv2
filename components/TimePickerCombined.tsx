"use client";

import React, { useRef } from "react";
import { TimePickerInput } from "@/components/TimePicker";
import { TimePeriodSelect } from "@/components/TimePeriodSelect";
import { Period } from "@/utils/functions/time-picker";

type TimePickerCombinedProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  period: Period;
  setPeriod: (period: Period) => void;
  disabled?: boolean;
};

export default function TimePickerCombined({
  date,
  setDate,
  period,
  setPeriod,
  disabled,
}: TimePickerCombinedProps) {
  const minuteRef = useRef<HTMLInputElement>(null);
  const hourRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const periodRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex items-center gap-2">
      <div className="grid gap-1">
        <TimePickerInput
          picker="12hours"
          period={period}
          date={date}
          setDate={setDate}
          ref={hourRef}
          disabled={disabled}
          onRightFocus={() => minuteRef.current?.focus()}
          className="text-black"
        />
      </div>
      <p className="text-black">:</p>
      <div className="grid gap-1">
        <TimePickerInput
          picker="minutes"
          id="minutes12"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
          className="text-black"
          disabled={disabled}
        />
      </div>
      <p className="text-black">:</p>
      <div className="grid gap-1">
        <TimePickerInput
          picker="seconds"
          id="seconds12"
          date={date}
          setDate={setDate}
          ref={secondRef}
          onLeftFocus={() => minuteRef.current?.focus()}
          onRightFocus={() => periodRef.current?.focus()}
          className="text-black"
          disabled={disabled}
        />
      </div>
      <p className="text-black">:</p>
      <div className="grid gap-1">
        <TimePeriodSelect
          period={period}
          setPeriod={setPeriod}
          date={date}
          setDate={setDate}
          ref={periodRef}
          onLeftFocus={() => secondRef.current?.focus()}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
