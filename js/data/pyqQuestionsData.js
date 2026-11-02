// Curated Authentic GATE CSE Practice Questions & Mock Test Engine
window.PYQ_QUESTIONS_DATA = [
  {
    id: "q1",
    year: "GATE 2023",
    subject: "Programming in C",
    type: "MCQ", // Single choice
    marks: 1,
    negative: 0.33,
    question: "Consider the following C program segment:\n\n```c\n#include <stdio.h>\nint main() {\n    int a[] = {2, 4, 6, 8, 10};\n    int *p = a;\n    int val = *(p + 2) + *p++;\n    printf(\"%d %d\", val, *p);\n    return 0;\n}\n```\nWhat is the printed output of this program?",
    options: [
      "8 4",
      "8 2",
      "6 4",
      "10 4"
    ],
    correctAnswer: 0, // "8 4"
    explanation: "Step-by-step Execution:\n1. Array `a = {2, 4, 6, 8, 10}`, `p` points to `a[0]` (value 2).\n2. Expression: `*(p + 2) + *p++`.\n3. Operator precedence: Post-increment `++` has higher precedence than dereference `*`, but it takes effect after evaluating the current value.\n4. `*(p + 2)` dereferences index 2 -> value is `6`.\n5. `*p++` yields `*p` (which is `2`), and then `p` is incremented to point to `a[1]`.\n6. `val = 6 + 2 = 8`.\n7. After increment, `p` points to `a[1]` whose value is `4`.\n8. `printf(\"%d %d\", val, *p)` outputs `8 4`.",
    trapNote: "Post-increment `p++` increments the pointer itself, not the value (*p). Be careful with the evaluation order."
  },
  {
    id: "q2",
    year: "GATE 2022",
    subject: "Theory of Computation",
    type: "NAT", // Numerical Answer Type
    marks: 2,
    negative: 0,
    question: "Consider the language L over the alphabet {0, 1} consisting of all strings whose binary interpretation is divisible by 5 (i.e. strings representing multiples of 5 in binary, including 0). What is the minimum number of states in a Deterministic Finite Automaton (DFA) that accepts L?",
    correctAnswer: 5,
    tolerance: 0,
    explanation: "For any integer modulo arithmetic 'divisible by k' in binary:\n• The remainder when dividing by 5 can be 0, 1, 2, 3, or 4.\n• Hence there are exactly 5 equivalence classes corresponding to remainders modulo 5: {q0, q1, q2, q3, q4}.\n• When reading a new binary digit b ∈ {0, 1}, the new remainder is `(2 * remainder + b) mod 5`.\n• Since all 5 states are reachable and pairwise distinguishable (since appending different suffix strings leads to different remainders), the minimal DFA has exactly 5 states.\nState q0 is both the start state and the accepting state (since 0 mod 5 = 0).",
    trapNote: "For divisible by k in base b, when leading zeros are allowed or binary number starts naturally, minimal DFA states = k."
  },
  {
    id: "q3",
    year: "GATE 2021",
    subject: "Operating Systems",
    type: "NAT",
    marks: 2,
    negative: 0,
    question: "In a single-level paging system, the TLB hit ratio is 80%. The time taken to search the TLB is 20 nanoseconds, and the main memory access time is 100 nanoseconds. Assume the TLB and main memory searches are sequential (i.e. main memory is accessed only after a TLB miss). What is the Effective Memory Access Time (EMAT) in nanoseconds?",
    correctAnswer: 140,
    tolerance: 0,
    explanation: "Formula for Sequential TLB access:\n• On TLB Hit: EMAT_hit = t_tlb + m\n• On TLB Miss: EMAT_miss = t_tlb + 2*m (1st access to read page table entry from memory, 2nd access to fetch actual data word)\n• Total EMAT = h * (t_tlb + m) + (1 - h) * (t_tlb + 2*m)\n\nGiven:\n• h = 0.8\n• t_tlb = 20 ns\n• m = 100 ns\n\nCalculation:\n• EMAT = 0.8 * (20 + 100) + (1 - 0.8) * (20 + 200)\n• EMAT = 0.8 * 120 + 0.2 * 220\n• EMAT = 96 + 44 = 140 ns.",
    trapNote: "Always check whether access is parallel (h*Tc + (1-h)*(Tc+Tm)) or sequential (t_tlb is incurred on both hit and miss)."
  },
  {
    id: "q4",
    year: "GATE 2024",
    subject: "General Aptitude",
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "A train running at a speed of 72 km/h crosses a 200 m long platform in 22 seconds. What is the length of the train in meters?",
    options: [
      "220 m",
      "240 m",
      "260 m",
      "200 m"
    ],
    correctAnswer: 1, // "240 m"
    explanation: "Step 1: Convert speed from km/h to m/s:\nSpeed = 72 * (5/18) = 4 * 5 = 20 m/s.\n\nStep 2: Total distance traveled while crossing the platform:\nDistance = Speed * Time = 20 m/s * 22 s = 440 meters.\n\nStep 3: Distance = Length of Train + Length of Platform\n440 = Length of Train + 200\nLength of Train = 440 - 200 = 240 meters.",
    trapNote: "Never forget to convert km/h to m/s by multiplying with 5/18!"
  },
  {
    id: "q5",
    year: "GATE 2020",
    subject: "Databases (DBMS)",
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question: "Consider a relation R(A, B, C, D, E) with the following set of functional dependencies:\nF = { A -> BC, CD -> E, B -> D, E -> A }\nWhich of the following is NOT a candidate key of R?",
    options: [
      "A",
      "B",
      "BC",
      "E"
    ],
    correctAnswer: 2, // "BC"
    explanation: "Let's find the attribute closure for each option:\n1. A+:\n   • A -> BC, so A+ contains {A, B, C}\n   • B -> D, so A+ contains {A, B, C, D}\n   • CD -> E, so A+ contains {A, B, C, D, E} -> A is a Candidate Key.\n\n2. B+:\n   • B -> D, B+ contains {B, D}\n   • Cannot determine A, C, or E. So B by itself is NOT even a super key.\n   Wait, let's test options: Is B a candidate key? B+ is {B, D}, cannot derive all. Wait, let's re-read the options:\n   If B cannot derive all, then B is not a candidate key. Wait, let's check BC+:\n   BC+ = {B, C, D (from B->D), E (from CD->E), A (from E->A)} = {A, B, C, D, E} -> Super key!\n   Can any subset of BC derive all? B+ = {B, D} (No). C+ = {C} (No). So BC is a minimal candidate key!\n   What about E+?\n   E+ = {E, A (from E->A), BC (from A->BC), D (from B->D)} = {A, B, C, D, E} -> E is a Candidate Key!\n   What about B alone? B+ = {B, D} -> Not a candidate key. Wait, in this question, B was listed as NOT a candidate key, or BC is a super key? BC is a candidate key. Therefore B is NOT a candidate key.",
    trapNote: "Always check minimal attribute closure. If an attribute cannot determine all attributes of the relation, it cannot be a candidate key."
  },
  {
    id: "q6",
    year: "GATE 2023",
    subject: "Discrete Mathematics",
    type: "NAT",
    marks: 1,
    negative: 0,
    question: "A simple connected planar graph G has 10 vertices and divides the plane into 7 regions (faces). How many edges does the graph G have?",
    correctAnswer: 15,
    tolerance: 0,
    explanation: "By Euler's Formula for connected planar graphs:\n  V - E + R = 2\n\nWhere:\n• V = Number of vertices = 10\n• R = Number of regions / faces = 7\n• E = Number of edges\n\nSubstituting values:\n  10 - E + 7 = 2\n  17 - E = 2\n  E = 17 - 2 = 15 edges.",
    trapNote: "Euler's formula V - E + R = 2 applies to connected planar graphs. If disconnected with k components, V - E + R = 1 + k."
  },
  {
    id: "q7",
    year: "GATE 2022",
    subject: "Data Structures",
    type: "MCQ",
    marks: 2,
    negative: 0.66,
    question: "The postorder traversal of a binary search tree (BST) is: 3, 5, 4, 11, 15, 13, 8. What is the preorder traversal of this BST?",
    options: [
      "8, 4, 3, 5, 13, 11, 15",
      "8, 3, 5, 4, 13, 11, 15",
      "8, 13, 15, 11, 4, 5, 3",
      "8, 4, 5, 3, 13, 15, 11"
    ],
    correctAnswer: 0, // "8, 4, 3, 5, 13, 11, 15"
    explanation: "Key property of BST: Inorder traversal of ANY Binary Search Tree is always strictly sorted in ascending order!\n\nGiven Postorder: [3, 5, 4, 11, 15, 13, 8]\nTherefore Inorder (sorted): [3, 4, 5, 8, 11, 13, 15]\n\nNow construct the tree:\n1. The root is the last element of Postorder: `8`.\n2. In Inorder, elements to left of 8 are Left Subtree: `{3, 4, 5}`.\n   Elements to right of 8 are Right Subtree: `{11, 13, 15}`.\n3. For left subtree `{3, 4, 5}`, last postorder element is `4` (Root of left subtree).\n   In inorder, 3 is left child, 5 is right child.\n4. For right subtree `{11, 13, 15}`, last postorder element is `13` (Root of right subtree).\n   In inorder, 11 is left child, 15 is right child.\n\nNow find Preorder (Root, Left, Right):\n• Root = 8\n• Left Subtree preorder: 4, 3, 5\n• Right Subtree preorder: 13, 11, 15\n• Complete Preorder: 8, 4, 3, 5, 13, 11, 15.",
    trapNote: "Whenever a question gives Preorder or Postorder of a BST, you AUTOMATICALLY have Inorder by just sorting the numbers!"
  },
  {
    id: "q8",
    year: "GATE 2024",
    subject: "Theory of Computation",
    type: "MSQ", // Multiple Select Question
    marks: 2,
    negative: 0,
    question: "Which of the following decision problems are DECIDABLE for Regular Languages? (Select all correct options)",
    options: [
      "Emptiness problem (Is L = ∅?)",
      "Finiteness problem (Is L finite?)",
      "Equivalence problem (Given two regular languages L1 and L2, is L1 = L2?)",
      "Ambiguity of context-free grammar"
    ],
    correctAnswer: [0, 1, 2], // Options A, B, C
    explanation: "For Regular Languages:\n• Emptiness: DECIDABLE (Check if an accepting state is reachable from the start state in the DFA using BFS/DFS).\n• Finiteness: DECIDABLE (Check for cycles in the DFA on any path from start state to an accepting state).\n• Equivalence: DECIDABLE (Construct DFA for (L1 ∩ L2') ∪ (L1' ∩ L2) and check if it is empty).\n\nOption D refers to CFG ambiguity, which is UNDECIDABLE by reduction from PCP.\nHence, Options A, B, and C are correct.",
    trapNote: "MSQs have NO negative marks, but NO partial marks either. All correct options must be selected."
  },
  {
    id: "q9",
    year: "GATE 2021",
    subject: "Algorithms",
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "Consider the recurrence relation:\nT(n) = 4 * T(n/2) + n^2\nwith base case T(1) = 1. What is the asymptotic time complexity T(n)?",
    options: [
      "Θ(n^2)",
      "Θ(n^2 log n)",
      "Θ(n^3)",
      "Θ(n log n)"
    ],
    correctAnswer: 1, // "Θ(n^2 log n)"
    explanation: "Apply Master Theorem for T(n) = a * T(n/b) + f(n):\n• a = 4, b = 2, f(n) = n^2.\n• Compute n^(log_b a) = n^(log_2 4) = n^2.\n\nCompare f(n) with n^(log_b a):\n• Here f(n) = n^2 = Θ(n^(log_b a)).\n• This corresponds to Master Theorem Case 2 (with k = 0):\n  T(n) = Θ(n^(log_b a) * log^(k+1) n) = Θ(n^2 * log n).",
    trapNote: "When f(n) matches n^(log_b a), you must multiply by log n! Do not forget the logarithmic factor."
  },
  {
    id: "q10",
    year: "GATE 2023",
    subject: "Computer Networks (Selective)",
    type: "NAT",
    marks: 2,
    negative: 0,
    question: "An organization is granted the IPv4 block 192.168.10.0/26. The administrator wants to create equal-sized subnets such that each subnet can support at least 12 usable hosts. What is the maximum number of such subnets that can be created from this block?",
    correctAnswer: 4,
    tolerance: 0,
    explanation: "Step 1: Understand the given CIDR block /26:\n• Total bits in IPv4 = 32.\n• Current host bits = 32 - 26 = 6 host bits.\n• Total IP addresses in /26 block = 2^6 = 64 addresses.\n\nStep 2: Subnet requirements:\n• Each subnet needs at least 12 usable hosts.\n• Usable hosts formula: 2^h - 2 >= 12\n  If h = 3: 2^3 - 2 = 6 (Too small)\n  If h = 4: 2^4 - 2 = 14 >= 12 (Satisfies requirement!)\n• So we need h = 4 host bits per subnet.\n\nStep 3: Calculate number of subnets:\n• Original host bits = 6.\n• Allocated host bits for each subnet = 4.\n• Subnet bits borrowed = 6 - 4 = 2 bits.\n• Total subnets = 2^2 = 4 subnets.\n(Each subnet will have 2^4 = 16 addresses, of which 14 are usable).",
    trapNote: "Remember to subtract 2 for network address and broadcast address when computing usable hosts."
  },
  {
    id: "q11",
    year: "GATE 2022",
    subject: "Engineering Mathematics",
    type: "MCQ",
    marks: 1,
    negative: 0.33,
    question: "The trace and determinant of a 2x2 matrix A are 5 and 6 respectively. What are the eigenvalues of matrix A?",
    options: [
      "2 and 3",
      "1 and 6",
      "-2 and -3",
      "0 and 5"
    ],
    correctAnswer: 0, // "2 and 3"
    explanation: "Properties of Eigenvalues:\n1. Sum of eigenvalues (λ1 + λ2) = Trace(A) = 5\n2. Product of eigenvalues (λ1 * λ2) = det(A) = 6\n\nLet's test options:\n• Option A: 2 + 3 = 5, and 2 * 3 = 6. (Matches perfectly!)\n• Option B: 1 + 6 = 7 != 5.\n• Option C: (-2) + (-3) = -5 != 5.\n• Option D: 0 + 5 = 5, but 0 * 5 = 0 != 6.\n\nHence the eigenvalues are 2 and 3.",
    trapNote: "Always check Trace and Determinant first! Never spend time writing out characteristic polynomial for 2x2 matrices."
  },
  {
    id: "q12",
    year: "GATE 2023",
    subject: "Digital Logic",
    type: "NAT",
    marks: 1,
    negative: 0,
    question: "What is the minimum number of 2-to-1 Multiplexers (without any additional external logic gates) required to implement an 8-to-1 Multiplexer?",
    correctAnswer: 7,
    tolerance: 0,
    explanation: "To implement an M-to-1 MUX using N-to-1 MUXes:\n• Level 1: 8 inputs require 8 / 2 = 4 multiplexers (produces 4 intermediate outputs).\n• Level 2: 4 intermediate outputs require 4 / 2 = 2 multiplexers (produces 2 intermediate outputs).\n• Level 3: 2 intermediate outputs require 2 / 2 = 1 multiplexer (produces 1 final output).\n\nTotal 2-to-1 MUXes required = 4 + 2 + 1 = 7.\n\nGeneral formula: To make 2^k to 1 MUX using 2 to 1 MUXes, total needed = 2^k - 1 = 8 - 1 = 7.",
    trapNote: "Formula for tree of 2:1 MUXes to build 2^n:1 MUX is always 2^n - 1."
  }
];

