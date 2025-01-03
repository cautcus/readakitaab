"use client";
import { AnimatedTestimonials } from "./animated-testimonials";

export function Posts() {
  const testimonials = [
    {
      name: "My Journey of Reading (Part 1)",
      date: "9 August 2021",
      image: "https://img1.wsimg.com/isteam/stock/3pDRjQb/",
      link: "https://readakitaab.com/home/f/my-journey-of-reading-part-1"
    },
    {
      name: "Conversation on Personality Types - MBTI, What are you?",
      date: "3 August 2021",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/MyersBriggsTypes.png",
      link: "https://readakitaab.com/home/f/conversation-on-personality-types---mbti-what-are-you"
    },
    {
      name: "Author's Talk with Ruchira Gupta",
      date: "10 April 2024",
      image: "https://img1.wsimg.com/isteam/ip/ca4f58eb-ba5d-46a7-9935-5d1835cf9a70/Authors%20Talk%20with%20Ruchira%20Gupta_JPG.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
      link: "https://readakitaab.com/home/f/authors-talk-with-ruchira-gupta"
    },
    {
      name: "Author's Talk with Anand Neelakantan",
      date: "10 April 2024",
      image: "https://img1.wsimg.com/isteam/ip/ca4f58eb-ba5d-46a7-9935-5d1835cf9a70/Authors%20Talk%20with%20Anand%20Neelakantan%20JPG.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
      link: "https://readakitaab.com/home/f/authors-talk-with-anand-neelakantan"
    },
    {
      name: "Author's Talk with Daisy Rockwell",
      date: "20 February 2024",
      image: "https://img1.wsimg.com/isteam/ip/ca4f58eb-ba5d-46a7-9935-5d1835cf9a70/Authors%20Talk%20with%20Daisy%20Rockwell.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
      link: "https://readakitaab.com/home/f/authors-talk-with-daisy-rockwell"
    },
  ];
  return(
    <div className="px-4 py-12 bg-brown-300 text-white">
    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700"> 
    The Content Box
    </h1>
    <AnimatedTestimonials testimonials={testimonials} />
    </div>
);
}
