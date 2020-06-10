const createButtons = (color, fontWeight) => ({
  base: `
    background-color: transparent;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    padding: 6px 6px;
    transition: all .25s ease-in;
    font-weight: ${fontWeight['medium']}
    
    &:hover {
    }
    &:focus {
      outline: 0;
    }
    &:disabled {
      opacity: 0.6;
      cursor: default;
      pointer-events: none;
    }
  `,
  default: `
    background-color: ${color.c_main};
    border-color: ${color.c_main};
    color: ${color.c_main};
    &:hover {
      background-color: ${color.c_main};
    }
  `,
  primary: `
    background-color: ${color.c_main};
    color: ${color.c_main};
    border-color: ${color.c_main};
    &:hover {
      color: ${color.c_grey};
      border-color: ${color.c_main_dark};
      background-color: ${color.c_main_dark};
    }
  `,
  secondary: `
    background-color: ${color.c_secondary};
    color: ${color.c_secondary};
    border-color: ${color.c_secondary};
    &:hover {
      color: ${color.c_grey};
      border-color: ${color.c_secondary_dark};
      background-color: ${color.c_secondary_dark};
    }
  `,
  contained: `
    color: white;
    &:hover {
      color: white;
    }
  `,
  text: `
    border: 1px solid transparent;
    background-color: transparent;
    &:hover {
      border: 1px solid transparent;
      background-color: transparent;
    }
  `,
  outline: `
    background-color: transparent;
    &:hover {
      color: white;
    }
  `,
  block: `
    width: 100%;
  `
})


export default createButtons