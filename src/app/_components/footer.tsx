import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="p-8 bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 text-neutral-700 dark:text-neutral-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            <p>&copy; 2024 Heaps Smart.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:text-blue-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
