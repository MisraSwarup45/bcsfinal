import React from "react"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"
import "./Accessibility.css"

function Accessibility() {
    return <div>
        <Navbar />
        <header className="Header">
            <div className="Name">
                Accessibility
            </div>
            <div className="Text">
                In addition to adhering to WCAG 2.1, Level A and AA and the Americans with Disabilities Act's (ADA) criteria for effective communication, BCS & Company is dedicated to ensuring digital accessibility.
                <br /><br />

                In order to do this, we have teamed up with eSSENTIAL Accessibility to manage and administer our accessibility program. Their accessibility program regularly assesses our digital goods in accordance with industry best practices with the help of a diverse team of accessible experts, including people who use assistive technology.

                <br /><br />
                If you come across any obstacles to accessibility on our digital properties, please let us know. WebsiteAccessibility@BCS.com is the best way to reach us.
            </div>
        </header>
        <Footer />
    </div>
}

export default Accessibility;