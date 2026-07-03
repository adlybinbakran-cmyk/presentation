/*
  HOW TO EDIT FUTURE REPORTS
  1. Change the title/date/preparedBy below.
  2. Update the slides array.
  3. Save the file and refresh index.html in your browser.

  Common slide types:
  - hero
  - summary
  - cards
  - table
  - timeline
  - nextActions
*/

const deckData = {
  title: "IT Update & Progress",
  subtitle: "Support update, completed tasks, internet status, printer patrol, and active IT projects.",
  preparedBy: "Prepared by: IT Legend",
  reportDate: "Report Date: 3 July 2026",
  company: "Mountain Torq Sdn. Bhd.",
  slides: [
    {
      type: "hero",
      label: "Cover",
      title: "IT Update & Progress",
      eyebrow: "Operations Support Report",
      subtitle: "A structured overview of pending support items, completed tasks, internet status, printer patrol, and active IT-side projects.",
      chips: ["Support", "Infrastructure", "Monitoring", "Progress Update"]
    },
    {
      type: "summary",
      hidden: true,
      label: "Overview",
      title: "Report Overview",
      subtitle: "Current IT support status based on the latest update.",
      stats: [
        { value: "1", label: "Pending Support Task", tone: "warning" },
        { value: "4", label: "Completed Support Tasks", tone: "success" },
        { value: "3", label: "Internet Updates", tone: "info" },
        { value: "8", label: "Printers Checked", tone: "neutral" },
        { value: "5", label: "Active IT Projects", tone: "purple" }
      ],
      highlights: [
        "Laminator machine requires further investigation due to smoke and burn marks.",
        "PH laptop preparation, phishing email verification, RSVN mobile data issue, and KP UPS issue have been completed.",
        "Microsoft 365 migration to mountaintorq.com was completed and is currently under monitoring.",
        "CCTV for PH is currently being tested at KP for performance and environment suitability."
      ]
    },
    {
      type: "cards",
      label: "Pending",
      title: "Pending Support Task",
      subtitle: "Item that requires follow-up action.",
      cards: [
        {
          title: "Laminator Machine Producing Smoke",
          status: "Pending Investigation",
          tone: "warning",
          details: [
            "Pamella reported that the laminator machine produced smoke during use.",
            "After opening the panel, burn marks were noticed on the heated rod.",
            "Further investigation is required to confirm the cause and decide whether repair or replacement is needed."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Completed",
      title: "Completed Support Tasks",
      subtitle: "Support items completed or resolved during this reporting period.",
      cards: [
        {
          title: "Used Laptop for PH",
          status: "Completed / Ready to Deploy",
          tone: "success",
          details: [
            "During the IT meeting, it was proposed to send a laptop to PH for Housekeeping use.",
            "Vince confirmed that the power supply at PH is suitable for laptop usage.",
            "The laptop has been formatted and installed with necessary software including Office apps, Adobe, Chrome, and Outlook.",
            "Plan is to send the laptop up when Vince goes to PH."
          ]
        },
        {
          title: "Ros Received Phishing Email",
          status: "Verified as Fraudulent",
          tone: "success",
          details: [
            "Ros received a phishing email on 20 June 2026 claiming to be from webmail.",
            "The email requested confirmation to continue using the service and asked for user information.",
            "Eizzat contacted IPServerOne to verify the email.",
            "IPServerOne confirmed that the email was fraudulent."
          ]
        },
        {
          title: "RSVN Company Phone Internet Issue",
          status: "Resolved",
          tone: "success",
          details: [
            "Carmella reported that the RSVN company phone was unable to receive internet using mobile data.",
            "After manually configuring the APN, the mobile data connection was restored."
          ]
        },
        {
          title: "Faulty UPS Battery at KP",
          status: "Resolved / Installed",
          tone: "success",
          details: [
            "KP reported that the UPS for the laser printer had an issue turning on.",
            "Investigation found the issue was related to the power button.",
            "The power button was modified using a light switch and tested successfully.",
            "KP has received the UPS from Eizzat and it has been installed with no issue so far."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Internet",
      title: "Internet Status Update",
      subtitle: "Current internet condition by location.",
      cards: [
        {
          title: "Unifi KK Office",
          status: "Stable",
          tone: "success",
          details: [
            "No major internet interference has been reported since the last HOD meeting."
          ]
        },
        {
          title: "Unifi KP Office",
          status: "Pending TM Follow-Up",
          tone: "warning",
          details: [
            "No internet connection since 16 June 2026.",
            "TM has been contacted, but there have been multiple reschedules on their side.",
            "Customer service promised a reschedule date within the week, but the confirmed date has not yet been received.",
            "Further follow-up with TM is required."
          ]
        },
        {
          title: "Starlink PH",
          status: "Restored",
          tone: "success",
          details: [
            "On 23 June 2026, Starlink PH was reported to have no internet connection.",
            "Investigation found that during the power down at PH, the Starlink system reset itself.",
            "After re-setting up the modem/router, internet service was restored."
          ]
        }
      ]
    },
    {
      type: "table",
      label: "KK Printers",
      title: "Printer Patrol — KK Office",
      subtitle: "Toner and consumable status for KK Office printers.",
      columns: ["Printer", "Current Status", "Last Replaced / Replenished"],
      rows: [
        ["Ricoh Aficio MP3004", "Colour: 90% · Black: 80%", "1 February 2026"],
        ["Fuji Xerox S2520", "No level indicator. Toner has not shown replacement warning.", "1 February 2026"],
        ["Canon MF232w", "No toner level indicator. Toner is still usable.", "25 November 2025"],
        ["Canon MF3010", "No level indicator. Toner has not shown replacement warning.", "15 August 2024"],
        ["Brother QL-570", "Sticker labels are still thick. No replenishment needed for now.", "24 November 2025"]
      ]
    },
    {
      type: "table",
      label: "KP / PH Printers",
      title: "Printer Patrol — KP Office & PH",
      subtitle: "Toner and consumable status for KP Office and PH printers.",
      columns: ["Location", "Printer", "Current Status", "Last Replaced / Replenished"],
      rows: [
        ["KP Office", "Canon MF643CDW", "Black: 70% · Colour: 0%. Colour will be replenished only when needed.", "24 May 2026"],
        ["KP Office", "Canon E470", "Black: Above 50% · Colour: 0%. Colour will be replenished only when needed.", "24 November 2025"],
        ["PH", "Canon MF4410", "No indicator. Toner has not shown replacement warning.", "5 March 2025"]
      ]
    },
    {
      type: "timeline",
      label: "Projects",
      title: "Active IT Projects & Progress",
      subtitle: "Ongoing projects and current status.",
      items: [
        {
          title: "New Backup Internet for KP & MOTOTRBO",
          tag: "In Progress",
          details: "Documents required for U Mobile application were discussed with Mr. Wilfred. Requirements were compared against previous Celcom submission. U Mobile was contacted but no response was received, so another U Mobile business agent will be explored."
        },
        {
          title: "Microsoft 365 Migration",
          tag: "Completed / Monitoring",
          details: "On Saturday, 27 June 2026, all email accounts were successfully migrated to mountaintorq.com. The system is currently being monitored for any Microsoft 365 Business Standard issues."
        },
        {
          title: "MOTOTRBO IT Side",
          tag: "Research Completed",
          details: "Eyzrin discovered that AnyDesk can be used to monitor the MOTOTRBO system remotely through screen sharing. However, the interaction is one-way only; users can hear and view the system but cannot talk back to PH. Research found that the paid version does not enable voice communication to PH."
        },
        {
          title: "Odoo",
          tag: "Pending Trial",
          details: "Accounts will test the trial version before proceeding with the two-user subscription. The Accounts team is expected to be available in mid-August. After the 30-day trial, a meeting with the Odoo agent can be arranged to discuss concerns, limitations, and questions."
        },
        {
          title: "CCTV Installation for PH",
          tag: "Testing at KP",
          details: "The CCTV and 256GB SD card were received from Purchasing. Initial testing at KK showed sunlight is not sufficient and outdoor placement is not advisable due to theft risk. The CCTV is now installed at KP for a two-week test because KP weather conditions are almost similar to PH. Eizzat is monitoring video resolution, storage usage, internet connection, weather conditions, and overall performance."
        }
      ]
    },
    {
      type: "nextActions",
      label: "Next Actions",
      title: "Recommended Next Actions",
      subtitle: "Follow-up actions for items that are pending, under monitoring, or require decision-making.",
      actions: [
        { title: "Investigate laminator machine", owner: "IT Support", due: "Next support cycle", status: "Pending" },
        { title: "Follow up with TM for KP Unifi reschedule date", owner: "IT Support", due: "Immediate", status: "Pending" },
        { title: "Continue monitoring Microsoft 365 after migration", owner: "Adly", due: "Ongoing", status: "Monitoring" },
        { title: "Look for another U Mobile business agent", owner: "Adly", due: "Next follow-up", status: "Pending" },
        { title: "Continue CCTV performance testing at KP", owner: "Eizzat", due: "Two-week testing period", status: "Monitoring" },
        { title: "Plan Odoo trial with Accounts team", owner: "Accounts / IT", due: "Mid-August", status: "Scheduled" }
      ]
    },
    {
      type: "closing",
      label: "Closing",
      title: "End of Report",
      subtitle: "Thank you.",
      notes: [
        "Pending items will continue to be followed up and updated in the next support progress report.",
        "Completed items will remain under observation where necessary."
      ]
    }
  ]
};
