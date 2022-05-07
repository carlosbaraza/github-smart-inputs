import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props as any;

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
              if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
              } else {
                  document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
