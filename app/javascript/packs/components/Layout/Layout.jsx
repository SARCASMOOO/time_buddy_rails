import React, {Component, Fragment} from 'react'
import Nav from './Sections/Nav'
import Footer from './Sections/Footer'
import ProfileSideBar from "./Sections/ProfileSideBar";

const layout = props => {
    let view;


    switch (props.layoutName) {
        case 'landing':
            view = (
                <Fragment> <Nav/>
                    <ProfileSideBar>
                        {props.children}
                    </ProfileSideBar>
                    <Footer/>
                </Fragment>
            );
            break;
        case 'timeApp':
            view = (
                <Fragment> <Nav/>
                    <ProfileSideBar>
                        {props.children}
                    </ProfileSideBar>
                    <Footer/>
                </Fragment>
            );
            break;
    }

    return view;
}

export default layout;