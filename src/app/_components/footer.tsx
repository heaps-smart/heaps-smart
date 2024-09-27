import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="p-8 bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 text-neutral-700 dark:text-neutral-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">&copy; 2024 Heaps Smart</p>
            <p className="text-sm">This website comes to you from Djiru Country.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
