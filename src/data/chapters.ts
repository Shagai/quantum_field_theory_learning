export type ChapterStatus = 'active' | 'planned' | 'draft'

export type Chapter = {
  slug: string
  title: string
  subtitle: string
  section: string
  status: ChapterStatus
  readingTime: string
  updated: string
  route: string
  summary: string
  focus: string[]
}

export const chapters: Chapter[] = [
  {
    slug: 'relativistic-quantum-mechanics',
    title: 'Relativistic Quantum Mechanics',
    subtitle:
      'From Hilbert spaces, amplitudes, and the Born rule to Lorentz symmetry, Klein-Gordon waves, Dirac spinors, and why one-particle quantum mechanics points toward fields.',
    section: 'Chapter 1',
    status: 'active',
    readingTime: '45 min',
    updated: '2026-06-14',
    route: '/chapters/relativistic-quantum-mechanics',
    summary:
      'Sets up the mathematical language of quantum mechanics and explains what changes when special relativity becomes non-negotiable.',
    focus: [
      'Hilbert space and rays',
      'Amplitudes, inner products, and measurement',
      'Lorentz covariance and relativistic wave equations',
      'Klein-Gordon, Dirac, spin, and antiparticles',
      'Why fields become the natural next step',
    ],
  },
  {
    slug: 'classical-field-theory',
    title: 'Classical Field Theory',
    subtitle: 'Lagrangian densities, Euler-Lagrange equations for fields, Noether currents, and stress-energy.',
    section: 'Chapter 2',
    status: 'planned',
    readingTime: 'TBD',
    updated: 'Planned',
    route: '/chapters',
    summary:
      'Builds the classical field language that QFT quantizes: actions, symmetries, currents, and conserved quantities.',
    focus: ['Action principle', 'Noether theorem', 'Scalar, spinor, and gauge fields', 'Stress-energy tensor'],
  },
  {
    slug: 'canonical-quantization',
    title: 'Canonical Quantization',
    subtitle: 'Promoting fields to operators, commutators, creation and annihilation operators, and Fock space.',
    section: 'Chapter 3',
    status: 'planned',
    readingTime: 'TBD',
    updated: 'Planned',
    route: '/chapters',
    summary:
      'Turns classical fields into quantum operators and explains particles as field excitations.',
    focus: ['Equal-time commutators', 'Mode expansions', 'Fock space', 'Hamiltonian picture'],
  },
  {
    slug: 'path-integrals',
    title: 'Path Integrals',
    subtitle: 'Generating functionals, propagators, perturbation theory, and the bridge to Feynman rules.',
    section: 'Chapter 4',
    status: 'planned',
    readingTime: 'TBD',
    updated: 'Planned',
    route: '/chapters',
    summary:
      'Reframes quantum dynamics through sums over histories and prepares the diagrammatic toolkit.',
    focus: ['Functional integration', 'Sources and correlators', 'Gaussian integrals', 'Perturbation expansion'],
  },
  {
    slug: 'quantum-electrodynamics',
    title: 'Quantum Electrodynamics',
    subtitle: 'Gauge symmetry, photons, electrons, vertices, scattering amplitudes, and renormalization ideas.',
    section: 'Chapter 5',
    status: 'planned',
    readingTime: 'TBD',
    updated: 'Planned',
    route: '/chapters',
    summary:
      'Applies the formalism to the simplest realistic relativistic quantum field theory.',
    focus: ['U(1) gauge symmetry', 'Feynman rules', 'Tree-level amplitudes', 'Loop corrections'],
  },
]

export const activeChapter = chapters.find((chapter) => chapter.status === 'active') ?? chapters[0]
