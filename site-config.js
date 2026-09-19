(function () {
  // Single source of truth for site-wide office settings.
  // Edit this file to update hours across:
  // - index.html status + hours table
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
  window.BUD_SITE_CONFIG = {
    hours: {
      sun: null,
      mon: [8, 17],
      tue: [8, 17],
      wed: [7, 11],
      thu: [9, 15],
      fri: [9, 15],
      sat: null
    },
    closeSoonMinutes: 60,
    announcement: ""
  };
})();
