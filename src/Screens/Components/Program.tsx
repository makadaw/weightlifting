import React from "react";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { IWeek } from "../../store/program/types";
import { Route, Switch, withRouter, RouteComponentProps } from "react-router";
import Week from "./Week";
import { Link } from "react-router-dom";
import { Container, Grid, Breadcrumbs } from "@material-ui/core";

const WeeksList: React.FC<{ program: IWeek[]; pathname: string }> = ({
  program,
  pathname
}) => {
  const renderWeek = (week: IWeek, i: number) => {
    return (
      <Grid item xs={3}>
        <Link to={`${pathname}/week/${i + 1}`}>{`Week ${i + 1}`}</Link>
      </Grid>
    );
  };
  return <Grid>{program.map(renderWeek)}</Grid>;
};

function weekIndexToWeek(weeks: IWeek[]) {
  return ({
    match: {
      params: { week }
    }
  }: {
    match: { params: { week: number } };
  }) => <Week week={weeks[week - 1]} />;
}

interface Props extends RouteComponentProps<{}> {
  program: IWeek[];
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
            path={match.url + "/week/:week"}
            component={weekIndexToWeek(program)}
          />
          } />
          <Route
            component={() => (
              <WeeksList program={program} pathname={location.pathname} />
            )}
          />
        </Switch>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootState, _: any) => {
  return {
    program: state.program.weeks
  };
};
export default withRouter(connect(mapStateToProps)(Program));
