import React from "react";
import './footer.css';
import SSl from '../../../assets/images/ssl-logo.jpeg';
import PCI from '../../../assets/images/pci-logo.jpeg';
import AssurantFooter from '../../../assets/images/assurant-footer-logo.png';
const Footer = () => {
    return (
        <footer className="bg-primary footer py-3">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <a href="#"><img src={AssurantFooter} alt="assurant-footer" /></a>
                        <p className="text-white mb-0 pt-1"><small>&copy; 2022 Assurant Inc. All right reserved</small></p>
                    </div>
                    <div className="col-auto text-end">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">
                                <img src={SSl} alt="ssl" /></a></li>
                            <li className="list-inline-item"><a href="#">
                                <img src={PCI} alt={"pci"} /></a></li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;