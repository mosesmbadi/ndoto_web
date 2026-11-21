import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib";

export const metadata: Metadata = { title: "Delete your account" };

// Google Play requires a web page that explains how to request account and data deletion.
export default function DeleteAccount() {
  return (
    <LegalPage title="Delete your Ndoto account">
      {/* TODO: add in-app steps once the app has a Delete account button (API: DELETE /me). */}
      <h2>Ask us to delete it</h2>
      <p>
        Email <a href={`mailto:${SITE.privacyEmail}?subject=Delete%20my%20Ndoto%20account`}>{SITE.privacyEmail}</a>{" "}
        from the email address of the Google or Facebook account you sign in with, and ask us to delete your account.
        We may ask you to confirm it is you. Your profile is hidden as soon as we act on the request.
      </p>
      <p>
        Want a break instead? In the app, open the <strong>Me</strong> tab and tap <strong>Pause my profile</strong>.
        You are hidden from Discover, and your matches, chats and tokens are kept until you resume.
      </p>

      <h2>What is deleted, and when</h2>
      <ul>
        <li>Your profile, photos, likes, matches, messages, settings and push devices are permanently deleted within 30 days.</li>
        <li>Unused tokens and any remaining subscription time are lost. Cancel subscriptions bought through an app store in that store as well.</li>
        <li>We keep payment records as long as tax and accounting law requires, and minimal records of accounts banned for safety reasons to stop them returning.</li>
      </ul>
    </LegalPage>
  );
}
