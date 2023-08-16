import PropTypes from "prop-types";

StorageSelector.propTypes = {
  storageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export function StorageSelector({ storageOptions }) {
  return (
    <select>
      {storageOptions.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
