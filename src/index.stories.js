import "./index.js";

export default {
  parameters: {
    layout: "centered",
  },
};

export const basic = () => `<random-shapes></random-shapes>`;

export const colors = () => `<random-shapes colors="['#000', '#999']"></random-shapes>`;

export const shapesTotal = () => `<random-shapes shapes-total=5></random-shapes>`;
