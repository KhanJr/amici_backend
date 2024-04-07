import { dbConnection } from '@src/controller/database/dbController';

const App = async (): Promise<void> => {
  await dbConnection();
};
// eslint-disable-next-line import/no-default-export
export default App;
