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
                        <ListItem>
                            <ListItemGraphic
                                graphic={<MaterialIcon icon="folder" />}
                            />
                            <ListItemText primaryText="Mail" />
                        </ListItem>
                    </List>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default DrawerMenu;
