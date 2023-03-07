import { useRef } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";

const RulesModal = ({ modal, image, setModal }) => {
  const modalref = useRef();
  useOnClickOutside(modalref, () => setModal(false));
  return (
    <>
      {modal && (
        <div className="modal" ref={modalref}>
          <img src={image} alt="rules" />
        </div>
      )}
    </>
  );
};

export default RulesModal;
