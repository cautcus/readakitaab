import { FocusCards } from "./focus-cards";


export function Showcase() {
  const cards = [
    {
      title: "Community",
      src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://readakitaab.com/community",
    },
    {
      title: "Book Club",
      src: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://readakitaab.com/read-along-books",
    },
    {
      title: "Kids Reading Club",
      src: "https://images.unsplash.com/photo-1520923626381-95ddff8c32c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://readakitaab.com/about-kids-club",
    },
    {
      title: "Library",
      src: "https://images.unsplash.com/photo-1472173148041-00294f0814a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://readakitaab.com/browse-library",
    }
  ];

  return (
    <div className="px-4 py-12 bg-brown-200 text-white">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700"> 
        We Are...
        </h1>
      <FocusCards cards={cards} />
    </div>
  );
}
