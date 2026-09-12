import type { Metadata } from "next";
import { events, customEventsNote } from "@/content/events";
import { emailAddresses, org } from "@/content/org";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Ahoy dr.Anne!, Dinner with Donna and Robin's Retreat — recurring sample events offered by the Association, plus how to arrange a custom event.",
};

// Event JSON-LD per build prompt §10.16. No fixed dates exist in source
// material for any of these — startDate is deliberately omitted rather
// than invented, so this will not qualify for a Google rich result, but it
// still correctly describes each offering as a recurring/sample event.
const eventsJsonLd = events.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
    "@type": "Organization",
    name: org.legalName,
    email: emailAddresses.vip,
  },
}));

export default function EventsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Events</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        These are recurring, sample offerings from the Association — no fixed dates are set. Contact{" "}
        <a href={`mailto:${emailAddresses.vip}`} className="font-medium text-key-move hover:underline">
          {emailAddresses.vip}
        </a>{" "}
        for current availability.
      </p>

      <ul className="mt-8 space-y-6">
        {events.map((event) => (
          <li key={event.slug} className="rounded-lg border border-border p-5">
            <p className="text-lg font-semibold text-foreground">{event.name}</p>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{event.description}</p>
            <a
              href={`mailto:${emailAddresses[event.contact]}`}
              className="mt-3 inline-block text-sm font-medium text-key-move hover:underline"
            >
              Contact {emailAddresses[event.contact]}
            </a>
          </li>
        ))}
      </ul>

      <section aria-labelledby="custom-events-heading" className="mt-10 rounded-lg border border-key-move/30 bg-key-move/5 p-5">
        <h2 id="custom-events-heading" className="text-lg font-semibold text-foreground">
          Arrange a custom event
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{customEventsNote}</p>
      </section>

      {eventsJsonLd.map((jsonLd) => (
        <script
          key={jsonLd.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
    </div>
  );
}
