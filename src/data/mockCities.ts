export const cities = [
  {
    id: 1,
    city: "Mumbai",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 52.4,
        unit: "M",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
      efficiency_rate: {
        value: 88,
        unit: "%",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 218 },
            { date: "2024-Q2", value: 230 },
            { date: "2024-Q3", value: 240 },
            { date: "2024-Q4", value: 250 },
            { date: "2025-Q1", value: 265 },
            { date: "2025-Q2", value: 275 },
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
        },
      },
    },
  },
  {
    id: 2,
    city: "Delhi",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 38.5,
        unit: "M",
        trend: "down",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 445 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 405 },
            { date: "2025-Q1", value: 420 },
            { date: "2025-Q2", value: 475 },
          ],
        },
        forecast: {
          aiForecast: [
            { date: "2025-Q3", value: 545 }, // AI predicted for current quarter
            { date: "2025-Q4", value: 520 },
            { date: "2026-Q1", value: 535 },
            { date: "2026-Q2", value: 540 },
            { date: "2026-Q3", value: 518 },
            { date: "2026-Q4", value: 575 },
          ],
        },
      },
      efficiency_rate: {
        value: 62,
        unit: "%",
        trend: "down",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 405 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
          ],
        },
        forecast: {
          aiForecast: [
            { date: "2025-Q3", value: 500 }, // AI predicted for current quarter
            { date: "2025-Q4", value: 520 },
            { date: "2026-Q1", value: 535 },
            { date: "2026-Q2", value: 500 },
            { date: "2026-Q3", value: 560 },
            { date: "2026-Q4", value: 570 },
          ],
        },
      },
    },
  },
  {
    id: 3,
    city: "Bengaluru",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 45.0,
        unit: "M",
        trend: "stable",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 505 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 575 },
          ],
        },
        forecast: {
          aiForecast: [
            { date: "2025-Q3", value: 600 }, // AI predicted for current quarter
            { date: "2025-Q4", value: 520 },
            { date: "2026-Q1", value: 535 },
            { date: "2026-Q2", value: 548 },
            { date: "2026-Q3", value: 560 },
            { date: "2026-Q4", value: 670 },
          ],
        },
      },
      efficiency_rate: {
        value: 78,
        unit: "%",
        trend: "stable",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 505 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
          ],
        },
        forecast: {
          aiForecast: [
            { date: "2025-Q3", value: 550 }, // AI predicted for current quarter
            { date: "2025-Q4", value: 520 },
            { date: "2026-Q1", value: 535 },
            { date: "2026-Q2", value: 548 },
            { date: "2026-Q3", value: 560 },
            { date: "2026-Q4", value: 570 },
          ],
        },
      },
    },
  },
  {
    id: 4,
    city: "Chennai",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 60.0,
        unit: "M",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
      efficiency_rate: {
        value: 88,
        unit: "%",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 218 },
            { date: "2024-Q2", value: 230 },
            { date: "2024-Q3", value: 240 },
            { date: "2024-Q4", value: 250 },
            { date: "2025-Q1", value: 265 },
            { date: "2025-Q2", value: 275 },
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
        },
      },
    },
  },
  {
    id: 5,
    city: "Hyderabad",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 25.0,
        unit: "M",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
      efficiency_rate: {
        value: 92,
        unit: "%",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
    },
  },
  {
    id: 6,
    city: "Kolkata",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 12.5,
        unit: "M",
        trend: "down",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
      efficiency_rate: {
        value: 88,
        unit: "%",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 218 },
            { date: "2024-Q2", value: 230 },
            { date: "2024-Q3", value: 240 },
            { date: "2024-Q4", value: 250 },
            { date: "2025-Q1", value: 265 },
            { date: "2025-Q2", value: 275 },
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
        },
      },
    },
  },
  {
    id: 7,
    city: "Ahmedabad",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 35.0,
        unit: "M",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
      efficiency_rate: {
        value: 40,
        unit: "%",
        trend: "down",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
    },
  },
  {
    id: 8,
    city: "Pune",
    last_updated: "2026-03-04T21:30:00Z",
    metrics: {
      sales_forecast: {
        value: 42.0,
        unit: "M",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 405 },
            { date: "2024-Q2", value: 418 },
            { date: "2024-Q3", value: 430 },
            { date: "2024-Q4", value: 445 },
            { date: "2025-Q1", value: 460 },
            { date: "2025-Q2", value: 475 },
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
        },
      },
      efficiency_rate: {
        value: 88,
        unit: "%",
        trend: "up",
        historical: {
          aiForecast: [
            { date: "2024-Q1", value: 218 },
            { date: "2024-Q2", value: 230 },
            { date: "2024-Q3", value: 240 },
            { date: "2024-Q4", value: 250 },
            { date: "2025-Q1", value: 265 },
            { date: "2025-Q2", value: 275 },
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
        },
      },
    },
  },
];
