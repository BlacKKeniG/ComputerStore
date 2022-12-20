import { bodyOverlayMakeHidden } from "./body-overlay";

export function openSideBar() {
    document.querySelector('.side-bar').classList.add("side-bar_active");
}

export function closeSideBar() {
    document.querySelector('.side-bar').classList.remove("side-bar_active");
}

export default function sideBar() {
    const bar = document.querySelector('.side-bar');
    bar.querySelector('.side-bar__close').addEventListener('click', () => {
        closeSideBar();
        bodyOverlayMakeHidden();
    });
}