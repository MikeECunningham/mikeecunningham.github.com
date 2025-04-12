import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Menu from "./Menu";

interface WorkPlace {
  title: string,
  employer: string,
  dates: string,
  description: string[],
}

const workplaces: WorkPlace[] = [
  {
    title: "Software Developer",
    employer: "Georgian Bay Turtle Hospital",
    dates: "September 2020 - August 2021",
    description: [
      "Developed tracking app with javascript and firebase to help researchers in the field rapidly respond to wildlife events",
      "Created a researcher dispatch system to alert on-duty researchers to nearby emergencies regarding endangered animals"
    ]
  },
  {
    title: "Fullstack Developer",
    employer: "The Land Between",
    dates: "November 2019 - March 2021",
    description: [
      "Developed mobile citizen science app to crowdsource the reporting of endangered turtle sightings across Ontario to researchers",
      "Used typescript and Cordova to build a cross-platform Angular frontend for a clean, responsive user experience",
      "Built REST API's for the backend with express.js",
      "Employed front and back-end tests with selenium and chai/mocha"
    ]
  },
  {
    title: "QA Tester",
    employer: "AppZero",
    dates: "July 2011 - September 2011",
    description: [
      "Performed Q/A testing of encapsulation software to ensure correct and reliable project functionality",
      "Prepared and reset test machine OS/software for general use by developers"
    ]
  },
]

const WorkExperience = () => {
  let [workExperienceState, setWorkExperienceState] = useState(0);

  return (
    <Stack spacing={10} style={{padding:50}}>
      <div>
        <h1 style={{textAlign: "center", fontSize: "xxx-large"}}>Places I've Worked</h1>
      </div>
      <Divider></Divider>
      <div>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
          { workplaces.map( workplace =>
            <Grid key={workplace.title} item xs={1} sm={1} md={1}>
              <Card elevation={10} style={{display:"flex", flexDirection:"column", textAlign:"center", height:"100%"}}>
                <CardHeader style={{padding:10,}} title={workplace.title} subheader={<div>{workplace.employer}<br></br>{workplace.dates}</div>}/>
                <CardContent style={{padding:15,}}>
                  <List sx = {{ listStyleType: 'disc', pl: 5, }} >
                    {workplace.description.map( taskpoint => <ListItem sx = {{display: "list-item"}} style={{padding:0,}}><ListItemText primary={taskpoint} /></ListItem> )}
                  </List>
                </CardContent>
              </Card>
            </Grid> ) }

        </Grid>
      </div>
    </Stack>
  );
}

export default WorkExperience