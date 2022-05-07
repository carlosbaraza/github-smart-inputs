import classNames from "classnames";
import React, { FC, useRef } from "react";
import { useFormContext, useController } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { Tooltip } from "../../../../../components/Tooltip";
import { FieldError } from "./FieldError";

type Props = {
  index: number;
};

export const FieldBuilderWrapper: FC<Props> = (props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const note = useController({ control, name: `fields.${props.index}.note` });
  const noteRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <div className="FieldBuilderWrapper">
        <label className="flex flex-col">
          <input
            className={classNames(
              "mb-2 block w-full rounded bg-transparent text-sm font-medium text-gray-900 focus:outline-dashed focus:outline-offset-4 focus:outline-gray-500 dark:text-gray-300",
              {
                "border-2 border-red-500": errors?.fields?.[props.index]?.name,
              }
            )}
            {...register(`fields.${props.index}.name`, { required: true })}
          />
          <FieldError message={errors?.fields?.[props.index]?.name?.message} />

          <input
            className={classNames(
              "mb-2 block w-full rounded bg-transparent font-mono text-sm text-gray-500 focus:outline-dashed focus:outline-offset-4 focus:outline-gray-500",
              {
                "border-2 border-red-500":
                  errors?.fields?.[props.index]?.output_id,
              }
            )}
            {...register(`fields.${props.index}.output_id`, { required: true })}
          />
          <FieldError
            message={errors?.fields?.[props.index]?.output_id?.message}
          />

          {note.field.value ? (
            <div>
              <TextareaAutosize
                className={classNames(
                  "mb-2 w-full resize-none rounded bg-transparent text-xs font-normal text-gray-500 focus:outline-dashed focus:outline-offset-4 focus:outline-gray-500",
                  {
                    "border-2 border-red-500":
                      errors?.fields?.[props.index]?.note,
                  }
                )}
                ref={(e) => {
                  note.field.ref(e);
                  (noteRef as any).current = e;
                }}
                onBlur={note.field.onBlur}
                onChange={note.field.onChange}
                autoFocus={false}
                value={note.field.value}
              />
            </div>
          ) : (
            <Tooltip label="Add note">
              <button
                onClick={() => {
                  note.field.onChange(
                    "Remove this note if don't need it. You can add it back later too."
                  );
                  setTimeout(() => {
                    noteRef?.current?.focus();
                  }, 0);
                }}
                className="relative top-[-2px] -mt-[6px] h-[6px] w-full rounded bg-transparent hover:bg-gray-300  dark:hover:bg-gray-700"
              />
            </Tooltip>
          )}
          <FieldError message={errors?.fields?.[props.index]?.note?.message} />

          {props.children}
        </label>
      </div>

      <style jsx>{`
        .FieldBuilderWrapper {
        }
      `}</style>
    </>
  );
};
