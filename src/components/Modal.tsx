import  { useState, type FormEvent } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import DepartmentList from '../components/DepartmentList'

interface ModalProps {
  isOpen: boolean;
  type: string;
  onClose: () => void;
  onSubmit: (title: string|number) => void;
}

function Modal  ({ isOpen, type, onClose, onSubmit }:ModalProps){
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: FormEvent): number | string | void => {
    e.preventDefault();
    if(type === "string" && typeof title === "string"){
        if (title.trim()) {
            onSubmit(title);
            setTitle('');
            onClose();
        }
    } else if(type === "number" && title){
        onSubmit(parseInt(title));
        setTitle('');
        onClose();
    } else if(type === "select"){
      const select = e.currentTarget.querySelector('select');
      const optionSelected = select ? select.value : '';
      onSubmit(parseInt(optionSelected));
      setTitle('');
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={clsx(styles.modalOverlay)}>
      <div className={clsx(styles.modal)}>
        <h2>{type === "string" ? "Enter Title":type === "select"? "Select a Department" : "Enter ID"}</h2>
        <form onSubmit={handleSubmit}>
          {type ==="select" ? <DepartmentList /> : (
          <input
            type={type === "string" ? "text":"number"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={type === "string" ? "Enter a title":"Enter an ID"}
            className={clsx(styles.modalInput)}
          />
          )}
          <div className="modal-buttons">
            <button type="submit" className={clsx(styles.modalButton)}>
              Submit 
            </button>
            <button type="button" onClick={onClose} className={clsx(styles.modalButton, styles.cancel)} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;