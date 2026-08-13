export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">Anisur Rahman Arzu</p>
          <p className="mt-1 text-sm text-muted">
            Frontend Software Engineer · Cologne, Germany
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <a
            href="https://github.com/anisurarzu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anisurrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:anisurrahman.arzu@gmail.com"
            className="hover:text-accent"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
