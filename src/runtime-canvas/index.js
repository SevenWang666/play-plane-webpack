import { createRenderer } from "@vue/runtime-core";
import * as PIXI from "pixi.js";
const renderer = createRenderer({
  insert: (child, parent, anchor) => {
    parent.addChild(child);
  },

  remove: (child) => {
    const parent = child.parent;
    if (parent) {
      parent.removeChild(child);
    }
  },

  createElement: (tag, isSVG, is) => {
    let element;
    if (tag === "Rectangle") {
      // 创建一个矩形
      element = new PIXI.Graphics();
      element.lineStyle(4, 0xff3300, 1);
      element.beginFill(0x66ccff);
      element.drawRect(0, 0, 64, 64);
      element.endFill();
      element.x = 0;
      element.y = 0;
      // Opt-in to interactivity
      element.interactive = true;
      // Shows hand cursor
      element.buttonMode = true;
    } else if (tag === "Sprite") {
      element = new PIXI.Sprite();
      element.x = 0;
      element.y = 0;
    } else if (tag === "Container") {
      element = new PIXI.Container();
      element.x = 0;
      element.y = 0;
    } else if (tag === "Text") {
      element = new PIXI.Text();
      element.x = 0;
      element.y = 0;
    }

    return element;
  },

  createText: (text) => doc.createTextNode(text),

  createComment: (text) => {},

  setText: (node, text) => {
    node.nodeValue = text;
  },

  setElementText: (el, text) => {
    el.textContent = text;
  },

  parentNode: (node) => node.parentNode,

  nextSibling: (node) => node.nextSibling,

  querySelector: (selector) => doc.querySelector(selector),

  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  patchProp(
    el,
    key,
    prevValue,
    nextValue,
    isSVG = false,
    prevChildren,
    parentComponent,
    parentSuspense,
    unmountChildren
  ) {
    if (key === "on" || key === "texture" || key === "style") {
      switch (key) {
        case "on":
          Object.keys(nextValue).forEach((eventName) => {
            const callback = nextValue[eventName];
            el.on(eventName, callback);
          });
          break;
        case "texture":
          let texture = PIXI.Texture.from(nextValue);
          el.texture = texture;
          break;
        case "style":
          let style = new PIXI.TextStyle(nextValue);
          el.style = style;
          break;
        case "anchor":
          console.log(nextValue);
          el.anchor.set(...nextValue);
          break;
      }
    } else {
      el[key] = nextValue;
    }
  },
  cloneNode(el) {
    return el.cloneNode(true);
  },
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
