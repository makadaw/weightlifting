import React from "react";
import { Card, CardContent, Typography, Box, Theme } from "@material-ui/core";
import { IExcercisePercent, IPRWeigts } from "../../store/program/types";
import makeStyles from "@material-ui/styles/makeStyles";
import { kgFromPercentWeight } from "../../store/program/functions";
import { defaultWeights } from "../../store/constants";

const styles = makeStyles((theme: Theme) => ({
  exercis: {
    margin: `${theme.spacing(2)}px 0`,
    width: "100%"
  },
  rounds: {
    display: "flex",
    flexWrap: "wrap"
  },
  roundBox: {
    display: "flex",
    margin: `${theme.spacing()}px`
  },
  roundWeghtReps: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${theme.palette.divider}`,
    padding: `0 ${theme.spacing(0.5)}px`
  },
  roundWeights: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  small: {
    fontSize: 10
  },
  roundRound: {
    margin: "auto",
    paddingLeft: `${theme.spacing(0.5)}px`
  }
}));

type Props = {
  exc: IExcercisePercent;
  maxRounds?: number;
  weights?: IPRWeigts;
};
const ExerciseRound: React.FC<Props> = props => {
  let classes = styles(props);
  // Set default snatch and clean weights
  let { exc, maxRounds = -1, weights = defaultWeights } = props;
  let rounds = maxRounds > 0 ? exc.rounds.slice(0, maxRounds) : exc.rounds;
  return (
    <Card className={classes.exercis}>
      <CardContent>
        <Typography>{exc.excercise.map(e => e.name).join(" + ")}</Typography>
        <Box className={classes.rounds}>
          {rounds.map((r, i) => (
            <Box key={i} className={classes.roundBox}>
              <Box className={classes.roundWeghtReps}>
                <Box className={classes.roundWeights}>
                  {typeof r.weight === "string" ? (
                    <Typography>{r.weight}</Typography>
                  ) : (
                    <React.Fragment>
                      <Typography>
                        {kgFromPercentWeight({
                          weights,
                          percent: r.weight as number,
                          exc: exc.excercise[0]
                        })}{" "}
                        kg
                      </Typography>
                      <Typography className={classes.small}>
                        ({r.weight})%
                      </Typography>
                    </React.Fragment>
                  )}
                </Box>

                <Typography>{r.reps}</Typography>
              </Box>
              <Typography className={classes.roundRound}>{r.rounds}</Typography>
            </Box>
          ))}
          {maxRounds > 0 && rounds.length !== exc.rounds.length && (
            <Box className={classes.roundBox}>...</Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExerciseRound;
