import React from "react";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { IWeek, IProgram } from "../../store/program/types";
import { Route, Switch, withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Container, Grid, Breadcrumbs } from "@material-ui/core";
import Week from "./Week";
import Day from "./Day";

const WeeksList: React.FC<{
  weeks: IWeek[];
  linkTo: (to: string) => string;
}> = ({ weeks, linkTo }) => {
  const renderWeek = (_: IWeek, i: number) => {
    return (
      <Grid key={i} item xs={3}>
        <Link to={linkTo(`/week/${i + 1}`)}>{`Week ${i + 1}`}</Link>
      </Grid>
    );
  };
  return <Grid>{weeks.map(renderWeek)}</Grid>;
};

function linkTo(basepath: string): (to: string) => string {
  return (to: string) => `${basepath}${to}`;
}

function withParams<P>(
  program: IProgram,
  WrappedComponent: React.ComponentType<P>
) {
  return ({
    location: { pathname },
    match: { params }
  }: {
    location: { pathname: string };
    match: { params: P };
  }) => (
    <WrappedComponent
      {...{ program, ...{ linkTo: linkTo(pathname) }, ...params }}
    />
  );
}

interface Props extends RouteComponentProps<{}> {
  program: IProgram;
}
const Program: React.FC<Props> = ({ program, match, location }) => {
  return (
    <React.Fragment>
      <Breadcrumbs>
        <Link to="/program">Program</Link>
      </Breadcrumbs>
      <Container maxWidth={false}>
        <Switch>
          <Route
            path={match.url + "/week/:weekId/day/:dayId"}
            component={withParams(program, Day)}
          />
          <Route
            exact={true}
            path={match.url + "/week/:weekId"}
            component={withParams(program, Week)}
          />
          } />
          <Route
            component={() => (
              <WeeksList
                weeks={program.weeks}
                linkTo={linkTo(location.pathname)}
              />
            )}
          />
        </Switch>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootState, _: any) => {
  return {
    // Select first program by default
    program: state.program.programs[0]
  };
};
export default withRouter(connect(mapStateToProps)(Program));
