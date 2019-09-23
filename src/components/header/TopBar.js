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
    const [prevPath, setPrevPath] = useState(props.location.pathname);

    console.log(prevPath + ':' + props.location.pathname);
    if(prevPath !== props.location.pathname){
        setPrevPath(props.location.pathname);
        setDrawerOpen (false);
    }


    return (
        <div>
            <DrawerMenu isOpen={drawerOpen} setOpen={setDrawerOpen} />
            <TopAppBar>
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
                                aria-label="search"
                                hasRipple
                                icon="search"
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
