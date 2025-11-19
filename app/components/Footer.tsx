interface FooterProps {
  businessName: string;
}

export default function Footer({ businessName }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm text-muted-foreground">
        <p className="font-light">
          © {new Date().getFullYear()} {businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}