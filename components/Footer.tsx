export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left">
        <p className="text-base text-[var(--muted)]">
          &copy; {year} DHCP UNDIP &middot; Diponegoro Hacking Core of Pwning
        </p>
        <p
          className="text-base text-[var(--muted)]"
        >
          Built with Next.js &middot; Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}