"use client";

import * as React from "react";
import { format, startOfDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  className?: string;
  onChange?: (date: Date) => void;
  disabled?: boolean;
  defaultDate?: Date;
};

export function DatePicker({
  className,
  onChange,
  disabled,
  defaultDate,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(defaultDate);
  const [month, setMonth] = React.useState<Date | undefined>(date);

  const today = startOfDay(new Date());
  const currentYear = today.getFullYear();

  // Define start and end months for year range dropdown
  const startMonth = new Date(currentYear, 0, 1); // January this year
  const endMonth = new Date(currentYear + 50, 11, 31); // December 50 years ahead

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} asChild>
        <Button
          disabled={disabled}
          variant="outline"
          data-empty={!date}
          className={cn(
            "data-[empty=true]:text-muted-foreground w-full text-black justify-start text-left font-normal",
            className,
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 !z-[1000000000] !pointer-events-auto">
        <div className="relative z-[10000000]">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            startMonth={startMonth}
            endMonth={endMonth}
            onMonthChange={setMonth}
            disabled={(day) => startOfDay(day) < today}
            onSelect={(selectedDate) => {
              if (selectedDate && startOfDay(selectedDate) >= today) {
                setDate(selectedDate);
                if (onChange) onChange(selectedDate);
              }
              setOpen(false);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
