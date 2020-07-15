import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import ProfileSideBar from "./ProfileSideBar";

function Layout(props) {
        return (
            <div>
                <Nav/>
                <ProfileSideBar>
                    {props.children}
                </ProfileSideBar>
                <Footer/>
            </div>
        );
}

export default Layout;