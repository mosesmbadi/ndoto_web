const STEPS = [
  { title: "Sign in with Google or Facebook", body: "No passwords to remember. Tell us who you are, what you're looking for and where, and add a few photos." },
  { title: "Discover people near you, or back home", body: "Browse a deck matched to your city, or to the cities you're looking in. Living in London but want someone from Nairobi? That's the point." },
  { title: "Unlock the profiles you care about", body: "Previews are free. Spend tokens to see someone's full profile and start a conversation. Each person sets their own unlock price, so attention means something." },
  { title: "Chat with intent", body: "Replies are always free. A short message limit before someone replies keeps inboxes calm and conversations real." },
];

const FEATURES = [
  { title: "Diaspora bridge", body: "Look in the cities that matter to you, not just the one you live in." },
  { title: "Pay locally", body: "Top up with M-Pesa in Kenya, or with Paystack and cards everywhere else." },
  { title: "You set your worth", body: "Choose what it costs to unlock your profile and control what a preview shows." },
  { title: "Premium, if you want it", body: "See everyone in full, chat without tokens and see who liked you." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Dating for Africa and the diaspora</p>
            <h1>Find someone who shares your dream.</h1>
            <p className="lead">
              <em>Ndoto</em> means &ldquo;dream&rdquo; in Swahili. We connect people at home and abroad who are
              looking for something real, with fewer games, more intent and safety built in.
            </p>
            <div className="row wrap-row">
              <a className="btn" href="#get">Get the app</a>
              <a className="btn ghost" href="#how">How it works</a>
            </div>
          </div>
          <img src="/logo.png" alt="" className="hero-mark" />
        </div>
      </section>

      <section id="how" className="wrap section">
        <h2>How it works</h2>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="step-n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section">
        <h2>Why Ndoto</h2>
        <div className="cards">
          {FEATURES.map((f) => (
            <div key={f.title} className="card">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="safety" className="wrap section">
        <h2>Safety first</h2>
        <p className="lead narrow">
          Ndoto is for adults 18 and over. Selfie verification, block and report on every profile and chat,
          warnings when someone asks to move off the app or for money, and no message text on your lock
          screen by default. Read our <a href="/community-guidelines/">Community Guidelines</a>.
        </p>
      </section>

      <section id="get" className="wrap section cta">
        <h2>Coming soon to Android and iOS</h2>
        <p className="muted">We&apos;re putting the final touches on the app. Store links will appear here.</p>
      </section>
    </main>
  );
}
