import dynamic from 'next/dynamic';
import { outboxContent } from '@/data/outbox-content';
import { outboxProjects } from '@/data/outbox-projects';
import { OutboxHero } from '@/components/outbox/OutboxHero';
import { JDMatchStrip } from '@/components/outbox/JDMatchStrip';

/* ─────────────────────────────────────────────
   Below-fold sections — lazy-loaded for performance.
   Each chunk is code-split and only ships JS when
   the user scrolls into view.
   ───────────────────────────────────────────── */
const FeaturedProjects = dynamic(
  () =>
    import('@/components/outbox/FeaturedProjects').then(
      (m) => m.FeaturedProjects
    ),
  { ssr: true }
);

const APIPlayground = dynamic(
  () =>
    import('@/components/outbox/APIPlayground').then((m) => m.APIPlayground)
);

const EngineeringProof = dynamic(
  () =>
    import('@/components/outbox/EngineeringProof').then(
      (m) => m.EngineeringProof
    ),
  { ssr: true }
);

const OutboxAngle = dynamic(
  () =>
    import('@/components/outbox/OutboxAngle').then((m) => m.OutboxAngle),
  { ssr: true }
);

const ExperienceStrip = dynamic(
  () =>
    import('@/components/outbox/ExperienceStrip').then(
      (m) => m.ExperienceStrip
    ),
  { ssr: true }
);

const OutboxClosing = dynamic(
  () =>
    import('@/components/outbox/OutboxClosing').then((m) => m.OutboxClosing),
  { ssr: true }
);

/* ─────────────────────────────────────────────
   Page — Server Component
   ───────────────────────────────────────────── */
export default function OutboxLabsPage() {
  return (
    <main>
      {/* Above the fold — shipped in initial bundle */}
      <OutboxHero content={outboxContent.hero} />
      <JDMatchStrip content={outboxContent.jdMatch} />

      {/* Below fold — code-split */}
      <FeaturedProjects projects={outboxProjects} />
      <APIPlayground />
      <EngineeringProof content={outboxContent.engineeringProof} />
      <OutboxAngle content={outboxContent.outboxAngle} />
      <ExperienceStrip
        experience={outboxContent.experience}
        hackathons={outboxContent.hackathons}
      />
      <OutboxClosing content={outboxContent.closing} />
    </main>
  );
}
