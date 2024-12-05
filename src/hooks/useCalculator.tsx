export const calculateDolarToBs = (
  valueDolar: string,
  dolar: string | number
) => {
  const result = Number(Number(valueDolar) * Number(dolar)).toFixed(2);
  return valueDolar !== "" ? result.toString() : "";
};

export const calculateBsToDolar = (valueBs: string, dolar: string | number) => {
  const result = Number(Number(valueBs) / Number(dolar)).toFixed(2);
  return valueBs !== "" ? result.toString() : "";
};

const formatNumber = (number: string) => {
  return Number(number).toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    minimumIntegerDigits: 1,
  });
};

export const copyToClipboard = (
  text: string,
  setShowCopy: React.Dispatch<React.SetStateAction<boolean>>
) => {
  navigator.clipboard
    .writeText(formatNumber(text))
    .then(() => {
      setShowCopy(true);
      setTimeout(() => setShowCopy(false), 1000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
};
