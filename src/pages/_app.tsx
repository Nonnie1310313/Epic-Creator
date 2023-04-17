import { Session } from "next-auth";
import "../styles/globals.css";
import "../styles/error_page.css";
import "../styles/fonts.css";
import "../styles/overview.css";
import "../styles/news.css";
import "../styles/utils/navbar.css";
import "../styles/settings.css";
import "../styles/footer.css";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";

import Layout from "../../components/layout";

interface MyAppProps extends AppProps {
  session: Session;
}

export default function MyApp({ Component, session, pageProps }: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
