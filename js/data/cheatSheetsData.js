// High-Yield Formula Vault & Cheat Sheets for GATE CSE
window.CHEATSHEETS_DATA = [
  {
    category: "Theory of Computation",
    subject: "TOC",
    title: "Closure Properties Master Table",
    description: "Crucial table showing which language classes are closed (Yes) or not closed (No) under standard operations.",
    type: "table",
    headers: ["Operation", "Regular", "DCFL", "CFL", "CSL", "Recursive", "RE"],
    rows: [
      ["Union (L1 ∪ L2)", "Yes", "No", "Yes", "Yes", "Yes", "Yes"],
      ["Intersection (L1 ∩ L2)", "Yes", "No", "No", "Yes", "Yes", "Yes"],
      ["Complementation (L')", "Yes", "Yes", "No", "Yes", "Yes", "No"],
      ["Concatenation (L1 · L2)", "Yes", "No", "Yes", "Yes", "Yes", "Yes"],
      ["Kleene Star (L*)", "Yes", "No", "Yes", "Yes", "Yes", "Yes"],
      ["Intersection with Regular", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
      ["Homomorphism", "Yes", "No", "Yes", "Yes", "No", "Yes"],
      ["Inverse Homomorphism", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"]
    ],
    goldenNotes: "DCFL is closed under complementation but NOT under union/intersection. Regular is closed under ALL operations. CFL is NOT closed under intersection or complementation."
  },
  {
    category: "Theory of Computation",
    subject: "TOC",
    title: "Decidability Master Table",
    description: "Determines whether an algorithm exists to solve common decision problems across language classes.",
    type: "table",
    headers: ["Decision Problem", "Regular", "DCFL", "CFL", "CSL", "Recursive", "RE"],
    rows: [
      ["Membership (w ∈ L)", "Decidable (D)", "D", "D", "D", "D", "Undecidable (U)"],
      ["Emptiness (L = ∅)", "D", "D", "D", "U", "U", "U"],
      ["Finiteness (Is L finite?)", "D", "D", "D", "U", "U", "U"],
      ["Equivalence (L1 = L2)", "D", "D", "U", "U", "U", "U"],
      ["Subset (L1 ⊆ L2)", "D", "U", "U", "U", "U", "U"],
      ["Ambiguity (Is grammar ambiguous?)", "D", "U", "U", "U", "U", "U"],
      ["Totality (L = Σ*)", "D", "D", "U", "U", "U", "U"]
    ],
    goldenNotes: "For Regular languages, ALMOST EVERYTHING is Decidable. For CFL, Emptiness and Finiteness are Decidable, but Equivalence and Totality are Undecidable. For RE, everything non-trivial is Undecidable (Rice's Theorem)."
  },
  {
    category: "Operating Systems",
    subject: "OS",
    title: "OS Essential Formulas & Scheduling",
    description: "Key numerical formulas for CPU Scheduling, Paging, TLB, and Disk head movements.",
    type: "cards",
    cards: [
      {
        name: "Turnaround Time (TAT) & Waiting Time (WT)",
        formula: "TAT = Completion Time - Arrival Time\nWT = Turnaround Time - Burst Time\nResponse Time = Time first CPU given - Arrival Time",
        tip: "Always plot a neat Gantt Chart with exact time boundaries to avoid calculation errors."
      },
      {
        name: "Paging Effective Memory Access Time (EMAT)",
        formula: "EMAT = h * (t_tlb + m) + (1 - h) * (t_tlb + 2*m)\nWhere:\n  h = TLB Hit Ratio\n  t_tlb = TLB Access Time\n  m = Main Memory Access Time",
        tip: "If 2-level paging without TLB: Access time = 3 * m. With TLB miss on 2-level: t_tlb + 3 * m."
      },
      {
        name: "Page Table Size Calculation",
        formula: "Page Table Size = Number of Pages * Page Table Entry (PTE) Size\nNumber of Pages = Total Logical Address Space / Page Size",
        tip: "Remember: Page Size is always equal to Frame Size! Offset bits = log2(Page Size in Bytes)."
      },
      {
        name: "Counting Semaphore Value",
        formula: "Final Semaphore Value = Initial_Value - (Count of Wait/P ops) + (Count of Signal/V ops)\nIf Final Value < 0, then |-Value| processes are in the Blocked/Waiting queue.",
        tip: "Wait(S) or P(S) decrements S. Signal(S) or V(S) increments S."
      },
      {
        name: "Banker's Algorithm Need Matrix",
        formula: "Need[i][j] = Max[i][j] - Allocation[i][j]\nA process can be allocated resources if: Need[i] <= Available",
        tip: "When process completes, Available_new = Available_old + Allocation[i]."
      }
    ]
  },
  {
    category: "Databases",
    subject: "DBMS",
    title: "Normalization & Concurrency Rules",
    description: "Diagnostic conditions for Normal Forms (1NF to BCNF) and Schedule Serializability.",
    type: "cards",
    cards: [
      {
        name: "Normal Forms Diagnostic Flowchart",
        formula: "1NF: All attribute values are atomic.\n2NF: 1NF + No Partial Dependency (No Proper Subset of Candidate Key -> Non-Prime Attribute).\n3NF: 2NF + For every non-trivial X -> Y, either X is a Super Key OR Y is a Prime Attribute.\nBCNF: For every non-trivial X -> Y, X MUST be a Super Key.",
        tip: "Candidate Key: Minimal Super Key. Prime attribute: Attribute belonging to ANY candidate key."
      },
      {
        name: "Conflict Serializability Cycle Rule",
        formula: "Draw Precedence Graph with transactions as nodes.\nDraw directed edge Ti -> Tj if:\n  1. Ri(X) followed by Wj(X)\n  2. Wi(X) followed by Rj(X)\n  3. Wi(X) followed by Wj(X)\nSchedule is Conflict Serializable IFF Graph has NO CYCLE.",
        tip: "Topological sort of the acyclic graph gives an equivalent serial schedule!"
      },
      {
        name: "Lossless Join Decomposition Condition",
        formula: "Decomposition of R into R1 and R2 is Lossless iff:\n(R1 ∩ R2) -> R1  OR  (R1 ∩ R2) -> R2\n(i.e. Common attribute must be a Candidate Key in at least one table).",
        tip: "If R1 ∩ R2 has common attributes that form a candidate key of R1 or R2, no spurious tuples are created."
      },
      {
        name: "Recoverability Hierarchy",
        formula: "Strict Schedules ⊂ Cascadeless Schedules ⊂ Recoverable Schedules\nCascadeless: Read only committed data (prevents cascading rollbacks).\nStrict: Read AND Write only committed data.",
        tip: "All conflict serializable schedules are NOT necessarily recoverable! Check commit orders."
      }
    ]
  },
  {
    category: "Algorithms & DS",
    subject: "Algorithms",
    title: "Master Theorem & Sorting Complexity Table",
    description: "Recurrence relations solution formula and full sorting algorithm comparison.",
    type: "table",
    headers: ["Algorithm", "Best Time", "Average Time", "Worst Time", "Space", "Stable?", "In-Place?"],
    rows: [
      ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes", "No"],
      ["Quick Sort", "O(n log n)", "O(n log n)", "O(n^2)", "O(log n)", "No", "Yes"],
      ["Heap Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "No", "Yes"],
      ["Insertion Sort", "O(n)", "O(n^2)", "O(n^2)", "O(1)", "Yes", "Yes"],
      ["Counting Sort", "O(n + k)", "O(n + k)", "O(n + k)", "O(k)", "Yes", "No"]
    ],
    goldenNotes: "Master Theorem for T(n) = aT(n/b) + f(n):\nCompare f(n) with n^(log_b a):\n• Case 1: If f(n) = O(n^(log_b a - ε)) -> T(n) = Θ(n^(log_b a))\n• Case 2: If f(n) = Θ(n^(log_b a) * log^k n) -> T(n) = Θ(n^(log_b a) * log^(k+1) n)\n• Case 3: If f(n) = Ω(n^(log_b a + ε)) -> T(n) = Θ(f(n))"
  },
  {
    category: "Discrete Mathematics",
    subject: "Discrete Math",
    title: "Graph Theory & Combinatorics Golden Formulas",
    description: "Formulas for planar graphs, relations, handshaking lemma, and counting.",
    type: "cards",
    cards: [
      {
        name: "Handshaking Lemma & Vertices",
        formula: "∑ deg(v) = 2 * |E|\nCorollary: In any graph, the number of vertices with odd degree is always EVEN.",
        tip: "Direct numericals: Given degrees of vertices, find number of edges in 10 seconds."
      },
      {
        name: "Planar Graph Formulas",
        formula: "Euler's Formula: V - E + R = 2 (for connected planar)\nEdge Inequality: E <= 3V - 6 (for V >= 3)\nIf graph has no cycles of length 3 (triangle-free): E <= 2V - 4",
        tip: "K5 has V=5, E=10 > 3(5)-6 = 9 -> Non-planar. K3,3 has V=6, E=9 > 2(6)-4 = 8 -> Non-planar."
      },
      {
        name: "Counting Relations on Set with n Elements",
        formula: "• Total Relations: 2^(n^2)\n• Reflexive Relations: 2^(n(n-1))\n• Symmetric Relations: 2^(n(n+1)/2)\n• Reflexive & Symmetric: 2^(n(n-1)/2)\n• Anti-Symmetric Relations: 2^n * 3^(n(n-1)/2)",
        tip: "Memorize these counts directly. GATE frequently asks numerical answer for relation counts."
      },
      {
        name: "Stars and Bars (Identical into Distinct)",
        formula: "Number of ways to distribute n identical items into k distinct bins:\nC(n + k - 1, k - 1)  [When each bin can have >= 0]\nC(n - 1, k - 1)      [When each bin must have >= 1 item]",
        tip: "Example: 10 identical balls in 3 distinct boxes = C(10+3-1, 3-1) = C(12, 2) = 66."
      }
    ]
  },
  {
    category: "Computer Networks",
    subject: "Networks",
    title: "Sliding Window & Subnetting Cheat Sheet",
    description: "Flow control efficiencies, sequence number formulas, and IP addressing.",
    type: "cards",
    cards: [
      {
        name: "Stop-and-Wait Efficiency",
        formula: "Efficiency η = 1 / (1 + 2a)\nWhere a = Tp / Tt = (Distance / Propagation Speed) / (Packet Size / Bandwidth)\nThroughput = η * Bandwidth",
        tip: "Watch units carefully: 1 Kbps = 10^3 bps, 1 Mbps = 10^6 bps. Distance in km, speed in m/s."
      },
      {
        name: "Sliding Window Protocols Comparison",
        formula: "• Go-Back-N (GBN): Sender Window = N, Receiver Window = 1. Min Sequence Numbers = N + 1. If k bits sequence: N <= 2^k - 1.\n• Selective Repeat (SR): Sender Window = N, Receiver Window = N. Min Sequence Numbers = 2N. If k bits sequence: N <= 2^(k-1).",
        tip: "If sequence number size is 4 bits: In GBN, max sender window = 15. In SR, max sender window = 8."
      },
      {
        name: "CIDR Subnetting Quick Calculator",
        formula: "Given /n prefix in IPv4:\n• Host bits = 32 - n\n• Number of Total IP addresses = 2^(32 - n)\n• Number of Usable Hosts = 2^(32 - n) - 2 (subtract Network & Broadcast ID)\n• Subnet mask = n consecutive 1's followed by (32-n) 0's.",
        tip: "/24 = 254 usable hosts, /25 = 126 usable hosts, /26 = 62 usable hosts, /27 = 30 usable hosts."
      }
    ]
  },
  {
    category: "Computer Organization",
    subject: "COA",
    title: "Pipelining & Cache Memory Formulas",
    description: "Speedup calculation, pipeline clock period, and cache mapping bit breakdowns.",
    type: "cards",
    cards: [
      {
        name: "Instruction Pipelining Speedup",
        formula: "Speedup S = (Execution time without pipeline) / (Execution time with pipeline)\nFor n instructions and k stages:\nS = (n * k * t_stage) / ((k + n - 1) * t_cycle + stalls)\nIdeal Speedup (when n is very large) = k (Number of stages)",
        tip: "Clock cycle time = Maximum stage delay + Interface register delay."
      },
      {
        name: "Cache Memory Address Bit Breakdown",
        formula: "Physical Address = [Tag bits | Index / Set bits | Word Offset bits]\n• Direct Mapped: Line / Index bits = log2(Total Cache Lines)\n• k-Way Set Associative: Number of Sets = Total Lines / k. Set bits = log2(Number of Sets)\n• Fully Associative: Index bits = 0 (Physical Address = Tag + Word Offset)\n• Word Offset bits = log2(Block / Line Size in Bytes)",
        tip: "Example: 32-bit address, 64KB cache, 64-byte block, 4-way set associative: Offset = 6 bits, Sets = 64KB/(4*64B) = 256 -> Set bits = 8 bits -> Tag = 32 - 8 - 6 = 18 bits."
      },
      {
        name: "Average Memory Access Time (AMAT)",
        formula: "AMAT = Tc + (1 - h) * Tm   [Simultaneous access: h*Tc + (1-h)*Tm]\nWhere:\n  Tc = Cache access time\n  Tm = Main memory access time\n  h = Hit ratio",
        tip: "Check whether the question states 'Simultaneous' or 'Hierarchical' access."
      }
    ]
  },
  {
    category: "Engineering Mathematics",
    subject: "Math",
    title: "Linear Algebra & Probability Shortcuts",
    description: "Trace, Determinant shortcuts, Cayley-Hamilton, Bayes' theorem, and Poisson distributions.",
    type: "cards",
    cards: [
      {
        name: "Eigenvalues Shortcut Properties",
        formula: "1. Sum of Eigenvalues = Trace(A) (Sum of main diagonal elements)\n2. Product of Eigenvalues = det(A)\n3. Eigenvalues of Triangular/Diagonal matrix = Diagonal elements themselves\n4. If λ is an eigenvalue of A, then λ^k is eigenvalue of A^k, and 1/λ is eigenvalue of A^(-1).",
        tip: "Never calculate characteristic polynomial det(A - λI) = 0 for 3x3 if you can eliminate options using Trace and Determinant!"
      },
      {
        name: "Bayes' Theorem for Posterior Probability",
        formula: "P(A_i | B) = [ P(B | A_i) * P(A_i) ] / [ ∑ P(B | A_j) * P(A_j) ]",
        tip: "Standard question: 'Disease test has 95% accuracy, 1% of population has disease. If test is positive, what is probability person actually has disease?' Use Bayes' formula."
      },
      {
        name: "Poisson & Binomial Distributions",
        formula: "• Poisson: P(X = k) = (e^(-λ) * λ^k) / k!\n  Mean = λ, Variance = λ  (Mean equals Variance!)\n• Binomial: P(X = k) = C(n,k) * p^k * (1-p)^(n-k)\n  Mean = n*p, Variance = n*p*(1-p)",
        tip: "Poisson distribution is used for rare events where n is very large and p is very small, such that np = λ."
      }
    ]
  }
];

