import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib";

export const metadata: Metadata = { title: "Child Safety Standards" };

// Google Play requires dating apps to publish standards against child sexual abuse and exploitation (CSAE).
export default function ChildSafety() {
  return (
    <LegalPage title="Child Safety Standards">
      <p>
        Ndoto has zero tolerance for child sexual abuse and exploitation (CSAE), including child sexual abuse
        material (CSAM), grooming, sextortion and trafficking.
      </p>

      <h2>Adults only</h2>
      <ul>
        <li>Every member must be 18 or older. We check date of birth at sign-up and block anyone under 18.</li>
        <li>Members can report a profile they believe belongs to a minor. Those accounts are suspended while we review them.</li>
      </ul>

      <h2>What we do</h2>
      <ul>
        <li>Any content or behaviour that sexualises a minor is removed, and the account is permanently banned.</li>
        <li>We report apparent CSAM and child exploitation to the relevant authorities, including the National Center for Missing &amp; Exploited Children (NCMEC) and local law enforcement, as the law requires.</li>
        <li>We keep the evidence needed to support investigations, as the law allows.</li>
        <li>Moderators handling these reports are trained and follow a written escalation process.</li>
      </ul>

      <h2>How to report</h2>
      <p>
        In the app, use <strong>Report</strong> on the profile or chat and choose &ldquo;Might be under 18&rdquo;.
        You can also email <a href={`mailto:${SITE.safetyEmail}`}>{SITE.safetyEmail}</a>. If a child is in
        immediate danger, contact local police first.
      </p>

      <h2>Contact</h2>
      <p>
        Our child safety point of contact can be reached at{" "}
        <a href={`mailto:${SITE.safetyEmail}`}>{SITE.safetyEmail}</a>.
      </p>
    </LegalPage>
  );
}
