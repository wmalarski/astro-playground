import type { ComponentChildren, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

type Props = {
  children: ComponentChildren;
};

const SidebarToggle: FunctionalComponent<Props> = ({ children }) => {
  const [sidebarShown, setSidebarShown] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-pressed={sidebarShown ? "true" : "false"}
        id="menu-toggle"
        onClick={() => setSidebarShown(!sidebarShown)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="sr-only">Toggle sidebar</span>
      </button>
      {sidebarShown && <div>{children}</div>}
    </>
  );
};

export default SidebarToggle;
