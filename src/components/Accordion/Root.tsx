import {
  useState,
  type HTMLProps,
  Children,
  cloneElement,
  type DetailedReactHTMLElement,
} from "react";
import { type AccordionItemType } from "./Item";

type AccordionRootType = HTMLProps<HTMLDivElement> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultFirstOpen?: boolean;
};

export const AccordionRoot = ({
  children,
  type = "single",
  collapsible = false,
  ...restProps
}: AccordionRootType) => {
  if (type === "single")
    return (
      <SingleRoot collapsible={collapsible} {...restProps}>
        {children}
      </SingleRoot>
    );

  return <MultiRoot {...restProps}>{children}</MultiRoot>;
};

const SingleRoot = ({
  children,
  collapsible,
  className = "",
  ...restProps
}: Omit<AccordionRootType, "type">) => {
  const [itemOpen, setItemOpen] = useState(-1);

  const handleSingleItemOpen = (idx: number) =>
    collapsible
      ? setItemOpen((old) => (old === idx ? -1 : idx))
      : setItemOpen(idx);

  return (
    <article className={"stack " + className} {...restProps}>
      {Children.map(children, (child, idx) =>
        cloneElement(
          child as DetailedReactHTMLElement<AccordionItemType, HTMLElement>,
          {
            open: itemOpen === idx,
            toggle: () => handleSingleItemOpen(idx),
          }
        )
      )}
    </article>
  );
};

const MultiRoot = ({
  children,
  className = "",
  ...restProps
}: Omit<AccordionRootType, "type" | "collapsible">) => {
  const [itemOpen, setItemOpen] = useState(
    Children.toArray(children).map(() => false)
  );

  const handleMultipleItemOpen = (toggleIdx: number) =>
    setItemOpen((old) =>
      old.map((isOpen, idx) => (idx === toggleIdx ? !isOpen : isOpen))
    );

  return (
    <article className={"stack " + className} {...restProps}>
      {Children.map(children, (child, idx) =>
        cloneElement(
          child as DetailedReactHTMLElement<AccordionItemType, HTMLElement>,
          {
            open: itemOpen[idx],
            toggle: () => handleMultipleItemOpen(idx),
          }
        )
      )}
    </article>
  );
};
