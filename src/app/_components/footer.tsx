import Container from "@/app/_components/container";
import EmailIcon from "@/app/icons/email";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-5 flex flex-row items-center justify-center gap-3">
          <Link href={`mailto:hyoseockkim@gmail.com`}>
            <EmailIcon />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
