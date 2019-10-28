import React from "react";
import { Card, CardContent, Typography, Box, Theme } from "@material-ui/core";
import { IExcercisePercent } from "../../store/program/types";
import makeStyles from "@material-ui/styles/makeStyles";

const styles = makeStyles((theme: Theme) => ({
  exercis: {
    margin: `${theme.spacing(2)}px 0`,
    width: "100%"
  },
  rounds: {
    display: "flex"
  },
  roundBox: {
    display: "flex",
    margin: `0 ${theme.spacing()}px`
  },
  roundWeghtReps: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${theme.palette.divider}`,
    padding: `0 ${theme.spacing(0.5)}px`
  },
  bottomBorder: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  roundRound: {
    margin: "auto",
    paddingLeft: `${theme.spacing(0.5)}px`
  }
}));

type Props = {
  exc: IExcercisePercent;
};
const ExerciseRound: React.FC<Props> = props => {
  let classes = styles(props);
  let { exc } = props;
  return (
    <Card className={classes.exercis}>
      <CardContent>
        <Typography>{exc.excercise.map(e => e.name).join(" + ")}</Typography>
        <Box className={classes.rounds}>
          {exc.rounds.map((r, i) => (
            <Box key={i} className={classes.roundBox}>
              <Box className={classes.roundWeghtReps}>
                <Typography className={classes.bottomBorder}>
                  {typeof r.weight === "string" ? r.weight : r.weight + "%"}
                </Typography>
                <Typography>{r.reps}</Typography>
              </Box>
              <Typography className={classes.roundRound}>{r.rounds}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExerciseRound;
