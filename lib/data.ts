export type Writeup = {
  slug: string;
  title: string;
  ctfName: string;
  category: string;
  date: string;
  excerpt: string;
};

export type Achievement = {
  event: string;
  placement: string;
  year: string;
  note: string;
};

export type Member = {
  name: string;
  role: string;
  handle: string;
  avatar: string;
};

export const writeups: Writeup[] = [
  {
    slug: "coming-soon-1",
    title: "Write-up coming soon",
    ctfName: "TBD",
    category: "Web",
    date: "2025",
    excerpt:
      "Our first write-up is being prepared. Check back later for a detailed CTF solution.",
  },
  {
    slug: "coming-soon-2",
    title: "Write-up coming soon",
    ctfName: "TBD",
    category: "Pwn",
    date: "2025",
    excerpt:
      "A binary exploitation walkthrough from a recent competition will land here.",
  },
  {
    slug: "coming-soon-3",
    title: "Write-up coming soon",
    ctfName: "TBD",
    category: "Crypto",
    date: "2025",
    excerpt:
      "A cryptography challenge breakdown is on the way. Stay tuned.",
  },
];

export const achievements: Achievement[] = [
  {
    event: "TBD CTF 2025",
    placement: "Top 20",
    year: "2025",
    note: "Coming soon",
  },
  {
    event: "TBD CTF 2024",
    placement: "Top 30",
    year: "2024",
    note: "Coming soon",
  },
  {
    event: "TBD CTF 2024",
    placement: "Top 50",
    year: "2024",
    note: "Coming soon",
  },
];

export const members: Member[] = [
  { name: "Rafi Nur Ardiansyah", role: "Web, Forensics", handle: "@53buahapel", avatar: "https://avatars.githubusercontent.com/u/55012507" },
  { name: "Radhitya Kurnia", role: "Forensics", handle: "@Nikoo", avatar: "https://avatars.githubusercontent.com/u/55012508" },
  { name: "Zidan Utomo", role: "Pwn", handle: "@ZZIDZZ", avatar: "https://avatars.githubusercontent.com/u/78781000" },
  { name: "Farrelino Arvia Atmajaya", role: "Crypto", handle: "@eyesbergice", avatar: "https://avatars.githubusercontent.com/u/171553205" },
  { name: "Subekti Suryo", role: "All good", handle: "@blacktea", avatar: "https://img.magnific.com/premium-vector/cartoon-hacker-character-avatar-icon-vector-illustration_1138841-28426.jpg" },
  { name: "Member 6", role: "Forensics", handle: "@tbd", avatar: "" },
];

export const tracks: { name: string; description: string; icon: string }[] = [
  {
    name: "Web",
    description: "SQL injection, XSS, SSRF, auth bypass, and modern web exploitation.",
    icon: "web",
  },
  {
    name: "Pwn",
    description: "Buffer overflows, ROP, heap exploitation, and binary protection bypasses.",
    icon: "pwn",
  },
  {
    name: "Reversing",
    description: "Static and dynamic analysis of binaries, deobfuscation, and key recovery.",
    icon: "reversing",
  },
  {
    name: "Crypto",
    description: "Classical ciphers, RSA, lattice-based crypto, and protocol attacks.",
    icon: "crypto",
  },
  {
    name: "Misc",
    description: "OSINT, forensics, steganography, scripting, and everything in between.",
    icon: "misc",
  },
];