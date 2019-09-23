import React, { Component, useState } from "react";
import Drawer, {
    DrawerAppContent,
    DrawerContent,
    DrawerHeader,
    DrawerTitle
} from "@material/react-drawer";
import List, {
    ListItem,
    ListItemGraphic,
    ListItemText
} from "@material/react-list";
import MaterialIcon from "@material/react-material-icon";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
    Body1,
    Body2,
    Button,
    Caption,
    Headline1,
    Headline2,
    Headline3,
    Headline4,
    Headline5,
    Headline6,
    Overline,
    Subtitle1,
    Subtitle2,
  } from '@material/react-typography';

function DrawerMenu(props) {
    return (
        <div>
            <Drawer
                modal
                open={props.isOpen}
                onClose={() => props.setOpen(false)}
            >
                <DrawerContent>
                    <header>
                        <Headline6 className='drawer__username'>
                            USERNAME
                        </Headline6>
                    </header>
                    <hr />
                    <List singleSelection>
                        <Link to='/'>
                            <ListItem>
                                <ListItemGraphic
                                    graphic={<MaterialIcon icon="home" />}
                                />
                                <ListItemText primaryText="Home" />
                            </ListItem>
                        </Link>
                        <Link to='/login'>
                            <ListItem>
                                <ListItemGraphic
                                    graphic={<MaterialIcon icon="lock" />}
                                />
                                <ListItemText primaryText="Login" />
                            </ListItem>
                        </Link>
                    </List>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default DrawerMenu;
