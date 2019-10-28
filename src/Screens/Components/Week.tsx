import React from "react";
import { IWeek, IDay } from "../../store/program/types";
import {
  Container,
  Grid,
  Typography,
  Theme,
  Box,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ExerciseRound from "./ExerciseRound";

const styles = makeStyles((_: Theme) => ({
  dayColumn: {},
  exercises: {
    display: "flex",
    flexDirection: "column"
  }
}));

type Props = {
  week: IWeek;
};
const Week: React.FC<Props> = props => {
  let classes = styles(props);
  let { week } = props;

  const renderDay: any = (day: IDay, i: number) => {
    return (
      <Grid item key={i}>
        <Box className={classes.dayColumn}>
          <Typography variant="h5">{`Day ${i + 1}`}</Typography>
          <Container className={classes.exercises}>
            {day.exercises.map((exc, i) => (
              <ExerciseRound key={i} exc={exc} />
            ))}
          </Container>
        </Box>
      </Grid>
    );
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h2" component="h2">
        Week details
      </Typography>
      <Divider />
      <Grid container wrap="nowrap">
        {week.days.map(renderDay)}
      </Grid>
    </Container>
  );
};

export default Week;
