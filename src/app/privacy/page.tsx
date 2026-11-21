import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains what personal data Ndoto collects, why, who we share it with and the choices you have.
        {" "}{SITE.company} is the data controller.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>From your sign-in provider:</strong> your Google or Facebook account ID, name, email address and whether the email is verified.</li>
        <li><strong>Profile information you give us:</strong> first name, date of birth, gender, who you are interested in, what you are looking for, interests, photos, bio and the other answers you choose to add.</li>
        <li><strong>Sensitive information:</strong> details such as your sexual orientation may be inferred from your preferences, and you may choose to share things like religion or ethnicity. We use these only to provide the service and with your consent.</li>
        <li><strong>Location:</strong> your city (detected from your device with permission, or entered by you), your country of origin and the cities you are looking in. We use approximate location for matching and never show your exact location to other members.</li>
        <li><strong>Phone number (optional):</strong> if you add one, or from your first successful M-Pesa top-up.</li>
        <li><strong>Activity:</strong> likes, passes, matches, unlocks, messages, blocks, reports, and settings.</li>
        <li><strong>Payments:</strong> amounts, currency, status and the reference from our payment provider. We do not receive or store your full card details or M-Pesa PIN.</li>
        <li><strong>Verification:</strong> if you verify with a selfie, the selfie and the result of the check.</li>
        <li><strong>Device data:</strong> app version, device type, push notification token, IP address and logs needed to keep the service secure.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To create your account and show your profile to people you may match with, according to your visibility settings.</li>
        <li>To recommend profiles, deliver messages and send notifications you have switched on.</li>
        <li>To process top-ups and subscriptions and keep an accurate token ledger.</li>
        <li>To keep members safe: detect scams, spam and fake accounts, review reports and enforce our rules.</li>
        <li>To meet legal obligations and respond to lawful requests.</li>
        <li>To understand and improve Ndoto using aggregated data.</li>
      </ul>
      <p>
        Our legal bases are performing our contract with you, your consent (which you can withdraw), our legitimate
        interest in a safe and working service, and legal obligations.
      </p>

      <h2>Who we share it with</h2>
      <ul>
        <li><strong>Other members:</strong> what your profile and settings allow. A preview shows less than a full profile; the full profile is shown to people who unlock it, to Premium members, and to people you have unlocked.</li>
        <li><strong>Service providers</strong> acting on our instructions: Google and Meta (sign-in), Safaricom M-Pesa and Paystack (payments), OneSignal (push notifications), and our hosting and storage providers.</li>
        <li><strong>Authorities</strong> when the law requires it, or to protect someone from serious harm.</li>
        <li><strong>A buyer or successor</strong> if Ndoto is sold or merged, under this policy.</li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2>International transfers</h2>
      <p>
        Ndoto serves members in several countries and our providers may process data outside the country where you
        live. Where required, we use contractual safeguards for these transfers.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your data while your account is open. When you delete your account it is hidden immediately and
        permanently deleted within 30 days, except records we must keep longer: payment records for tax and
        accounting, and information about accounts removed for serious safety violations, kept to stop them coming
        back.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (for example under Kenya&apos;s Data Protection Act, Nigeria&apos;s NDPA,
        South Africa&apos;s POPIA, or the UK and EU GDPR) you can ask to access, correct, delete or port your data,
        object to or restrict some uses, and withdraw consent. Most of this you can do in the app. For anything
        else, email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. You can also complain to your
        local data protection authority.
      </p>

      <h2>Security</h2>
      <p>
        We protect data in transit with encryption, limit staff access, and verify payment and sign-in tokens on
        our servers. No system is perfectly secure, so please use a strong password on your Google or Facebook account.
      </p>

      <h2>Children</h2>
      <p>
        Ndoto is only for adults. We do not knowingly collect data from anyone under 18 and remove accounts we
        believe belong to minors. See our <a href="/child-safety/">Child Safety</a> standards.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We will tell you in the app about material changes to this policy. Contact us at{" "}
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
      </p>
    </LegalPage>
  );
}
