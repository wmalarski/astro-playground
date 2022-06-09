import type { ComponentChildren, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import Styles from "./Drawer.module.css";

type Props = {
  children: ComponentChildren;
  id: string;
};

const Drawer: FunctionalComponent<Props> = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callback = (e: CustomEvent<string>) => {
      if (id !== e.detail) return;
      setIsVisible(false);
    };

    window.addEventListener("drawer:close", callback);
    return () => {
      window.removeEventListener("drawer:close", callback);
    };
  }, [id]);

  useEffect(() => {
    const callback = (e: CustomEvent<string>) => {
      if (id !== e.detail) return;
      setIsVisible(true);
    };

    window.addEventListener("drawer:open", callback);
    return () => {
      window.removeEventListener("drawer:open", callback);
    };
  }, [id]);

  return (
    <div className={Styles.drawer} aria-hidden={!isVisible}>
      {children}
    </div>
  );
};

export default Drawer;
