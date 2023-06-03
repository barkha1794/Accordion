import { type HTMLProps } from "react";
import { ReactComponent as ChevronDown } from "~/assets/chevron-down.svg";

export type AccordionItemType = HTMLProps<HTMLDivElement> & {
  heading: React.ReactNode;
  open?: boolean;
  toggle?: () => void;
};

export const AccordionItem = ({
  children,
  heading,
  open,
  toggle,
}: AccordionItemType) => {
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
