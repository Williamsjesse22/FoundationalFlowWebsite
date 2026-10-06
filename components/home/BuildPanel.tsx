import { problemLabel } from "@/content/home";

interface BuildPanelProps {
  tag: string;
  title: string;
  problem: string;
  body: string;
  /** Puts the text on the right at desktop widths; panels alternate. */
  flip?: boolean;
  children: React.ReactNode;
}

/** One system we build: short text on one side, a product-style visual on the other. */
export function BuildPanel({ tag, title, problem, body, flip, children }: BuildPanelProps) {
  return (
    <div className={`build${flip ? " flip" : ""}`}>
      <div className="btext">
        <span className="tag">{tag}</span>
        <h3>{title}</h3>
        <Problem>{problem}</Problem>
        <p>{body}</p>
      </div>
      {children}
    </div>
  );
}

export function Problem({ children }: { children: React.ReactNode }) {
  return (
    <div className="why">
      <small>{problemLabel}</small>
      <p>{children}</p>
    </div>
  );
}
