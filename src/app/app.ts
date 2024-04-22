import { dbConnection } from '@src/controller/database/dbController';
import { unhandledGlobalErrorCapture } from '@src/utils/error/unhandledGlobalErrorCapture';

const App = async (): Promise<void> => {
  unhandledGlobalErrorCapture();
  await dbConnection();
};
// eslint-disable-next-line import/no-default-export
export default App;
