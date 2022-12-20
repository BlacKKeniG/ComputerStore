import { closeSideBar } from "./side-bar";

export function bodyOverlayMakeVisibal() {
    document.body.classList.add('body-fixed');
    document.querySelector('.body-overlay').classList.add('body-overlay_visible');
}

export function bodyOverlayMakeHidden() {
    document.body.classList.remove('body-fixed');
    document.querySelector('.body-overlay').classList.remove('body-overlay_visible');
}

export default function bodyOverlay() {
    document.querySelector('.body-overlay').addEventListener('click', ()=> {
        if(document.querySelector('.side-bar').classList.contains('side-bar_active')) {
            closeSideBar();
            bodyOverlayMakeHidden();
        }
    })
}