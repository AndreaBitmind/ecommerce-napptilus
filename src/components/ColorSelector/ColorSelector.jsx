import PropTypes from "prop-types";

ColorSelector.propTypes = {
  colorOptions: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export function ColorSelector({ colorOptions }) {
  return (
    <select>
      {colorOptions.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
