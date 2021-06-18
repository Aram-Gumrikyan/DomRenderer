class DomElement {
    constructor() {
        const name = this.constructor.name;
        const index = name.indexOf("Element");
        this.name = name.slice(0, index).toLowerCase();
        this.attrs;
        this.children = [];
    }

    setAttrs(attrs) {
        this.attrs = attrs;
    }

    setChildren(children) {
        Array.isArray(children) ? this.children.push(...children) : this.children.push(children);
    }

    childAppend(elem, child) {
        if (child instanceof DomElement) {
            const childElem = child.draw();
            elem.append(childElem);
        } else {
            elem.append(child);
        }
    }

    draw() {
        const elem = document.createElement(this.name);

        for (let attr in this.attrs) {
            elem.setAttribute(attr, this.attrs[attr]);
        }

        this.children.forEach((child) => {
            this.childAppend(elem, child);
        });

        return elem;
    }
}
