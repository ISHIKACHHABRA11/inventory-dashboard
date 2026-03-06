export const stackDetailsMock = {
  cityID1: {
    s1: {
      stackID: "s1",
      stackName: "Demand Forecast Stack",
      forecastValue: 540,
      historicalValue: 480,

      historical: {
        consumption: [
          { date: "2024-Q1", value: 410 },
          { date: "2024-Q2", value: 420 },
          { date: "2024-Q3", value: 435 },
          { date: "2024-Q4", value: 450 },
          { date: "2025-Q1", value: 465 },
          { date: "2025-Q2", value: 480 },
        ],

        aiForecast: [
          { date: "2024-Q1", value: 405 },
          { date: "2024-Q2", value: 418 },
          { date: "2024-Q3", value: 430 },
          { date: "2024-Q4", value: 445 },
          { date: "2025-Q1", value: 460 },
          { date: "2025-Q2", value: 475 },
        ],

        finalForecast: [
          { date: "2024-Q1", value: 408 },
          { date: "2024-Q2", value: 420 },
          { date: "2024-Q3", value: 433 },
          { date: "2024-Q4", value: 448 },
          { date: "2025-Q1", value: 462 },
          { date: "2025-Q2", value: 478 },
        ],
      },

      forecast: {
        aiForecast: [
          { date: "2025-Q3", value: 500 },
          { date: "2025-Q4", value: 520 },
          { date: "2026-Q1", value: 535 },
          { date: "2026-Q2", value: 548 },
          { date: "2026-Q3", value: 560 },
        ],

        finalForecast: [
          { date: "2025-Q3", value: 505 },
          { date: "2025-Q4", value: 525 },
          { date: "2026-Q1", value: 540 },
          { date: "2026-Q2", value: 555 },
          { date: "2026-Q3", value: 570 },
        ],

        previousQuarterFinalForecast: [
          { date: "2025-Q3", value: 495 },
          { date: "2025-Q4", value: 510 },
          { date: "2026-Q1", value: 520 },
          { date: "2026-Q2", value: 535 },
          { date: "2026-Q3", value: 545 },
        ],
      },
    },

    s2: {
      stackID: "s2",
      stackName: "Retail Supply Stack",
      forecastValue: 310,
      historicalValue: 280,

      historical: {
        consumption: [
          { date: "2024-Q1", value: 220 },
          { date: "2024-Q2", value: 235 },
          { date: "2024-Q3", value: 245 },
          { date: "2024-Q4", value: 255 },
          { date: "2025-Q1", value: 270 },
          { date: "2025-Q2", value: 280 },
        ],

        aiForecast: [
          { date: "2024-Q1", value: 218 },
          { date: "2024-Q2", value: 230 },
          { date: "2024-Q3", value: 240 },
          { date: "2024-Q4", value: 250 },
          { date: "2025-Q1", value: 265 },
          { date: "2025-Q2", value: 275 },
        ],

        finalForecast: [
          { date: "2024-Q1", value: 220 },
          { date: "2024-Q2", value: 232 },
          { date: "2024-Q3", value: 242 },
          { date: "2024-Q4", value: 252 },
          { date: "2025-Q1", value: 268 },
          { date: "2025-Q2", value: 278 },
        ],
      },

      forecast: {
        aiForecast: [
          { date: "2025-Q3", value: 290 },
          { date: "2025-Q4", value: 300 },
          { date: "2026-Q1", value: 310 },
          { date: "2026-Q2", value: 320 },
          { date: "2026-Q3", value: 335 },
        ],

        finalForecast: [
          { date: "2025-Q3", value: 295 },
          { date: "2025-Q4", value: 305 },
          { date: "2026-Q1", value: 315 },
          { date: "2026-Q2", value: 330 },
          { date: "2026-Q3", value: 345 },
        ],

        previousQuarterFinalForecast: [
          { date: "2025-Q3", value: 285 },
          { date: "2025-Q4", value: 295 },
          { date: "2026-Q1", value: 305 },
          { date: "2026-Q2", value: 315 },
          { date: "2026-Q3", value: 325 },
        ],
      },
    },

    // s3, s4, s5, s6, s7, s8 follow same pattern
  },

  cityID2: {
    s9: {
      stackID: "s9",
      stackName: "Logistics Forecast Stack",
      forecastValue: 720,
      historicalValue: 690,

      historical: {
        consumption: [
          { date: "2024-Q1", value: 600 },
          { date: "2024-Q2", value: 620 },
          { date: "2024-Q3", value: 640 },
          { date: "2024-Q4", value: 660 },
          { date: "2025-Q1", value: 675 },
          { date: "2025-Q2", value: 690 },
        ],

        aiForecast: [
          { date: "2024-Q1", value: 595 },
          { date: "2024-Q2", value: 615 },
          { date: "2024-Q3", value: 635 },
          { date: "2024-Q4", value: 650 },
          { date: "2025-Q1", value: 668 },
          { date: "2025-Q2", value: 685 },
        ],

        finalForecast: [
          { date: "2024-Q1", value: 598 },
          { date: "2024-Q2", value: 618 },
          { date: "2024-Q3", value: 638 },
          { date: "2024-Q4", value: 655 },
          { date: "2025-Q1", value: 670 },
          { date: "2025-Q2", value: 688 },
        ],
      },

      forecast: {
        aiForecast: [
          { date: "2025-Q3", value: 705 },
          { date: "2025-Q4", value: 720 },
          { date: "2026-Q1", value: 735 },
          { date: "2026-Q2", value: 750 },
          { date: "2026-Q3", value: 765 },
        ],

        finalForecast: [
          { date: "2025-Q3", value: 710 },
          { date: "2025-Q4", value: 728 },
          { date: "2026-Q1", value: 742 },
          { date: "2026-Q2", value: 758 },
          { date: "2026-Q3", value: 775 },
        ],

        previousQuarterFinalForecast: [
          { date: "2025-Q3", value: 700 },
          { date: "2025-Q4", value: 715 },
          { date: "2026-Q1", value: 728 },
          { date: "2026-Q2", value: 742 },
          { date: "2026-Q3", value: 755 },
        ],
      },
    },

    // s10–s16 follow same structure
  },
};
