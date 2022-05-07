import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: FC<Props> = (props) => {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className="Button mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {props.children}
      </button>

      <style jsx>{`
        .Button {
        }
      `}</style>
    </>
  );
};
