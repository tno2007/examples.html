export {};
declare global {
  interface Window {
    olark: IOlark; // this will be your variable name
  }
}

interface IOlark {
  identify: (clientId: string) => {};
  configure: (settingName: string, settingValue: any) => {};
}
