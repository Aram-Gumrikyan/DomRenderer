function el(type = "div", attrs = {}, children) {
    type = type.toLowerCase();

    try {
        const typedElement = typedElements.find((elem) => elem.type === type);
        const elem = new typedElement.element();
        elem.setAttrs(attrs);

        if (children) {
            elem.setChildren(children);
        }

        return elem;
    } catch (e) {
        console.log(e.message);
    }
}
