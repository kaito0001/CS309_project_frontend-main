import "./Footer.css"
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import * as ROUTES from "../../Routes/routes";

export default function Home() {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href={ROUTES.CONTACTUS}>FAQ</a></li>
                                <li><a href={ROUTES.ACCOUNT}>order status</a></li>
                                <li><a href={ROUTES.CHECKOUT}>Check Out</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href={ROUTES.PRODUCTS}>Products</a></li>
                                <li><a href={ROUTES.PRODUCTS}>Men</a></li>
                                <li><a href={ROUTES.PRODUCTS}>Women</a></li>
                                <li><a href={ROUTES.PRODUCTS}>Kids</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <a href="https://www.youtube.com/c/jamesqquick"
                               className="youtube social">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/learnbuildteach/"
                               className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/learnbuildteach"
                               className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}