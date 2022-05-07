import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { FieldBuilderWrapper } from "../FieldBuilderWrapper";

type Props = {
  index: number;
};

export const InputBuilder: FC<Props> = (props) => {
  const { register } = useFormContext();

  return (
    <>
      <FieldBuilderWrapper index={props.index}>
        <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
          {...register(`fields.${props.index}.placeholder`)}
        />
      </FieldBuilderWrapper>

      <style jsx>{`
        .InputBuilder {
        }
      `}</style>
    </>
  );
};
