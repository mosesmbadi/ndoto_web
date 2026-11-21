import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib";

export const metadata: Metadata = { title: "Community Guidelines" };

export default function CommunityGuidelines() {
  return (
    <LegalPage title="Community Guidelines">
      <p>
        Ndoto works when people can trust who they are talking to. These rules apply to your profile, photos and
        messages, and to how you treat people you meet through Ndoto.
      </p>

      <h2>Be yourself</h2>
      <ul>
        <li>Use your real first name, age and recent photos of you. No group photos as your main photo, no photos of other people pretending to be you.</li>
        <li>One account per person. Do not impersonate anyone.</li>
      </ul>

      <h2>Be respectful</h2>
      <ul>
        <li>No harassment, threats, bullying or hate based on race, ethnicity, tribe, religion, gender, sexual orientation, disability or nationality.</li>
        <li>&ldquo;Not for me&rdquo; means no. Do not keep contacting someone who has closed a conversation or blocked you.</li>
        <li>No unsolicited sexual content. No nudity or sexually explicit photos on your profile.</li>
      </ul>

      <h2>No scams, no selling</h2>
      <ul>
        <li>Never ask other members for money, gifts, airtime, crypto, or help with travel, visas or emergencies.</li>
        <li>No advertising, promotion, sex work, or recruiting for other services.</li>
        <li>Do not push people to move to another app before they are ready. Ndoto warns when it sees contact details or requests for money in chat.</li>
      </ul>

      <h2>Nothing illegal</h2>
      <ul>
        <li>Ndoto is only for adults. Any content that sexualises minors is removed and reported to authorities. See <a href="/child-safety/">Child Safety</a>.</li>
        <li>No illegal goods, violence, or sharing other people&apos;s private information or intimate images.</li>
      </ul>

      <h2>Meeting in person</h2>
      <ul>
        <li>Meet in a public place, tell a friend where you are going, and arrange your own transport.</li>
        <li>Trust your instincts. You can leave at any time.</li>
      </ul>

      <h2>Reporting</h2>
      <p>
        Use <strong>Report</strong> on any profile or chat. Reporting also blocks the person. We review reports and
        may remove content, limit features or ban accounts. If someone is in immediate danger, contact local
        emergency services first. You can also reach our safety team at{" "}
        <a href={`mailto:${SITE.safetyEmail}`}>{SITE.safetyEmail}</a>.
      </p>
    </LegalPage>
  );
}
