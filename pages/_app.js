import { LanguageContextWrapper } from "../components/context.js";
import "../style/global.css";

function MyApp({ Component, pageProps }) {
  return (
  
    <LanguageContextWrapper>
      <Component {...pageProps} />
    </LanguageContextWrapper>

  );
}

export default MyApp;
