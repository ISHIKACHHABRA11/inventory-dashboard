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
        history: [
          { date: "2025-10-01", value: 40.0 },
          { date: "2025-11-01", value: 42.5 },
          { date: "2025-12-01", value: 45.0 },
          { date: "2026-01-01", value: 48.2 },
          { date: "2026-02-01", value: 50.1 },
        ],
        forecast: [
          { date: "2026-03-01", value: 52.4 },
          { date: "2026-04-01", value: 55.0 },
          { date: "2026-05-01", value: 58.2 },
        ],
      },
      efficiency_rate: {
        value: 88,
        unit: "%",
        trend: "up",
        history: [
          { date: "2025-10-01", value: 82 },
          { date: "2025-11-01", value: 83 },
          { date: "2025-12-01", value: 84 },
          { date: "2026-01-01", value: 86 },
          { date: "2026-02-01", value: 87 },
        ],
        forecast: [
          { date: "2026-03-01", value: 88 },
          { date: "2026-04-01", value: 89 },
          { date: "2026-05-01", value: 90 },
        ],
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
        history: [
          { date: "2025-10-01", value: 45.0 },
          { date: "2025-11-01", value: 44.0 },
          { date: "2025-12-01", value: 42.0 },
          { date: "2026-01-01", value: 40.0 },
          { date: "2026-02-01", value: 39.0 },
        ],
        forecast: [
          { date: "2026-03-01", value: 38.5 },
          { date: "2026-04-01", value: 37.5 },
          { date: "2026-05-01", value: 36.0 },
        ],
      },
      efficiency_rate: {
        value: 62,
        unit: "%",
        trend: "down",
        history: [
          { date: "2025-10-01", value: 75 },
          { date: "2025-11-01", value: 72 },
          { date: "2025-12-01", value: 68 },
          { date: "2026-01-01", value: 65 },
          { date: "2026-02-01", value: 63 },
        ],
        forecast: [
          { date: "2026-03-01", value: 62 },
          { date: "2026-04-01", value: 60 },
          { date: "2026-05-01", value: 58 },
        ],
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
        history: [
          { date: "2025-10-01", value: 44.8 },
          { date: "2025-11-01", value: 45.2 },
          { date: "2025-12-01", value: 44.9 },
          { date: "2026-01-01", value: 45.1 },
          { date: "2026-02-01", value: 45.0 },
        ],
        forecast: [
          { date: "2026-03-01", value: 45.0 },
          { date: "2026-04-01", value: 45.0 },
          { date: "2026-05-01", value: 45.0 },
        ],
      },
      efficiency_rate: {
        value: 78,
        unit: "%",
        trend: "stable",
        history: [
          { date: "2025-10-01", value: 79 },
          { date: "2025-11-01", value: 77 },
          { date: "2025-12-01", value: 78 },
          { date: "2026-01-01", value: 78 },
          { date: "2026-02-01", value: 78 },
        ],
        forecast: [
          { date: "2026-03-01", value: 78 },
          { date: "2026-04-01", value: 78 },
          { date: "2026-05-01", value: 78 },
        ],
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
        history: [
          { date: "2025-10-01", value: 30.0 },
          { date: "2025-11-01", value: 35.0 },
          { date: "2025-12-01", value: 42.0 },
          { date: "2026-01-01", value: 50.0 },
          { date: "2026-02-01", value: 55.0 },
        ],
        forecast: [
          { date: "2026-03-01", value: 60.0 },
          { date: "2026-04-01", value: 65.0 },
          { date: "2026-05-01", value: 70.0 },
        ],
      },
      efficiency_rate: {
        value: 45,
        unit: "%",
        trend: "down",
        history: [
          { date: "2025-10-01", value: 70 },
          { date: "2025-11-01", value: 65 },
          { date: "2025-12-01", value: 60 },
          { date: "2026-01-01", value: 55 },
          { date: "2026-02-01", value: 50 },
        ],
        forecast: [
          { date: "2026-03-01", value: 45 },
          { date: "2026-04-01", value: 40 },
          { date: "2026-05-01", value: 35 },
        ],
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
        history: [
          { date: "2025-10-01", value: 10.0 },
          { date: "2025-11-01", value: 12.0 },
          { date: "2025-12-01", value: 15.0 },
          { date: "2026-01-01", value: 18.0 },
          { date: "2026-02-01", value: 22.0 },
        ],
        forecast: [
          { date: "2026-03-01", value: 25.0 },
          { date: "2026-04-01", value: 28.0 },
          { date: "2026-05-01", value: 30.0 },
        ],
      },
      efficiency_rate: {
        value: 92,
        unit: "%",
        trend: "up",
        history: [
          { date: "2025-10-01", value: 85 },
          { date: "2025-11-01", value: 87 },
          { date: "2025-12-01", value: 88 },
          { date: "2026-01-01", value: 90 },
          { date: "2026-02-01", value: 91 },
        ],
        forecast: [
          { date: "2026-03-01", value: 92 },
          { date: "2026-04-01", value: 93 },
          { date: "2026-05-01", value: 94 },
        ],
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
        history: [
          { date: "2025-10-01", value: 20.0 },
          { date: "2025-11-01", value: 18.0 },
          { date: "2025-12-01", value: 16.0 },
          { date: "2026-01-01", value: 14.0 },
          { date: "2026-02-01", value: 13.0 },
        ],
        forecast: [
          { date: "2026-03-01", value: 12.5 },
          { date: "2026-04-01", value: 12.0 },
          { date: "2026-05-01", value: 11.5 },
        ],
      },
      efficiency_rate: {
        value: 55,
        unit: "%",
        trend: "stable",
        history: [
          { date: "2025-10-01", value: 54 },
          { date: "2025-11-01", value: 56 },
          { date: "2025-12-01", value: 55 },
          { date: "2026-01-01", value: 55 },
          { date: "2026-02-01", value: 55 },
        ],
        forecast: [
          { date: "2026-03-01", value: 55 },
          { date: "2026-04-01", value: 55 },
          { date: "2026-05-01", value: 55 },
        ],
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
        history: [
          { date: "2025-10-01", value: 30.0 },
          { date: "2025-11-01", value: 31.0 },
          { date: "2025-12-01", value: 32.0 },
          { date: "2026-01-01", value: 33.0 },
          { date: "2026-02-01", value: 34.0 },
        ],
        forecast: [
          { date: "2026-03-01", value: 35.0 },
          { date: "2026-04-01", value: 36.0 },
          { date: "2026-05-01", value: 37.0 },
        ],
      },
      efficiency_rate: {
        value: 40,
        unit: "%",
        trend: "down",
        history: [
          { date: "2025-10-01", value: 60 },
          { date: "2025-11-01", value: 55 },
          { date: "2025-12-01", value: 50 },
          { date: "2026-01-01", value: 45 },
          { date: "2026-02-01", value: 42 },
        ],
        forecast: [
          { date: "2026-03-01", value: 40 },
          { date: "2026-04-01", value: 38 },
          { date: "2026-05-01", value: 35 },
        ],
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
        history: [
          { date: "2025-10-01", value: 38.0 },
          { date: "2025-11-01", value: 39.0 },
          { date: "2025-12-01", value: 39.5 },
          { date: "2026-01-01", value: 40.5 },
          { date: "2026-02-01", value: 41.5 },
        ],
        forecast: [
          { date: "2026-03-01", value: 42.0 },
          { date: "2026-04-01", value: 42.5 },
          { date: "2026-05-01", value: 43.0 },
        ],
      },
      efficiency_rate: {
        value: 85,
        unit: "%",
        trend: "up",
        history: [
          { date: "2025-10-01", value: 70 },
          { date: "2025-11-01", value: 72 },
          { date: "2025-12-01", value: 75 },
          { date: "2026-01-01", value: 78 },
          { date: "2026-02-01", value: 82 },
        ],
        forecast: [
          { date: "2026-03-01", value: 85 },
          { date: "2026-04-01", value: 88 },
          { date: "2026-05-01", value: 90 },
        ],
      },
    },
  },
];
