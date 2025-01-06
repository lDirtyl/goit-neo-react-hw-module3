import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';
import Button from '../Button/Button';
import btncss from '../Button/Button.module.css';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <div className={css.row}>
          <IoPersonSharp className={css.icon} size={18} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.row}>
          <FaPhone className={css.icon} size={18} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <Button
        className={btncss.btnDelete}
        title="Delete"
        type="button"
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export default Contact;
