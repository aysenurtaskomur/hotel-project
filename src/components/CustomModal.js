import { Modal } from 'antd';
import '../styles/customModal.scss';

const CustomModal = ({ className, ...props }) => {
  return <Modal {...props} className={`custom-modal ${className}`} />;
};

export default CustomModal;
