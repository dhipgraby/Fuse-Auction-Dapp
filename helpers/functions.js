
export function shortStr(str) {
    if (str.length <= 8) {
      return str;
    }

    const firstFour = str.substring(0, 4);
    const lastFour = str.substring(str.length - 4);

    return `${firstFour}...${lastFour}`;
  }
