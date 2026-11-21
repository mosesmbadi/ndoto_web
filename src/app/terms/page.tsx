import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These terms are an agreement between you and {SITE.company} (&ldquo;Ndoto&rdquo;, &ldquo;we&rdquo;) for your use of
        the Ndoto app and website. By creating an account you accept them, along with our{" "}
        <a href="/privacy/">Privacy Policy</a> and <a href="/community-guidelines/">Community Guidelines</a>.
      </p>

      <h2>1. Who can use Ndoto</h2>
      <ul>
        <li>You must be at least 18 years old.</li>
        <li>You may have only one account, and it must represent you, a real person.</li>
        <li>You may not use Ndoto if you have been removed from it before, or if you are barred by law from using it.</li>
      </ul>

      <h2>2. Your account</h2>
      <p>
        You sign in with Google or Facebook. You are responsible for activity on your account and for keeping the
        information in your profile accurate. You can pause your account or delete it at any time; see{" "}
        <a href="/delete-account/">Delete your account</a>.
      </p>

      <h2>3. Tokens, unlocks and Premium</h2>
      <ul>
        <li>Tokens are a limited, non-transferable licence to use paid features in the app. They have no cash value and are not refundable except where the law requires or these terms say so.</li>
        <li>Unlocking a profile spends the number of tokens its owner has set. Promotional tokens are spent before purchased tokens. Promotional tokens may expire.</li>
        <li>Top-ups are processed by our payment partners (M-Pesa, Paystack and card networks). Prices are shown before you pay.</li>
        <li>Premium and Verified Plus are subscriptions billed in advance for each period until you cancel. Cancelling stops the next renewal; the current period runs to its end.</li>
        <li>If a payment is reversed or found to be fraudulent we may remove the tokens or features it paid for.</li>
      </ul>

      <h2>4. How you must behave</h2>
      <p>
        You agree to follow our <a href="/community-guidelines/">Community Guidelines</a>. In short: be honest, be
        respectful, do not harass, scam, solicit money or sell anything, and do not post anything illegal, sexual
        involving minors, or that you do not have the right to share.
      </p>

      <h2>5. Your content</h2>
      <p>
        You own the photos, text and messages you add. You give Ndoto a worldwide, non-exclusive, royalty-free
        licence to host, store, display and process that content only to run, improve and promote the service in
        line with your privacy settings. The licence ends when you delete the content or your account, except for
        copies we must keep for safety or legal reasons.
      </p>

      <h2>6. Safety and enforcement</h2>
      <p>
        We may review reported content, remove content, limit features, or suspend or close accounts that break
        these terms or put others at risk. Where we can, we will tell you why. We do not run criminal background
        checks on members. Take care when meeting anyone in person.
      </p>

      <h2>7. Disclaimers and liability</h2>
      <p>
        Ndoto is provided &ldquo;as is&rdquo;. We do not guarantee matches, the accuracy of what members say about
        themselves, or that the service will always be available. To the fullest extent the law allows, we are not
        liable for indirect or consequential losses, or for the conduct of other members on or off the app. Nothing
        in these terms limits rights you have under consumer law that cannot be excluded.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update these terms. If a change is material we will tell you in the app before it takes effect.
        Continuing to use Ndoto after that means you accept the new terms.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of Kenya {/* TODO: confirm jurisdiction */}, without prejudice to
        mandatory consumer protections in the country where you live.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
