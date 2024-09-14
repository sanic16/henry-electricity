"use client";
import Section from "@/components/Section";
import { questions } from "@/data/services";
import { useState } from "react";

const Questions = () => {
  const questionsPerPage = 4;
  const [paginatedQuestions, setPaginatedQuestions] = useState(
    questions.slice(0, questionsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const offset = (nextPage - 1) * questionsPerPage;
    const newQuestions = questions.slice(offset, offset + questionsPerPage);
    setPaginatedQuestions([...paginatedQuestions, ...newQuestions]);
    setCurrentPage(nextPage);
  };

  return (
    <Section
      title="Preguntas frecuentes"
      description="Aquí encontrarás las preguntas más frecuentes que nos hacen nuestros clientes."
    >
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-[400px,400px] xl:grid-cols-[500px,500px] justify-items-center justify-center gap-8">
        {paginatedQuestions.map((item) => (
          <div key={item.id}>
            <h1 className="text-center md:text-left mb-2 sm:mb-4 text-blue-950 dark:text-yellow-500">
              {item.question}
            </h1>
            <div className="text-center md:text-left">{item.answer}</div>
          </div>
        ))}
      </div>
      {questions.length > paginatedQuestions.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-blue-950 dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded-md"
          >
            Cargar más
          </button>
        </div>
      )}
    </Section>
  );
};

export default Questions;
