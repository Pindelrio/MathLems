import { Problem } from '@/types';

// Món 1 – Sumes i Restes (unitats i centenes)
const WORLD1_PROBLEMS: Problem[] = [
  { id: 101, worldId: 1, statement: 'Quant és 3 + 5?',     answers: [{ content: '8', isCorrect: true }, { content: '7', isCorrect: false }, { content: '9', isCorrect: false }, { content: '6', isCorrect: false }] },
  { id: 102, worldId: 1, statement: 'Quant és 12 - 4?',    answers: [{ content: '8', isCorrect: true }, { content: '7', isCorrect: false }, { content: '9', isCorrect: false }, { content: '6', isCorrect: false }] },
  { id: 103, worldId: 1, statement: 'Quant és 25 + 13?',   answers: [{ content: '38', isCorrect: true }, { content: '37', isCorrect: false }, { content: '39', isCorrect: false }, { content: '36', isCorrect: false }] },
  { id: 104, worldId: 1, statement: 'Quant és 50 - 17?',   answers: [{ content: '33', isCorrect: true }, { content: '32', isCorrect: false }, { content: '34', isCorrect: false }, { content: '43', isCorrect: false }] },
  { id: 105, worldId: 1, statement: 'Quant és 100 + 45?',  answers: [{ content: '145', isCorrect: true }, { content: '155', isCorrect: false }, { content: '140', isCorrect: false }, { content: '150', isCorrect: false }] },
  { id: 106, worldId: 1, statement: 'Quant és 200 - 75?',  answers: [{ content: '125', isCorrect: true }, { content: '115', isCorrect: false }, { content: '135', isCorrect: false }, { content: '120', isCorrect: false }] },
  { id: 107, worldId: 1, statement: 'Quant és 47 + 36?',   answers: [{ content: '83', isCorrect: true }, { content: '82', isCorrect: false }, { content: '84', isCorrect: false }, { content: '73', isCorrect: false }] },
  { id: 108, worldId: 1, statement: 'Quant és 91 - 28?',   answers: [{ content: '63', isCorrect: true }, { content: '62', isCorrect: false }, { content: '64', isCorrect: false }, { content: '53', isCorrect: false }] },
  { id: 109, worldId: 1, statement: 'Quant és 150 + 250?', answers: [{ content: '400', isCorrect: true }, { content: '350', isCorrect: false }, { content: '450', isCorrect: false }, { content: '300', isCorrect: false }] },
  { id: 110, worldId: 1, statement: 'Quant és 300 - 125?', answers: [{ content: '175', isCorrect: true }, { content: '165', isCorrect: false }, { content: '185', isCorrect: false }, { content: '170', isCorrect: false }] },
  { id: 111, worldId: 1, statement: 'Quant és 8 + 9?',     answers: [{ content: '17', isCorrect: true }, { content: '16', isCorrect: false }, { content: '18', isCorrect: false }, { content: '15', isCorrect: false }] },
  { id: 112, worldId: 1, statement: 'Quant és 30 - 14?',   answers: [{ content: '16', isCorrect: true }, { content: '15', isCorrect: false }, { content: '17', isCorrect: false }, { content: '14', isCorrect: false }] },
  { id: 113, worldId: 1, statement: 'Quant és 64 + 27?',   answers: [{ content: '91', isCorrect: true }, { content: '90', isCorrect: false }, { content: '92', isCorrect: false }, { content: '81', isCorrect: false }] },
  { id: 114, worldId: 1, statement: 'Quant és 180 - 95?',  answers: [{ content: '85', isCorrect: true }, { content: '75', isCorrect: false }, { content: '95', isCorrect: false }, { content: '80', isCorrect: false }] },
  { id: 115, worldId: 1, statement: 'Quant és 500 + 375?', answers: [{ content: '875', isCorrect: true }, { content: '865', isCorrect: false }, { content: '885', isCorrect: false }, { content: '850', isCorrect: false }] },
  { id: 116, worldId: 1, statement: 'Quant és 6 + 7?',     answers: [{ content: '13', isCorrect: true }, { content: '12', isCorrect: false }, { content: '14', isCorrect: false }, { content: '11', isCorrect: false }] },
  { id: 117, worldId: 1, statement: 'Quant és 45 - 19?',   answers: [{ content: '26', isCorrect: true }, { content: '25', isCorrect: false }, { content: '27', isCorrect: false }, { content: '24', isCorrect: false }] },
  { id: 118, worldId: 1, statement: 'Quant és 73 + 18?',   answers: [{ content: '91', isCorrect: true }, { content: '90', isCorrect: false }, { content: '92', isCorrect: false }, { content: '81', isCorrect: false }] },
  { id: 119, worldId: 1, statement: 'Quant és 400 - 165?', answers: [{ content: '235', isCorrect: true }, { content: '225', isCorrect: false }, { content: '245', isCorrect: false }, { content: '230', isCorrect: false }] },
  { id: 120, worldId: 1, statement: 'Quant és 250 + 150?', answers: [{ content: '400', isCorrect: true }, { content: '350', isCorrect: false }, { content: '450', isCorrect: false }, { content: '300', isCorrect: false }] },
];

// Món 2 – Sumes, Restes i Multiplicacions per unitats
const WORLD2_PROBLEMS: Problem[] = [
  { id: 201, worldId: 2, statement: 'Quant és 23 × 2?',   answers: [{ content: '46', isCorrect: true }, { content: '45', isCorrect: false }, { content: '47', isCorrect: false }, { content: '36', isCorrect: false }] },
  { id: 202, worldId: 2, statement: 'Quant és 11 × 3?',   answers: [{ content: '33', isCorrect: true }, { content: '32', isCorrect: false }, { content: '34', isCorrect: false }, { content: '23', isCorrect: false }] },
  { id: 203, worldId: 2, statement: 'Quant és 15 × 4?',   answers: [{ content: '60', isCorrect: true }, { content: '55', isCorrect: false }, { content: '65', isCorrect: false }, { content: '50', isCorrect: false }] },
  { id: 204, worldId: 2, statement: 'Quant és 34 + 48?',  answers: [{ content: '82', isCorrect: true }, { content: '81', isCorrect: false }, { content: '83', isCorrect: false }, { content: '72', isCorrect: false }] },
  { id: 205, worldId: 2, statement: 'Quant és 97 - 38?',  answers: [{ content: '59', isCorrect: true }, { content: '58', isCorrect: false }, { content: '60', isCorrect: false }, { content: '49', isCorrect: false }] },
  { id: 206, worldId: 2, statement: 'Quant és 12 × 5?',   answers: [{ content: '60', isCorrect: true }, { content: '55', isCorrect: false }, { content: '65', isCorrect: false }, { content: '50', isCorrect: false }] },
  { id: 207, worldId: 2, statement: 'Quant és 21 × 3?',   answers: [{ content: '63', isCorrect: true }, { content: '62', isCorrect: false }, { content: '64', isCorrect: false }, { content: '53', isCorrect: false }] },
  { id: 208, worldId: 2, statement: 'Quant és 125 + 75?', answers: [{ content: '200', isCorrect: true }, { content: '190', isCorrect: false }, { content: '210', isCorrect: false }, { content: '195', isCorrect: false }] },
  { id: 209, worldId: 2, statement: 'Quant és 14 × 2?',   answers: [{ content: '28', isCorrect: true }, { content: '27', isCorrect: false }, { content: '29', isCorrect: false }, { content: '26', isCorrect: false }] },
  { id: 210, worldId: 2, statement: 'Quant és 300 - 145?',answers: [{ content: '155', isCorrect: true }, { content: '145', isCorrect: false }, { content: '165', isCorrect: false }, { content: '150', isCorrect: false }] },
  { id: 211, worldId: 2, statement: 'Quant és 32 × 3?',   answers: [{ content: '96', isCorrect: true }, { content: '95', isCorrect: false }, { content: '97', isCorrect: false }, { content: '86', isCorrect: false }] },
  { id: 212, worldId: 2, statement: 'Quant és 45 + 57?',  answers: [{ content: '102', isCorrect: true }, { content: '101', isCorrect: false }, { content: '103', isCorrect: false }, { content: '92', isCorrect: false }] },
  { id: 213, worldId: 2, statement: 'Quant és 13 × 4?',   answers: [{ content: '52', isCorrect: true }, { content: '51', isCorrect: false }, { content: '53', isCorrect: false }, { content: '42', isCorrect: false }] },
  { id: 214, worldId: 2, statement: 'Quant és 200 - 63?', answers: [{ content: '137', isCorrect: true }, { content: '127', isCorrect: false }, { content: '147', isCorrect: false }, { content: '130', isCorrect: false }] },
  { id: 215, worldId: 2, statement: 'Quant és 22 × 4?',   answers: [{ content: '88', isCorrect: true }, { content: '87', isCorrect: false }, { content: '89', isCorrect: false }, { content: '78', isCorrect: false }] },
  { id: 216, worldId: 2, statement: 'Quant és 67 + 85?',  answers: [{ content: '152', isCorrect: true }, { content: '151', isCorrect: false }, { content: '153', isCorrect: false }, { content: '142', isCorrect: false }] },
  { id: 217, worldId: 2, statement: 'Quant és 31 × 3?',   answers: [{ content: '93', isCorrect: true }, { content: '92', isCorrect: false }, { content: '94', isCorrect: false }, { content: '83', isCorrect: false }] },
  { id: 218, worldId: 2, statement: 'Quant és 450 - 175?',answers: [{ content: '275', isCorrect: true }, { content: '265', isCorrect: false }, { content: '285', isCorrect: false }, { content: '270', isCorrect: false }] },
  { id: 219, worldId: 2, statement: 'Quant és 16 × 5?',   answers: [{ content: '80', isCorrect: true }, { content: '75', isCorrect: false }, { content: '85', isCorrect: false }, { content: '70', isCorrect: false }] },
  { id: 220, worldId: 2, statement: 'Quant és 24 × 3?',   answers: [{ content: '72', isCorrect: true }, { content: '71', isCorrect: false }, { content: '73', isCorrect: false }, { content: '62', isCorrect: false }] },
];

// Món 3 – Sumes, Restes, Multiplicacions i Divisions per unitats
const WORLD3_PROBLEMS: Problem[] = [
  { id: 301, worldId: 3, statement: 'Quant és 44 ÷ 2?',   answers: [{ content: '22', isCorrect: true }, { content: '21', isCorrect: false }, { content: '23', isCorrect: false }, { content: '24', isCorrect: false }] },
  { id: 302, worldId: 3, statement: 'Quant és 15 ÷ 3?',   answers: [{ content: '5', isCorrect: true }, { content: '4', isCorrect: false }, { content: '6', isCorrect: false }, { content: '3', isCorrect: false }] },
  { id: 303, worldId: 3, statement: 'Quant és 36 ÷ 4?',   answers: [{ content: '9', isCorrect: true }, { content: '8', isCorrect: false }, { content: '10', isCorrect: false }, { content: '7', isCorrect: false }] },
  { id: 304, worldId: 3, statement: 'Quant és 25 × 4?',   answers: [{ content: '100', isCorrect: true }, { content: '90', isCorrect: false }, { content: '110', isCorrect: false }, { content: '95', isCorrect: false }] },
  { id: 305, worldId: 3, statement: 'Quant és 72 ÷ 8?',   answers: [{ content: '9', isCorrect: true }, { content: '8', isCorrect: false }, { content: '10', isCorrect: false }, { content: '7', isCorrect: false }] },
  { id: 306, worldId: 3, statement: 'Quant és 500 - 237?',answers: [{ content: '263', isCorrect: true }, { content: '253', isCorrect: false }, { content: '273', isCorrect: false }, { content: '260', isCorrect: false }] },
  { id: 307, worldId: 3, statement: 'Quant és 48 ÷ 6?',   answers: [{ content: '8', isCorrect: true }, { content: '7', isCorrect: false }, { content: '9', isCorrect: false }, { content: '6', isCorrect: false }] },
  { id: 308, worldId: 3, statement: 'Quant és 33 × 3?',   answers: [{ content: '99', isCorrect: true }, { content: '98', isCorrect: false }, { content: '100', isCorrect: false }, { content: '89', isCorrect: false }] },
  { id: 309, worldId: 3, statement: 'Quant és 90 ÷ 9?',   answers: [{ content: '10', isCorrect: true }, { content: '9', isCorrect: false }, { content: '11', isCorrect: false }, { content: '8', isCorrect: false }] },
  { id: 310, worldId: 3, statement: 'Quant és 275 + 325?',answers: [{ content: '600', isCorrect: true }, { content: '590', isCorrect: false }, { content: '610', isCorrect: false }, { content: '595', isCorrect: false }] },
  { id: 311, worldId: 3, statement: 'Quant és 56 ÷ 7?',   answers: [{ content: '8', isCorrect: true }, { content: '7', isCorrect: false }, { content: '9', isCorrect: false }, { content: '6', isCorrect: false }] },
  { id: 312, worldId: 3, statement: 'Quant és 42 × 2?',   answers: [{ content: '84', isCorrect: true }, { content: '83', isCorrect: false }, { content: '85', isCorrect: false }, { content: '74', isCorrect: false }] },
  { id: 313, worldId: 3, statement: 'Quant és 81 ÷ 9?',   answers: [{ content: '9', isCorrect: true }, { content: '8', isCorrect: false }, { content: '10', isCorrect: false }, { content: '7', isCorrect: false }] },
  { id: 314, worldId: 3, statement: 'Quant és 700 - 348?',answers: [{ content: '352', isCorrect: true }, { content: '342', isCorrect: false }, { content: '362', isCorrect: false }, { content: '350', isCorrect: false }] },
  { id: 315, worldId: 3, statement: 'Quant és 64 ÷ 8?',   answers: [{ content: '8', isCorrect: true }, { content: '7', isCorrect: false }, { content: '9', isCorrect: false }, { content: '6', isCorrect: false }] },
  { id: 316, worldId: 3, statement: 'Quant és 35 × 3?',   answers: [{ content: '105', isCorrect: true }, { content: '100', isCorrect: false }, { content: '110', isCorrect: false }, { content: '95', isCorrect: false }] },
  { id: 317, worldId: 3, statement: 'Quant és 120 ÷ 4?',  answers: [{ content: '30', isCorrect: true }, { content: '25', isCorrect: false }, { content: '35', isCorrect: false }, { content: '40', isCorrect: false }] },
  { id: 318, worldId: 3, statement: 'Quant és 450 + 275?',answers: [{ content: '725', isCorrect: true }, { content: '715', isCorrect: false }, { content: '735', isCorrect: false }, { content: '720', isCorrect: false }] },
  { id: 319, worldId: 3, statement: 'Quant és 99 ÷ 9?',   answers: [{ content: '11', isCorrect: true }, { content: '10', isCorrect: false }, { content: '12', isCorrect: false }, { content: '9', isCorrect: false }] },
  { id: 320, worldId: 3, statement: 'Quant és 27 × 3?',   answers: [{ content: '81', isCorrect: true }, { content: '80', isCorrect: false }, { content: '82', isCorrect: false }, { content: '71', isCorrect: false }] },
];

export const ALL_PROBLEMS: Problem[] = [
  ...WORLD1_PROBLEMS,
  ...WORLD2_PROBLEMS,
  ...WORLD3_PROBLEMS,
];

export function getProblemsForWorld(worldId: number): Problem[] {
  return ALL_PROBLEMS.filter((p) => p.worldId === worldId);
}
