import React from "react";
import {
  Container,
  Header,
  Grid,
  Item,
  StrictGridRowProps,
  Card,
  StrictGridColumnProps
} from "semantic-ui-react";
import {
  IWeek,
  IDay,
  IExcercisePercent,
  IExcercisePercentRound
} from "../../store/program/types";
import { equal } from "assert";

type Props = {
  week: IWeek;
};
const Week: React.FC<Props> = ({ week }) => {
  console.log(week);
  const renderRound: any = (round: IExcercisePercentRound, i: number) => {
    return `${round.weight}% for ${round.reps} x ${round.rounds} `;
  };

  const renderExercise: any = (exc: IExcercisePercent, i: number) => {
    console.log(exc.rounds.length)
    return (
      <Grid key={i}>
        <Grid.Row key={"title" + i}>
          <Grid.Column>
            <Header>{exc.excercise.map(e => e.name).join(" + ")}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          key={"content" + i}
          divided={true}
          stretched={false}
        >
          {exc.rounds.map((r, i) => (
            <Grid.Column key={i} width={exc.rounds.length+1 as StrictGridColumnProps["width"]}>
              <div style={{ width: 70, display: "flex" }}>
                <div
                  style={{
                    textAlign: "center",
                    flexBasis: 100,
                    margin: "auto",
                    flexDirection: "column"
                  }}
                >
                  <div
                    style={{
                      padding: 3,
                      borderColor: "black",
                      borderBottomStyle: "solid",
                      borderRightStyle: "solid",
                      borderWidth: "thin"
                    }}
                  >
                    {r.weight + "%"}
                  </div>
                  <div
                    style={{
                      padding: 3,
                      borderColor: "black",
                      borderRightStyle: "solid",
                      borderWidth: "thin"
                    }}
                  >
                    {r.reps}
                  </div>
                </div>
                <div
                  style={{
                    flexBasis: 100,
                    textAlign: "center",
                    margin: "auto"
                  }}
                >
                  {r.rounds}
                </div>
              </div>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  };

  const renderDay: any = (day: IDay, i: number) => {
    return (
      <Grid.Column key={i}>
        <Card fluid={true}>
          <Card.Content>
            <Card.Header as="h3">Day {i + 1}</Card.Header>
          </Card.Content>
          <Card.Content>
            {day.exercises.map(renderExercise)}
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  };

  return (
    <Container>
      <Header as="h2">Week description</Header>
      <Grid columns="3">{week.days.map(renderDay)}</Grid>
    </Container>
  );
};

export default Week;
