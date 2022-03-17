class TekColorRender {
    #colorsNames = {
        "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
        "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
        "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
        "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
        "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
        "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
        "honeydew": "#f0fff0", "hotpink": "#ff69b4",
        "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
        "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
        "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
        "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead", "navy": "#000080",
        "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
        "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
        "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
        "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
        "violet": "#ee82ee",
        "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
        "yellow": "#ffff00", "yellowgreen": "#9acd32"
    };
    constructor() {

    }
    getHSL(color) {
        if (this.#colorsNames[color]) {
            color = this.#colorsNames[color];
        }
        switch (this.#colorType(color)) {
            case 'hex':
                return this.#HEXToHSL(color);
                break;
            case 'rgb':
                return this.#RGBToHSL(color);
                break;
            case 'hsl':
                let sep = color.indexOf(",") > -1 ? "," : " ";
                return color.substr(4).replace(/%|deg|rad|turn/g, '').split(")")[0].split(sep).map(num => {
                    return +num;
                });
                break;
        }
    }
    /**
     * @param {string} color
     * @return {string} `colorType`
     */
    #colorType(color) {
        if (color.startsWith('#')) { return 'hex' }
        else if (color.startsWith('rgb')) { return 'rgb' }
        else if (color.startsWith('hsl')) { return 'hsl' }
        else { throw "unsupported color type" }
    }
    /**
     * @param {string} color hexColor
     * @return {object}
     */
    #HEXToHSL(H) {
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
            r = "0x" + H[1] + H[1];
            g = "0x" + H[2] + H[2];
            b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
            r = "0x" + H[1] + H[2];
            g = "0x" + H[3] + H[4];
            b = "0x" + H[5] + H[6];
        }
        return this.#RGBToHSL(`rgb(${r}, ${g}, ${b})`);
    }
    #RGBToHSL(rgb) {
        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var h = void 0,
            s = void 0,
            l = void 0;

        if (max === min) {
            h = 0;
        } else if (r === max) {
            h = (g - b) / delta;
        } else if (g === max) {
            h = 2 + (b - r) / delta;
        } else if (b === max) {
            h = 4 + (r - g) / delta;
        }

        h = Math.min(h * 60, 360);
        if (h < 0) {
            h += 360;
        }

        l = (min + max) / 2;

        if (max === min) {
            s = 0;
        } else if (l <= 0.5) {
            s = delta / (max + min);
        } else {
            s = delta / (2 - min - max);
        }

        return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
        // return `hsl(${Math.round(h)}deg, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }

    getRGB(color) {
        let hsl = this.getHSL(color),
            h = hsl[0],
            s = hsl[1],
            l = hsl[2];
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs((h / 60) % 2 - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;
        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        return [r, g, b];
    }

    #lerp(a, b, u) {
        return (1 - u) * a + u * b;
    }

    /**
     * Fade Element Color
     * @param {Node} el single element
     * @param {object} color1 rgb color
     * @param {object} color2 rgb color
     * @param {number} duration animation duration
     */
    fade(el, item_id, color1, color2, duration) {
        return new Promise(resolve => {
            let rgb1 = this.getRGB(color1);
            let rgb2 = this.getRGB(color2);
            color1 = {
                r: rgb1[0],
                g: rgb1[1],
                b:  rgb1[2]
            };
            color2 = {
                r: rgb2[0],
                g: rgb2[1],
                b:  rgb2[2]
            };
            let interval = 10;
            let steps = duration / interval;
            let step_u = 1.0 / steps;
            let u = 0.0;
            window.TekAnimations[item_id] = setInterval(() => {
                if (u >= 1.0) {
                    clearInterval(window.TekAnimations[item_id]);
                    resolve();
                }
                var r = Math.round(this.#lerp(color1.r, color2.r, u));
                var g = Math.round(this.#lerp(color1.g, color2.g, u));
                var b = Math.round(this.#lerp(color1.b, color2.b, u));
                el.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
                u += step_u;
            }, interval);
        })
    };
}
class Tek {
    #items;
    #intervals;
    #colorRender = new TekColorRender();
    static #colorModes = Object.freeze(["convert", "blink", "fade"]);
    static #hideModes = Object.freeze(["backspace", "fadeOut"]);
    constructor(options = []) {
        this.separator = options.separator ?? ",,";
        this.animationSpeed = options.animationSpeed ?? 50;
        this.#items = [];
        this.#intervals = {};
        window.TekAnimations = {};
    }

    /**
     * - create new element with his words
     * - can use multiple elements if will set words on argument instead of [data-words]
     * - [data-words] must be string separated with defualt {separator} or you can chang it when you call the class
     * @param {string} selector will select html element using querySelectorAll
     * @param {object} words the words want to loop [optional] if [data-words] exist
     * @param {object} options
     * @return {string} `id`
     */
    el(selector, words, options = []) {
        return new Promise((resolve, reject) => {
            options.colors = options.colors || [];
            options.colorMode = options.colorMode || "convert"; // [convert, blink, fade]
            if (!Tek.#colorModes.includes(options.colorMode)) { throw `color mode [${options.colorMode}] not supported!.` }
            options.hideMode = options.hideMode || "backspace" // [backspace, fadeOut]
            if (!Tek.#hideModes.includes(options.hideMode)) { throw `write mode [${options.hideMode}] not supported!.` }
            options.delay = options.delay ?? 1500;
            options.writeSpeed = options.writeSpeed ?? 100;
            options.loop = options.loop ?? true;
            const elements = document.querySelectorAll(selector);
            const id = Math.random().toString(36).slice(-9);
            if (typeof words === "object" && words.length < 1) { throw "{words} object can't be empty." }
            else if (typeof words === "object" && words.length > 0) { words = words }
            else if (typeof words !== "object" && elements[0].attributes['data-words'] && elements[0].attributes['data-words'].value != "") {
                words = elements[0].attributes['data-words'].value.split(this.separator);
            }
            else { throw "there is no words\n - use [data-words] or {words} argument"; }
            this.#items[id] = {
                elements: elements,
                words: words,
                options: options,
                wordIndex: 0,
                run: () => { this.run(id) }
            }
            if (options.colors.length !== 0) {
                this.#items[id].options.currentColorNumber = 0;
                this.#items[id].options.colors = options.colors;
                this.#items[id].options.colorMode = options.colorMode;
            }
            resolve(id);
            reject();
        })
    }

    /**
     * start loop writing
     * @param {string} item_id
     * @param {function} __resolve don't change it if you want to use .then function
     * @return {object} `item` will return for custom the data
     */
    run(item_id, __resolve = new Function) {
        let item = this.#items[item_id];
        let char_i = 0;
        let p = "";
        return new Promise(resolve => {
            if (item.options.colors) {
                if (item.options.currentColorNumber == item.options.colors.length && item.options.colorMode === "convert") {
                    this.#items[item_id].options.currentColorNumber = 0;
                }
                if(item.options.colorMode == "fade"){
                    if(!item.options.colorChanging){
                        this.#colorChanger(item_id, this.animationSpeed * 20);
                    }
                }
                else if(item.options.colorMode == "blink"){
                    if(!item.options.colorChanging){
                        this.#colorChanger(item_id, this.animationSpeed * 3);
                    }
                }
            }
            this.#intervals[item_id] = setInterval(async () => {
                p += item.words[item.wordIndex][char_i];
                await item.elements.forEach(el => {
                    el.innerText = p;
                    if (item.options.colors && item.options.colorMode === "convert") {
                        el.style.color = item.options.colors[item.options.currentColorNumber];
                    }
                })
                if (char_i == item.words[item.wordIndex].length - 1) {
                    this.stop(item_id);
                    if (item.options.colors && item.options.colorMode === "convert") {
                        this.#items[item_id].options.currentColorNumber += 1;
                    }
                    if (item.wordIndex >= item.words.length - 1) {
                        if (item.words.length <= 1) { resolve(item); }
                        else { __resolve(item); }
                        this.#items[item_id].wordIndex = 0;
                        if (item.options.loop) {
                            setTimeout(() => {
                                if (item.options.hideMode === "backspace") { this.#backspace(item_id, resolve); }
                                else if (item.options.hideMode === "fadeOut") { this.#fadeOut(item_id, resolve); }
                            }, item.options.delay);
                        }
                    } else {
                        this.#items[item_id].wordIndex += 1;
                        setTimeout(() => {
                            if (item.options.hideMode === "backspace") { this.#backspace(item_id, resolve); }
                            else if (item.options.hideMode === "fadeOut") { this.#fadeOut(item_id, resolve); }
                        }, item.options.delay)
                    }
                }
                char_i += 1;
            }, item.options.writeSpeed);
        })
    }

    #colorChanger(item_id, timeOut){
        this.#items[item_id].options.colorChanging = true;
        const item = this.#items[item_id];
        var color1 = item.options.colors[item.options.currentColorNumber];
        var color2 = item.options.colors[item.options.currentColorNumber + 1];
        if(item.options.currentColorNumber + 1 == item.options.colors.length){
            color2 = item.options.colors[0];
            this.#items[item_id].options.currentColorNumber = 0;
        } else {
            this.#items[item_id].options.currentColorNumber += 1;
        }
        item.elements.forEach(el => {
            this.#colorRender.fade(el, item_id, color1, color2, timeOut).then(_ => {
                this.#colorChanger(item_id, timeOut);
            });
        });
    }

    #backspace(item_id, __resolve = new Function) {
        this.stop(item_id);
        let item = this.#items[item_id];
        this.#intervals[item_id] = setInterval(() => {
            if(item.elements[0].innerText.length >= 0){
                item.elements.forEach(el => {
                    el.innerText = el.innerText.slice(0, -1);
                })
            }
            if (item.elements[0].innerText.length == 0) {
                clearInterval(this.#intervals[item_id]);
                setTimeout(() => {
                    this.run(item_id, __resolve);
                }, this.animationSpeed);
            }
        }, item.options.writeSpeed);
    }

    #fadeOut(item_id, __resolve = new Function) {
        this.stop(item_id);
        let item = this.#items[item_id];
        let opacity = 1;
        let interval = setInterval(() => {
            if (opacity < 0.1) {
                item.elements.forEach(el => {
                    el.style.opacity = 0;
                    el.innerText = '';
                })
                clearInterval(interval);
                setTimeout(() => {
                    item.elements.forEach(el => {
                        el.style.opacity = 1;
                    })
                    this.run(item_id, __resolve);
                }, this.animationSpeed);
            } else {
                item.elements.forEach(el => {
                    el.style.opacity = opacity;
                })
            }
            opacity -= 0.1;
        }, this.animationSpeed);
    }

    /**
     * Stop looping
     * @param {string} item_id
     */
    stop(item_id) {
        return new Promise((resolve, reject) => {
            if (typeof this.#intervals[item_id] !== "undefined") {
                clearInterval(this.#intervals[item_id]);
                resolve();
            } else { reject(`item{${item_id}} not found!.`) }
        });
    }

    /**
     * Delete item from class for no running it again
     * @param {string} item_id
     */
    delete(item_id) {
        return new Promise((resolve, reject) => {
            if (typeof this.#intervals[item_id] !== "undefined") {
                clearInterval(this.#intervals[item_id]);
            }
            if (typeof this.#items[item_id] !== "undefined") {
                delete this.#items[item_id];
                resolve(true);
            } else { reject(`item{${item_id}} not found!.`) }
        });
    }

    /**
     * Get item info and options
     * @param {string} item_id
     * @return {object} `item_info`
     */
    info(item_id) {
        return new Promise((resolve, reject) => {
            if (typeof this.#items[item_id] !== "undefined") {
                resolve(this.#items[item_id]);
            } else { reject(`item{${item_id}} not found!.`) }
        });
    }

    /**
     * Get all items
     */
    getAll(){
        return new Promise(resolve => {
            resolve(this.#items);
        })
    }
}