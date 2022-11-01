import { Check } from "heroicons-react";

/* create checkmark icons */
export function CheckMark({ text }: { text: string; }): JSX.Element {
  return (
    <div className="flex py-4">
      <div className="w-8 mr-5 text-green-600">
        <Check />
      </div>
      {text}
    </div>
  );
}
