import { openSideBar } from "./side-bar";
import { bodyOverlayMakeVisibal } from "./body-overlay";

export default function hamburger() {
    document.querySelector('.hamburger').addEventListener('click', () => {
        openSideBar();
        bodyOverlayMakeVisibal();
    })
}