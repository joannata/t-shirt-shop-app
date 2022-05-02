import styles from './OptionSize.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, setCurrentSize}) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(size =>
          <li key={shortid()}>
            <button type="button" className={clsx(currentSize === size && styles.active)} onClick={() => setCurrentSize(size)}>{size.name}</button>
          </li>
        )}
      </ul>
    </div>
  )
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;