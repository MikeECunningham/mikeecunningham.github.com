import React from "react";
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface MenuProps { buttons: [string, string][]; };

const Menu = (props: MenuProps) => {
  let [menuState, setMenuState] = useState(0);
  let navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" elevation={10} style={{background:'#ab6901'}}>
        <Toolbar>
          <Container style={{ display: 'flex', justifyContent: 'center',}}>
            {props.buttons.map(([title, url]) => <Button key={title} onClick={() => navigate(url)} style={{ paddingRight:25, paddingLeft:25, fontSize:"calc(8px + 0.390625vw)", fontWeight:"bold"}}>{title}</Button>)}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Menu