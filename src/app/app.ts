import { dbConnection } from '@src/controller/dbController';

const App = async (): Promise<void> => {
  await dbConnection();
};
// eslint-disable-next-line import/no-default-export
export default App;
