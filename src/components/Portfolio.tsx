import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import React from "react";
import { useState } from "react";
import Menu from "./Menu";

interface Project {
  title: string,
  source: [string, string],
  description: string[],
  labels: string[]
}

const projects: Project[] = [
  {
    title: "Rust Algotrader",
    source: ["https://github.com/MikeECunningham/rust-trader-public", "Github"],
    description: [
      "A Rust project for automated, low-latency execution of trades across multiple cryptocurrency exchanges.",
      "Built from the ground up with modelling, analysis, and strategy components implemented.",
    ],
    labels: [ "Rust" ]
  },
]

const Portfolio = () => {
  let [portfolioState, setPortfolioState] = useState(0);

  return (
    <Stack spacing={10} style={{padding:50}}>
    <h1 style={{textAlign: "center", fontSize: "xxx-large",}}>My Projects</h1>
    <Divider></Divider>
    <div>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
        { projects.map( project =>
          <Grid key={project.title} item xs={1} sm={1} md={1}>
            <Card elevation={10} style={{display:"flex", flexDirection:"column", textAlign:"center", height:"100%"}}>
              <CardHeader title={project.title} subheader={<div>Source code: <Link href={project.source[0]}>{project.source[1]}</Link></div>}/>
              <CardContent>
                <List sx = {{ listStyleType: 'disc', pl: 5, }} >
                  { project.description.map( taskpoint => <ListItem sx = {{display: "list-item"}} style={{padding:0,}}><ListItemText primary={taskpoint} /></ListItem> ) }
                </List>
              </CardContent>
              <CardActions>
                { project.labels.map( label => <Chip label={label} /> ) }
              </CardActions>
            </Card>
          </Grid>
        ) }
      </Grid>
    </div>
  </Stack>
  );
}

export default Portfolio