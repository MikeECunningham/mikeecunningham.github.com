import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";
import Menu from "./Menu";

interface Skill {
  title: string,
  description: string[]
}

const skills: Skill[] = [
  {
    title: "Javascript",
    description: [
      "Experience with asynchronous systems using both promises and await",
    ]
  },
  {
    title: "Typescript",
    description: [
      "Type safety with the flexibility of Javascript",
    ]
  },
  {
    title: "Angular",
    description: [
      "Can build responsive single page applications",
      "Clean, comprehensible UI with Material"
    ]
  },
  {
    title: "React",
    description: [
      "Can build efficient single page applications",
      "Clean, comprehensible UI with Material"
    ]
  },
  {
    title: "Node.JS",
    description: [
      "Can build efficient backends with Express.js",
      "Proficient with npm and scripts.",
      "Familiar with package ecosystem."
    ]
  },
  {
    title: "Databases",
    description: [
      "Familiarity with MongoDB, MySQL, and PostgreSQL.",
      "Can use ORMs to safely and dynamically handle queries and migrations."
    ]
  },
  {
    title: "Docker",
    description: [
      "Can containerize backend ecyosystems for fast, reliable deployment",
    ]
  },
  {
    title: "Rust",
    description: [
      "Can create reliable cross-platform applications that are highly efficient and memory safe.",
      "Can build contention-free parallelism with confidence."
    ]
  },
  // {
  //   title: "",
  //   description: [
  //     "",
  //   ]
  // }
]

const Skills = () => {
  let [skillsState, setSkillsState] = useState(0);

  return (
    <Stack spacing={10} style={{padding:50}}>
      <h1 style={{textAlign: "center", fontSize: "xxx-large",}}>My Skills</h1>
      <Divider></Divider>
      <div>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
          { skills.map( skill =>
            <Grid key={skill.title} item xs={1} sm={1} md={1}>
              <Card elevation={10} style={{display:"flex", flexDirection:"column", textAlign:"center", height:"100%"}}>
                <CardHeader title={skill.title} />
                <CardContent>
                  <List sx = {{ listStyleType: 'disc', pl: 5, }} >
                    { skill.description.map( taskpoint => <ListItem sx = {{display: "list-item"}} style={{padding:0,}}><ListItemText primary={taskpoint} /></ListItem> ) }
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ) }
        </Grid>
      </div>
    </Stack>
  );
}

export default Skills