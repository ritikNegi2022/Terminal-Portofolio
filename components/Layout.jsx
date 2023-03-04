import { useTheme } from "@/utils/themeProvider";

const Layout = ({ children, onClick }) => {
  const { theme } = useTheme();
  return (
    <div

      className="layoutContainer"
      onClick={onClick}
      style={{ color: theme.foreground }}
    >
      <main
        className="mainContainer"
        style={{ background: theme.background }}
      >
        {children}
      </main>
    </div>
  );
};
export default Layout;
