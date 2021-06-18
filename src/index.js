function el(type = "div", attrs = {}, children) {
    type = type[0].toUpperCase() + type.slice(1).toLowerCase() + "Element";

    try {
        const evalContent = `new ${type}()`;
        const elem = eval(evalContent);
        elem.setAttrs(attrs);

        if (children) {
            elem.setChildren(children);
        }

        return elem;
    } catch (e) {
        console.log(e.message);
    }
}
