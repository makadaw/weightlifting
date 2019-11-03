import React from "react";
import {
  Typography,
  Container,
  CssBaseline,
  makeStyles
} from "@material-ui/core";
import HeaderMenu from "./HeaderMenu";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home" },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" }
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const styles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
    // padding: spacing.unit,
    // backgroundColor: palette.background.default,
    // color: palette.primary.main,
  },
  content: {
    flexGrow: 1,
    width: "100"
  }
});

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Powered by React and Materail Design "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const classes = styles();
  const { pathname } = props.location;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth={"md"}>
        <HeaderMenu items={menuItems} pathname={pathname} />
      </Container>

      <Container maxWidth={false} className={classes.content}>
        {props.children}
      </Container>
      <Copyright />
    </div>
  );
};

export default Layout;
export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
