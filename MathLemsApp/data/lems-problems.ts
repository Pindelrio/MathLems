import { Problem, Answer } from '@/types';

type Op = 'Suma' | 'Resta' | 'Multiplicació' | 'Divisió';

function mkAnswers(correct: Op, variant: number): Answer[] {
  const all: Op[] = ['Suma', 'Resta', 'Multiplicació', 'Divisió'];
  const others = all.filter((o) => o !== correct);
  const orders: Op[][] = [
    [correct,    others[0], others[1], others[2]],
    [others[0],  correct,   others[1], others[2]],
    [others[0],  others[1], correct,   others[2]],
    [others[1],  others[0], others[2], correct  ],
  ];
  return orders[variant % 4].map((content) => ({ content, isCorrect: content === correct }));
}

// Món 4 – Mar dels Problemes (Suma i Resta)
const WORLD4_PROBLEMS: Problem[] = [
  { id: 401, worldId: 4, statement: "En Joan té 3 pomes i l'Anna en té 4. Quantes pomes hi ha entre els dos?",               answers: mkAnswers('Suma',          0) },
  { id: 402, worldId: 4, statement: 'La Maria tenia 8 galetes i en va menjar 3. Quantes galetes li queden?',                 answers: mkAnswers('Resta',         1) },
  { id: 403, worldId: 4, statement: 'Al parc hi ha 5 nens i 6 nenes. Quants nens hi ha en total?',                          answers: mkAnswers('Suma',          2) },
  { id: 404, worldId: 4, statement: 'En Pere tenia 12 cromos i en va perdre 4. Quants cromos té ara?',                      answers: mkAnswers('Resta',         3) },
  { id: 405, worldId: 4, statement: "En una cistella hi ha 7 taronges i 5 pomes. Quantes fruites hi ha en total?",          answers: mkAnswers('Suma',          0) },
  { id: 406, worldId: 4, statement: 'La Sara tenia 15 caramels i en va donar 6 als amics. Quants li queden?',               answers: mkAnswers('Resta',         1) },
  { id: 407, worldId: 4, statement: 'Ahir vaig llegir 4 pàgines i avui 7 més. Quantes pàgines he llegit en total?',         answers: mkAnswers('Suma',          2) },
  { id: 408, worldId: 4, statement: "Hi havia 20 ocells a l'arbre i 8 van marxar. Quants en queden?",                       answers: mkAnswers('Resta',         3) },
  { id: 409, worldId: 4, statement: 'En Pau té 9 cotxets i en Lluc en té 5. Quants cotxets hi ha entre els dos?',           answers: mkAnswers('Suma',          0) },
  { id: 410, worldId: 4, statement: 'Tenia 18 boles al calaix i en vaig agafar 7. Quantes boles queden?',                   answers: mkAnswers('Resta',         1) },
  { id: 411, worldId: 4, statement: 'Al zoo hi ha 6 lleons i 4 tigres. Quants grans animals hi ha en total?',               answers: mkAnswers('Suma',          2) },
  { id: 412, worldId: 4, statement: 'En Tom tenia 25 punts i en va perdre 10. Quants punts té ara?',                        answers: mkAnswers('Resta',         3) },
  { id: 413, worldId: 4, statement: 'Van venir 8 convidats al matí i 6 més a la tarda. Quants convidats hi ha en total?',   answers: mkAnswers('Suma',          0) },
  { id: 414, worldId: 4, statement: 'Tenia 30 euros i vaig gastar 12. Quants euros em queden?',                             answers: mkAnswers('Resta',         1) },
  { id: 415, worldId: 4, statement: 'Al jardí hi ha 11 flors grogues i 9 de vermelles. Quantes flors hi ha en total?',      answers: mkAnswers('Suma',          2) },
  { id: 416, worldId: 4, statement: 'Vaig collir 16 maduixes i en vaig menjar 5. Quantes maduixes em queden?',              answers: mkAnswers('Resta',         3) },
  { id: 417, worldId: 4, statement: 'Al calaix hi ha 7 llapis vermells i 8 de blaus. Quants llapis hi ha en total?',        answers: mkAnswers('Suma',          0) },
  { id: 418, worldId: 4, statement: 'El tren tenia 50 passatgers i 20 van baixar. Quants passatgers queden?',               answers: mkAnswers('Resta',         1) },
  { id: 419, worldId: 4, statement: 'En Nil té 4 germanets i la Mia en té 3. Quants germanets hi ha entre els dos?',        answers: mkAnswers('Suma',          2) },
  { id: 420, worldId: 4, statement: 'Tenia 24 cartes i en vaig repartir 9 als amics. Quantes cartes em queden?',            answers: mkAnswers('Resta',         3) },
];

// Món 5 – Selva dels Enigmes (Suma, Resta i Multiplicació)
const WORLD5_PROBLEMS: Problem[] = [
  { id: 501, worldId: 5, statement: 'Tens 4 caixes i a cada caixa hi ha 3 pilotes. Quantes pilotes hi ha en total?',        answers: mkAnswers('Multiplicació', 0) },
  { id: 502, worldId: 5, statement: 'En Biel tenia 14 cromos i en va aconseguir 8 més. Quants en té ara?',                  answers: mkAnswers('Suma',          1) },
  { id: 503, worldId: 5, statement: 'Hi ha 5 files de cadires i a cada fila hi ha 6 cadires. Quantes cadires hi ha?',       answers: mkAnswers('Multiplicació', 2) },
  { id: 504, worldId: 5, statement: 'La tieta tenia 20 euros i en va gastar 7. Quants euros li queden?',                    answers: mkAnswers('Resta',         3) },
  { id: 505, worldId: 5, statement: 'Cada nen porta 2 sandvitxos i hi ha 7 nens. Quants sandvitxos hi ha en total?',        answers: mkAnswers('Multiplicació', 0) },
  { id: 506, worldId: 5, statement: 'Hi ha 13 nenes i 9 nens a la classe. Quants alumnes hi ha en total?',                  answers: mkAnswers('Suma',          1) },
  { id: 507, worldId: 5, statement: 'En Quim té 3 bosses i a cada bossa hi ha 8 caramels. Quants caramels té en total?',    answers: mkAnswers('Multiplicació', 2) },
  { id: 508, worldId: 5, statement: 'Al magatzem hi havia 35 caixes i van portar 12 més. Quantes caixes hi ha ara?',        answers: mkAnswers('Suma',          3) },
  { id: 509, worldId: 5, statement: 'Cada taula té 4 potes. Quantes potes hi ha a 6 taules?',                               answers: mkAnswers('Multiplicació', 0) },
  { id: 510, worldId: 5, statement: 'Tenia 40 punts i en vaig perdre 15. Quants punts em queden?',                          answers: mkAnswers('Resta',         1) },
  { id: 511, worldId: 5, statement: "Hi ha 5 paquets de galetes i a cada paquet n'hi ha 10. Quantes galetes hi ha?",        answers: mkAnswers('Multiplicació', 2) },
  { id: 512, worldId: 5, statement: "L'escola té 28 nens i 32 nenes. Quants alumnes hi ha en total?",                       answers: mkAnswers('Suma',          3) },
  { id: 513, worldId: 5, statement: 'Cada cotxe té 4 rodes. Quantes rodes tenen 8 cotxes?',                                 answers: mkAnswers('Multiplicació', 0) },
  { id: 514, worldId: 5, statement: 'En Roc tenia 50 monedes i en va perdre 23. Quantes monedes té ara?',                   answers: mkAnswers('Resta',         1) },
  { id: 515, worldId: 5, statement: 'Cada flor té 5 pètals i hi ha 6 flors al jardí. Quants pètals hi ha en total?',        answers: mkAnswers('Multiplicació', 2) },
  { id: 516, worldId: 5, statement: 'A la classe hi ha 24 nens i en surten 6 al passadís. Quants nens queden a classe?',    answers: mkAnswers('Resta',         3) },
  { id: 517, worldId: 5, statement: "Hi ha 5 dies d'escola per setmana. Quants dies d'escola hi ha en 4 setmanes?",         answers: mkAnswers('Multiplicació', 0) },
  { id: 518, worldId: 5, statement: 'En Joan té 17 segells i la Clara en té 25. Quants segells hi ha entre els dos?',       answers: mkAnswers('Suma',          1) },
  { id: 519, worldId: 5, statement: 'Hi ha 3 grups de nens i a cada grup hi ha 9 nens. Quants nens hi ha en total?',        answers: mkAnswers('Multiplicació', 2) },
  { id: 520, worldId: 5, statement: 'Tenia 60 pàgines per llegir i ja nhe llegit 35. Quantes pàgines em falten?',           answers: mkAnswers('Resta',         3) },
];

// Món 6 – Cova dels Misteris (Suma, Resta, Multiplicació i Divisió)
const WORLD6_PROBLEMS: Problem[] = [
  { id: 601, worldId: 6, statement: 'Tens 12 pomes i les vols repartir a parts iguals entre 4 nens. Quantes toca a cadascú?', answers: mkAnswers('Divisió',       0) },
  { id: 602, worldId: 6, statement: 'En Marc té 5 paquets i a cada paquet hi ha 4 xocolatines. Quantes té en total?',          answers: mkAnswers('Multiplicació', 1) },
  { id: 603, worldId: 6, statement: 'Hi ha 20 caramels per repartir entre 5 amics a parts iguals. Quants toca a cadascú?',     answers: mkAnswers('Divisió',       2) },
  { id: 604, worldId: 6, statement: 'Tenia 45 punts i en vaig guanyar 30 més. Quants punts tinc ara?',                         answers: mkAnswers('Suma',          3) },
  { id: 605, worldId: 6, statement: 'Tens 30 cartes iguals i les vols posar en grups de 6. Quants grups faràs?',               answers: mkAnswers('Divisió',       0) },
  { id: 606, worldId: 6, statement: 'La classe té 7 files de 4 pupitres. Quants pupitres hi ha en total?',                     answers: mkAnswers('Multiplicació', 1) },
  { id: 607, worldId: 6, statement: 'Hi ha 24 llaminadures per repartir entre 8 nens. Quantes llaminadures toca a cadascú?',   answers: mkAnswers('Divisió',       2) },
  { id: 608, worldId: 6, statement: 'Tenia 100 punts i en vaig perdre 38. Quants punts em queden?',                            answers: mkAnswers('Resta',         3) },
  { id: 609, worldId: 6, statement: 'Hi ha 36 nens i es posen de 9 en 9. Quantes files hi ha?',                                answers: mkAnswers('Divisió',       0) },
  { id: 610, worldId: 6, statement: 'Cada capsa té 6 ous i tens 7 capses. Quants ous tens en total?',                          answers: mkAnswers('Multiplicació', 1) },
  { id: 611, worldId: 6, statement: 'Tens 28 arbres i els vols plantar en 4 files iguals. Quants arbres per fila?',            answers: mkAnswers('Divisió',       2) },
  { id: 612, worldId: 6, statement: 'Al mercat hi ha 55 persones i en van marxar 22. Quantes persones queden?',                answers: mkAnswers('Resta',         3) },
  { id: 613, worldId: 6, statement: 'Tens 45 minuts per fer 9 tasques iguals. Quants minuts per a cada tasca?',                answers: mkAnswers('Divisió',       0) },
  { id: 614, worldId: 6, statement: 'Hi ha 8 caixes de mandarines i a cada caixa hi ha 9. Quantes mandarines hi ha?',          answers: mkAnswers('Multiplicació', 1) },
  { id: 615, worldId: 6, statement: 'Tens 32 pastilles i les vols posar en 8 bosses iguals. Quantes a cada bossa?',            answers: mkAnswers('Divisió',       2) },
  { id: 616, worldId: 6, statement: 'En Joan tenia 75 euros i va rebre 15 euros de regal. Quants euros té ara?',               answers: mkAnswers('Suma',          3) },
  { id: 617, worldId: 6, statement: 'Tens 63 fitxes i les poses de 7 en 7. Quants grups fas?',                                 answers: mkAnswers('Divisió',       0) },
  { id: 618, worldId: 6, statement: 'Cada granja té 6 vaques i hi ha 9 granges. Quantes vaques hi ha en total?',               answers: mkAnswers('Multiplicació', 1) },
  { id: 619, worldId: 6, statement: 'Hi ha 48 estudiants i es posen en 6 grups iguals. Quants estudiants per grup?',           answers: mkAnswers('Divisió',       2) },
  { id: 620, worldId: 6, statement: 'Tenia 82 punts i en vaig perdre 47. Quants punts em queden?',                             answers: mkAnswers('Resta',         3) },
];

export const LEMS_PROBLEMS: Problem[] = [
  ...WORLD4_PROBLEMS,
  ...WORLD5_PROBLEMS,
  ...WORLD6_PROBLEMS,
];

export function getLemsProblemsForWorld(worldId: number): Problem[] {
  return LEMS_PROBLEMS.filter((p) => p.worldId === worldId);
}
