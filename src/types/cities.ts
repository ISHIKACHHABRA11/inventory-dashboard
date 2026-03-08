export interface DataPoint {
  date: string;
  value: number;
}

export interface MetricHistorical {
  aiForecast: DataPoint[];
}

export interface MetricForecast {
  aiForecast: DataPoint[];
}

export interface Metric {
  value: number;
  unit: string;
  trend: "up" | "down";
  historical: MetricHistorical;
  forecast: MetricForecast;
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

/** Sidebar stack list item (from mockSidebarData) */
export interface SidebarStackItem {
  stackID: string;
  stackName: string;
  forecastStab: "up" | "down";
  forecastAcc: "up" | "down";
}

/** Chart stack data (from stackDetailsMock) */
export interface StackHistorical {
  consumption: DataPoint[];
  aiForecast: DataPoint[];
  finalForecast: DataPoint[];
}

export interface StackForecast {
  previousQuarterFinalForecast: DataPoint[];
  aiForecast: DataPoint[];
  finalForecast: DataPoint[];
}

export interface StackChartData {
  stackID: string;
  stackName: string;
  forecastValue: number;
  historicalValue: number;
  historical: StackHistorical;
  forecast: StackForecast;
}
