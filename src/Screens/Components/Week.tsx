import React from "react";
import { IDay, IProgram } from "../../store/program/types";
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider
} from "@material-ui/core";
import ExerciseRound from "./ExerciseRound";
import { Link } from "react-router-dom";
import { styles as dayStyles } from "./Day";

type Props = {
  program: IProgram;
  weekId: number;
};
const Week: React.FC<Props> = props => {
  let classes = dayStyles(props);
  let { program, weekId } = props;
  let week = program.weeks[weekId - 1];

  const renderDay: any = (day: IDay, i: number) => {
    return (
      <Grid item key={i}>
        <Box className={classes.dayColumn}>
          <Typography variant="h5">
            {" "}
            <Link to={`${weekId}/day/${i + 1}`}>{`Day ${i + 1}`}</Link>
          </Typography>
          <Container className={classes.exercises}>
            {day.exercises.map((exc, i) => (
              <ExerciseRound key={i} exc={exc} maxRounds={3} />
            ))}
          </Container>
        </Box>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h4">{`Week ${weekId}`}</Typography>
      <Divider />
      <Grid
        container
        wrap="nowrap"
        spacing={0}
        className={classes.exercisesGrid}
      >
        {week.days.map(renderDay)}
      </Grid>
    </React.Fragment>
  );
};

export default Week;
