const userName = encodeURIComponent(process.env.DB_USER ?? '');
const password = encodeURIComponent(process.env.DB_PASS ?? '');
const cluster = encodeURIComponent(process.env.DB_CLUSTER ?? '');
// const appName = encodeURIComponent(process.env.APP_NAME ?? '');
const serverLoc = encodeURIComponent(process.env.SERVER_LOC ?? '');

export const endPoints = {
  DB_CONNECT:
    `mongodb+srv://${userName}:${password}@${cluster}.${serverLoc}/?retryWrites=true&w=majority` ??
    '',
};
