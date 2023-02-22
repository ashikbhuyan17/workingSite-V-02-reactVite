import useToggle from "./useToggle";

function useToggleModal() {
  const [isOpen, setShow] = useToggle();

  function setClose() {
    setShow(false);
  }

  function setOpen() {
    setShow(true);
  }

  return [isOpen, setOpen, setClose];
}

export default useToggleModal;
