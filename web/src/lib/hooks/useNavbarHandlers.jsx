export function useRenderLabel() {
  const renderLabel = (label, selectedValue, firstColor, secondColor) => {
    const color = label === selectedValue ? firstColor : secondColor;
    return <span style={{ color: color }}>{label}</span>;
  };

  return renderLabel;
}
