import React, { Component, useState }  from 'react';
import TopAppBar, {
    TopAppBarFixedAdjust,
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle
} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";
import DrawerMenu from './DrawerMenu';

const TopBar = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <TopAppBar>
                <DrawerMenu isOpen={drawerOpen} setOpen={setDrawerOpen}/>
                <TopAppBarRow>
                    <TopAppBarSection align="start">
                        <TopAppBarIcon navIcon tabIndex={0}>
                            <MaterialIcon
                                hasRipple
                                icon="menu"
                                onClick={() => setDrawerOpen(!drawerOpen)}
                            />
                        </TopAppBarIcon>
                        <TopAppBarTitle>{props.title || 'Cornflower'}</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection align="end" role="toolbar">
                        <TopAppBarIcon actionItem tabIndex={0}>
                            <MaterialIcon
                                aria-label="print page"
                                hasRipple
                                icon="print"
                                onClick={() => console.log("print")}
                            />
                        </TopAppBarIcon>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust></TopAppBarFixedAdjust>
        </div>
    );
};/**/

export default TopBar;
