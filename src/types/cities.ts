export interface DataPoint {
  date: string;
  value: number;
}

export interface Metric {
  value: number;
  unit: string;
  trend: "up" | "down";
  history: DataPoint[];
  forecast: DataPoint[];
}

export interface Metrics {
  sales_forecast: Metric;
  efficiency_rate: Metric;
}

export interface City {
  id: number;
  city: string;
  last_updated: string;
  metrics: Metrics;
}
