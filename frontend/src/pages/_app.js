import "@/styles/globals.css";
import UserProvider from "../context/UserProvider";
import TransactionProvider from "@/context/TransactionContext";
import { StepProvider } from "@/context/Stepcontext";
import { ToastContainer } from "react-toastify"; ///
import "react-toastify/dist/ReactToastify.css"; ///
import { ThemeProvider } from "@/context/ThemeProvider";
import CategoryProvider from "@/context/CategoryProvider";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <StepProvider>
          <CategoryProvider>
            <TransactionProvider>
              <Component {...pageProps} />
              <ToastContainer />
            </TransactionProvider>
          </CategoryProvider>
        </StepProvider>
      </ThemeProvider>
    </UserProvider>
  );
} ///////////
