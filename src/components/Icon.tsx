import React from "react";
import { IconType } from "react-icons";

// react-icons@5.4.0 type compatibility workaround for React 19
export function Icon({ icon: I }: { icon: IconType }) {
  const Component = I as unknown as React.FC;
  return <Component />;
}
