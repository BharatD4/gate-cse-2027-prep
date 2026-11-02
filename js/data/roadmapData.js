// 90-Day Sprint Roadmap for GATE CSE 2027 (Optimized for 3 Months Qualification & 45+ Marks)
window.ROADMAP_DATA = [
  // ================= PHASE 1: FOUNDATION & HIGH-YIELD (DAYS 1-30) =================
  {
    day: 1,
    phase: 1,
    subject: "Programming in C",
    title: "C Pointers, Memory Layout & Precedence",
    hours: 4,
    tier: 1,
    topics: [
      "Pointer basics, pointer arithmetic, void* and function pointers",
      "Memory layout: Stack, Heap, Data, Text segment",
      "Operator precedence and associativity traps (e.g. *p++, (*p)++)",
      "GATE PYQ focus: Pointer arithmetic and array indexing"
    ],
    summary: "Pointers and operator precedence give 1-2 direct marks in every single GATE exam. Master dereferencing and post-increment rules.",
    pyqTarget: "Solve 10 questions on C Pointers (GATE 2012-2024)",
    resourceName: "Gate Smashers C Programming Playlist",
    resourceUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmiGl_ndKXJ439eqUXqiqO"
  },
  {
    day: 2,
    phase: 1,
    subject: "Programming in C",
    title: "Recursion & Static Variables Tracing",
    hours: 4,
    tier: 1,
    topics: [
      "Static variables in recursion (state persistence across stack frames)",
      "Recursion tree method for output tracing",
      "Passing arrays to functions & 2D array pointer notation (a[i][j] vs *(*(a+i)+j))",
      "String manipulation functions (strlen, strcpy, strcmp behavior)"
    ],
    summary: "Questions asking 'What does this recursive function print?' are guaranteed marks if you draw the recursive call stack systematically.",
    pyqTarget: "Solve 8 Recursion tracing PYQs",
    resourceName: "Knowledge Gate - C Recursion Tracing",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+cse+c+recursion+tracing"
  },
  {
    day: 3,
    phase: 1,
    subject: "Data Structures",
    title: "Arrays, Linked Lists & Stacks (Infix/Postfix)",
    hours: 4.5,
    tier: 1,
    topics: [
      "Row-major and Column-major 2D/3D array address calculation",
      "Singly, Doubly, and Circular Linked Lists operations & pointer updates",
      "Stack applications: Infix to Postfix conversion, Postfix evaluation",
      "Parentheses matching & minimum stack size calculation"
    ],
    summary: "Array address formula: Base + [i * cols + j] * size (Row major). Practice 2-3 address calculation questions.",
    pyqTarget: "Solve 10 PYQs on Array addresses & Stack conversions",
    resourceName: "Amit Khurana - Data Structures",
    resourceUrl: "https://www.youtube.com/results?search_query=amit+khurana+data+structures"
  },
  {
    day: 4,
    phase: 1,
    subject: "Data Structures",
    title: "Queues, Circular Queues & Priority Queues",
    hours: 3.5,
    tier: 1,
    topics: [
      "Queue implementation using arrays and linked lists",
      "Circular queue full/empty conditions: (rear+1)%size == front",
      "Implementation of Stack using Queues and vice versa",
      "Priority Queue introduction using binary heaps"
    ],
    summary: "Pay special attention to condition checks in circular queue and minimum queues required to make a stack.",
    pyqTarget: "Solve 7 PYQs on Queues and Stack-Queue simulations",
    resourceName: "Gate Smashers Queues",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+queue+data+structure"
  },
  {
    day: 5,
    phase: 1,
    subject: "Data Structures",
    title: "Binary Trees & Traversals (Inorder, Preorder, Postorder)",
    hours: 4.5,
    tier: 1,
    topics: [
      "Binary tree properties: Total nodes, internal vs leaf node relation (L = I + 1 for strictly binary)",
      "Traversals: Inorder, Preorder, Postorder, Level order",
      "Unique binary tree construction using (Inorder + Preorder) or (Inorder + Postorder)",
      "Height and depth properties of Full & Complete binary trees"
    ],
    summary: "A tree cannot be uniquely constructed from Preorder + Postorder alone unless it is strictly binary. Inorder is mandatory!",
    pyqTarget: "Solve 10 PYQs on Binary Tree traversals and properties",
    resourceName: "Gate Smashers Binary Trees",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+binary+tree"
  },
  {
    day: 6,
    phase: 1,
    subject: "Data Structures",
    title: "Binary Search Trees (BST) & Binary Heaps",
    hours: 4.5,
    tier: 1,
    topics: [
      "BST property: Inorder traversal always yields strictly sorted array",
      "Insertion, Deletion (inorder predecessor/successor replacement), Search complexity",
      "Min-Heap and Max-Heap properties, Array representation of heaps",
      "Heapify algorithm (O(N) build heap time complexity), Heap sort"
    ],
    summary: "Build-heap takes O(n) time, NOT O(n log n). Heap insertion takes O(log n). This distinction appears frequently in GATE.",
    pyqTarget: "Solve 10 PYQs on BST and Max/Min-Heap construction",
    resourceName: "Abdul Bari / Amit Khurana - Trees & Heaps",
    resourceUrl: "https://www.youtube.com/results?search_query=abdul+bari+heaps"
  },
  {
    day: 7,
    phase: 1,
    subject: "General Aptitude",
    title: "Quantitative Aptitude: Percentages, Ratios & Profit-Loss",
    hours: 4,
    tier: 1,
    topics: [
      "Percentages, successive percentage change formula: a + b + (ab/100)",
      "Ratios, proportions, and mixture-alligation problems",
      "Profit, loss, discount, and marked price shortcuts",
      "GATE Aptitude scoring philosophy: Target 13+ out of 15!"
    ],
    summary: "General Aptitude is the single highest ROI subject in GATE. 15 marks with lowest difficulty. Do not skip!",
    pyqTarget: "Solve GATE Aptitude 2018-2024 (Set 1 & 2) Percentages & Ratios",
    resourceName: "Christy Varghese / Career Avenues GATE Aptitude",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+general+aptitude+quantitative"
  },
  {
    day: 8,
    phase: 1,
    subject: "General Aptitude",
    title: "Time-Speed-Distance & Time and Work",
    hours: 4,
    tier: 1,
    topics: [
      "Time, Speed, Distance, relative speed (opposite vs same direction), trains & platforms",
      "Boats and streams: Upstream (u-v) and Downstream (u+v)",
      "Time and Work: Unitary method / LCM method for work efficiency",
      "Pipes and cisterns (filling vs emptying rate)"
    ],
    summary: "LCM method is 3x faster than fraction method for Work and Pipes problems. Always use LCM of total days.",
    pyqTarget: "Solve 15 GATE Aptitude questions on Time-Speed and Work",
    resourceName: "Free Aptitude Course for GATE",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+aptitude+time+speed+distance"
  },
  {
    day: 9,
    phase: 1,
    subject: "General Aptitude",
    title: "Spatial Aptitude & Analytical Reasoning",
    hours: 3.5,
    tier: 1,
    topics: [
      "Spatial Aptitude (Transformation, Mirror image, Paper folding, 2D/3D rotations)",
      "Blood relations, Seating arrangements, Direction sense",
      "Syllogisms and Venn diagram deductions",
      "Number series and logical sequences"
    ],
    summary: "Spatial aptitude was introduced recently and gives 2-3 direct marks with zero formula memorization. Just visual intuition.",
    pyqTarget: "Solve all GATE Spatial Aptitude questions (2021 to 2024)",
    resourceName: "GATE Spatial Aptitude One-Shot",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+spatial+aptitude"
  },
  {
    day: 10,
    phase: 1,
    subject: "General Aptitude",
    title: "Verbal Ability & Reading Comprehension",
    hours: 3,
    tier: 1,
    topics: [
      "Vocabulary in context, sentence completion, synonyms/antonyms",
      "English grammar: Subject-verb agreement, tenses, prepositions",
      "Critical reasoning: Identifying assumptions, strengthening/weakening arguments",
      "Short passage reading comprehension strategy"
    ],
    summary: "Elimination strategy works best in Verbal Ability. Eliminate grammatically inconsistent or extreme options.",
    pyqTarget: "Solve GATE Verbal Ability questions 2017-2024",
    resourceName: "GATE CSE Verbal Ability Practice",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+verbal+ability"
  },
  {
    day: 11,
    phase: 1,
    subject: "Discrete Mathematics",
    title: "Propositional Logic & Truth Tables",
    hours: 4.5,
    tier: 1,
    topics: [
      "Propositions, logical connectives (AND, OR, NOT, Implication ->, Bi-conditional <->)",
      "Implication equivalence: p -> q == ~p v q, Contrapositive (~q -> ~p)",
      "Tautology, Contradiction, and Contingency verification",
      "Rules of Inference (Modus Ponens, Modus Tollens, Resolution principle)"
    ],
    summary: "p -> q is false ONLY when p is True and q is False. Contrapositive is always logically equivalent to the original implication.",
    pyqTarget: "Solve 10 PYQs on Propositional Logic & Truth Tables",
    resourceName: "Amit Khurana - Propositional Logic",
    resourceUrl: "https://www.youtube.com/results?search_query=amit+khurana+propositional+logic"
  },
  {
    day: 12,
    phase: 1,
    subject: "Discrete Mathematics",
    title: "First Order Predicate Logic & Quantifiers",
    hours: 4.5,
    tier: 1,
    topics: [
      "Universal (∀) and Existential (∃) quantifiers",
      "Negation of quantifiers: ~(∀x P(x)) == ∃x (~P(x))",
      "Translating natural English statements into First Order Logic formulas",
      "Scope of quantifiers and validity of predicate formulas"
    ],
    summary: "Common trap: 'Every student likes math' is ∀x (Student(x) -> LikesMath(x)), NOT ∀x (Student(x) ∧ LikesMath(x)).",
    pyqTarget: "Solve 8 GATE PYQs on English-to-Logic translation",
    resourceName: "Knowledge Gate - Predicate Logic",
    resourceUrl: "https://www.youtube.com/results?search_query=predicate+logic+gate+cse"
  },
  {
    day: 13,
    phase: 1,
    subject: "Discrete Mathematics",
    title: "Set Theory, Relations & Equivalence",
    hours: 4,
    tier: 1,
    topics: [
      "Set operations, Power set (2^n elements), Cartesian product",
      "Properties of Relations: Reflexive, Symmetric, Anti-symmetric, Transitive",
      "Equivalence relation (Reflexive + Symmetric + Transitive) and Partitions",
      "Partial Order Relation (POSET: Reflexive + Anti-symmetric + Transitive), Hasse Diagrams, Lattices"
    ],
    summary: "Number of reflexive relations on n elements = 2^(n(n-1)). Number of symmetric relations = 2^(n(n+1)/2). Remember these direct counts!",
    pyqTarget: "Solve 10 PYQs on Relations and Counting Relations",
    resourceName: "Gate Smashers Relations & Functions",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+relations"
  },
  {
    day: 14,
    phase: 1,
    subject: "Discrete Mathematics",
    title: "Functions, Groups & Pigeonhole Principle",
    hours: 4,
    tier: 1,
    topics: [
      "Injective (One-to-One), Surjective (Onto), and Bijective functions counting",
      "Pigeonhole Principle (PHP) and Generalized PHP applications",
      "Group theory basics: Closure, Associativity, Identity, Inverse, Abelian groups",
      "Lagrange's Theorem: Order of a subgroup divides order of finite group"
    ],
    summary: "Pigeonhole questions are guaranteed 1-2 marks. If N items put in k boxes, at least one box contains ⌈N/k⌉ items.",
    pyqTarget: "Solve 8 PYQs on Pigeonhole Principle & Function Counting",
    resourceName: "Amit Khurana - Pigeonhole Principle",
    resourceUrl: "https://www.youtube.com/results?search_query=amit+khurana+pigeonhole+principle"
  },
  {
    day: 15,
    phase: 1,
    subject: "Discrete Mathematics",
    title: "Combinatorics & Permutations/Combinations",
    hours: 4,
    tier: 1,
    topics: [
      "Permutations nPr and Combinations nCr properties",
      "Distributing identical items into distinct bins (Stars and Bars formula: C(n+k-1, k-1))",
      "Principle of Inclusion-Exclusion (PIE) for 2, 3, and n sets",
      "Derangements formula: !n = n! [1 - 1/1! + 1/2! - 1/3! ... + (-1)^n/n!]"
    ],
    summary: "Identical objects into distinct boxes formula C(n+r-1, r-1) appears repeatedly in GATE. Keep it memorized.",
    pyqTarget: "Solve 10 Combinatorics GATE PYQs",
    resourceName: "Gate CSE Combinatorics - Made Easy / Unacademy",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+cse+combinatorics"
  },
  {
    day: 16,
    phase: 1,
    subject: "Discrete Mathematics",
    title: "Graph Theory I: Handshaking Lemma & Planar Graphs",
    hours: 4.5,
    tier: 1,
    topics: [
      "Handshaking Lemma: Sum of degrees of vertices = 2 * (Number of edges)",
      "Corollary: Number of vertices with odd degree is always EVEN",
      "Planar graphs: Euler's formula V - E + R = 2 (for connected planar)",
      "Edge inequality for planar graphs: E <= 3V - 6 (for V >= 3, no triangles: E <= 2V - 4)"
    ],
    summary: "K5 (complete graph on 5 vertices) and K3,3 (complete bipartite) are minimal non-planar graphs (Kuratowski's theorem).",
    pyqTarget: "Solve 12 PYQs on Handshaking Lemma & Planar Graphs",
    resourceName: "Amit Khurana - Graph Theory",
    resourceUrl: "https://www.youtube.com/results?search_query=amit+khurana+graph+theory"
  },
  {
    day: 17,
    phase: 1,
    subject: "Discrete Mathematics",
    title: "Graph Theory II: Trees, Eulerian & Hamiltonian Graphs",
    hours: 4.5,
    tier: 1,
    topics: [
      "Tree properties: A connected graph with n vertices and n-1 edges has no cycles",
      "Eulerian Path/Circuit condition: All vertices have even degree (circuit) / exactly 2 odd (path)",
      "Hamiltonian graph basics (Dirac's & Ore's condition)",
      "Graph Coloring and Chromatic number (Bipartite graphs are 2-colorable)"
    ],
    summary: "Eulerian is based on EDGES (every edge visited once, check vertex degrees). Hamiltonian is based on VERTICES (NP-complete).",
    pyqTarget: "Solve 10 PYQs on Eulerian circuits & Chromatic numbers",
    resourceName: "Gate Smashers Graph Theory",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+graph+theory"
  },
  {
    day: 18,
    phase: 1,
    subject: "Operating Systems",
    title: "OS Architecture & Process States",
    hours: 3.5,
    tier: 1,
    topics: [
      "Dual mode operation (User mode vs Kernel mode, Privileged instructions)",
      "System calls (fork(), exec(), wait()) and process creation",
      "Process state diagram (New, Ready, Running, Waiting, Terminated)",
      "Fork() output tracing: Total processes created by n successive forks = 2^n"
    ],
    summary: "fork() creates an exact clone. If fork() returns 0 -> child process; if >0 -> parent process. Trace execution carefully.",
    pyqTarget: "Solve 8 PYQs on fork() and System calls",
    resourceName: "Gate Smashers OS - Process & System Calls",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+system+calls+fork"
  },
  {
    day: 19,
    phase: 1,
    subject: "Operating Systems",
    title: "CPU Scheduling Algorithms",
    hours: 4.5,
    tier: 1,
    topics: [
      "FCFS, SJF (Preemptive SRTF & Non-preemptive)",
      "Round Robin (Time quantum effect, context switch overhead)",
      "Priority Scheduling (Preemptive & Non-preemptive)",
      "Calculating Average Turnaround Time (TAT) and Average Waiting Time (WT)"
    ],
    summary: "TAT = Completion Time - Arrival Time. Waiting Time = TAT - Burst Time. Always draw a neat Gantt Chart with time markers.",
    pyqTarget: "Solve 12 PYQs on Gantt Chart & Scheduling",
    resourceName: "Gate Smashers CPU Scheduling",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+cpu+scheduling"
  },
  {
    day: 20,
    phase: 1,
    subject: "Operating Systems",
    title: "Process Synchronization & Critical Section",
    hours: 5,
    tier: 1,
    topics: [
      "Critical Section problem requirements: Mutual Exclusion, Progress, Bounded Waiting",
      "Peterson's Solution for 2 processes verification",
      "Hardware instructions: TestAndSetLock (TSL) & Swap",
      "Analyzing 2-process code snippets for Race Conditions and Deadlocks"
    ],
    summary: "Progress condition states that only processes competing to enter critical section should participate in decision, without infinite delay.",
    pyqTarget: "Solve 10 PYQs on 2-process synchronization codes",
    resourceName: "Ravindrababu Ravula / Gate Smashers Synchronization",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+process+synchronization"
  },
  {
    day: 21,
    phase: 1,
    subject: "Operating Systems",
    title: "Semaphores & Classical Synchronization Problems",
    hours: 4.5,
    tier: 1,
    topics: [
      "Counting semaphores and Binary semaphores (Wait/P and Signal/V operations)",
      "Initial semaphore value calculations after a sequence of P/V calls",
      "Producer-Consumer problem with bounded buffer",
      "Readers-Writers problem and Dining Philosophers deadlock condition"
    ],
    summary: "Counting semaphore initial value S. If n P(wait) operations and m V(signal) operations occur, final value = S - n + m.",
    pyqTarget: "Solve 10 PYQs on Semaphores and Producer-Consumer",
    resourceName: "Knowledge Gate - Semaphores in OS",
    resourceUrl: "https://www.youtube.com/results?search_query=knowledge+gate+semaphores"
  },
  {
    day: 22,
    phase: 1,
    subject: "Operating Systems",
    title: "Deadlocks: Detection, Prevention & Banker's Algorithm",
    hours: 4,
    tier: 1,
    topics: [
      "4 Necessary conditions for Deadlock: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait",
      "Resource Allocation Graph (RAG) and cycle detection rules",
      "Banker's Algorithm: Need Matrix = Max - Allocation",
      "Safety algorithm to find Safe Sequences"
    ],
    summary: "Banker's algorithm is pure arithmetic. Practice finding safe sequence in under 3 minutes. Zero room for error.",
    pyqTarget: "Solve 10 PYQs on Banker's Algorithm & Resource Allocation",
    resourceName: "Gate Smashers Banker's Algorithm",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+bankers+algorithm"
  },
  {
    day: 23,
    phase: 1,
    subject: "Operating Systems",
    title: "Memory Management & Paging Basics",
    hours: 4.5,
    tier: 1,
    topics: [
      "Logical vs Physical Address space, Base and Limit registers",
      "Paging mechanism: Page size, Frame size, Page Table structure",
      "Address translation: Page Number = Logical Address / Page Size, Offset = Logical Address % Page Size",
      "Page table size calculation: Number of pages * Page Table Entry (PTE) size"
    ],
    summary: "Page size is always equal to Frame size. If page size is 4KB (2^12 bytes), offset is 12 bits. Master power-of-2 conversions.",
    pyqTarget: "Solve 10 PYQs on Paging and Address Translation",
    resourceName: "Gate Smashers Memory Management & Paging",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+paging"
  },
  {
    day: 24,
    phase: 1,
    subject: "Operating Systems",
    title: "Virtual Memory, Multi-level Paging & TLB",
    hours: 5,
    tier: 1,
    topics: [
      "Translation Lookaside Buffer (TLB) and Effective Memory Access Time (EMAT)",
      "EMAT formula: h*(t_tlb + m) + (1-h)*(t_tlb + 2*m) for single level paging",
      "Multi-level paging: Page table size exceeding single frame size",
      "Inverted page tables and segmentation overview"
    ],
    summary: "EMAT is one of the most frequently asked numericals in GATE OS. Pay attention whether TLB access is parallel or sequential.",
    pyqTarget: "Solve 12 Numerical PYQs on TLB and EMAT",
    resourceName: "Gate Smashers TLB & EMAT",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+tlb+effective+memory+access+time"
  },
  {
    day: 25,
    phase: 1,
    subject: "Operating Systems",
    title: "Page Replacement Algorithms & Disk Scheduling",
    hours: 4,
    tier: 1,
    topics: [
      "FIFO page replacement and Belady's Anomaly (more frames -> more page faults)",
      "Optimal Page Replacement (MIN/OPT - theoretical benchmark)",
      "Least Recently Used (LRU) page replacement",
      "Disk scheduling algorithms: FCFS, SSTF, SCAN (Elevator), C-SCAN, LOOK, C-LOOK"
    ],
    summary: "Stack algorithms (LRU, Optimal) NEVER suffer from Belady's anomaly. Only FIFO and similar algorithms do.",
    pyqTarget: "Solve 10 PYQs on Page Replacement & Disk head movement",
    resourceName: "Gate Smashers Page Replacement",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+page+replacement+algorithms"
  },
  {
    day: 26,
    phase: 1,
    subject: "Digital Logic",
    title: "Boolean Algebra, Logic Gates & K-Maps",
    hours: 4,
    tier: 2,
    topics: [
      "Boolean laws (De Morgan's, Idempotent, Distributive, Absorption)",
      "Canonical SOP and POS forms, minterms and maxterms",
      "K-Map minimization: 2, 3, and 4 variables, handling Don't Care conditions",
      "Essential prime implicants vs Prime implicants identification"
    ],
    summary: "Essential Prime Implicant (EPI) covers at least one minterm that is not covered by any other prime implicant.",
    pyqTarget: "Solve 10 PYQs on K-Maps and Boolean simplification",
    resourceName: "Gate Smashers Digital Logic K-Map",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+k+map"
  },
  {
    day: 27,
    phase: 1,
    subject: "Digital Logic",
    title: "Combinational Circuits: Multiplexers & Adders",
    hours: 4,
    tier: 2,
    topics: [
      "Half Adder and Full Adder circuit diagrams and equations",
      "Multiplexers (MUX): 2:1, 4:1, 8:1 MUX implementation of Boolean functions",
      "Implementing functions using MUX with and without external inverters",
      "Decoders and Encoders basics"
    ],
    summary: "A 2^n to 1 MUX can implement ANY Boolean function of n+1 variables without extra logic gates if variables applied properly.",
    pyqTarget: "Solve 10 PYQs on Multiplexers and Adders",
    resourceName: "Knowledge Gate - Multiplexers",
    resourceUrl: "https://www.youtube.com/results?search_query=knowledge+gate+multiplexers"
  },
  {
    day: 28,
    phase: 1,
    subject: "Linear Algebra",
    title: "Matrices, Determinants & System of Equations",
    hours: 4,
    tier: 2,
    topics: [
      "Matrix operations, properties of determinants and inverse",
      "Rank of a matrix and Echelon form",
      "System of linear equations AX = B: Consistent (Unique if rank=n, Infinite if rank<n) vs Inconsistent",
      "Homogeneous system AX = 0 (Trivial vs Non-trivial solution condition: det(A) = 0)"
    ],
    summary: "System of equations question is a 1-2 mark staple. AX=B has solutions iff Rank(A) == Rank([A|B]).",
    pyqTarget: "Solve 10 PYQs on Matrix Rank & Linear Equations",
    resourceName: "Gajendra Purohit / Amit Khurana - Linear Algebra",
    resourceUrl: "https://www.youtube.com/results?search_query=gajendra+purohit+linear+algebra+gate"
  },
  {
    day: 29,
    phase: 1,
    subject: "Linear Algebra",
    title: "Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem",
    hours: 4,
    tier: 2,
    topics: [
      "Characteristic equation det(A - λI) = 0",
      "Properties of Eigenvalues: Sum of eigenvalues = Trace(A), Product of eigenvalues = det(A)",
      "Eigenvalues of Symmetric, Orthogonal, Skew-symmetric, and Triangular matrices",
      "Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation"
    ],
    summary: "Use trace and determinant shortcut instead of solving cubic polynomial! Sum of λ = Trace, Product of λ = Det.",
    pyqTarget: "Solve 12 PYQs on Eigenvalues & Cayley-Hamilton",
    resourceName: "Gajendra Purohit - Eigenvalues Shortcuts",
    resourceUrl: "https://www.youtube.com/results?search_query=eigenvalues+shortcuts+gate"
  },
  {
    day: 30,
    phase: 1,
    subject: "Revision & Mock",
    title: "Phase 1 Consolidation & 30-Question Mini Mock",
    hours: 5,
    tier: 1,
    topics: [
      "Review all mistake notes from Days 1-29",
      "Take 30-Question Timed Mini Mock (C, DS, Aptitude, Discrete, OS, Digital)",
      "Analyze score, identify time traps, update Error Log",
      "Evaluate progress against 30-Day milestone"
    ],
    summary: "End of Phase 1! You have now covered ~45 marks worth of syllabus. Check your mock accuracy.",
    pyqTarget: "Solve 30 mixed PYQs in 60 minutes",
    resourceName: "GATE Overflow Free Online Tests",
    resourceUrl: "https://gateoverflow.in"
  },

  // ================= PHASE 2: CORE COMPUTER SCIENCE SCORING (DAYS 31-60) =================
  {
    day: 31,
    phase: 2,
    subject: "Theory of Computation",
    title: "Finite Automata: DFA & NFA Construction",
    hours: 4.5,
    tier: 1,
    topics: [
      "Alphabets, Strings, Languages, and Kleene Star (*)",
      "Deterministic Finite Automata (DFA) formal definition and state transition diagram",
      "Nondeterministic Finite Automata (NFA) and subset construction algorithm for NFA to DFA",
      "Strings ending with, starting with, containing substring patterns"
    ],
    summary: "DFA must have exactly one outgoing transition for every input symbol from every state. NFA has 0, 1, or multiple transitions.",
    pyqTarget: "Solve 10 PYQs on DFA construction and string acceptance",
    resourceName: "Gate Smashers Theory of Computation Playlist",
    resourceUrl: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i"
  },
  {
    day: 32,
    phase: 2,
    subject: "Theory of Computation",
    title: "Minimal DFA & Equivalence of States (Myhill-Nerode)",
    hours: 4.5,
    tier: 1,
    topics: [
      "Table filling algorithm (Myhill-Nerode theorem) for state minimization",
      "Finding the minimum number of states in DFA for divisible by k, modulo arithmetic",
      "Complement of a DFA: Swapping final and non-final states (Works ONLY on complete DFA!)",
      "Dead state (Trap state) counting in minimal DFA"
    ],
    summary: "Always include the dead state when asked for 'Total number of states in minimal DFA'. Missing dead state loses marks!",
    pyqTarget: "Solve 12 PYQs on Minimal DFA state count",
    resourceName: "Knowledge Gate - Minimal DFA",
    resourceUrl: "https://www.youtube.com/results?search_query=knowledge+gate+minimal+dfa"
  },
  {
    day: 33,
    phase: 2,
    subject: "Theory of Computation",
    title: "Regular Expressions & Regular Languages",
    hours: 4,
    tier: 1,
    topics: [
      "Regular expression syntax, identities (Arden's Theorem: R = Q + RP -> R = QP*)",
      "Converting regular expressions to Finite Automata",
      "Closure properties of Regular Languages (Union, Intersection, Complement, Star, Reverse)",
      "Identifying whether a language is Regular vs Non-Regular using finite memory intuition"
    ],
    summary: "If a language requires unbounded counting (like a^n b^n) or comparison between distant parts, it is NOT regular.",
    pyqTarget: "Solve 10 PYQs on Regular Expressions & Regularity checks",
    resourceName: "Amit Khurana - Regular Languages",
    resourceUrl: "https://www.youtube.com/results?search_query=amit+khurana+regular+expressions"
  },
  {
    day: 34,
    phase: 2,
    subject: "Theory of Computation",
    title: "Context-Free Grammars (CFG) & Pushdown Automata (PDA)",
    hours: 4.5,
    tier: 1,
    topics: [
      "Context-Free Grammar components, derivations, and Parse Trees",
      "Ambiguity in CFG (Inherent ambiguity vs grammar ambiguity)",
      "Deterministic PDA (DPDA) vs Non-Deterministic PDA (NPDA)",
      "DCFLs vs CFLs (e.g. a^n b^n is DCFL, ww^R is CFL but not DCFL)"
    ],
    summary: "DCFLs are strictly accepted by DPDA and are CLOSED under complementation, but NOT closed under union or intersection.",
    pyqTarget: "Solve 10 PYQs on Ambiguous grammars & CFL identification",
    resourceName: "Gate Smashers CFG & PDA",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+context+free+grammar"
  },
  {
    day: 35,
    phase: 2,
    subject: "Theory of Computation",
    title: "Turing Machines & Chomsky Hierarchy",
    hours: 4,
    tier: 1,
    topics: [
      "Turing Machine model, instantaneous descriptions, recursive vs recursively enumerable",
      "Chomsky Hierarchy: Type 3 (Regular) ⊂ Type 2 (CFL) ⊂ Type 1 (CSL) ⊂ Type 0 (Unrestricted)",
      "Recognizability vs Decidability definition",
      "Closure properties comprehensive comparison across Chomsky hierarchy"
    ],
    summary: "Chomsky Hierarchy table is free marks in GATE. Memorize the subset hierarchy and language containment rules.",
    pyqTarget: "Solve 8 PYQs on Chomsky Hierarchy & Turing Machines",
    resourceName: "Gate Smashers Chomsky Hierarchy",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+chomsky+hierarchy"
  },
  {
    day: 36,
    phase: 2,
    subject: "Theory of Computation",
    title: "Decidability & Undecidability Master Table",
    hours: 4.5,
    tier: 1,
    topics: [
      "Membership, Emptiness, Finiteness, Equivalence, Ambiguity decidability",
      "Post Correspondence Problem (PCP) and Modified PCP",
      "Halting problem of Turing Machine (Undecidable and Semi-decidable)",
      "Rice's Theorem: Any non-trivial semantic property of RE language is undecidable"
    ],
    summary: "Decidability table is tested in almost EVERY GATE paper. Regular is decidable for almost everything; CFL is undecidable for equivalence.",
    pyqTarget: "Solve 12 GATE PYQs on Decidability & Undecidability",
    resourceName: "Amit Khurana - Decidability Table Tricks",
    resourceUrl: "https://www.youtube.com/results?search_query=amit+khurana+decidability"
  },
  {
    day: 37,
    phase: 2,
    subject: "DBMS",
    title: "ER Diagrams & Relational Model Mapping",
    hours: 4,
    tier: 1,
    topics: [
      "Entity sets, attributes (key, composite, multivalued, derived)",
      "Relationships: 1-1, 1-N, M-N, and Participation constraints (Total vs Partial)",
      "Converting ER diagram into minimum number of Relational Tables",
      "Weak entity sets and identifying relationships"
    ],
    summary: "Minimum tables calculation: In 1-N relationship with total participation on N side, combine relationship with N-side entity.",
    pyqTarget: "Solve 8 PYQs on Minimum Relational Tables from ER Diagram",
    resourceName: "Gate Smashers ER Model",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+er+model"
  },
  {
    day: 38,
    phase: 2,
    subject: "DBMS",
    title: "Functional Dependencies & Attribute Closure",
    hours: 4.5,
    tier: 1,
    topics: [
      "Functional Dependency (FD) definition and Armstrong's Axioms (Reflexivity, Augmentation, Transitivity)",
      "Attribute Closure algorithm (X+) to find Candidate Keys and Super Keys",
      "Finding all candidate keys of a relational schema",
      "Canonical Cover (Minimal Cover) of functional dependencies algorithm"
    ],
    summary: "To find candidate keys: Find attributes not appearing on RHS of any FD; they MUST be in every candidate key.",
    pyqTarget: "Solve 12 PYQs on Candidate Keys and Minimal Cover",
    resourceName: "Gate Smashers Functional Dependencies & Keys",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+candidate+key"
  },
  {
    day: 39,
    phase: 2,
    subject: "DBMS",
    title: "Normalization: 1NF, 2NF, 3NF & BCNF",
    hours: 5,
    tier: 1,
    topics: [
      "First Normal Form (Atomic values) & Second Normal Form (No partial dependency: Non-prime -> Prime subset)",
      "Third Normal Form (For X->Y, either X is Super Key or Y is Prime attribute)",
      "Boyce-Codd Normal Form (BCNF: For every non-trivial X->Y, X MUST be a Super Key)",
      "Lossless Join Decomposition and Dependency Preservation check"
    ],
    summary: "Lossless condition: R1 ∩ R2 -> R1 or R1 ∩ R2 -> R2 (common attribute must be candidate key in at least one table).",
    pyqTarget: "Solve 15 PYQs on Normal Forms & Decomposition",
    resourceName: "Amit Khurana - Normalization in DBMS",
    resourceUrl: "https://www.youtube.com/results?search_query=amit+khurana+normalization"
  },
  {
    day: 40,
    phase: 2,
    subject: "DBMS",
    title: "Transactions & Concurrency Control (Serializability)",
    hours: 5,
    tier: 1,
    topics: [
      "ACID properties (Atomicity, Consistency, Isolation, Durability)",
      "Conflict Serializability: Precedence Graph (Serialization Graph) cycle detection",
      "View Serializability basics (Blind writes condition)",
      "Recoverable, Cascadeless, and Strict schedules comparison"
    ],
    summary: "Conflict serializability: Draw graph where Ti -> Tj if conflicting operation (R-W, W-R, W-W on same item). No cycle == Conflict Serializable!",
    pyqTarget: "Solve 12 PYQs on Precedence Graph & Recoverability",
    resourceName: "Gate Smashers Concurrency Control",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+concurrency+control"
  },
  {
    day: 41,
    phase: 2,
    subject: "DBMS",
    title: "Two-Phase Locking (2PL) & Indexing (B/B+ Trees)",
    hours: 4.5,
    tier: 1,
    topics: [
      "Basic 2PL (Growing phase & Shrinking phase), Conservative 2PL, Strict 2PL, Rigorous 2PL",
      "Deadlocks and Starvation in 2PL",
      "File organization: Primary, Clustering, Secondary index",
      "B-Tree and B+ Tree order, maximum/minimum keys per node, height calculation"
    ],
    summary: "Basic 2PL ensures conflict serializability but DOES NOT prevent deadlocks. Strict 2PL prevents cascading rollbacks.",
    pyqTarget: "Solve 10 PYQs on 2PL and B+ Tree node capacity",
    resourceName: "Knowledge Gate - B and B+ Trees in DBMS",
    resourceUrl: "https://www.youtube.com/results?search_query=knowledge+gate+b+tree"
  },
  {
    day: 42,
    phase: 2,
    subject: "DBMS",
    title: "Relational Algebra & SQL Mastery",
    hours: 4.5,
    tier: 1,
    topics: [
      "Relational Algebra operators: Select (σ), Project (π), Cartesian Product (×), Joins (⋈), Division (÷)",
      "SQL SELECT, WHERE, GROUP BY, HAVING, ORDER BY clause execution order",
      "Correlated and Nested Subqueries (IN, EXISTS, ALL, ANY)",
      "Handling NULL values in SQL (Three-valued logic: TRUE, FALSE, UNKNOWN)"
    ],
    summary: "Division operator (÷) translates to 'for all' queries in English. SQL GROUP BY columns must match SELECT non-aggregate columns.",
    pyqTarget: "Solve 10 PYQs on SQL Queries & Relational Algebra",
    resourceName: "Gate Smashers SQL & Relational Algebra",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+sql+queries"
  },
  {
    day: 43,
    phase: 2,
    subject: "Algorithms",
    title: "Asymptotic Analysis & Master Theorem",
    hours: 4.5,
    tier: 1,
    topics: [
      "Big-O, Big-Omega (Ω), Big-Theta (Θ), Little-o, Little-omega notations",
      "Comparing asymptotic growth rates (log n vs n^0.1 vs 2^n)",
      "Master Theorem for Divide & Conquer recurrences T(n) = aT(n/b) + f(n)",
      "Extended Master Theorem for logarithmic factors (f(n) = n^(log_b a) * log^k n)"
    ],
    summary: "Master theorem gives instant answers for recurrence relations. Memorize all 3 cases and the log^k n exception.",
    pyqTarget: "Solve 12 PYQs on Asymptotic Notations & Recurrences",
    resourceName: "Abdul Bari - Master Theorem",
    resourceUrl: "https://www.youtube.com/results?search_query=abdul+bari+master+theorem"
  },
  {
    day: 44,
    phase: 2,
    subject: "Algorithms",
    title: "Divide & Conquer, Sorting Algorithms",
    hours: 4.5,
    tier: 1,
    topics: [
      "Merge Sort (Time complexity O(n log n) best/worst, Auxiliary space O(n), Stability)",
      "Quick Sort (Best case O(n log n), Worst case O(n^2), Randomized quicksort, In-place)",
      "Heap Sort & Counting Sort (Non-comparison based sort O(n+k))",
      "Lower bound for comparison-based sorting is Ω(n log n) using decision trees"
    ],
    summary: "Quick sort worst case occurs when array is already sorted and first/last element chosen as pivot. Merge sort is stable; Quick sort is not.",
    pyqTarget: "Solve 10 PYQs on Sorting complexities and comparisons",
    resourceName: "Abdul Bari - Sorting Algorithms",
    resourceUrl: "https://www.youtube.com/results?search_query=abdul+bari+sorting"
  },
  {
    day: 45,
    phase: 2,
    subject: "Algorithms",
    title: "Greedy Algorithms: Huffman, Kruskal & Prim",
    hours: 4.5,
    tier: 1,
    topics: [
      "Greedy strategy principle (Optimal substructure & Greedy choice property)",
      "Huffman Coding: Optimal prefix code construction, average code length calculation",
      "Minimum Spanning Tree (MST): Cut property and Cycle property",
      "Kruskal's Algorithm (using Disjoint Sets O(E log V)) vs Prim's Algorithm (using Priority Queue O(E + V log V))"
    ],
    summary: "If all edge weights in a graph are distinct, the Minimum Spanning Tree is UNIQUE.",
    pyqTarget: "Solve 12 PYQs on Huffman Coding & MST",
    resourceName: "Abdul Bari - Greedy Algorithms",
    resourceUrl: "https://www.youtube.com/results?search_query=abdul+bari+greedy+algorithms"
  },
  {
    day: 46,
    phase: 2,
    subject: "Algorithms",
    title: "Graph Traversal: BFS, DFS & Topological Sort",
    hours: 4.5,
    tier: 1,
    topics: [
      "Breadth First Search (BFS) using Queue: Time O(V+E), finding shortest path in unweighted graph",
      "Depth First Search (DFS) using Stack/Recursion: Tree edge, Back edge, Forward edge, Cross edge",
      "Cycle detection in directed and undirected graphs (Back edge implies cycle)",
      "Topological Sorting for Directed Acyclic Graphs (DAG) using in-degree / DFS exit time"
    ],
    summary: "A directed graph has a cycle IF AND ONLY IF its DFS yields at least one back edge. Topological sort is only possible on DAGs.",
    pyqTarget: "Solve 10 PYQs on BFS, DFS & Topological Sort",
    resourceName: "Abdul Bari - Graph Traversals",
    resourceUrl: "https://www.youtube.com/results?search_query=abdul+bari+graph+traversals"
  },
  {
    day: 47,
    phase: 2,
    subject: "Algorithms",
    title: "Shortest Path Algorithms: Dijkstra & Bellman-Ford",
    hours: 4,
    tier: 1,
    topics: [
      "Single Source Shortest Path: Dijkstra's Algorithm (Fails on negative weight edges!)",
      "Time complexity of Dijkstra with Min-Heap: O((V+E) log V)",
      "Bellman-Ford Algorithm: Handles negative weights, detects negative weight cycles in O(V*E)",
      "Floyd-Warshall All-Pairs Shortest Path: Dynamic programming O(V^3)"
    ],
    summary: "Remember: Dijkstra CANNOT work with negative weight cycles or even individual negative edges. Bellman-Ford runs |V|-1 relaxations.",
    pyqTarget: "Solve 10 PYQs on Dijkstra and Bellman-Ford",
    resourceName: "Abdul Bari - Shortest Paths",
    resourceUrl: "https://www.youtube.com/results?search_query=abdul+bari+dijkstra"
  },
  {
    day: 48,
    phase: 2,
    subject: "Algorithms",
    title: "Dynamic Programming: Essential Standard Problems",
    hours: 4.5,
    tier: 1,
    topics: [
      "Overlapping Subproblems & Memoization vs Tabulation",
      "0/1 Knapsack problem recurrence relation and DP table",
      "Longest Common Subsequence (LCS) table construction and backtracking",
      "Matrix Chain Multiplication (MCM) recurrence and minimum multiplications"
    ],
    summary: "Don't try to master every complex DP problem in 3 months. Master 0/1 Knapsack, LCS, and Matrix Chain. They cover 90% of GATE DP questions.",
    pyqTarget: "Solve 8 PYQs on 0/1 Knapsack, LCS and MCM",
    resourceName: "Abdul Bari - Dynamic Programming",
    resourceUrl: "https://www.youtube.com/results?search_query=abdul+bari+dynamic+programming"
  },
  {
    day: 49,
    phase: 2,
    subject: "Digital Logic",
    title: "Sequential Circuits: Flip-Flops & Registers",
    hours: 4,
    tier: 2,
    topics: [
      "Latches vs Flip-Flops, Edge triggering vs Level triggering",
      "SR, JK, D, and T Flip-Flops: Truth tables and characteristic equations (Q_next)",
      "JK Flip-Flop race around condition and solution (Master-Slave / Edge triggering)",
      "Shift registers (SISO, SIPO, PISO, PIPO)"
    ],
    summary: "Characteristic equations: D Flip-Flop: Q+ = D. T Flip-Flop: Q+ = T ⊕ Q. JK: Q+ = J*Q' + K'*Q. Memorize these cold.",
    pyqTarget: "Solve 8 PYQs on Flip-Flop conversions and transitions",
    resourceName: "Gate Smashers Sequential Circuits",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+flip+flops"
  },
  {
    day: 50,
    phase: 2,
    subject: "Digital Logic",
    title: "Synchronous & Asynchronous Counters",
    hours: 4.5,
    tier: 2,
    topics: [
      "Mod-N counters (Number of states = N, minimum flip-flops = ⌈log2 N⌉)",
      "Synchronous counters analysis (Finding the count sequence from given circuit)",
      "Asynchronous (Ripple) counters and propagation delay limitation",
      "Ring counter (n states for n flip-flops) vs Johnson counter (2n states for n flip-flops)"
    ],
    summary: "Analyzing a synchronous counter: Write state table with present states, evaluate flip-flop inputs, find next states. Simple and systematic.",
    pyqTarget: "Solve 10 PYQs on Counter state tracing",
    resourceName: "Gate Smashers Counters",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+counters"
  },
  {
    day: 51,
    phase: 2,
    subject: "Engineering Mathematics",
    title: "Probability Basics & Conditional Probability",
    hours: 4,
    tier: 2,
    topics: [
      "Sample space, events, mutually exclusive and independent events",
      "Conditional probability: P(A|B) = P(A ∩ B) / P(B)",
      "Multiplication theorem of probability",
      "Bayes' Theorem for posterior probability (Diagnostic test false positive problems)"
    ],
    summary: "Bayes' theorem is tested almost every alternate year. Draw tree diagram to visualize conditional branches cleanly.",
    pyqTarget: "Solve 10 PYQs on Bayes' Theorem & Conditional Probability",
    resourceName: "Gajendra Purohit - Probability for GATE",
    resourceUrl: "https://www.youtube.com/results?search_query=gajendra+purohit+probability+gate"
  },
  {
    day: 52,
    phase: 2,
    subject: "Engineering Mathematics",
    title: "Probability Distributions: Binomial, Poisson & Normal",
    hours: 4,
    tier: 2,
    topics: [
      "Random Variables: Discrete vs Continuous, Probability Mass Function (PMF) & Density Function (PDF)",
      "Expectation E[X] and Variance Var(X) = E[X^2] - (E[X])^2 properties",
      "Binomial Distribution: P(X=k) = C(n,k) * p^k * (1-p)^(n-k), Mean = np, Var = np(1-p)",
      "Poisson Distribution: P(X=k) = (e^(-λ) * λ^k) / k!, Mean = Variance = λ",
      "Exponential and Uniform distributions basics"
    ],
    summary: "For Poisson distribution, Mean EQUALS Variance = λ. If mean is given as 3, variance is 3.",
    pyqTarget: "Solve 10 PYQs on Binomial & Poisson Distributions",
    resourceName: "Gajendra Purohit - Distributions",
    resourceUrl: "https://www.youtube.com/results?search_query=gajendra+purohit+poisson+distribution"
  },
  {
    day: 53,
    phase: 2,
    subject: "Engineering Mathematics",
    title: "Calculus: Limits, Continuity & Mean Value Theorems",
    hours: 3.5,
    tier: 2,
    topics: [
      "Limits and L'Hôpital's Rule for indeterminate forms (0/0, ∞/∞)",
      "Continuity and Differentiability at a point",
      "Maxima and Minima of single variable functions (First and Second derivative tests)",
      "Rolle's Theorem & Lagrange's Mean Value Theorem (LMVT)"
    ],
    summary: "Check for 0/0 form before applying L'Hôpital's rule. Often 1 or 2 applications gives the exact limit.",
    pyqTarget: "Solve 8 PYQs on Limits & Maxima-Minima",
    resourceName: "Gajendra Purohit - Calculus for GATE",
    resourceUrl: "https://www.youtube.com/results?search_query=gajendra+purohit+calculus+gate"
  },
  {
    day: 54,
    phase: 2,
    subject: "Computer Networks (Selective)",
    title: "IP Addressing, CIDR & Subnetting",
    hours: 4.5,
    tier: 3,
    topics: [
      "IPv4 Address classes (A, B, C, D, E) and default subnet masks",
      "Classless Inter-Domain Routing (CIDR) notation /n",
      "Subnetting: Network address, First usable host, Last usable host, Directed broadcast address",
      "Subnet allocation and longest prefix matching in routing tables"
    ],
    summary: "Subnetting is the single highest ROI topic in Computer Networks. 2 marks guaranteed. Master /24, /25, /26, /27, /28 bit calculations.",
    pyqTarget: "Solve 12 PYQs on Subnetting & CIDR",
    resourceName: "Gate Smashers Subnetting & IP Addressing",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+subnetting"
  },
  {
    day: 55,
    phase: 2,
    subject: "Computer Networks (Selective)",
    title: "Sliding Window Protocols & Flow Control",
    hours: 4.5,
    tier: 3,
    topics: [
      "Stop and Wait protocol: Efficiency = 1 / (1 + 2a), where a = Tp / Tt",
      "Go-Back-N (GBN) ARQ: Sender window size N, Receiver window 1, Sequence numbers >= N + 1",
      "Selective Repeat (SR) ARQ: Sender window N, Receiver window N, Sequence numbers >= 2N",
      "Throughput calculation: Efficiency * Bandwidth"
    ],
    summary: "Transmission time Tt = Length / Bandwidth. Propagation time Tp = Distance / Velocity. Always match units (bits vs Bytes, ms vs sec)!",
    pyqTarget: "Solve 10 PYQs on Sliding Window efficiency and sequence numbers",
    resourceName: "Gate Smashers Sliding Window Protocols",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+sliding+window+protocol"
  },
  {
    day: 56,
    phase: 2,
    subject: "Computer Networks (Selective)",
    title: "TCP Congestion Control & Routing Protocols",
    hours: 4,
    tier: 3,
    topics: [
      "TCP 3-way handshake and connection termination",
      "TCP Congestion Control phases: Slow Start (exponential), Congestion Avoidance (linear)",
      "Threshold drop and cwnd reset upon Timeout (Tahoe) vs 3 Duplicate ACKs (Reno)",
      "Distance Vector Routing (Count to Infinity problem) vs Link State Routing (Dijkstra)"
    ],
    summary: "On 3 duplicate ACKs (Reno): ssthresh = cwnd / 2, cwnd = ssthresh. On timeout: ssthresh = cwnd / 2, cwnd = 1 MSS.",
    pyqTarget: "Solve 8 PYQs on TCP Congestion window tracing",
    resourceName: "Gate Smashers TCP Congestion Control",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+tcp+congestion+control"
  },
  {
    day: 57,
    phase: 2,
    subject: "COA (Selective)",
    title: "Instruction Pipelining & Hazard Analysis",
    hours: 4.5,
    tier: 3,
    topics: [
      "Pipelining stages: IF, ID, EX, MEM, WB, Clock cycle time = max stage delay + register delay",
      "Speedup formula: S = (non-pipelined execution time) / (pipelined execution time) = (n * k) / (k + n - 1) * Clock",
      "Pipeline Hazards: Structural hazard, Data hazard (RAW, WAR, WAW), Control hazard (Branches)",
      "Operand forwarding (Bypassing) and Branch prediction basics"
    ],
    summary: "Only focus on Pipelining and Cache Memory in COA! They give 80% of COA marks without wasting time on complex CPU microcode.",
    pyqTarget: "Solve 10 PYQs on Pipelining Speedup and Stalls",
    resourceName: "Gate Smashers Pipelining in COA",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+pipelining"
  },
  {
    day: 58,
    phase: 2,
    subject: "COA (Selective)",
    title: "Cache Memory Organization & Mapping",
    hours: 4.5,
    tier: 3,
    topics: [
      "Cache hierarchy, Hit Ratio (h) and Average Memory Access Time (AMAT)",
      "Direct Mapping: Physical address bits divided into [Tag | Line/Index | Word Offset]",
      "Fully Associative Mapping: [Tag | Word Offset]",
      "k-way Set Associative Mapping: [Tag | Set Offset | Word Offset], Number of sets = Total lines / k",
      "Write-through vs Write-back cache policy"
    ],
    summary: "AMAT = h * Tc + (1 - h) * Tm. In k-way set associative, Set bits = log2(Lines / k). Straightforward numerical marks.",
    pyqTarget: "Solve 12 PYQs on Cache Mapping & AMAT",
    resourceName: "Gate Smashers Cache Memory Mapping",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+cache+memory"
  },
  {
    day: 59,
    phase: 2,
    subject: "Compiler Design (Selective)",
    title: "Lexical Analysis & LL(1) / LR Parsing Essentials",
    hours: 4,
    tier: 3,
    topics: [
      "Lexical analyzer role, counting tokens in C code snippet",
      "Computation of FIRST and FOLLOW sets of non-terminals",
      "LL(1) parsing table condition: A grammar is LL(1) iff no cell contains multiple entries",
      "Bottom-up parsing: Shift-Reduce, LR(0), SLR(1), LALR(1), CLR(1) power comparison"
    ],
    summary: "Power hierarchy: LR(0) < SLR(1) < LALR(1) < CLR(1). Token counting questions are free marks if you know comments are ignored.",
    pyqTarget: "Solve 8 PYQs on Token Counting & First/Follow",
    resourceName: "Gate Smashers Compiler Design Playlist",
    resourceUrl: "https://www.youtube.com/results?search_query=gate+smashers+compiler+design"
  },
  {
    day: 60,
    phase: 2,
    subject: "Revision & Mock",
    title: "Phase 2 Consolidation & Half-Length Mock Test",
    hours: 5,
    tier: 1,
    topics: [
      "Comprehensive review of TOC, DBMS, Algorithms, Digital, and Math",
      "Take 45-Question Half-Length Mock (1.5 Hours)",
      "Strict negative marking deduction (-0.33 for 1 mark, -0.66 for 2 marks)",
      "Categorize mistakes in Error Log: Silly calculation vs Conceptual gap"
    ],
    summary: "Milestone: You have covered 85%+ of the highest ROI syllabus. Now the game is speed, accuracy, and negative mark elimination.",
    pyqTarget: "Take Half-Length Mock Test on GateOverflow",
    resourceName: "GateOverflow Practice Tests",
    resourceUrl: "https://gateoverflow.in"
  },

  // ================= PHASE 3: PYQ MARATHON, FULL MOCKS & REVISION (DAYS 61-90) =================
  {
    day: 61,
    phase: 3,
    subject: "PYQ Marathon",
    title: "General Aptitude & Discrete Math PYQ Marathon",
    hours: 4.5,
    tier: 1,
    topics: [
      "Solve all Aptitude questions from GATE 2021, 2022, 2023, 2024 (Both sets)",
      "Solve all Discrete Math Graph Theory & Logic PYQs (2018-2024)",
      "Target: 90%+ accuracy on these sections"
    ],
    summary: "Aptitude and Discrete Math combined give 25-28 marks. If you score 22+ here, qualifying is 99% guaranteed with just a few CS marks!",
    pyqTarget: "Solve 35 PYQs with timer",
    resourceName: "GateOverflow Aptitude & Discrete",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 62,
    phase: 3,
    subject: "PYQ Marathon",
    title: "Programming & Data Structures PYQ Marathon",
    hours: 4.5,
    tier: 1,
    topics: [
      "Solve C pointers, recursion, and string questions (2015-2024)",
      "Solve Binary trees, BST, and Heap questions (2015-2024)",
      "Pay attention to tricky pointer arithmetic edge cases"
    ],
    summary: "Do not guess on C output questions. Trace the variables on paper with box diagrams.",
    pyqTarget: "Solve 30 PYQs in 90 minutes",
    resourceName: "GateOverflow C & DS Archives",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 63,
    phase: 3,
    subject: "PYQ Marathon",
    title: "Operating Systems PYQ Marathon",
    hours: 4.5,
    tier: 1,
    topics: [
      "Solve CPU Scheduling & Gantt chart numericals (2014-2024)",
      "Solve Semaphore & Concurrency questions",
      "Solve Paging, TLB, EMAT, and Page Replacement numericals"
    ],
    summary: "OS numericals are 100% predictable. Master the formulas and units (Bytes to KB, nanoseconds to microseconds).",
    pyqTarget: "Solve 25 OS PYQs",
    resourceName: "GateOverflow Operating Systems",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 64,
    phase: 3,
    subject: "PYQ Marathon",
    title: "Theory of Computation PYQ Marathon",
    hours: 4.5,
    tier: 1,
    topics: [
      "Minimal DFA state counting PYQs (2010-2024)",
      "Regular vs CFL language identification PYQs",
      "Decidability and Undecidability property true/false statements"
    ],
    summary: "TOC questions are either right or wrong in 30 seconds once concepts are clear. High scoring section.",
    pyqTarget: "Solve 30 TOC PYQs",
    resourceName: "GateOverflow TOC Archives",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 65,
    phase: 3,
    subject: "PYQ Marathon",
    title: "DBMS PYQ Marathon",
    hours: 4.5,
    tier: 1,
    topics: [
      "Attribute closure, candidate keys & minimal cover (2014-2024)",
      "Normal forms (3NF vs BCNF) and decomposition checks",
      "Conflict serializability and Recoverability of schedules",
      "Relational algebra query equivalence and SQL count/group by queries"
    ],
    summary: "Carefully check for candidate keys when checking 3NF and BCNF. Many students forget to find ALL candidate keys.",
    pyqTarget: "Solve 25 DBMS PYQs",
    resourceName: "GateOverflow DBMS",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 66,
    phase: 3,
    subject: "PYQ Marathon",
    title: "Algorithms & Digital Logic PYQ Marathon",
    hours: 4.5,
    tier: 1,
    topics: [
      "Master theorem, sorting complexities, and comparison trees",
      "Kruskal, Prim, Huffman coding, and Dijkstra numericals",
      "K-Map minimization, Multiplexers, and Counter state tracing"
    ],
    summary: "In Dijkstra and MST, read the question carefully: Is it asking for total weight or number of distinct MSTs?",
    pyqTarget: "Solve 25 PYQs",
    resourceName: "GateOverflow Algorithms & Digital",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 67,
    phase: 3,
    subject: "PYQ Marathon",
    title: "Networks, COA & Math Selective PYQ Marathon",
    hours: 4.5,
    tier: 2,
    topics: [
      "Subnetting & Sliding window throughput PYQs",
      "Cache AMAT & Pipelining speedup numericals",
      "Eigenvalues, Rank, Bayes' Theorem & Poisson distribution numericals"
    ],
    summary: "These are the cherry-picked high yield topics from CN and COA. Solve only these specific topics.",
    pyqTarget: "Solve 25 Selective PYQs",
    resourceName: "GateOverflow High Yields",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 68,
    phase: 3,
    subject: "Formula Revision",
    title: "Mega Formula Revision: Mathematics & Systems",
    hours: 4,
    tier: 1,
    topics: [
      "Handshaking lemma, Euler planar formula, relation counts",
      "Paging EMAT, Disk scheduling, Banker's safe condition",
      "Cache mapping bit formulas, Pipelining speedup",
      "Eigenvalue properties, Bayes' theorem, Poisson distribution"
    ],
    summary: "Create your 1-page condensed cheat sheet today. Write down every single formula by hand once.",
    pyqTarget: "Active recall test: Write 30 formulas from memory",
    resourceName: "GATE CSE Cheat Sheet Vault",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 69,
    phase: 3,
    subject: "Formula Revision",
    title: "Mega Table Revision: TOC Decidability & Normal Forms",
    hours: 4,
    tier: 1,
    topics: [
      "TOC Closure properties table for Regular, DCFL, CFL, CSL, Recursive, RE",
      "TOC Decidability table for all 6 language classes",
      "DBMS Normal form conditions (1NF to BCNF flowchart)",
      "Time & Space complexity table of all sorting and graph algorithms"
    ],
    summary: "These 4 tables account for 10-12 direct marks. Review them for 30 minutes every morning from today onwards.",
    pyqTarget: "Draw all 4 tables on blank paper without looking",
    resourceName: "TOC & DBMS Tables Guide",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 70,
    phase: 3,
    subject: "Error Log",
    title: "Error Log Audit & Weak Spot Eradication",
    hours: 4,
    tier: 1,
    topics: [
      "Re-solve all questions logged in your Mistake Notebook",
      "Check: Are you repeating silly calculation errors in NAT questions?",
      "Practice using the virtual online calculator (no physical calculator allowed in GATE!)",
      "Formulate a plan to avoid negative marking"
    ],
    summary: "Virtual calculator usage is slow if not practiced. Practice powers, logs, and trigonometric functions on TCS iON calculator replica.",
    pyqTarget: "Re-solve 20 tricky questions from Error Log",
    resourceName: "TCS iON Virtual Calculator Simulator",
    resourceUrl: "https://www.tcsion.com"
  },
  {
    day: 71,
    phase: 3,
    subject: "Full Mock Test",
    title: "Full-Length Mock Test 1 (GATE 2020 Paper Simulation)",
    hours: 5,
    tier: 1,
    topics: [
      "Sit in 3-hour uninterrupted exam conditions (9:30 AM to 12:30 PM)",
      "Attempt 65 questions (100 marks) using only on-screen calculator",
      "Round 1: Attempt easy kills (Aptitude, Discrete, TOC, C) in 60 minutes",
      "Round 2: Moderate questions (45 minutes)",
      "Round 3: Review and mark for review (30 minutes)"
    ],
    summary: "The 3-Round Strategy is key. Never get stuck on a difficult 2-mark question for more than 4 minutes in Round 1.",
    pyqTarget: "Full GATE 2020 CSE Question Paper",
    resourceName: "Gate 2020 CSE Official Paper",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 72,
    phase: 3,
    subject: "Mock Analysis",
    title: "Mock 1 Post-Mortem & Remediation",
    hours: 4.5,
    tier: 1,
    topics: [
      "Calculate raw score, negative marks penalty, and accuracy percentage",
      "Segregate wrong questions into: 1. Misread question, 2. Calculation blunder, 3. Conceptual flaw",
      "Target metric: Negative marks must be less than 4 marks total!",
      "Re-solve every single question that was skipped or wrong"
    ],
    summary: "Post-mortem analysis is where rank actually improves. Spending 2 hours analyzing a mock is 10x more valuable than writing another mock.",
    pyqTarget: "Re-solve all wrong answers from Mock 1",
    resourceName: "Mock Analysis Tracker",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 73,
    phase: 3,
    subject: "Subject Refresh",
    title: "Rapid Fire Revision: Data Structures & Algorithms",
    hours: 4,
    tier: 1,
    topics: [
      "Binary search tree insertion order and height bounds",
      "Heapify algorithm and time complexity edge cases",
      "Graph cycle detection conditions and topological sort",
      "Master theorem edge cases (when a and b don't fit standard polynomials)"
    ],
    summary: "Keep your fundamentals sharp. Re-verify BST inorder traversal sorted property.",
    pyqTarget: "Solve 15 DS & Algo tricky questions",
    resourceName: "GateOverflow DS & Algo Highlights",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 74,
    phase: 3,
    subject: "Full Mock Test",
    title: "Full-Length Mock Test 2 (GATE 2021 Paper Simulation)",
    hours: 5,
    tier: 1,
    topics: [
      "Strict 3-hour timed exam simulation",
      "Implement lessons from Mock 1 (Stricter control on guessing)",
      "Target Qualifying Score: Aim for 35+ raw marks cleanly"
    ],
    summary: "Remember: To qualify GATE CSE, you only need ~28-30 marks. Any question you're not 70% sure about, LEAVE IT. Don't donate negative marks.",
    pyqTarget: "GATE 2021 CSE Official Paper",
    resourceName: "Gate 2021 CSE Official Paper",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 75,
    phase: 3,
    subject: "Mock Analysis",
    title: "Mock 2 Post-Mortem & High-Yield Recheck",
    hours: 4,
    tier: 1,
    topics: [
      "Deep dive into Mock 2 mistakes",
      "Review General Aptitude: Did you get at least 11/15?",
      "Update Mistake Notebook with new findings"
    ],
    summary: "If your Aptitude score is below 11, do 1 hour of Aptitude practice every evening for the next 7 days.",
    pyqTarget: "Re-solve 15 questions from Mock 2",
    resourceName: "Aptitude Booster",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 76,
    phase: 3,
    subject: "Subject Refresh",
    title: "Rapid Fire Revision: Operating Systems & DBMS",
    hours: 4.5,
    tier: 1,
    topics: [
      "CPU Scheduling formulas & Preemptive SRTF Gantt chart pitfalls",
      "Counting semaphores and negative value meaning (# of waiting processes)",
      "EMAT two-level paging calculations",
      "BCNF vs 3NF decomposition dependency preservation rules"
    ],
    summary: "A schedule with a cycle in precedence graph is NEVER conflict serializable. Lock this rule in memory.",
    pyqTarget: "Solve 15 OS & DBMS tricky PYQs",
    resourceName: "OS & DBMS Quick Revision",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 77,
    phase: 3,
    subject: "Full Mock Test",
    title: "Full-Length Mock Test 3 (GATE 2022 Paper Simulation)",
    hours: 5,
    tier: 1,
    topics: [
      "Strict 3-hour timed simulation",
      "Focus on time management: Finish Round 1 in 55 minutes",
      "Tackle NAT questions with extra care (accurate rounding off to 2 decimal places)"
    ],
    summary: "In NAT questions, read instruction carefully: 'Round off to 2 decimal places' or 'Enter integer'. Follow instructions strictly.",
    pyqTarget: "GATE 2022 CSE Official Paper",
    resourceName: "Gate 2022 CSE Official Paper",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 78,
    phase: 3,
    subject: "Mock Analysis",
    title: "Mock 3 Post-Mortem & NAT Accuracy Tuning",
    hours: 4,
    tier: 1,
    topics: [
      "Analyze NAT questions accuracy (NAT has NO negative marks, but wrong answer wastes 4 minutes)",
      "Re-solve all wrong questions",
      "Check performance in Discrete Mathematics (Aim for 8+ marks out of 10)"
    ],
    summary: "NAT questions have zero negative marks! Never leave a NAT question blank if you can make a calculated estimate.",
    pyqTarget: "Practice 15 GATE NAT questions",
    resourceName: "NAT Special Practice",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 79,
    phase: 3,
    subject: "Subject Refresh",
    title: "Rapid Fire Revision: Theory of Computation & Logic",
    hours: 4.5,
    tier: 1,
    topics: [
      "Minimal DFA trap states and complementation rules",
      "Chomsky hierarchy language classifications",
      "Decidability of Emptiness, Finiteness, and Equivalence",
      "Propositional logic implication rules and contrapositive equivalences"
    ],
    summary: "Equivalence of two DFAs is DECIDABLE. Equivalence of two CFGs is UNDECIDABLE. This single fact has appeared 6 times in GATE.",
    pyqTarget: "Solve 15 TOC & Logic questions",
    resourceName: "TOC Golden Rules",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 80,
    phase: 3,
    subject: "Full Mock Test",
    title: "Full-Length Mock Test 4 (GATE 2023 Paper Simulation)",
    hours: 5,
    tier: 1,
    topics: [
      "Strict 3-hour timed simulation (Simulating afternoon session: 2:30 PM to 5:30 PM)",
      "Target: 40+ raw marks",
      "Maintain calm composure under difficult questions"
    ],
    summary: "Test your mental stamina during afternoon slump hours. Train your brain to stay 100% alert at 2:30 PM.",
    pyqTarget: "GATE 2023 CSE Official Paper",
    resourceName: "Gate 2023 CSE Official Paper",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 81,
    phase: 3,
    subject: "Mock Analysis",
    title: "Mock 4 Post-Mortem & MSQ Strategy",
    hours: 4,
    tier: 1,
    topics: [
      "Analyze MSQ (Multiple Select Questions) accuracy",
      "MSQ rules: Partial marks are NOT awarded; you must select ALL correct options and NO wrong options",
      "MSQ has NO negative marking; attempt logically without fear"
    ],
    summary: "MSQs test depth of concepts. Treat each option (A, B, C, D) as an independent True/False statement.",
    pyqTarget: "Solve 15 GATE MSQs",
    resourceName: "GATE MSQ Special Series",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 82,
    phase: 3,
    subject: "Full Mock Test",
    title: "Final Full-Length Mock Test 5 (GATE 2024 Paper Simulation)",
    hours: 5,
    tier: 1,
    topics: [
      "Your final rehearsal before the real GATE exam!",
      "Treat this as the real exam with identical mindset and pacing",
      "Goal: Consistently clear the 35+ mark threshold with under 3 negative marks"
    ],
    summary: "Congratulations on reaching Mock 5! Your exam temperament is now forged. Trust your preparation.",
    pyqTarget: "GATE 2024 CSE Official Paper (Set 1 or 2)",
    resourceName: "Gate 2024 CSE Official Paper",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 83,
    phase: 3,
    subject: "Mock Analysis",
    title: "Final Mock 5 Analysis & Benchmark Scorecard",
    hours: 4,
    tier: 1,
    topics: [
      "Calculate your final projected GATE CSE score and rank range",
      "Celebrate your progress: Compare where you started on Day 1 vs today!",
      "Identify the 5 high-probability topics you will review in final week"
    ],
    summary: "You are now fully capable of qualifying GATE CSE comfortably. Confidence is half the battle won.",
    pyqTarget: "Review all 5 Mock summary metrics",
    resourceName: "Score Projection Calculator",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 84,
    phase: 3,
    subject: "Revision",
    title: "Mistake Notebook Final Sweep (Top 50 Traps)",
    hours: 4,
    tier: 1,
    topics: [
      "Review every single entry in your Error Log from the last 83 days",
      "Re-read all tricky C pointer expressions (*p++, *(p++), ++*p)",
      "Review minimum tables required in ER-to-Relational conversion",
      "Review sliding window sequence number bounds (N+1 vs 2N)"
    ],
    summary: "Eliminating your known mistakes ensures you don't drop easy marks in the exam hall.",
    pyqTarget: "Solve 10 tricky personal blunder questions",
    resourceName: "Personal Error Log",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 85,
    phase: 3,
    subject: "Revision",
    title: "General Aptitude & Discrete Math Complete Revision",
    hours: 4,
    tier: 1,
    topics: [
      "Formula speed run: Profit-loss, Time-speed, Combinatorics, Handshaking lemma",
      "Graph theory properties: Planar graphs, chromatic numbers, bipartite checks",
      "Predicate logic quantifier translations review",
      "Solve 5 quick aptitude puzzles to keep brain agile"
    ],
    summary: "Keep these 28 marks fresh. They are your primary qualification shield.",
    pyqTarget: "Review Aptitude & Discrete formula cards",
    resourceName: "Quick Formula Sheet",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 86,
    phase: 3,
    subject: "Revision",
    title: "Systems Speed Run: OS, DBMS & TOC",
    hours: 4,
    tier: 1,
    topics: [
      "OS: CPU Scheduling formulas, Semaphore wait/signal rules, Banker's need matrix, Paging EMAT",
      "DBMS: Candidate keys shortcut, 3NF/BCNF check rules, Serializability graph",
      "TOC: Decidability master table, Closure table, Chomsky hierarchy"
    ],
    summary: "Read through your short notes only. No heavy problem solving today. Just visual memory reinforcement.",
    pyqTarget: "Visual review of TOC & DBMS cheat sheets",
    resourceName: "Systems Short Notes",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 87,
    phase: 3,
    subject: "Revision",
    title: "Algorithms, Data Structures & High-Yield Selectives",
    hours: 3.5,
    tier: 1,
    topics: [
      "Master Theorem cases & Sorting algorithm time/space complexity table",
      "Subnetting IP address breakdown tricks",
      "Cache memory AMAT & Pipelining speedup formulas",
      "Eigenvalue trace/determinant shortcut rules"
    ],
    summary: "Re-verify that you know the exact time complexity of Heap Sort, Quick Sort (best/worst), and Merge Sort.",
    pyqTarget: "Complexity table self-test",
    resourceName: "Complexity Quick Sheet",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 88,
    phase: 3,
    subject: "Strategy",
    title: "Exam Day Strategy, Time Budgeting & Admit Card Prep",
    hours: 3,
    tier: 1,
    topics: [
      "Exam Hall Strategy: How to spend the 180 minutes",
      "Minutes 0-15: General Aptitude (Target 12-14 marks)",
      "Minutes 15-75: Round 1 (All easy 1-mark & 2-mark questions you are 100% sure of)",
      "Minutes 75-140: Round 2 (Moderate questions, numerical calculations)",
      "Minutes 140-170: Round 3 (Marked for review & NAT estimates)",
      "Minutes 170-180: Sanity check (Verify no accidental miss-clicks on MCQ options)",
      "Print Admit card, verify Photo ID, check exam center location on map"
    ],
    summary: "Having a rigid time allocation prevents panic. Stick to your 3-Round system no matter what.",
    pyqTarget: "Mentally visualize the 3-hour exam flow",
    resourceName: "Exam Strategy Blueprint",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 89,
    phase: 3,
    subject: "Light Review",
    title: "Light Formula Review & Mental Calming",
    hours: 2.5,
    tier: 1,
    topics: [
      "Casual flip-through of your 1-page formula cheat sheets",
      "Do NOT solve any new difficult question today",
      "Pack your stationary, admit card printout, original photo ID card, transparent water bottle",
      "Eat light, healthy food and hydrate well"
    ],
    summary: "Your brain needs rest to perform at peak cognitive speed tomorrow. Light reading only.",
    pyqTarget: "Zero stress review",
    resourceName: "Pre-Exam Checklist",
    resourceUrl: "https://gateoverflow.in"
  },
  {
    day: 90,
    phase: 3,
    subject: "GATE Exam Day",
    title: "GATE CSE Exam Day: Confidence & Execution!",
    hours: 3,
    tier: 1,
    topics: [
      "Reach exam center 60 minutes before gate closing time",
      "Take 3 deep breaths before clicking 'Start Exam'",
      "Remember: The qualifying cutoff is only ~28-30 marks! You only need ~20-25 solid questions correct out of 65!",
      "Execute your plan calmly and qualify with flying colors!"
    ],
    summary: "You have completed the 90-Day Sprint. You have the knowledge and the strategy. Go and claim your GATE qualification!",
    pyqTarget: "Ace the Real GATE Exam!",
    resourceName: "Good Luck Champion!",
    resourceUrl: "https://gateoverflow.in"
  }
];

