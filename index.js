class Formatter {

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const strArray = str.split(' ');

    const newArray = [];

    for (const element of strArray) {
      if (exceptions.find(word => element === word)) {
        newArray.push(element);
      } else {
        newArray.push(this.capitalize(element));
      }
    }
    
    newArray[0] = this.capitalize(newArray[0]);

    return newArray.join(' ');
  }

}