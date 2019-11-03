import React from "react";
import { Grid, Box, Theme, Typography, Container } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import ExerciseRound from "./ExerciseRound";
import { IProgram } from "../../store/program/types";

const styles = makeStyles((_: Theme) => ({
  dayColumn: {},
  exercises: {
    display: "flex",
    flexDirection: "column"
  },
  exercisesGrid: {
    overflow: "scroll",
    padding: 0
  }
}));
export { styles };

type Props = {
  weekId: number;
  dayId: number;
  program: IProgram;
};
const Day: React.FC<Props> = props => {
  let classes = styles(props);
  let { program, weekId, dayId } = props;
  let day = program.weeks[weekId - 1].days[dayId - 1];
  return (
    <Grid item>
      <Box className={classes.dayColumn}>
        <Typography variant="h5">{`Day ${dayId}`}</Typography>
        <Container className={classes.exercises}>
          {day.exercises.map((exc, i) => (
            <ExerciseRound key={i} exc={exc} />
          ))}
        </Container>
      </Box>
    </Grid>
  );
};

export default Day;
