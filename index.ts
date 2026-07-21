interface AppConfig {
  appName: string;
  version: string;
  status: string;
  port: number;
  features: {
    registroion: boolean;
    darKmode: boolean;
  };
}

const data: AppConfig = {
  appName: "web servei",
  version: "movow",
  status: "isActive",
  port: 5000,
  features: {
    registroion: true,
    darKmode: false,
  },
};

console.log(data);
