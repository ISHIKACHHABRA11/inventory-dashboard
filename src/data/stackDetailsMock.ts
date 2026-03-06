export const stackDetailsMock = {
  1: {
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
          { date: "2025-Q3", value: 500 }, // AI predicted for current quarter
          { date: "2025-Q4", value: 520 },
          { date: "2026-Q1", value: 535 },
          { date: "2026-Q2", value: 548 },
          { date: "2026-Q3", value: 560 },
          { date: "2026-Q4", value: 570 },
        ],

        finalForecast: [
          { date: "2025-Q3", value: 505 },
          { date: "2025-Q4", value: 525 },
          { date: "2026-Q1", value: 540 },
          { date: "2026-Q2", value: 555 },
          { date: "2026-Q3", value: 570 },
          { date: "2026-Q4", value: 570 },
        ],

        previousQuarterFinalForecast: [
          { date: "2025-Q3", value: 495 },
          { date: "2025-Q4", value: 510 },
          { date: "2026-Q1", value: 520 },
          { date: "2026-Q2", value: 535 },
          { date: "2026-Q3", value: 545 },
          { date: "2026-Q4", value: 570 },
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },

  2: {
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },

  3: {
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },

  4: {
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },

  5: {
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },

  6: {
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },

  7: {
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },

  8: {
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

    s3: {
      stackID: "s3",
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

    s4: {
      stackID: "s4",
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

    s5: {
      stackID: "s5",
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

    s6: {
      stackID: "s6",
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

    s7: {
      stackID: "s7",
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

    s8: {
      stackID: "s8",
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
  },
};
