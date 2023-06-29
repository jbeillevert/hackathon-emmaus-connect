import React, { useState } from 'react';

const data = [
  {
    question: "Comment estimer un mobile ?",
    answer: "Il suffit simplement de remplir toutes les informations obligatoires de l'outil simulateur et de cliquer sur 'Estimer'. Le simulateur évalue les informations fournies et classe l'appareil dans une catégorie en fonction de sa performance",
  },
  {
    question: "Où trouver les informations ?",
    answer: "Vous pouvez commencer par rechercher en ligne le modèle de votre téléphone suivi des mots clés tels que 'spécifications techniques' ou 'caractéristiques'. Cela vous permettra de trouver des sites web ou des pages officielles qui répertorient les spécifications détaillées du téléphone. De plus, vous pouvez consulter des sites spécialisés dans les revues de smartphones ou des forums où les utilisateurs partagent leurs expériences et des détails sur les fonctionnalités du téléphone. Les fabricants de smartphones publient également souvent des communiqués de presse et des documents marketing qui mettent en avant les caractéristiques principales du téléphone. En rassemblant ces informations provenant de différentes sources en ligne, vous pourrez obtenir une vision globale des paramètres de votre smartphone, tels que la mémoire, la RAM, la taille de l'écran, etc. ",
  },
  {
    question: "Comment imprimer les résultats ?",
    answer: "Lorsque vous cliquez sur le bouton 'Estimer', la fenêtre de résultat s'ouvre. Elle contient un lien 'Télécharger le pdf'. En cliquant dessus vous accédez à un fichier pdf imprimable rappelant vos informations ainsi que les résultats souhaité",
  },
  {
    question: "Question 4",
    answer: "answer 4",
  },
];

const Faq = () => {
  const [answers, setAnswers] = useState(Array(data.length).fill(false));

  const answerClickHandler = (index) => {
    const newAnswers = [...answers];
    newAnswers[index] = !newAnswers[index];
    setAnswers(newAnswers);
  };

  return (
    <div className="accordion-container  h-screen flex flex-col items-center justify-around w-calc">
      <div className="accordion  w-3/4 flex flex-col h-4/5 justify-around">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="font-bold text-white title bg-gradient-to-br from-teal-900 to-teal-700 rounded-md p-5 flex justify-between">
              <h3>{item.question}</h3>
              <div
                onClick={() => answerClickHandler(index)}
                className={!answers[index] ? "arrow -rotate-90 font-bold hover:cursor-pointer text-2xl ease-in-out duration-300 translate-x-2/4" : "arrow rotate-90 font-bold hover:cursor-pointer text-2xl ease-in-out duration-300 translate-x-2/4"}
              >
                {'<'}
              </div>
            </div>
            {answers[index] && <div className="content text-gray-700 p-5" >
    {item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;