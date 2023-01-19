import React from "react";

export default function Button({ children, version, type, isDisabled }) {
  return (
    <div>
      <Button type={type} isDisabled={isDisabled} className={`btn`}>
        {children}
      </Button>
    </div>
  );j
}
