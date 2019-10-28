import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import { MenuProps } from "./Menu";
import { Toolbar, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  toolbarSecondary: {
    justifyContent: "center",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

interface Props extends MenuProps {
  dispatch?: Dispatch<any>;
}

const HeaderMenu: React.FC<Props> = props => {
  let styles = useStyles(props);
  let {
    items
    // Link,
  } = props;
  return (
    <Toolbar
      component="nav"
      variant="dense"
      className={styles.toolbarSecondary}
    >
      {items.map(item => {
        return (
          <Link className={styles.toolbarLink} to={item.path} key={item.path}>
            {item.name}
          </Link>
        );
      })}
    </Toolbar>
  );
};

export default connect()(HeaderMenu);
