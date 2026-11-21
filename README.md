# ndoto_web

The public website for Ndoto: a landing page about the app, plus the legal pages the app stores and sign-in providers link to.

Next.js (same version as `admin-dashboard`) with static export, so `npm run build` writes plain HTML to `out/` that any static host can serve.

```bash
npm install
npm run dev     # http://localhost:3002
npm run build   # static site in ./out
```

| Page | Path | Used for |
|---|---|---|
| Landing | `/` | What Ndoto is, how it works, safety |
| Terms of Service | `/terms/` | App onboarding consent, store listings |
| Privacy Policy | `/privacy/` | Google Auth branding, Meta app, store listings |
| Community Guidelines | `/community-guidelines/` | Linked from the app's report flow |
| Child Safety | `/child-safety/` | Google Play CSAE standards (required for dating apps) |
| Delete your account | `/delete-account/` | Google Play account deletion URL |

Contact emails, company name, domain and the "last updated" date live in `src/lib.ts`.

**Keep current:** fill in the registered company name and address, confirm governing law, and update the privacy policy when features change (Smile ID, S3 uploads, Stripe/IAP, Apple sign-in).
