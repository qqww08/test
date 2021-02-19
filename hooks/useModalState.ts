import { ReactNode, useState } from "react";

type UseModalStateReturnValue = {
  visible: boolean;
  open: () => void;
  close: () => void;
  if: (ReactNode) => ReactNode;
};

export const useModalState = (): UseModalStateReturnValue => {
  const [visible, setVisible] = useState(false);

  return {
    visible,
    open: () => {
      setVisible(!visible);
    },
    close: () => {
      setVisible(false);
    },
    if: (node) => visible && node,
  };
};
