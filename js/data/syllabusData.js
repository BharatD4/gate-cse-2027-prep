// GATE CSE Syllabus Breakdown categorized by 3-Month Qualification Priority (Tiers)
window.SYLLABUS_DATA = [
  // ================= TIER 1: HIGH ROI (DO-OR-DIE) =================
  {
    id: "ga",
    name: "General Aptitude",
    tier: 1,
    tierLabel: "Tier 1: High ROI (Must Master)",
    avgMarks: 15,
    cutoffImpact: "CRITICAL (Accounts for ~50% of qualifying marks alone)",
    difficulty: "Easy to Moderate",
    estimatedHours: 35,
    color: "#10b981", // Emerald
    mustDoTopics: [
      "Quantitative Aptitude: Percentages, Profit & Loss, Ratio & Proportion",
      "Time, Speed & Distance, Relative Speed, Trains & Platforms",
      "Time & Work, Pipes & Cisterns (LCM method)",
      "Spatial Aptitude: Mirror images, Paper folding, 2D/3D rotations",
      "Verbal Ability: Vocabulary in context, Sentence completion, Grammar",
      "Logical Reasoning: Blood relations, Seating arrangement, Syllogisms"
    ],
    avoidTopics: [
      "Very lengthy reading comprehension passages (time traps during exam)",
      "Rare vocabulary flashcards that have low probability of recurrence"
    ],
    strategyAdvice: "Aptitude gives 15 marks with the lowest difficulty in the entire paper. Target 12-14 marks. Spend 30 minutes daily solving 5-10 questions."
  },
  {
    id: "dm",
    name: "Discrete Mathematics",
    tier: 1,
    tierLabel: "Tier 1: High ROI (Must Master)",
    avgMarks: 8,
    cutoffImpact: "VERY HIGH (Guaranteed predictable questions)",
    difficulty: "Moderate",
    estimatedHours: 40,
    color: "#06b6d4", // Cyan
    mustDoTopics: [
      "Propositional Logic: Truth tables, Logical equivalences (p->q == ~p v q)",
      "Rules of Inference & Validity of arguments",
      "First Order Predicate Logic: Quantifiers (∀, ∃) & English statement translation",
      "Set Theory & Relations: Reflexive, Symmetric, Transitive, Equivalence & Counting relations",
      "Pigeonhole Principle (PHP) & Combinatorics (Stars and bars distribution)",
      "Graph Theory: Handshaking lemma, Planar graphs (Euler formula V-E+R=2), Trees",
      "Eulerian circuit/path conditions & Chromatic numbers (Bipartite graphs)"
    ],
    avoidTopics: [
      "Obscure abstract algebraic group proofs (just know basic group definition & Lagrange's theorem)",
      "Advanced generating functions"
    ],
    strategyAdvice: "Discrete Math has zero ambiguity. Either you know the theorem or you don't. Handshaking lemma, Planar graphs, and Logic translations give free marks every year."
  },
  {
    id: "pds",
    name: "Programming & Data Structures",
    tier: 1,
    tierLabel: "Tier 1: High ROI (Must Master)",
    avgMarks: 9,
    cutoffImpact: "VERY HIGH (Direct C code output & Tree traversals)",
    difficulty: "Easy to Moderate",
    estimatedHours: 42,
    color: "#3b82f6", // Blue
    mustDoTopics: [
      "C Pointers, Pointer arithmetic, Dereferencing (*p, *(p+i)), 2D array pointers",
      "Operator precedence and associativity (*p++, (*p)++, ++*p)",
      "Recursion tracing with static and global variables",
      "Row-major and Column-major 2D/3D array memory address calculation",
      "Stacks: Infix to Postfix conversion, Postfix evaluation, Minimum stack size",
      "Queues: Circular queue full/empty conditions: (rear+1)%size == front",
      "Binary Trees: Traversals (Inorder, Preorder, Postorder), Unique tree construction",
      "Binary Search Trees (BST): Insertion, Deletion, Inorder traversal sorted property",
      "Binary Heaps: Min/Max heap properties, Heapify algorithm (O(N) build time), Insertion/Deletion"
    ],
    avoidTopics: [
      "Complex AVL tree multi-rotations or Red-Black tree deletion cases (only basic height bound is asked)",
      "Splay trees, B-tree complex splits (keep B-trees for DBMS index basics)"
    ],
    strategyAdvice: "Trace C programs on rough paper with neat boxes for variables. Never guess output. Binary tree properties are pure direct marks."
  },
  {
    id: "toc",
    name: "Theory of Computation",
    tier: 1,
    tierLabel: "Tier 1: High ROI (Must Master)",
    avgMarks: 8,
    cutoffImpact: "VERY HIGH (Algorithmic & Highest Scoring)",
    difficulty: "Moderate",
    estimatedHours: 40,
    color: "#8b5cf6", // Purple
    mustDoTopics: [
      "Deterministic Finite Automata (DFA) construction & String acceptance",
      "Minimal DFA: Myhill-Nerode table filling & Dead state counting",
      "Regular Expressions and Arden's Theorem",
      "Closure Properties Table (Regular, DCFL, CFL, CSL, Recursive, RE)",
      "Decidability & Undecidability Master Table (Membership, Emptiness, Equivalence)",
      "Chomsky Hierarchy: Types 0, 1, 2, 3 language relationships",
      "Context Free Grammars (CFG): Ambiguity checking & Pushdown Automata (PDA) basics"
    ],
    summary: "TOC questions have zero calculations. Once you know the Decidability table and Minimal DFA rules, you can score 7 out of 8 marks in under 10 minutes.",
    avoidTopics: [
      "Complex Turing Machine multi-tape state transition diagrams",
      "Advanced Post Correspondence Problem (PCP) complex reduction proofs"
    ],
    strategyAdvice: "Memorize the Decidability table and Closure properties table by heart. They are repeated almost every single year."
  },
  {
    id: "os",
    name: "Operating Systems",
    tier: 1,
    tierLabel: "Tier 1: High ROI (Must Master)",
    avgMarks: 8,
    cutoffImpact: "HIGH (High predictability of numericals)",
    difficulty: "Moderate",
    estimatedHours: 40,
    color: "#ec4899", // Pink
    mustDoTopics: [
      "CPU Scheduling: FCFS, SJF (SRTF), Round Robin, Priority (Gantt Chart, TAT, WT)",
      "Process Synchronization: Critical Section requirements, Peterson's algorithm",
      "Semaphores: Counting and Binary semaphore value tracing, Producer-Consumer",
      "Deadlocks: 4 Conditions, Resource Allocation Graph (RAG), Banker's Safety Algorithm",
      "Memory Management: Paging address translation (Page size = Frame size)",
      "Virtual Memory: Effective Memory Access Time (EMAT) with TLB, Multi-level paging",
      "Page Replacement: FIFO, LRU, Optimal (Belady's Anomaly)",
      "Disk Scheduling: SSTF, SCAN, C-SCAN, LOOK, C-LOOK head movements"
    ],
    avoidTopics: [
      "Deep UNIX kernel internal data structures and low-level device driver theory",
      "Complex file system allocation tables (FAT/Inodes beyond basic direct/indirect pointer counts)"
    ],
    strategyAdvice: "OS numericals (CPU scheduling, Banker's algorithm, Paging EMAT, Disk scheduling) are standard formulas. Zero negative marks if calculated carefully."
  },
  {
    id: "dbms",
    name: "Databases (DBMS)",
    tier: 1,
    tierLabel: "Tier 1: High ROI (Must Master)",
    avgMarks: 7,
    cutoffImpact: "HIGH (Standard Relational Algebra & Normalization)",
    difficulty: "Moderate",
    estimatedHours: 38,
    color: "#f59e0b", // Amber
    mustDoTopics: [
      "ER Model: Entity, Relationship cardinality (1-1, 1-N, M-N) & Minimum tables conversion",
      "Functional Dependencies, Attribute Closure (X+) & Finding all Candidate Keys",
      "Normalization: 1NF, 2NF, 3NF, BCNF verification",
      "Decomposition: Lossless Join check & Dependency Preservation check",
      "Transactions & ACID properties, Conflict Serializability (Precedence Graph cycle test)",
      "Recoverable, Cascadeless, and Strict Schedules",
      "Two-Phase Locking (2PL) protocol properties",
      "Relational Algebra operators & SQL Queries (GROUP BY, HAVING, subqueries)"
    ],
    avoidTopics: [
      "Query optimization cost estimation trees",
      "Advanced distributed database transactions and multi-version 2PL edge cases"
    ],
    strategyAdvice: "Candidate key calculation and Precedence graph cycle detection are free marks. Practice finding candidate keys using attribute closure until it takes under 60 seconds."
  },

  // ================= TIER 2: SELECTIVE SCORING (MODERATE EFFORT) =================
  {
    id: "algo",
    name: "Algorithms",
    tier: 2,
    tierLabel: "Tier 2: Selective Scoring",
    avgMarks: 7,
    cutoffImpact: "MODERATE TO HIGH (Master Theorem & Standard Graph Algos)",
    difficulty: "Moderate to Challenging",
    estimatedHours: 35,
    color: "#6366f1", // Indigo
    mustDoTopics: [
      "Asymptotic notations: Big-O, Big-Omega, Big-Theta growth rate comparisons",
      "Master Theorem for Divide & Conquer recurrences T(n) = aT(n/b) + f(n)",
      "Sorting Algorithms: Merge Sort, Quick Sort, Heap Sort (Time, Space, Stability, In-place)",
      "Greedy Algorithms: Huffman Coding (Prefix code & length), Kruskal's & Prim's MST",
      "Graph Traversal: BFS (Queue, Shortest unweighted path) & DFS (Cycle detection via Back edge)",
      "Topological Sorting for Directed Acyclic Graphs (DAG)",
      "Single Source Shortest Path: Dijkstra (No negative edges!) & Bellman-Ford (O(VE))",
      "Dynamic Programming: 0/1 Knapsack recurrence & Longest Common Subsequence (LCS)"
    ],
    avoidTopics: [
      "Complex DP problems like TSP, Travelling Salesman, or advanced string edit distances",
      "NP-Completeness detailed polynomial reductions (just know definitions of P, NP, NP-Complete, NP-Hard)"
    ],
    strategyAdvice: "Stick to Master Theorem, Sorting comparison table, and standard Greedy/Graph algorithms. Do not waste days on extreme DP variations."
  },
  {
    id: "dl",
    name: "Digital Logic",
    tier: 2,
    tierLabel: "Tier 2: Selective Scoring",
    avgMarks: 5,
    cutoffImpact: "MODERATE (Small syllabus, High accuracy)",
    difficulty: "Easy",
    estimatedHours: 25,
    color: "#14b8a6", // Teal
    mustDoTopics: [
      "Boolean Algebra laws, De Morgan's theorems, Minimization",
      "K-Maps (2, 3, 4 variables), Prime Implicants & Essential Prime Implicants",
      "Multiplexers (MUX): Function implementation using 2:1, 4:1, 8:1 MUX",
      "Adders: Half Adder, Full Adder equations & Carry propagation",
      "Flip-Flops: SR, JK, D, T characteristic equations (D: Q+=D, T: Q+=T⊕Q)",
      "Counters: Mod-N counter state tracing & minimum flip-flops calculation ⌈log2 N⌉"
    ],
    avoidTopics: [
      "Floating point standard IEEE 754 complex representation (cover in COA if needed)",
      "Complex asynchronous ripple counter clock skew propagation delay formulas"
    ],
    strategyAdvice: "Digital Logic has the smallest syllabus among all technical subjects. K-Maps, MUX, and Counters give quick 4-5 marks with very low effort."
  },
  {
    id: "em",
    name: "Engineering Math (Linear Algebra & Probability)",
    tier: 2,
    tierLabel: "Tier 2: Selective Scoring",
    avgMarks: 6,
    cutoffImpact: "MODERATE (High precision numericals)",
    difficulty: "Moderate",
    estimatedHours: 30,
    color: "#f97316", // Orange
    mustDoTopics: [
      "Linear Algebra: Matrix operations, Determinants, Inverse properties",
      "Rank of a matrix & System of Linear Equations (AX = B consistency conditions)",
      "Eigenvalues & Eigenvectors: Trace = Sum of λ, Det = Product of λ, Cayley-Hamilton theorem",
      "Probability: Conditional Probability & Bayes' Theorem",
      "Random Variables: Mean (Expectation), Variance properties",
      "Probability Distributions: Binomial (np, npq) & Poisson (Mean = Variance = λ)",
      "Calculus: Limits & L'Hôpital's Rule, Maxima and Minima of single variable"
    ],
    avoidTopics: [
      "Double and Triple integrals, Vector calculus (not in CSE syllabus anyway)",
      "Complex differential equations (CSE only tests very basic or none)"
    ],
    strategyAdvice: "Eigenvalues shortcuts and Bayes' theorem will guarantee 3-4 marks with simple arithmetic. Never solve cubic polynomials manually; use Trace and Determinant properties!"
  },

  // ================= TIER 3: CHERRY-PICK HIGH-YIELD TOPICS ONLY =================
  {
    id: "cn",
    name: "Computer Networks (Selective)",
    tier: 3,
    tierLabel: "Tier 3: Cherry-Pick High-Yields (Do Not Over-Invest)",
    avgMarks: 6,
    cutoffImpact: "LOW-MODERATE (Massive syllabus, only cherry-pick)",
    difficulty: "Challenging (Vast syllabus)",
    estimatedHours: 20,
    color: "#e11d48", // Rose
    mustDoTopics: [
      "IPv4 Addressing & CIDR Subnetting (Network address, Broadcast address, Usable hosts)",
      "Sliding Window Protocols: Stop-and-Wait efficiency = 1 / (1 + 2a)",
      "Go-Back-N & Selective Repeat window sizes & sequence number bounds (N+1 vs 2N)",
      "TCP Congestion Control: Slow Start, Congestion Avoidance, Threshold adjustments",
      "Basic routing: Distance Vector (Count to infinity) vs Link State (Dijkstra)"
    ],
    avoidTopics: [
      "Memorizing obscure RFC header flags and byte offsets",
      "Deep cryptography, RSA encryption math, AES/DES internals (huge time sink)",
      "Wireless 802.11 standards, CSMA/CA binary exponential backoff proofs"
    ],
    strategyAdvice: "Computer Networks syllabus is gigantic. If you try to study the whole book in 3 months, you will fail. ONLY do Subnetting, Sliding Window, and TCP Congestion Control. That gets you 4 out of 6 marks!"
  },
  {
    id: "coa",
    name: "COA (Selective)",
    tier: 3,
    tierLabel: "Tier 3: Cherry-Pick High-Yields (Do Not Over-Invest)",
    avgMarks: 6,
    cutoffImpact: "LOW-MODERATE (High complexity, pick 2 topics)",
    difficulty: "Challenging",
    estimatedHours: 20,
    color: "#d97706", // Brown/Amber
    mustDoTopics: [
      "Instruction Pipelining: Speedup formula S = Non-pipelined time / Pipelined time",
      "Pipeline Hazards: Structural, Data (RAW, WAR, WAW) & Control hazards (Stall cycles)",
      "Cache Memory Mapping: Direct, Fully Associative, and k-Way Set Associative address breakdown",
      "Cache AMAT: Average Memory Access Time = Tc + (1 - h) * Tm"
    ],
    avoidTopics: [
      "Complex micro-programmed control unit timing diagrams and datapath design",
      "I/O interfaces (DMA cycle stealing, interrupt controllers detailed hardware)"
    ],
    strategyAdvice: "Only study Pipelining Speedup and Cache Memory Mapping. These two topics make up 70% of all COA questions in GATE and are formula-based numericals."
  },
  {
    id: "cd",
    name: "Compiler Design (Selective)",
    tier: 3,
    tierLabel: "Tier 3: Cherry-Pick High-Yields (Do Not Over-Invest)",
    avgMarks: 4,
    cutoffImpact: "LOW (Small subject, very selective)",
    difficulty: "Moderate",
    estimatedHours: 15,
    color: "#64748b", // Slate
    mustDoTopics: [
      "Lexical Analysis: Token counting in C code snippets (ignoring comments/whitespace)",
      "Computation of FIRST and FOLLOW sets of non-terminals",
      "LL(1) Grammar condition check (No conflict in parsing table)",
      "Bottom-up parsers power hierarchy: LR(0) < SLR(1) < LALR(1) < CLR(1)"
    ],
    avoidTopics: [
      "Manual construction of huge 50-state CLR(1) parsing tables",
      "Target code generation, register allocation algorithms, DAG optimization"
    ],
    strategyAdvice: "Compiler Design is closely related to TOC. Learn Token Counting and FIRST/FOLLOW. That's enough for 2-3 marks in 15 hours of study."
  }
];

