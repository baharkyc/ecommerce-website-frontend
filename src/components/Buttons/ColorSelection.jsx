
const ColorSelection = ({ colors = [], text = true, size = 24 }) => {
  if (colors.length === 0) return null;

  return (
    <div>
      {text && (
        <p className="text-sm text-gray-500 font-medium mb-2">
          Available Colors:
        </p>
      )}
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="rounded-full border border-gray-300 cursor-pointer"
            style={{
              backgroundColor: color,
              width: size,
              height: size,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
