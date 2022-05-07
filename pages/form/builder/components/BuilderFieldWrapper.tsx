import React, { FC } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import { FaCaretDown, FaCaretUp, FaTrash } from "react-icons/fa";
import { Tooltip } from "../../../../components/Tooltip";
import { FormBuilderPageForm } from "../index.page";

type Props = {
  fields: UseFieldArrayReturn<FormBuilderPageForm, "fields", "id">;
  index: number;
};

export const BuilderFieldWrapper: FC<Props> = (props) => {
  const { fields, index } = props;

  const moveUp = () => {
    if (index > 0) {
      fields.move(index, index - 1);
    }
  };

  const moveDown = () => {
    if (index < fields.fields.length - 1) {
      fields.move(index, index + 1);
    }
  };

  return (
    <>
      <div className="BuilderFieldWrapper flex space-x-2">
        <div className="flex w-5 flex-col">
          <Tooltip label="Move up">
            <button
              className="flex h-4 w-5 items-center justify-center rounded bg-gray-200 text-gray-500 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={moveUp}
            >
              <FaCaretUp />
            </button>
          </Tooltip>
          <Tooltip label="Move down">
            <button
              className="flex h-4 w-5 items-center justify-center rounded bg-gray-200 text-gray-500 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={moveDown}
            >
              <FaCaretDown />
            </button>
          </Tooltip>
          <Tooltip label="Delete field">
            <button
              className="mt-1 flex h-5 w-5 items-center justify-center rounded bg-gray-200 text-xs text-gray-500 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => fields.remove(index)}
            >
              <FaTrash />
            </button>
          </Tooltip>
        </div>
        <div className="flex-grow">{props.children}</div>
      </div>

      <style jsx>{`
        .BuilderFieldWrapper {
        }
      `}</style>
    </>
  );
};
