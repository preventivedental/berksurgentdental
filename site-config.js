(function () {
  // Single source of truth for site-wide office settings.
  // Edit this file to update hours across:
  // - index.html status + hero hours + hours table + footer hours
  // - index.html structured data (JSON-LD) hours
  // - all feeder page smart CTA open/closed messaging
  //
  // Hours format:
  // - 24-hour clock [openHour, closeHour]
  // - Use null for closed days
  // Example: 8am-5pm => [8, 17]
  // Example: closed => null
  //
  // closeSoonMinutes:
  // - Number of minutes before close to show "closing soon"
  // - Example: 60 means final hour of the day
  //
  // announcement:
  // - Leave blank "" to hide announcement everywhere it is used
  // - Add text to show an announcement banner
  //
  // Status message templates:
  // - Use {time} for closing time and {next} for next opening window
  // - These are used by index and feeder pages
  window.BUD_SITE_CONFIG = {
    hours: {
      sun: [8, 13],
      mon: null,
      tue: null,
      wed: null,
      thu: [17, 21],
      fri: [17, 21],
      sat: [8, 15]
    },
    closeSoonMinutes: 60,
    announcement: "",
    statusOpen: "Open now until {time} - call and come in",
    statusSoon: "Closing soon at {time} - call now",
    statusClosed: "Closed now - opens {next}",
    statusClosedNoNext: "Closed now"
  };
})();
