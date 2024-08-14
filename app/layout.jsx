import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "promptopia",
  description: "Here is the best place to discover and share AI prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
