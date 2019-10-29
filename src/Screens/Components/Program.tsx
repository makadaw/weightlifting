import React from "react";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { IWeek, IProgram } from "../../store/program/types";
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
      <Grid key={i} item xs={3}>
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
            path={match.url + "/week/:week"}
            component={weekIndexToWeek(program.weeks)}
          />
          } />
          <Route
            component={() => (
              <WeeksList program={program.weeks} pathname={location.pathname} />
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
