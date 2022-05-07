import React, { FC } from "react";

type Props = {
  message?: string;
};

export const FieldError: FC<Props> = (props) => {
  if (!props.message) return null;

  return (
    <>
      <p className="FieldError mb-2 text-xs text-red-500">{props.message}</p>

      <style jsx>{`
        .FieldError {
        }
      `}</style>
    </>
  );
};
