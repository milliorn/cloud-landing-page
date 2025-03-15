import { Check } from "heroicons-react";
import React from "react";

/* create checkmark icons */
export function CheckMark({ text }: { text: string }) {
  return (
    <div className="flex py-4">
      <div className="w-8 mr-5 text-green-600">
        <Check
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
      {text}
    </div>
  );
}
