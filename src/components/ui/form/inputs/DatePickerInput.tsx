"use client";

// Hooks / Packages
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

// Utils
import { cn } from "@/lib/utils";

// Types
import { FieldProps } from "formik";

export default function DatepickerInput({
    field,
    form,
   
}: FieldProps) {
    const { name, value } = field;
    const { setFieldValue } = form;

    const handleDateChange = (date: Date | undefined) => {
        setFieldValue(name, date);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {value ? format(new Date(value), "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value ? new Date(value) : undefined}
                    onSelect={handleDateChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
