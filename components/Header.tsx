import { Logo } from "./Logo";
import { BookCallButton } from "./Button";

/** Logo and one action. No other nav links (mockup note 1). */
export function Header() {
  return (
    <header className="nav">
      <Logo />
      <nav aria-label="Main" className="links">
        <BookCallButton />
      </nav>
    </header>
  );
}
