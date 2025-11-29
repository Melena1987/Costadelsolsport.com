import React from 'react';
import { SportEvent } from '../types';

/**
 * Ensures date string is compatible with Schema.org ISO 8601 format (YYYY-MM-DD)
 * Inputs might be YYYYMMDD or YYYYMMDDTHHmmSS
 */
const formatIsoDate = (isoString: string) => {
  if (!isoString) return '';
  if (isoString.includes('-')) return isoString; // Already formatted
  
  // Format YYYYMMDD to YYYY-MM-DD
  if (isoString.length === 8) {
    return `${isoString.slice(0, 4)}-${isoString.slice(4, 6)}-${isoString.slice(6, 8)}`;
  }
  
  // Format YYYYMMDDTHHmmSS to YYYY-MM-DDTHH:mm:SS
  if (isoString.includes('T')) {
    const datePart = isoString.split('T')[0];
    const timePart = isoString.split('T')[1];
    const formattedDate = `${datePart.slice(0, 4)}-${datePart.slice(4, 6)}-${datePart.slice(6, 8)}`;
    const formattedTime = `${timePart.slice(0, 2)}:${timePart.slice(2, 4)}:${timePart.slice(4, 6)}`;
    return `${formattedDate}T${formattedTime}`;
  }
  
  return isoString;
};

export const JsonLd = ({ events }: { events: SportEvent[] }) => {
  // Create structured data for the list of events
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": events.map((event, index) => ({
      "@type": "Event",
      "position": index + 1,
      "name": event.title,
      "startDate": formatIsoDate(event.isoStart),
      "endDate": formatIsoDate(event.isoEnd),
      "eventStatus": event.status === 'past' ? "https://schema.org/EventPast" : "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": event.venue,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": event.location,
          "addressRegion": "Málaga",
          "addressCountry": "ES"
        }
      },
      "image": [
        event.imageUrl
      ],
      "description": event.description,
      "offers": {
        "@type": "Offer",
        "url": event.url,
        "availability": "https://schema.org/InStock"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Costa del Sol Sport",
        "url": "https://costadelsolsport.com"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};