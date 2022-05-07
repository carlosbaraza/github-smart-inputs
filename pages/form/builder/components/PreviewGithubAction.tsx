import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

type Props = {};

export const PreviewGithubAction: FC<Props> = (props) => {
  const form = useFormContext();
  const values = form.watch();

  return (
    <>
      <div className="PreviewGithubAction overflow-x-scroll whitespace-pre rounded-2xl bg-gray-700 p-4 font-mono text-white">
        {JSON.stringify(values, null, 2)}
      </div>

      <style jsx>{`
        .PreviewGithubAction {
        }
      `}</style>
    </>
  );
};
