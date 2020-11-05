import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import menu from '../../assets/images/menu.svg';

import "./styles.css";
import styles from "./styles";
import logo from "../../assets/images/rocket.svg";
import apod from "../../assets/images/apod.png";
import { useLocation } from 'react-router-dom';


const {
    AppBar,
    Logo,
    GuideList,
    Guide,
    MenuIcon,
    LogoMenu,
    LogoConteiner,
    DrawerButton,
    LogoDrawer,
} = styles;

const useStyles = makeStyles({
    list: {
        width: 270,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#181818",
    },
    fullList: {
        width: 'auto',
    },
});

export default function Header(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const location = useLocation();
    console.log(location.pathname);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    }
    const items = [
        {
            path: "/universe",
            title: "Universe",
            image: "https://hypernova.vercel.app/static/media/home.47abd3ff.svg"
        },
        {
            path: "/news",
            title: "News",
            image: "https://image.flaticon.com/icons/svg/2991/2991408.svg"
        },
        {
            path: "/apod",
            image: apod,
            title: "Apod"
        },
    ]

    return (
        <AppBar >
            <LogoMenu>
                <Link to="/"><Logo src={logo}></Logo></Link>
            </LogoMenu>
            <SwipeableDrawer className={classes.drawer} anchor="left" open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose}>
                <List className={classes.list}>
                    <LogoConteiner onClick={handleDrawerClose} button key="Logo">
                        <LogoDrawer src={logo} />
                        <span>Space Hunter</span>
                    </LogoConteiner>
                    <div>
                        {
                            items.map((item) => (
                                <div >
                                    {
                                        (location.pathname.includes(item.path))
                                            ?
                                            <Link to={item.path} style={{ backgroundColor: "#FF9900" }} className="item-menu">
                                                <ListItem className="list" onClick={handleDrawerClose} button>
                                                    <img src={item.image} />
                                                    {item.title}
                                                </ListItem>
                                            </Link>

                                            :
                                            <Link to={item.path} className="item-menu">
                                                <ListItem className="list" onClick={handleDrawerClose} button>
                                                    <img src={item.image} />
                                                    {item.title}
                                                </ListItem>
                                            </Link>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </List>
            </SwipeableDrawer>
            <DrawerButton>
                <IconButton onClick={handleDrawerOpen} edge="start" size="medium" color="#0f0900" aria-label="menu">
                    <MenuIcon src={menu} />
                </IconButton>
            </DrawerButton>
            <Guide>
                <GuideList>
                    {
                        items.map((item) => (
                            <div >
                                {
                                    (location.pathname.includes(item.path))
                                        ?
                                        <Link to={item.path} style={{backgroundColor: "#EF9906"}} className="link-menu">
                                            <img src={item.image} />
                                            {item.title}
                                        </Link>

                                        :
                                        <Link to={item.path} className="link-menu">
                                            <img src={item.image} />
                                            {item.title}
                                        </Link>
                                }
                            </div>
                        ))
                    }
                </GuideList>
            </Guide>

        </AppBar >
    )
}
