const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
  message.split("").length * pricePerWord;
