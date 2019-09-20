import React, { Component } from "react";
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
function DrawerMenu(props) {
    return (
        <div>
            <Drawer
                modal
                open={props.isOpen}
                onClose={() => props.setOpen(false)}
            >
                <DrawerContent>
                    <List singleSelection>
                        <Link to='/'>
                            <ListItem>
                                <ListItemGraphic
                                    graphic={<MaterialIcon icon="home" />}
                                />
                                <ListItemText primaryText="Home" />
                            </ListItem>
                        </Link>
                    </List>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default DrawerMenu;
