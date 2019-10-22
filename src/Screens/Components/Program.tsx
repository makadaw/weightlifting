import React from "react";
import { Grid, Breadcrumb, Container } from "semantic-ui-react";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { IWeek } from "../../store/program/types";
import { Route, Switch, withRouter, RouteComponentProps } from "react-router";
import Week from "./Week";
import { Link, NavLink } from "react-router-dom";

const WeeksList: React.FC<{ program: IWeek[]; pathname: string }> = ({
  program,
  pathname
}) => {
  const renderWeek = (week: IWeek, i: number) => {
    return (
      <Grid.Row columns={2} key={i}>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column>
          <Link to={`${pathname}/week/${i + 1}`}>{`Week ${i + 1}`}</Link>
        </Grid.Column>
      </Grid.Row>
    );
  };
  return <Grid divided={"vertically"}>{program.map(renderWeek)}</Grid>;
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
      <Breadcrumb>
        <Breadcrumb.Section as={() => <Link to="/program">Program</Link>} />
      </Breadcrumb>
      <Container>
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
