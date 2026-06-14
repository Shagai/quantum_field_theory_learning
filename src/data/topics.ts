export type TopicStatus = 'seeded' | 'next' | 'research' | 'planned'

export type Topic = {
  slug: string
  title: string
  category: 'Foundations' | 'Relativity' | 'Wave Equations' | 'Fields' | 'Calculations'
  layer: string
  status: TopicStatus
  summary: string
  learningGoals: string[]
  exercises: string[]
  related: string[]
}

export const topics: Topic[] = [
  {
    slug: 'hilbert-space-rays',
    title: 'Hilbert Space and Rays',
    category: 'Foundations',
    layer: 'State space',
    status: 'seeded',
    summary:
      'Quantum states live in a complex Hilbert space, but physical states are rays because normalization and global phase do not change probabilities.',
    learningGoals: [
      'Explain superposition as vector addition',
      'Separate a vector representative from a physical ray',
      'Identify why global phase is unobservable and relative phase is observable',
    ],
    exercises: [
      'Normalize a two-level spin state',
      'Compare global and relative phase in a spin superposition',
      'Compute an inner product and identify orthogonal states',
    ],
    related: ['Born rule', 'Operators', 'Spinors'],
  },
  {
    slug: 'born-rule',
    title: 'Born Rule',
    category: 'Foundations',
    layer: 'Measurement',
    status: 'seeded',
    summary:
      'Measurement probabilities are squared magnitudes of amplitudes, usually projections onto normalized outcome states.',
    learningGoals: [
      'Compute probabilities from amplitudes',
      'Know when normalization factors are required',
      'Recognize complete orthonormal outcome bases',
    ],
    exercises: [
      'Project a spin state onto up and down outcomes',
      'Verify probabilities sum to one in a complete basis',
      'Write the normalized-ray version of the probability formula',
    ],
    related: ['Hilbert Space and Rays', 'Operators'],
  },
  {
    slug: 'operators-observables',
    title: 'Operators and Observables',
    category: 'Foundations',
    layer: 'Linear maps',
    status: 'next',
    summary:
      'Observables are represented by self-adjoint operators whose eigenvectors describe possible sharp measurement outcomes.',
    learningGoals: [
      'Connect eigenvalues to measurement results',
      'Explain expectation values',
      'Use commutators to reason about compatible measurements',
    ],
    exercises: [
      'Diagonalize a Pauli matrix',
      'Compute an expectation value',
      'Check whether two observables commute',
    ],
    related: ['Born Rule', 'Symmetry Generators'],
  },
  {
    slug: 'lorentz-symmetry',
    title: 'Lorentz Symmetry',
    category: 'Relativity',
    layer: 'Spacetime',
    status: 'seeded',
    summary:
      'Relativistic theories must organize states and equations so inertial observers agree on the invariant content of physics.',
    learningGoals: [
      'Use four-vector notation',
      'Distinguish invariant scalars from frame-dependent components',
      'State the mass-shell relation',
    ],
    exercises: [
      'Verify that p_mu p^mu is invariant',
      'Classify timelike, lightlike, and spacelike intervals',
      'Rewrite energy-momentum conservation in four-vector form',
    ],
    related: ['Klein-Gordon Equation', 'Dirac Equation'],
  },
  {
    slug: 'klein-gordon-equation',
    title: 'Klein-Gordon Equation',
    category: 'Wave Equations',
    layer: 'Scalar relativistic waves',
    status: 'seeded',
    summary:
      'The Klein-Gordon equation follows from the relativistic energy-momentum relation and describes spin-0 relativistic modes.',
    learningGoals: [
      'Derive the equation from E^2 = p^2 c^2 + m^2 c^4',
      'Interpret plane-wave solutions',
      'Understand why probability density becomes subtle',
    ],
    exercises: [
      'Plug a plane wave into the equation',
      'Find the dispersion relation',
      'Compare its density with Schrodinger probability density',
    ],
    related: ['Lorentz Symmetry', 'Scalar Fields'],
  },
  {
    slug: 'dirac-equation',
    title: 'Dirac Equation',
    category: 'Wave Equations',
    layer: 'Spinor relativistic waves',
    status: 'seeded',
    summary:
      'The Dirac equation is first order in time and space, introduces gamma matrices, and naturally contains spin and antiparticle structure.',
    learningGoals: [
      'Explain why a linear relativistic equation needs matrices',
      'State the gamma-matrix anticommutation relation',
      'Recognize the positive and negative energy branches',
    ],
    exercises: [
      'Square the Dirac operator to recover the mass shell',
      'Check the continuity equation',
      'List what a four-component spinor stores',
    ],
    related: ['Spinors', 'Antiparticles'],
  },
  {
    slug: 'fields-over-particles',
    title: 'Fields over Fixed Particle Number',
    category: 'Fields',
    layer: 'QFT motivation',
    status: 'seeded',
    summary:
      'Relativity and quantum mechanics together make fixed-particle-number wave mechanics unstable; local fields handle creation, annihilation, and covariance.',
    learningGoals: [
      'Explain why relativistic energy allows particle production',
      'Connect negative-frequency modes to antiparticles',
      'State why locality is easier with fields',
    ],
    exercises: [
      'Estimate when pair production becomes energetically allowed',
      'Compare one-particle and field mode language',
      'Map a field mode to a creation operator preview',
    ],
    related: ['Canonical Quantization', 'Path Integrals'],
  },
  {
    slug: 'propagators',
    title: 'Propagators',
    category: 'Calculations',
    layer: 'Green functions',
    status: 'planned',
    summary:
      'Propagators are the response functions that become internal lines in perturbative QFT calculations.',
    learningGoals: [
      'Relate propagators to differential operators',
      'Understand boundary prescriptions',
      'Preview how correlators encode amplitudes',
    ],
    exercises: [
      'Solve a simple Green function equation',
      'Compare retarded and Feynman prescriptions',
      'Identify poles in momentum space',
    ],
    related: ['Path Integrals', 'Feynman Rules'],
  },
]

export const topicCategories = [...new Set(topics.map((topic) => topic.category))]
