class MacButton {
    render() {
        console.log('render .. mac Button')
    }
}
class WindowButton {
    render() {
        console.log('render .. window button')
    }
}
class MacScroller {
    render() {
        console.log('render .. mac scroller')
    }
}
class WindowScroller {
    render() {
        console.log('render .. window scroller')
    }
}

let scroller = new WindowScroller();
let button = new MacButton();

scroller.render();
button.render();

// render different compoent not comes in budle or family
// current code incosistent