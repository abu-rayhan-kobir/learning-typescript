interface Database {
  host: string;
  part: number;
  username: string;
  password: string;
};

interface AppConfig {
  appName: string;
  version: string;
  debug: boolean;
  port: number;
  database: Database;
  features: {
    registration: boolean;
    darkMode: boolean;
  };
};