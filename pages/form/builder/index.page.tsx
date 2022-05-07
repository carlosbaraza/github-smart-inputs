import { zodResolver } from "@hookform/resolvers/zod";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { z } from "zod";
import { Layout } from "../../../components/Layout";
import { Button } from "../components/Button";
import { BuilderFieldWrapper } from "./components/BuilderFieldWrapper";
import { formChoiceSchema } from "./components/fields/Choice/schema";
import { InputBuilder } from "./components/fields/Input/InputBuilder";
import { formInputSchema } from "./components/fields/Input/schema";
import { ShaChoice } from "./components/fields/ShaChoice/ShaChoice";
import { PreviewGithubAction } from "./components/PreviewGithubAction";

const formSchema = z.object({
  name: z.string(),
  fields: z.array(formInputSchema.or(formChoiceSchema)),
});

export type FormBuilderPageForm = z.infer<typeof formSchema>;

const FormBuilderPage: NextPage = () => {
  const router = useRouter();
  const formId = router.query.formId as string;

  const form = useForm<FormBuilderPageForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Form title, click to change me",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = form;

  const fields = useFieldArray({
    control,
    name: "fields",
  });

  const onSubmit: SubmitHandler<FormBuilderPageForm> = (data) =>
    console.log(data);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FormProvider {...form}>
          <div className="flex flex-col space-y-10 py-5 lg:flex-row lg:space-y-0 lg:space-x-10">
            <form
              className="flex max-w-3xl flex-grow flex-col space-y-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="mb-2 inline-block rounded bg-transparent text-3xl font-extrabold tracking-tight text-gray-900 focus:outline-dashed focus:outline-offset-4 focus:outline-gray-500 dark:text-white"
                {...register("name")}
              />

              {fields.fields.map((field, index) => {
                if (field.type === "input") {
                  return (
                    <BuilderFieldWrapper fields={fields} index={index}>
                      <InputBuilder key={field.id} index={index} />
                    </BuilderFieldWrapper>
                  );
                } else if (field.type === "choice") {
                  return null;
                }
              })}

              <ShaChoice />

              <div className="flex items-start">
                <Button
                  onClick={() =>
                    fields.append({
                      type: "input",
                      output_id: "github_output_id",
                      name: "Label (change me)",
                      placeholder: "Placeholder (change me)",
                      note: "Remove this note if don't need it. You can add it back later too.",
                    })
                  }
                >
                  <span className="flex items-center space-x-2">
                    <span>Add field</span>
                    <FaPlusCircle />
                  </span>
                </Button>
              </div>
            </form>

            <div className="flex-1 lg:max-w-[50%]">
              <PreviewGithubAction />
            </div>
          </div>
        </FormProvider>
      </Layout>
    </>
  );
};

export default FormBuilderPage;
