import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { DarkModeSwitcher } from "../../../components/DarkModeSwitcher";
import { Layout } from "../../../components/Layout";
import { Button } from "../components/Button";
import { Input } from "../builder/components/fields/Input/Input";

const FormPage: NextPage = () => {
  const router = useRouter();
  const formId = router.query.formId as string;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mx-auto max-w-3xl py-5">
          <h1 className="mb-2 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Approve workflow
          </h1>
          <Input />
          <Button>Hello</Button>
        </div>
      </Layout>
    </>
  );
};

export default FormPage;
