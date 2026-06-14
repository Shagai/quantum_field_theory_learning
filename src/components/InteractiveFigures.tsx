import { useMemo, useState } from 'react'

type RelativisticEquation = 'Schrodinger' | 'Klein-Gordon' | 'Dirac'

const equationNotes: Record<
  RelativisticEquation,
  {
    equation: string
    object: string
    lesson: string
    path: string[]
  }
> = {
  Schrodinger: {
    equation: 'i hbar d_t psi = -(hbar^2 / 2m) nabla^2 psi + V psi',
    object: 'A complex wavefunction for fixed particle number in a preferred time coordinate.',
    lesson: 'Excellent nonrelativistic theory, but time and space are not treated symmetrically.',
    path: ['State vector', 'Hamiltonian', 'Time evolution', 'Born rule'],
  },
  'Klein-Gordon': {
    equation: '(Box + m^2) phi = 0',
    object: 'A relativistic scalar wave equation that follows directly from p_mu p^mu = m^2.',
    lesson: 'Covariant and useful for spin-0 fields, but awkward as a one-particle probability wave.',
    path: ['Mass shell', 'Second order wave', 'Positive and negative frequency', 'Scalar field'],
  },
  Dirac: {
    equation: '(i gamma^mu partial_mu - m) psi = 0',
    object: 'A first-order relativistic equation for spinor degrees of freedom.',
    lesson: 'It builds in spin and antiparticle structure, then points naturally toward quantum fields.',
    path: ['Linear operator', 'Gamma matrices', 'Spinor solutions', 'Electron field'],
  },
}

const bridgeSteps = [
  {
    title: 'Quantum states',
    detail: 'Vectors in Hilbert space represent amplitudes; rays represent physical states.',
  },
  {
    title: 'Symmetry',
    detail: 'Time translations, rotations, boosts, and translations act on states.',
  },
  {
    title: 'Relativity',
    detail: 'Energy and momentum combine into four-vectors with invariant mass.',
  },
  {
    title: 'Wave equations',
    detail: 'Klein-Gordon and Dirac equations implement the relativistic mass shell.',
  },
  {
    title: 'Fields',
    detail: 'Local fields handle creation, annihilation, covariance, and causal propagation.',
  },
]

export function HomeQftMapFigure() {
  return (
    <figure className="qft-map-figure">
      <div className="field-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="map-orbit" aria-label="QFT concept orbit">
        <span className="map-node node-state">Hilbert space</span>
        <span className="map-node node-symmetry">Symmetry</span>
        <span className="map-node node-field">Fields</span>
        <span className="map-node node-quanta">Quanta</span>
        <strong>QFT</strong>
      </div>
      <figcaption>
        <strong>Notebook map</strong>
        <span>States give amplitudes, symmetries constrain dynamics, and fields organize particles.</span>
      </figcaption>
    </figure>
  )
}

export function RelativisticBridgeFigure() {
  return (
    <figure className="interactive-figure bridge-figure">
      <figcaption>
        <strong>From quantum mechanics to QFT</strong>
        <span>The first chapter is the bridge between state vectors and relativistic fields.</span>
      </figcaption>
      <div className="bridge-path" aria-label="Conceptual bridge">
        {bridgeSteps.map((step, index) => (
          <div className="bridge-step" key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step.title}</strong>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
    </figure>
  )
}

export function BornRuleFigure() {
  const [theta, setTheta] = useState(52)
  const radians = (theta * Math.PI) / 180
  const upAmplitude = Math.cos(radians / 2)
  const downAmplitude = Math.sin(radians / 2)
  const upProbability = upAmplitude ** 2
  const downProbability = downAmplitude ** 2

  return (
    <figure className="interactive-figure born-figure">
      <figcaption>
        <strong>Born rule for a two-state system</strong>
        <span>Move the state angle and watch amplitudes become probabilities.</span>
      </figcaption>
      <div className="control-grid two-column">
        <label>
          <span>State angle</span>
          <input
            type="range"
            min="0"
            max="180"
            step="1"
            value={theta}
            onChange={(event) => setTheta(Number(event.target.value))}
          />
          <output>{theta} degrees</output>
        </label>
        <div className="equation-card">
          <span>|psi&gt; = cos(theta/2)|up&gt; + sin(theta/2)|down&gt;</span>
          <strong>P(n) = |&lt;n|psi&gt;|^2</strong>
        </div>
      </div>
      <div className="probability-grid">
        <ProbabilityBar label="up" amplitude={upAmplitude} probability={upProbability} />
        <ProbabilityBar label="down" amplitude={downAmplitude} probability={downProbability} />
      </div>
    </figure>
  )
}

function ProbabilityBar({
  label,
  amplitude,
  probability,
}: {
  label: string
  amplitude: number
  probability: number
}) {
  return (
    <div className="probability-row">
      <span>{label}</span>
      <div className="bar-track">
        <i style={{ width: `${probability * 100}%` }} />
      </div>
      <strong>{Math.round(probability * 100)}%</strong>
      <small>amplitude {amplitude.toFixed(3)}</small>
    </div>
  )
}

export function PhaseFigure() {
  const [phase, setPhase] = useState(0)
  const relativePhase = `${phase} degrees`
  const interference = useMemo(() => (0.5 * (1 + Math.cos((phase * Math.PI) / 180)) * 100).toFixed(0), [phase])

  return (
    <figure className="interactive-figure phase-figure">
      <figcaption>
        <strong>Global phase versus relative phase</strong>
        <span>A common phase changes no probabilities; a relative phase changes interference.</span>
      </figcaption>
      <div className="control-grid two-column">
        <label>
          <span>Relative phase</span>
          <input
            type="range"
            min="0"
            max="360"
            step="5"
            value={phase}
            onChange={(event) => setPhase(Number(event.target.value))}
          />
          <output>{relativePhase}</output>
        </label>
        <div className="equation-card">
          <span>|psi&gt; = (|A&gt; + exp(i phi)|B&gt;) / sqrt(2)</span>
          <strong>Interference signal: {interference}%</strong>
        </div>
      </div>
      <div className="interference-strip" aria-label="Relative interference signal">
        <i style={{ width: `${interference}%` }} />
      </div>
      <p className="figure-caption-note">
        A phase on the whole state is invisible. A phase between components is measurable because
        amplitudes can add or cancel before the absolute square is taken.
      </p>
    </figure>
  )
}

export function RelativisticEquationFigure() {
  const [selected, setSelected] = useState<RelativisticEquation>('Klein-Gordon')
  const note = equationNotes[selected]

  return (
    <figure className="interactive-figure equation-figure">
      <figcaption>
        <strong>Three wave-equation viewpoints</strong>
        <span>Switch equations and track what each one keeps or breaks.</span>
      </figcaption>
      <div className="segmented-control" role="group" aria-label="Choose wave equation">
        {(Object.keys(equationNotes) as RelativisticEquation[]).map((name) => (
          <button
            key={name}
            type="button"
            className={selected === name ? 'is-selected' : ''}
            onClick={() => setSelected(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="equation-path" aria-label={`${selected} conceptual path`}>
        {note.path.map((step, index) => (
          <div className="path-node" key={step}>
            <span>{step}</span>
            {index < note.path.length - 1 ? <i aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <div className="figure-notes three-column">
        <p>
          <strong>Equation.</strong> <code>{note.equation}</code>
        </p>
        <p>
          <strong>Object.</strong> {note.object}
        </p>
        <p>
          <strong>Lesson.</strong> {note.lesson}
        </p>
      </div>
    </figure>
  )
}

export function SpacetimeIntervalFigure() {
  const [velocity, setVelocity] = useState(60)
  const beta = velocity / 100
  const gamma = 1 / Math.sqrt(1 - beta ** 2)

  return (
    <figure className="interactive-figure spacetime-figure">
      <figcaption>
        <strong>Lorentz factor intuition</strong>
        <span>Relativistic effects become large as v approaches c.</span>
      </figcaption>
      <div className="control-grid two-column">
        <label>
          <span>Speed as fraction of c</span>
          <input
            type="range"
            min="0"
            max="99"
            step="1"
            value={velocity}
            onChange={(event) => setVelocity(Number(event.target.value))}
          />
          <output>v/c = {beta.toFixed(2)}</output>
        </label>
        <div className="equation-card">
          <span>gamma = 1 / sqrt(1 - v^2/c^2)</span>
          <strong>gamma = {gamma.toFixed(2)}</strong>
        </div>
      </div>
      <div className="bar-compare">
        <div>
          <span>Rest clock interval</span>
          <div className="bar-track">
            <i style={{ width: '50%' }} />
          </div>
          <strong>1.00</strong>
        </div>
        <div>
          <span>Frame factor</span>
          <div className="bar-track">
            <i className="violet-bar" style={{ width: `${Math.min(gamma * 18, 100)}%` }} />
          </div>
          <strong>{gamma.toFixed(2)}</strong>
        </div>
      </div>
    </figure>
  )
}
