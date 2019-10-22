import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Container, CssBaseline, makeStyles, Theme, createStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { display } from "@material-ui/system";

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

const HeaderMenu: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          News
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  )
}

const styles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // padding: spacing.unit,
    // backgroundColor: palette.background.default,
    // color: palette.primary.main,
  },
  content: {
    flexGrow: 1,
  },
});

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
         {/* Your Website */}
       {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const classes = styles()
  const { pathname } = props.location;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderMenu/>
      <Container className={classes.content}>
        {props.children}
      </Container>
      <Copyright/>
    </div>

    // <Sidebar.Pushable as={Segment}>
    //   {/* <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} /> */}

    //   <Sidebar.Pusher style={{ minHeight: "100vh" }}>
    //     {/* Header */}
    //     <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
    //     {/* Render children pages */}
    //     <div style={{ paddingBottom: 60 }}>{props.children}</div>
    //     <Segment
    //       inverted
    //       vertical
    //       style={{ position: "absolute", bottom: 0, width: "100%" }}
    //     >
    //       <Container textAlign="center">
    //         <p>
    //           Powered with <Icon name="heart" /> by Gatsby 2.0. Olekey
    //         </p>
    //       </Container>
    //     </Segment>
    //   </Sidebar.Pusher>
    // </Sidebar.Pushable>
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
