class MacButton {
    render() {
        console.log('render .. mac Button')
    }
}
class MacScroller {
    render() {
        console.log('render .. mac scroller')
    }
}
class WindowButton {
    render() {
        console.log('render .. window button')
    }
}
class WindowScroller {
    render() {
        console.log('render .. window scroller')
    }
}

class WindowFactory {
    genButton() {
        return new WindowButton();
    }
    genScoller() {
        return new WindowScroller();
    }
}
class MacFactory {
    genButton() {
        return new MacButton();
    }
    genScoller() {
        return new MacScroller();
    }
}

const component = new MacFactory();
const component2 = new WindowFactory();

button1 = component.genButton();
scoller1 = component.genScoller();

button1.render();
scoller1.render();