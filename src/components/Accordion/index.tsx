import { ReactComponent as ChevronDown } from "~/assets/chevron-down.svg";

type AccordionType = {
  heading: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  toggle: () => void;
};

export const Accordion = ({
  children,
  heading,
  open,
  toggle,
}: AccordionType) => {
  return (
    <div className={"accordion" + (open ? " open" : "")}>
      <header className="header" onClick={toggle}>
        <div>{heading}</div>
        <ChevronDown className="icon" />
      </header>
      <div className="content">{children}</div>
    </div>
  );
};
